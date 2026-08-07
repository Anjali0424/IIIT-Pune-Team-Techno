'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Lang } from '@/lib/data'
import { SPEECH_LOCALE } from '@/lib/assistant'

// Minimal typings for the Web Speech API (not in standard lib.dom types)
type SpeechRecognitionResultLike = {
  0: { transcript: string }
  isFinal: boolean
}
type SpeechRecognitionEventLike = {
  resultIndex: number
  results: { length: number; [i: number]: SpeechRecognitionResultLike }
}
type SpeechRecognitionLike = {
  lang: string
  continuous: boolean
  interimResults: boolean
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((e: SpeechRecognitionEventLike) => void) | null
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

const VOICE_RATE = 0.9
const VOICE_PITCH = 1
const VOICE_VOLUME = 1
const VOICES_WAIT_MS = 2000

export function useSpeech(lang: Lang) {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [supported, setSupported] = useState(true)

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const finalRef = useRef('')
  const onFinalRef = useRef<((text: string) => void) | null>(null)

  const langRef = useRef(lang)
  useEffect(() => {
    langRef.current = lang
  }, [lang])

  const voicesRef = useRef<SpeechSynthesisVoice[]>([])
  const pendingSpeakRef = useRef<{ id: number; text: string; lang: Lang } | null>(null)
  const seqRef = useRef(0)

  /* ------------------------------ Voice loading ------------------------------ */

  useEffect(() => {
    const Ctor = getRecognitionCtor()
    const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined
    setSupported(Boolean(Ctor) || Boolean(synth))

    if (!synth) return () => undefined

    const load = () => {
      const list = synth.getVoices()
      if (!list.length) return
      voicesRef.current = list
      console.log(
        `[Speech] Voices loaded (${list.length}):`,
        list.map((v) => `${v.name} [${v.lang}]`).join(', '),
      )
      const pending = pendingSpeakRef.current
      if (pending) {
        pendingSpeakRef.current = null
        performSpeak(pending.text, pending.lang)
      }
    }

    load()
    synth.onvoiceschanged = load

    return () => {
      synth.onvoiceschanged = null
      try {
        synth.cancel()
      } catch {
        /* noop */
      }
      try {
        recognitionRef.current?.abort()
      } catch {
        /* noop */
      }
    }
  }, [])

  /* ------------------------------ Voice selection ---------------------------- */

  const pickVoice = useCallback((l: Lang): SpeechSynthesisVoice | null => {
    const list = voicesRef.current
    const locale = SPEECH_LOCALE[l].toLowerCase()
    const exact = list.find((v) => v.lang.toLowerCase() === locale)
    if (exact) {
      console.log(`[Speech] Selected voice (exact): ${exact.name} [${exact.lang}]`)
      return exact
    }

    // Fallback chain: mr -> hi -> en (never pick a script/voice that is not useful).
    const chain: Lang[] = l === 'mr' ? ['mr', 'hi', 'en'] : l === 'hi' ? ['hi', 'en'] : ['en']
    for (const fallback of chain) {
      const prefix = SPEECH_LOCALE[fallback].split('-')[0]
      const match = list.find((v) => v.lang.toLowerCase().startsWith(prefix))
      if (match) {
        console.log(
          `[Speech] Selected voice (closest for ${l}): ${match.name} [${match.lang}]`,
        )
        return match
      }
    }

    console.warn(
      `[Speech] No usable voice for "${l}" (${locale}) among loaded voices; using browser default.`,
    )
    return null
  }, [])

  /* --------------------------------- Speaking -------------------------------- */

  const performSpeak = useCallback(
    (text: string, l: Lang) => {
      if (typeof window === 'undefined' || !window.speechSynthesis) {
        console.warn('[Speech] speechSynthesis not available')
        return
      }
      const synth = window.speechSynthesis
      console.log(`[Speech] Selected language: ${l} (${SPEECH_LOCALE[l]})`)

      // Cancel any ongoing speech before starting a new one.
      try {
        synth.cancel()
      } catch {
        /* noop */
      }

      const utter = new SpeechSynthesisUtterance(text)
      utter.lang = SPEECH_LOCALE[l]
      utter.rate = VOICE_RATE
      utter.pitch = VOICE_PITCH
      utter.volume = VOICE_VOLUME

      const voice = pickVoice(l)
      if (voice) utter.voice = voice

      utter.onstart = () => {
        console.log('[Speech] Speech started')
        setIsSpeaking(true)
      }
      utter.onend = () => {
        console.log('[Speech] Speech finished')
        setIsSpeaking(false)
      }
      utter.onerror = (e) => {
        console.error('[Speech] Speech error:', e)
        setIsSpeaking(false)
      }

      synth.speak(utter)
    },
    [pickVoice],
  )

  const speak = useCallback(
    (text: string, l?: Lang) => {
      const targetLang = l ?? langRef.current
      console.log('[Speech] speak() requested:', {
        lang: targetLang,
        locale: SPEECH_LOCALE[targetLang],
        text: text.slice(0, 100),
      })

      if (voicesRef.current.length > 0) {
        performSpeak(text, targetLang)
        return
      }

      // Voices are not loaded yet - queue and retry once voices are ready.
      const id = ++seqRef.current
      pendingSpeakRef.current = { id, text, lang: targetLang }
      console.log('[Speech] Voices not loaded yet; queuing speech until onvoiceschanged')

      try {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          window.speechSynthesis.getVoices()
        }
      } catch {
        /* noop */
      }

      // Never fail silently: if voices never arrive, speak with the default voice.
      window.setTimeout(() => {
        if (pendingSpeakRef.current?.id !== id) return
        console.warn('[Speech] Voices never loaded; speaking with browser default voice')
        pendingSpeakRef.current = null
        performSpeak(text, targetLang)
      }, VOICES_WAIT_MS)
    },
    [performSpeak],
  )

  const stopSpeaking = useCallback(() => {
    try {
      window.speechSynthesis?.cancel()
    } catch {
      /* noop */
    }
    console.log('[Speech] Speech cancelled')
    pendingSpeakRef.current = null
    setIsSpeaking(false)
  }, [])

  /* ------------------------------- Recognition ------------------------------- */

  const stopListening = useCallback(() => {
    try {
      recognitionRef.current?.stop()
    } catch {
      /* noop */
    }
    setIsListening(false)
  }, [])

  const startListening = useCallback(
    (onFinal?: (text: string) => void) => {
      const Ctor = getRecognitionCtor()
      if (!Ctor) {
        setSupported(false)
        return
      }
      // Cancel any ongoing speech so the mic doesn't capture it
      try {
        window.speechSynthesis?.cancel()
      } catch {
        /* noop */
      }
      setIsSpeaking(false)

      const recognition = new Ctor()
      recognition.lang = SPEECH_LOCALE[lang]
      recognition.continuous = false
      recognition.interimResults = true
      finalRef.current = ''
      onFinalRef.current = onFinal ?? null
      setTranscript('')

      recognition.onresult = (e) => {
        let interim = ''
        let finalText = ''
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const res = e.results[i]
          if (res.isFinal) finalText += res[0].transcript
          else interim += res[0].transcript
        }
        if (finalText) finalRef.current += finalText
        setTranscript((finalRef.current + interim).trim())
      }
      recognition.onerror = () => {
        console.error('[Speech] Recognition error')
        setIsListening(false)
      }
      recognition.onend = () => {
        setIsListening(false)
        const result = finalRef.current.trim()
        console.log(`[Speech] Recognition result: "${result}"`)
        if (result && onFinalRef.current) onFinalRef.current(result)
      }

      recognitionRef.current = recognition
      try {
        recognition.start()
        setIsListening(true)
      } catch {
        setIsListening(false)
      }
    },
    [lang],
  )

  return {
    isListening,
    isSpeaking,
    transcript,
    supported,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
    setTranscript,
  }
}
