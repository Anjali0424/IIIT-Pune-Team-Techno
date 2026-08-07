'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Lang } from '@/lib/data'
import { SPEECH_LOCALE } from '@/lib/assistant'

export type VoiceSearchError =
  | 'unsupported'
  | 'permission-denied'
  | 'no-speech'
  | 'failed'

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
  maxAlternatives?: number
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((e: SpeechRecognitionEventLike) => void) | null
  onend: (() => void) | null
  onerror: ((e: { error?: string }) => void) | null
}

function getRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike
    webkitSpeechRecognition?: new () => SpeechRecognitionLike
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

/**
 * YouTube-style voice search hook.
 *
 * - Recognition language follows the selected UI language (en-IN / hi-IN / mr-IN)
 *   and picks it up live, so switching language mid-app updates it automatically.
 * - Live interim transcript is exposed (`interim`) so the search box can be
 *   filled while the user is still speaking.
 * - `start(onResult)` delivers the final recognized text exactly once.
 * - `abort()` silently cancels (no result callback, used on modal close).
 * - Distinct error states: unsupported browser, microphone permission denied,
 *   no speech detected, generic failure.
 */
export function useVoiceSearch(lang: Lang) {
  const [supported, setSupported] = useState(true)
  const [listening, setListening] = useState(false)
  const [interim, setInterim] = useState('')
  const [error, setError] = useState<VoiceSearchError | null>(null)

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const finalRef = useRef('')
  const onFinalRef = useRef<((text: string) => void) | null>(null)
  const hadErrorRef = useRef(false)
  const langRef = useRef(lang)
  langRef.current = lang

  useEffect(() => {
    setSupported(Boolean(getRecognitionCtor()))
    return () => {
      try {
        recognitionRef.current?.abort()
      } catch {
        /* noop */
      }
      recognitionRef.current = null
    }
  }, [])

  const abort = useCallback(() => {
    onFinalRef.current = null
    hadErrorRef.current = false
    try {
      recognitionRef.current?.abort()
    } catch {
      /* noop */
    }
    recognitionRef.current = null
    setListening(false)
  }, [])

  const stop = useCallback(() => {
    try {
      recognitionRef.current?.stop()
    } catch {
      /* noop */
    }
    setListening(false)
  }, [])

  const resetError = useCallback(() => setError(null), [])

  const start = useCallback((onFinal?: (text: string) => void) => {
    const Ctor = getRecognitionCtor()
    if (!Ctor) {
      setSupported(false)
      setError('unsupported')
      return
    }
    // Abort any previous session so we always listen fresh.
    try {
      recognitionRef.current?.abort()
    } catch {
      /* noop */
    }
    try {
      window.speechSynthesis?.cancel()
    } catch {
      /* noop */
    }

    const recognition = new Ctor()
    recognition.lang = SPEECH_LOCALE[langRef.current]
    recognition.continuous = false
    recognition.interimResults = true
    recognition.maxAlternatives = 1
    finalRef.current = ''
    onFinalRef.current = onFinal ?? null
    hadErrorRef.current = false
    setError(null)
    setInterim('')

    recognition.onresult = (e) => {
      let interimText = ''
      let finalText = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i]
        if (res.isFinal) finalText += res[0].transcript
        else interimText += res[0].transcript
      }
      if (finalText) finalRef.current += finalText
      setInterim((finalRef.current + interimText).trim())
    }

    recognition.onerror = (e) => {
      const code = e?.error
      if (code === 'not-allowed' || code === 'service-not-allowed') {
        hadErrorRef.current = true
        setError('permission-denied')
      } else if (code === 'no-speech' || code === 'audio-capture') {
        hadErrorRef.current = true
        setError('no-speech')
      } else if (code === 'aborted') {
        // Manual stop — not an error.
      } else {
        hadErrorRef.current = true
        setError('failed')
      }
      setListening(false)
    }

    recognition.onend = () => {
      setListening(false)
      const result = finalRef.current.trim()
      if (result) {
        setInterim('')
        if (onFinalRef.current) {
          const cb = onFinalRef.current
          onFinalRef.current = null
          cb(result)
        }
      } else if (!hadErrorRef.current) {
        // Recognition ended with nothing recognized and no error was reported.
        setError('no-speech')
      }
    }

    recognitionRef.current = recognition
    try {
      recognition.start()
      setListening(true)
    } catch {
      hadErrorRef.current = true
      setError('failed')
      setListening(false)
    }
  }, [])

  return { supported, listening, interim, error, start, stop, abort, resetError }
}
