'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Lang } from '@/lib/data'
import { SPEECH_LOCALE } from '@/lib/assistant'
import { useTextToSpeech } from '@/hooks/use-text-to-speech'

// Minimal typings for the Web Speech API
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

/**
 * Combined speech helper: recognition (mic) + text-to-speech.
 * TTS is provided by `useTextToSpeech` so playback stays consistent app-wide.
 */
export function useSpeech(lang: Lang) {
  const { speak, stop, pause, resume, isSpeaking, isPaused, isSupported } =
    useTextToSpeech(lang)

  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [supported, setSupported] = useState(true)

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const finalRef = useRef('')
  const onFinalRef = useRef<((text: string) => void) | null>(null)

  useEffect(() => {
    const Ctor = getRecognitionCtor()
    setSupported(Boolean(Ctor) || isSupported)
    return () => {
      try {
        recognitionRef.current?.abort()
      } catch {
        /* noop */
      }
      stop()
    }
  }, [isSupported, stop])

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

      // Cancel any ongoing speech so the mic doesn't capture it.
      stop()

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
        setIsListening(false)
      }
      recognition.onend = () => {
        setIsListening(false)
        const result = finalRef.current.trim()
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
    [lang, stop],
  )

  const speakText = useCallback(
    (text: string) => {
      speak(text, lang)
    },
    [lang, speak],
  )

  return {
    isListening,
    isSpeaking,
    isPaused,
    transcript,
    supported,
    startListening,
    stopListening,
    speak: speakText,
    stopSpeaking: stop,
    pauseSpeaking: pause,
    resumeSpeaking: resume,
    setTranscript,
  }
}
