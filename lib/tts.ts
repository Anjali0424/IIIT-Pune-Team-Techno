/**
 * High-quality multilingual Text-to-Speech engine.
 *
 * The FastAPI backend synthesises speech with Google Cloud TTS (primary) and
 * Microsoft Azure AI Speech (fallback) and returns MP3 bytes. This module
 * plays them through a single shared <audio> element so only one response
 * ever plays at a time, with native pause/resume/stop controls. When the
 * backend is unreachable it falls back to the browser's built-in
 * speechSynthesis engine, so the assistant always answers aloud.
 *
 * Generated audio is cached per (language, text) for the current session, so
 * replaying a message never hits the network again. The cache is capped to
 * avoid unbounded memory growth in long conversations.
 *
 * A single module-level singleton guarantees that only one utterance ever
 * plays (or is paused) at a time, no matter how many components call in.
 */

import { api, API_URL } from './api'

export const DEFAULT_SPEECH_LANG = 'en-IN'

/**
 * Short language codes → BCP-47 voice locale. Anything not listed here falls
 * back to the default locale instead of crashing.
 */
export const SPEECH_LANGUAGE_CODES: Record<string, string> = {
  en: 'en-IN',
  hi: 'hi-IN',
  mr: 'mr-IN',
  ta: 'ta-IN',
  te: 'te-IN',
  gu: 'gu-IN',
  pa: 'pa-IN',
  kn: 'kn-IN',
  ml: 'ml-IN',
  bn: 'bn-IN',
}

export type SpeakOptions = {
  /**
   * Stable id for the utterance, so the UI can tell which message is active.
   * Duplicate playback is prevented because speaking a new key always cancels
   * the previous utterance first.
   */
  key?: string
  /** Speech rate, 0.1–10 (kept for API compatibility). */
  rate?: number
  /** Speech pitch, 0–2 (kept for API compatibility). */
  pitch?: number
  /** Volume, 0–1 (kept for API compatibility). */
  volume?: number
  onStart?: () => void
  onEnd?: () => void
  onError?: () => void
}

export type TtsState = {
  supported: boolean
  speaking: boolean
  paused: boolean
  /** True while audio is being fetched/synthesised but not yet playing. */
  loading: boolean
  currentKey: string | null
  /** Human-readable error, e.g. when autoplay is blocked or the backend is down. */
  error: string | null
}

/* ------------------------------- Voices -------------------------------- */

/** Normalise a language hint (short code, tag, or locale) into a BCP-47 tag. */
export function resolveSpeechLanguage(language?: string | null): string {
  if (!language) return DEFAULT_SPEECH_LANG
  const trimmed = language.trim()
  const lowered = trimmed.toLowerCase()
  if (!lowered) return DEFAULT_SPEECH_LANG

  const mapped = SPEECH_LANGUAGE_CODES[lowered]
  if (mapped) return mapped

  // Already a BCP-47 tag such as "en-IN" or "mr_IN".
  if (/^[a-z]{2}([-_][a-z0-9]{1,8})+$/i.test(trimmed)) {
    const [lang, ...rest] = trimmed.split(/[-_]/)
    return [lang.toLowerCase(), ...rest.map((part) => part.toUpperCase())].join('-')
  }

  // Bare two-letter code we do not know → guess a common region suffix.
  if (/^[a-z]{2}$/i.test(trimmed)) return `${lowered}-${lowered.toUpperCase()}`

  return DEFAULT_SPEECH_LANG
}

/** Detect whether the text is predominantly Devanagari (Hindi/Marathi). */
function isDevanagari(text: string): boolean {
  return /[\u0900-\u097F]/.test(text)
}

/**
 * Resolve the effective language for a message. Uses the app-provided
 * language; falls back to script detection on the text as a safety net.
 */
export function resolveLanguageForText(language: string | null | undefined, text: string): string {
  const resolved = resolveSpeechLanguage(language)
  const base = resolved.split('-')[0]
  if (base === 'en' && isDevanagari(text)) return 'hi-IN'
  if ((base === 'hi' || base === 'mr') && !isDevanagari(text)) return 'en-IN'
  return resolved
}

/* --------------------------- State & subscriptions ---------------------------- */

let state: TtsState = {
  supported: true,
  speaking: false,
  paused: false,
  loading: false,
  currentKey: null,
  error: null,
}

const listeners = new Set<(s: TtsState) => void>()

function setState(patch: Partial<TtsState>): void {
  state = { ...state, ...patch }
  for (const listener of listeners) listener(state)
}

export function getTtsState(): TtsState {
  return state
}

export function subscribe(listener: (s: TtsState) => void): () => void {
  listeners.add(listener)
  listener(state)
  return () => {
    listeners.delete(listener)
  }
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && (Boolean(window.speechSynthesis) || Boolean(window.Audio))
}

/* ------------------------- Backend reachability ------------------------- */

let backendReachable: boolean | null = null
let backendCheckAt = 0
const BACKEND_CHECK_TTL = 5000

/**
 * Quickly check whether the FastAPI backend is up. Cached for a few seconds so
 * a whole reply doesn't re-ping it. When it's down we skip the cloud request
 * entirely and go straight to browser speech for an instant response.
 */
async function isBackendReachable(): Promise<boolean> {
  if (typeof window === 'undefined') return false
  const now = Date.now()
  if (backendCheckAt && now - backendCheckAt < BACKEND_CHECK_TTL) {
    return Boolean(backendReachable)
  }
  backendCheckAt = now
  try {
    const controller = new AbortController()
    const timer = window.setTimeout(() => controller.abort(), 1500)
    const res = await fetch(`${API_URL}/health`, { signal: controller.signal })
    window.clearTimeout(timer)
    backendReachable = res.ok
  } catch {
    backendReachable = false
  }
  return Boolean(backendReachable)
}

function setSpeechFailed(): void {
  const cb = activeOptions?.onError
  clearCloudActive()
  setState({ speaking: false, paused: false, loading: false, currentKey: null, error: 'unavailable' })
  cb?.()
}

/* ------------------------------- Engine -------------------------------- */

let audio: HTMLAudioElement | null = null
let activeOptions: SpeakOptions | null = null
let requestSeq = 0

const MAX_CACHE_ENTRIES = 100
const cache = new Map<string, string>() // cacheKey -> object URL

function cacheKey(text: string, lang: string): string {
  return `${lang}::${text}`
}

function getAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined' || !window.Audio) return null
  if (!audio) {
    audio = new Audio()
    audio.preload = 'auto'
  }
  return audio
}

function clearCloudActive(): void {
  activeOptions = null
}

function stopCloudPlayback(): void {
  const el = getAudio()
  try {
    el?.pause()
  } catch {
    /* noop */
  }
  clearCloudActive()
}

/* ----------------------- Browser speech synthesis ----------------------- */
// Fallback used whenever the cloud backend is unreachable, so the assistant
// still answers aloud. Uses the browser's built-in speechSynthesis engine.

let browserVoices: SpeechSynthesisVoice[] = []

function getSpeechSynthesis(): SpeechSynthesis | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null
  const synth = window.speechSynthesis
  // Chrome loads the voice list asynchronously; re-query until it's populated.
  if (browserVoices.length === 0) {
    try {
      browserVoices = synth.getVoices()
    } catch {
      /* noop */
    }
  }
  return synth
}

function pickVoice(lang: string): SpeechSynthesisVoice | null {
  const wanted = lang.toLowerCase()
  const base = wanted.split('-')[0]
  const exact = browserVoices.find(
    (v) => v.lang.replace('_', '-').toLowerCase() === wanted,
  )
  if (exact) return exact
  const sameBase = browserVoices.find((v) => v.lang.split('-')[0].toLowerCase() === base)
  if (sameBase) return sameBase
  return browserVoices.find((v) => v.lang.split('-')[0].toLowerCase() === 'en') ?? null
}

function stopBrowserPlayback(): void {
  try {
    getSpeechSynthesis()?.cancel()
  } catch {
    /* noop */
  }
}

// Chrome silently stops speechSynthesis after ~15s of audio, so long replies
// are split into small chunks that are queued and spoken back to back. This
// guarantees the whole response is read, never truncated.
const MAX_BROWSER_CHUNK_LENGTH = 170

function chunkText(text: string): string[] {
  const trimmed = text.trim()
  if (!trimmed) return []
  // Split into sentence-ish segments (also on newlines), then hard-split any
  // segment that is still too long.
  const sentences = trimmed.match(/[^.!?।॥\n]+[.!?।॥\n]*|\n+/g) ?? [trimmed]
  const chunks: string[] = []
  let current = ''
  for (const sentence of sentences) {
    const candidate = current + sentence
    if (candidate.length <= MAX_BROWSER_CHUNK_LENGTH) {
      current = candidate
      continue
    }
    if (current) {
      chunks.push(current)
      current = ''
    }
    let rest = sentence
    while (rest.length > MAX_BROWSER_CHUNK_LENGTH) {
      chunks.push(rest.slice(0, MAX_BROWSER_CHUNK_LENGTH))
      rest = rest.slice(MAX_BROWSER_CHUNK_LENGTH)
    }
    current = rest
  }
  if (current) chunks.push(current)
  return chunks
}

/**
 * Read `text` aloud with the browser's speechSynthesis engine. Used only when
 * cloud synthesis fails so the assistant always answers in speech.
 * Returns true when an utterance was actually started.
 */
function browserSpeak(
  text: string,
  lang: string,
  key: string,
  seq: number,
  options: SpeakOptions,
): boolean {
  const synth = getSpeechSynthesis()
  if (!synth) return false

  const chunks = chunkText(text)
  if (chunks.length === 0) return false

  const voice = pickVoice(lang)
  let index = 0

  const finish = (ok: boolean): void => {
    if (seq !== requestSeq) return
    const cb = ok ? options.onEnd : options.onError
    clearCloudActive()
    setState({ speaking: false, paused: false, loading: false, currentKey: null, error: null })
    cb?.()
  }

  const speakNext = (): void => {
    if (seq !== requestSeq) return
    if (index >= chunks.length) {
      finish(true)
      return
    }
    const utterance = new SpeechSynthesisUtterance(chunks[index++])
    if (voice) utterance.voice = voice
    utterance.lang = lang
    utterance.rate = 1
    utterance.pitch = 1
    utterance.volume = 1
    utterance.onend = () => speakNext()
    utterance.onerror = (e) => finish(e.error !== 'canceled')
    synth.speak(utterance)
  }

  activeOptions = options
  setState({ speaking: true, paused: false, loading: false, currentKey: key, error: null })
  options.onStart?.()
  try {
    speakNext()
    return true
  } catch {
    finish(false)
    return false
  }
}

function storeCache(key: string, url: string): void {
  if (cache.has(key)) {
    URL.revokeObjectURL(cache.get(key) as string)
  }
  cache.set(key, url)
  // Keep the conversation-scoped cache bounded.
  while (cache.size > MAX_CACHE_ENTRIES) {
    const oldest = cache.keys().next().value as string
    URL.revokeObjectURL(cache.get(oldest) as string)
    cache.delete(oldest)
  }
}

function playUrl(url: string, key: string, seq: number): void {
  const el = getAudio()
  if (!el || seq !== requestSeq) return

  const finish = (ok: boolean): void => {
    if (seq !== requestSeq) return
    const cb = ok ? activeOptions?.onEnd : activeOptions?.onError
    clearCloudActive()
    setState({ speaking: false, paused: false, loading: false, currentKey: null, error: null })
    cb?.()
  }

  el.onended = () => finish(true)
  el.onerror = () => finish(false)
  el.src = url
  setState({ speaking: true, paused: false, loading: false, currentKey: key, error: null })
  activeOptions?.onStart?.()
  const promise = el.play()
  if (promise && typeof promise.catch === 'function') {
    promise.catch(() => finish(false))
  }
}

async function loadAndPlay(
  text: string,
  lang: string,
  key: string,
  seq: number,
  options: SpeakOptions,
): Promise<void> {
  try {
    const blob = await api.synthesizeSpeech(text, lang)
    if (seq !== requestSeq) return
    const url = URL.createObjectURL(blob)
    if (seq !== requestSeq) {
      URL.revokeObjectURL(url)
      return
    }
    storeCache(cacheKey(text, lang), url)
    playUrl(url, key, seq)
  } catch (err) {
    if (seq !== requestSeq) return
    const detail = err instanceof Error ? err.message : String(err)
    console.warn('[tts] cloud synthesis failed, falling back to browser speech:', detail)
    // Fall back to the browser's built-in speech engine so the assistant
    // always answers aloud, even without the backend.
    if (!browserSpeak(text, lang, key, seq, options)) {
      setSpeechFailed()
    }
  }
}

/**
 * Read `text` aloud in the requested language. Cancels any currently playing
 * speech first so overlapping audio is never possible. Replay of the same
 * message reuses the cached audio and starts from the beginning.
 *
 * Engine selection: cloud TTS when the backend is up, otherwise the browser's
 * built-in speechSynthesis — so a voice reply always comes out.
 */
export function speakText(
  text: string,
  language?: string | null,
  options: SpeakOptions = {},
): void {
  const trimmed = text.trim()
  if (!trimmed) return

  stopSpeaking()

  const seq = ++requestSeq
  const lang = resolveLanguageForText(language, trimmed)
  const key = options.key ?? cacheKey(trimmed, lang)

  activeOptions = options
  setState({ speaking: true, paused: false, loading: true, currentKey: key, error: null })

  const cachedUrl = cache.get(cacheKey(trimmed, lang))
  if (cachedUrl) {
    playUrl(cachedUrl, key, seq)
    return
  }

  void (async () => {
    const reachable = await isBackendReachable()
    if (seq !== requestSeq) return
    if (reachable) {
      console.info(`[tts] backend reachable, using cloud synthesis (${lang})`)
      await loadAndPlay(trimmed, lang, key, seq, options)
      return
    }
    console.info(`[tts] backend unreachable, using browser speech (${lang})`)
    if (!browserSpeak(trimmed, lang, key, seq, options)) {
      setSpeechFailed()
    }
  })()
}

export function pauseSpeaking(): void {
  if (!state.speaking || state.paused || state.loading) return
  try {
    getAudio()?.pause()
  } catch {
    /* noop */
  }
  try {
    getSpeechSynthesis()?.pause()
  } catch {
    /* noop */
  }
  setState({ paused: true })
}

export function resumeSpeaking(): void {
  if (!state.speaking || !state.paused) return
  const el = getAudio()
  if (el && el.currentSrc) {
    const promise = el.play()
    setState({ paused: false })
    if (promise && typeof promise.catch === 'function') promise.catch(() => undefined)
  } else {
    try {
      getSpeechSynthesis()?.resume()
    } catch {
      /* noop */
    }
    setState({ paused: false })
  }
}

export function stopSpeaking(): void {
  requestSeq++
  stopCloudPlayback()
  stopBrowserPlayback()
  if (state.speaking || state.paused || state.loading || state.currentKey !== null) {
    setState({ speaking: false, paused: false, loading: false, currentKey: null, error: null })
  }
}

/** Drop every cached audio object URL (call when the conversation resets). */
export function clearTtsCache(): void {
  for (const url of cache.values()) {
    try {
      URL.revokeObjectURL(url)
    } catch {
      /* noop */
    }
  }
  cache.clear()
}

/* ------------------------------- Cleanup -------------------------------- */

if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', () => {
    try {
      audio?.pause()
    } catch {
      /* noop */
    }
  })
  const synth = window.speechSynthesis
  if (synth) {
    try {
      synth.addEventListener('voiceschanged', () => {
        browserVoices = synth.getVoices()
      })
    } catch {
      /* noop */
    }
    // iOS Safari only allows speechSynthesis from inside a user gesture.
    // Prime it once on the first tap so later automatic replies can speak.
    const unlock = (): void => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('touchend', unlock)
      window.removeEventListener('click', unlock)
      try {
        const probe = new SpeechSynthesisUtterance(' ')
        probe.volume = 0
        synth.speak(probe)
        synth.cancel()
      } catch {
        /* noop */
      }
    }
    window.addEventListener('pointerdown', unlock)
    window.addEventListener('touchend', unlock)
    window.addEventListener('click', unlock)
  }
}
