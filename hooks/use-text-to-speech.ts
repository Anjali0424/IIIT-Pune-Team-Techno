'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Lang } from '@/lib/data'
import { SPEECH_LOCALE } from '@/lib/assistant'

const VOICE_RATE = 0.92
const VOICE_PITCH = 1
const VOICE_VOLUME = 1
const VOICES_WAIT_MS = 2000

export type SpeakOptions = {
  onStart?: () => void
  onEnd?: () => void
  onError?: () => void
}

/**
 * Reusable browser Text-to-Speech hook (SpeechSynthesis API).
 *
 * Used by Schemes, Crop Doctor, Voice Assistant, Weather, and any other
 * voice-first screen that needs to read content aloud in mr / hi / en.
 */
export function useTextToSpeech(defaultLang: Lang = 'mr') {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSupported, setIsSupported] = useState(true)

  const langRef = useRef(defaultLang)
  const voicesRef = useRef<SpeechSynthesisVoice[]>([])
  const pendingRef = useRef<{
    id: number
    text: string
    lang: Lang
    options?: SpeakOptions
  } | null>(null)
  const seqRef = useRef(0)
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null)
  const optionsRef = useRef<SpeakOptions | undefined>(undefined)

  useEffect(() => {
    langRef.current = defaultLang
  }, [defaultLang])

  const pickVoice = useCallback((lang: Lang): SpeechSynthesisVoice | null => {
    const list = voicesRef.current
    if (!list.length) return null

    const locale = SPEECH_LOCALE[lang].toLowerCase()
    const exact = list.find((v) => v.lang.toLowerCase() === locale)
    if (exact) return exact

    const chain: Lang[] = lang === 'mr' ? ['mr', 'hi', 'en'] : lang === 'hi' ? ['hi', 'en'] : ['en']
    for (const fallback of chain) {
      const prefix = SPEECH_LOCALE[fallback].split('-')[0]
      const match = list.find((v) => v.lang.toLowerCase().startsWith(prefix))
      if (match) return match
    }
    return null
  }, [])

  const performSpeak = useCallback(
    (text: string, lang: Lang, options?: SpeakOptions) => {
      if (typeof window === 'undefined' || !window.speechSynthesis) {
        setIsSupported(false)
        options?.onError?.()
        return
      }

      const clean = text.replace(/\s+/g, ' ').trim()
      if (!clean) {
        options?.onEnd?.()
        return
      }

      const synth = window.speechSynthesis
      try {
        synth.cancel()
      } catch {
        /* noop */
      }

      const utter = new SpeechSynthesisUtterance(clean)
      utter.lang = SPEECH_LOCALE[lang]
      utter.rate = VOICE_RATE
      utter.pitch = VOICE_PITCH
      utter.volume = VOICE_VOLUME

      const voice = pickVoice(lang)
      if (voice) utter.voice = voice

      optionsRef.current = options

      utter.onstart = () => {
        setIsSpeaking(true)
        setIsPaused(false)
        optionsRef.current?.onStart?.()
      }
      utter.onend = () => {
        utterRef.current = null
        setIsSpeaking(false)
        setIsPaused(false)
        const cb = optionsRef.current?.onEnd
        optionsRef.current = undefined
        cb?.()
      }
      utter.onerror = () => {
        utterRef.current = null
        setIsSpeaking(false)
        setIsPaused(false)
        const opts = optionsRef.current
        optionsRef.current = undefined
        opts?.onError?.()
        opts?.onEnd?.()
      }

      utterRef.current = utter
      synth.speak(utter)
    },
    [pickVoice],
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const synth = window.speechSynthesis
    setIsSupported(Boolean(synth))
    if (!synth) return

    const loadVoices = () => {
      const list = synth.getVoices()
      if (!list.length) return
      voicesRef.current = list

      const pending = pendingRef.current
      if (pending) {
        pendingRef.current = null
        performSpeak(pending.text, pending.lang, pending.options)
      }
    }

    loadVoices()
    synth.addEventListener?.('voiceschanged', loadVoices)
    synth.onvoiceschanged = loadVoices

    return () => {
      synth.onvoiceschanged = null
      try {
        synth.removeEventListener?.('voiceschanged', loadVoices)
      } catch {
        /* noop */
      }
      try {
        synth.cancel()
      } catch {
        /* noop */
      }
      utterRef.current = null
      pendingRef.current = null
      optionsRef.current = undefined
      setIsSpeaking(false)
      setIsPaused(false)
    }
  }, [performSpeak])

  const speak = useCallback(
    (text: string, lang?: Lang, options?: SpeakOptions) => {
      const targetLang = lang ?? langRef.current

      if (typeof window === 'undefined' || !window.speechSynthesis) {
        setIsSupported(false)
        options?.onError?.()
        return
      }

      if (voicesRef.current.length > 0) {
        performSpeak(text, targetLang, options)
        return
      }

      const id = ++seqRef.current
      pendingRef.current = { id, text, lang: targetLang, options }

      try {
        window.speechSynthesis.getVoices()
      } catch {
        /* noop */
      }

      window.setTimeout(() => {
        if (pendingRef.current?.id !== id) return
        pendingRef.current = null
        performSpeak(text, targetLang, options)
      }, VOICES_WAIT_MS)
    },
    [performSpeak],
  )

  const stop = useCallback(() => {
    pendingRef.current = null
    // Avoid firing onEnd for an intentional cancel when switching utterances.
    optionsRef.current = undefined
    utterRef.current = null
    try {
      window.speechSynthesis?.cancel()
    } catch {
      /* noop */
    }
    setIsSpeaking(false)
    setIsPaused(false)
  }, [])

  const pause = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    if (!window.speechSynthesis.speaking || window.speechSynthesis.paused) return
    try {
      window.speechSynthesis.pause()
      setIsPaused(true)
    } catch {
      /* noop */
    }
  }, [])

  const resume = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    if (!window.speechSynthesis.paused) return
    try {
      window.speechSynthesis.resume()
      setIsPaused(false)
      setIsSpeaking(true)
    } catch {
      /* noop */
    }
  }, [])

  return {
    speak,
    stop,
    pause,
    resume,
    isSpeaking,
    isPaused,
    isSupported,
  }
}
