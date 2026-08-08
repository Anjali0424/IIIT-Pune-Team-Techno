'use client'

import { useCallback, useRef, useState } from 'react'
import type { Lang } from '@/lib/data'
import { SPEECH_LOCALE } from '@/lib/assistant'
import { useTextToSpeech } from '@/hooks/use-text-to-speech'
import { api, type FeedResult } from '@/lib/api'

// Minimal Web Speech API typings
type SpeechRecognitionResult = { 0: { transcript: string }; isFinal: boolean }
type SpeechRecognitionEvent = {
  resultIndex: number
  results: { length: number; [i: number]: SpeechRecognitionResult }
}
type SpeechRecognitionLike = {
  lang: string
  continuous: boolean
  interimResults: boolean
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((e: SpeechRecognitionEvent) => void) | null
  onend: (() => void) | null
  onerror: ((e: unknown) => void) | null
}

function getRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike
    webkitSpeechRecognition?: new () => SpeechRecognitionLike
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export type FeedState = 'idle' | 'listening' | 'loading' | 'result' | 'error'

export interface UseFeedSpeechReturn {
  state: FeedState
  transcript: string
  inputText: string
  result: FeedResult | null
  errorMsg: string
  isPlaying: boolean
  isPaused: boolean
  setInputText: (t: string) => void
  startListening: () => void
  stopListening: () => void
  submitQuery: (query: string) => Promise<void>
  playResult: () => void
  pausePlayback: () => void
  resumePlayback: () => void
  stopPlayback: () => void
  reset: () => void
}

export function useFeedSpeech(lang: Lang): UseFeedSpeechReturn {
  const { speak, stop, pause, resume, isSpeaking, isPaused } = useTextToSpeech(lang)

  const [state, setState] = useState<FeedState>('idle')
  const [transcript, setTranscript] = useState('')
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState<FeedResult | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const finalRef = useRef('')

  // ── Voice recognition ────────────────────────────────────────────────────

  const stopListening = useCallback(() => {
    try { recognitionRef.current?.stop() } catch { /* noop */ }
    setState((s) => (s === 'listening' ? 'idle' : s))
  }, [])

  const startListening = useCallback(() => {
    const Ctor = getRecognitionCtor()
    if (!Ctor) return

    stop() // stop any TTS first
    setState('listening')
    setTranscript('')
    setInputText('')
    finalRef.current = ''

    const rec = new Ctor()
    rec.lang = SPEECH_LOCALE[lang]
    rec.continuous = false
    rec.interimResults = true

    rec.onresult = (e) => {
      let interim = ''
      let final = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i]
        if (r.isFinal) final += r[0].transcript
        else interim += r[0].transcript
      }
      if (final) finalRef.current += final
      const combined = (finalRef.current + interim).trim()
      setTranscript(combined)
      setInputText(combined)
    }

    rec.onerror = () => setState('idle')

    rec.onend = () => {
      setState('idle')
      const text = finalRef.current.trim()
      if (text) {
        setInputText(text)
      }
    }

    recognitionRef.current = rec
    try { rec.start() } catch { setState('idle') }
  }, [lang, stop])

  // ── API call ─────────────────────────────────────────────────────────────

  const submitQuery = useCallback(
    async (query: string) => {
      if (!query.trim()) return
      stop()
      setState('loading')
      setResult(null)
      setErrorMsg('')
      try {
        const res = await api.getFeedRecommendation(query.trim(), lang)
        setResult(res)
        setState('result')
        // Auto-play the recommendation
        speak(res.reply, lang)
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to get recommendation'
        setErrorMsg(msg)
        setState('error')
      }
    },
    [lang, speak, stop],
  )

  // ── Playback controls ────────────────────────────────────────────────────

  const playResult = useCallback(() => {
    if (result?.reply) speak(result.reply, lang)
  }, [result, lang, speak])

  const reset = useCallback(() => {
    stop()
    setState('idle')
    setTranscript('')
    setInputText('')
    setResult(null)
    setErrorMsg('')
  }, [stop])

  return {
    state,
    transcript,
    inputText,
    result,
    errorMsg,
    isPlaying: isSpeaking,
    isPaused,
    setInputText,
    startListening,
    stopListening,
    submitQuery,
    playResult,
    pausePlayback: pause,
    resumePlayback: resume,
    stopPlayback: stop,
    reset,
  }
}
