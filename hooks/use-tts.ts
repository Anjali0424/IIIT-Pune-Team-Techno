'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  getTtsState,
  isSpeechSupported,
  pauseSpeaking,
  resumeSpeaking,
  speakText,
  stopSpeaking,
  subscribe,
  type SpeakOptions,
} from '@/lib/tts'

/**
 * React binding for the module-level TTS engine (`lib/tts.ts`), which
 * synthesises speech with the backend (Google Cloud TTS / Azure AI Speech)
 * and falls back to the browser engine when the cloud is unreachable.
 *
 * Multiple components can call this hook safely: they all observe the same
 * singleton, so only one utterance ever plays at a time and the UI stays in
 * sync everywhere (bottom-bar status, per-message controls, etc.).
 *
 * The hook stops any ongoing speech when its component unmounts, which
 * automatically covers navigation away and screen changes.
 */
export function useTts() {
  const [supported, setSupported] = useState(true)
  const [speaking, setSpeaking] = useState(() => getTtsState().speaking)
  const [paused, setPaused] = useState(() => getTtsState().paused)
  const [loading, setLoading] = useState(() => getTtsState().loading)
  const [currentKey, setCurrentKey] = useState<string | null>(() => getTtsState().currentKey)
  const [error, setError] = useState<string | null>(() => getTtsState().error)

  useEffect(() => {
    setSupported(isSpeechSupported())
    const unsubscribe = subscribe((s) => {
      setSpeaking(s.speaking)
      setPaused(s.paused)
      setLoading(s.loading)
      setCurrentKey(s.currentKey)
      setError(s.error)
    })
    return () => {
      unsubscribe()
      stopSpeaking()
    }
  }, [])

  const speak = useCallback((text: string, language?: string | null, options?: SpeakOptions) => {
    speakText(text, language, options)
  }, [])

  const pause = useCallback(() => pauseSpeaking(), [])
  const resume = useCallback(() => resumeSpeaking(), [])
  const stop = useCallback(() => stopSpeaking(), [])

  const isActive = useCallback(
    (key: string) => (speaking || loading) && currentKey === key,
    [speaking, loading, currentKey],
  )

  return { supported, speaking, paused, loading, currentKey, error, isActive, speak, pause, resume, stop }
}
