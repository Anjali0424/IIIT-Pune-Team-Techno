'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader2, Mic, X } from 'lucide-react'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'
import { useVoiceSearch, type VoiceSearchError } from '@/hooks/useVoiceSearch'

type Phase = 'listening' | 'searching' | 'error'

function errorMessage(code: VoiceSearchError): Record<Lang, string> {
  switch (code) {
    case 'unsupported':
      return UI.voiceUnsupported
    case 'permission-denied':
      return UI.voicePermissionDenied
    case 'no-speech':
      return UI.voiceNoSpeech
    default:
      return UI.voiceFailed
  }
}

/**
 * YouTube-style full-screen voice search modal.
 *
 * Fully self-contained: it owns the speech recognition session. While the modal
 * is open, the live interim transcript is forwarded through `onInterim` so the
 * page's search box fills up as the user speaks. When recognition finishes, the
 * final text is delivered once through `onResult` and the modal closes itself
 * after a short "Searching..." delay.
 */
export function VoiceSearchModal({
  open,
  lang,
  onResult,
  onInterim,
  onClose,
}: {
  open: boolean
  lang: Lang
  onResult: (text: string) => void
  onInterim?: (text: string) => void
  onClose: () => void
}) {
  const { interim, error, start, abort, resetError } = useVoiceSearch(lang)
  const [phase, setPhase] = useState<Phase>('listening')
  const [recognized, setRecognized] = useState('')
  const closeTimerRef = useRef<number | null>(null)
  const onResultRef = useRef(onResult)
  const onInterimRef = useRef(onInterim)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onResultRef.current = onResult
  }, [onResult])
  useEffect(() => {
    onInterimRef.current = onInterim
  }, [onInterim])
  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  const beginListening = useCallback(() => {
    resetError()
    setRecognized('')
    setPhase('listening')
    start((text) => {
      const trimmed = text.trim()
      if (!trimmed) return
      setRecognized(trimmed)
      setPhase('searching')
      onResultRef.current(trimmed)
      closeTimerRef.current = window.setTimeout(() => onCloseRef.current(), 1100)
    })
  }, [resetError, start])

  useEffect(() => {
    if (!open) return
    // eslint-disable-next-line react-hooks/set-state-in-effect
    beginListening()
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
      abort()
    }
  }, [open, beginListening, abort])

  // Feed the live transcript into the page's search box.
  useEffect(() => {
    if (open && interim) onInterimRef.current?.(interim)
  }, [interim, open])

  // Surface recognition errors inside the modal.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (open && error) setPhase('error')
  }, [error, open])

  const handleClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current)
    abort()
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="voice-search-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={UI.tapToSpeak[lang]}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-md"
        >
          {/* Close */}
          <motion.button
            type="button"
            onClick={handleClose}
            aria-label={UI.cancel[lang]}
            className="absolute right-5 top-6 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
          >
            <X className="size-5" />
          </motion.button>

          <div className="flex w-full flex-col items-center">
            {/* Microphone */}
            <div className="relative flex h-40 w-40 items-center justify-center">
              {phase === 'listening' && (
                <>
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="absolute inset-0 rounded-full bg-rose-500/50"
                      initial={false}
                      animate={{ scale: [1, 2.2], opacity: [0.55, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.6,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                </>
              )}

              <motion.div
                className="relative flex size-32 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15"
                animate={
                  phase === 'listening'
                    ? { scale: [1, 1.07, 1] }
                    : { scale: 1 }
                }
                transition={
                  phase === 'listening'
                    ? { duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }
                    : { duration: 0.2 }
                }
              >
                <motion.div
                  className={`flex size-24 items-center justify-center rounded-full text-white ${
                    phase === 'error' ? 'bg-white/15' : 'bg-rose-600'
                  }`}
                  animate={
                    phase === 'listening'
                      ? {
                          boxShadow: [
                            '0 0 24px 4px rgba(225,29,72,0.55)',
                            '0 0 72px 20px rgba(225,29,72,0.25)',
                            '0 0 24px 4px rgba(225,29,72,0.55)',
                          ],
                        }
                      : {
                          boxShadow: [
                            '0 0 24px 4px rgba(225,29,72,0.45)',
                            '0 0 44px 12px rgba(225,29,72,0.3)',
                            '0 0 24px 4px rgba(225,29,72,0.45)',
                          ],
                        }
                  }
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                >
                  {phase === 'searching' ? (
                    <Loader2 className="size-10 animate-spin" />
                  ) : phase === 'error' ? (
                    <Mic className="size-10" />
                  ) : (
                    <Mic className="size-11" />
                  )}
                </motion.div>
              </motion.div>
            </div>

            {/* Waveform while listening */}
            {phase === 'listening' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-7 flex h-10 items-center justify-center gap-1.5"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 rounded-full bg-white"
                    style={{ height: 28 }}
                    initial={false}
                    animate={{ scaleY: [0.35, 1.5, 0.45, 1.2, 0.35] }}
                    transition={{
                      duration: 0.9,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.1,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>
            )}

            {/* Status / live text */}
            <div className="mt-6 flex min-h-24 w-full flex-col items-center justify-start text-center">
              <AnimatePresence mode="wait">
                {phase === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-base font-semibold text-rose-300">
                      {errorMessage(error ?? 'failed')[lang]}
                    </p>
                    <button
                      type="button"
                      onClick={beginListening}
                      className="mt-5 flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-lg active:scale-95"
                    >
                      <Mic className="size-4" />
                      {UI.tapToSpeak[lang]}
                    </button>
                  </motion.div>
                ) : recognized ? (
                  <motion.div
                    key="recognized"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-sm font-medium text-white/70">{UI.recognized[lang]}</p>
                    <p className="mt-1 max-w-xs text-xl font-bold text-white text-balance">
                      {recognized}
                    </p>
                    {phase === 'searching' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 flex items-center gap-2 text-sm font-medium text-rose-300"
                      >
                        <Loader2 className="size-3.5 animate-spin" />
                        {UI.searching[lang]}
                      </motion.p>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="listening"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-base font-medium text-white/90">{UI.listening[lang]}</p>
                    <p className="mt-1 max-w-xs text-lg font-semibold text-white text-balance">
                      {interim || UI.speakNow[lang]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
