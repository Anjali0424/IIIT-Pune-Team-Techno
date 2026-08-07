'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Camera,
  Check,
  ImagePlus,
  Keyboard,
  Loader2,
  Mic,
  RefreshCw,
  Trash2,
  X,
} from 'lucide-react'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'
import { useSpeech } from '@/hooks/use-speech'
import { api, ApiError } from '@/lib/api'
import { saveAnalysis, clearAnalysis } from '@/lib/analysis-store'

type Step = 'ask' | 'analyzing'

const MAX_IMAGE_BYTES = 10 * 1024 * 1024

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'

/**
 * Universal visual assistant. One simple "ask" screen gives the user three
 * clear ways to get help - photo, voice or typed text - all of which can be
 * combined (photo + optional details). After a successful upload the app
 * navigates to /analyze where the read-aloud answer is shown. Designed for
 * rural, low-literacy and first-time smartphone users: large buttons, large
 * fonts, high contrast, and every icon paired with a label.
 */
export function CropDoctorModal({
  open,
  lang,
  onClose,
  autoStartVoice = false,
}: {
  open: boolean
  lang: Lang
  onClose: () => void
  autoStartVoice?: boolean
}) {
  const speech = useSpeech(lang)
  const router = useRouter()
  const [step, setStep] = useState<Step>('ask')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [text, setText] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [slowHint, setSlowHint] = useState(false)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const textBeforeVoiceRef = useRef<string | null>(null)

  /* Reset the workflow whenever the modal opens. */
  useEffect(() => {
    if (!open) return
    setStep('ask')
    setImageFile(null)
    setPreviewUrl(null)
    setText('')
    setError(null)
    setSlowHint(false)
    textBeforeVoiceRef.current = null
    clearAnalysis()
  }, [open])

  /* Soft timeout message after 30s — keep waiting, do not cancel. */
  useEffect(() => {
    if (step !== 'analyzing') {
      setSlowHint(false)
      return
    }
    const timer = window.setTimeout(() => {
      console.log('[GramMitra] Analysis still running after 30s')
      setSlowHint(true)
    }, 30000)
    return () => window.clearTimeout(timer)
  }, [step])

  /* Merge the live voice transcript into the text box (keeps what was typed). */
  useEffect(() => {
    if (!speech.isListening) return
    const base = textBeforeVoiceRef.current ?? ''
    const spoken = speech.transcript.trim()
    setText(base ? `${base} ${spoken}`.trim() : spoken)
  }, [speech.transcript, speech.isListening])

  /* Auto-start voice when the modal opens for a "new question" intent. */
  const startVoiceRef = useRef<() => void>(() => {})
  useEffect(() => {
    if (!open || !autoStartVoice) return
    const timer = window.setTimeout(() => {
      console.log('[GramMitra] Auto-starting voice for "new question" intent')
      startVoiceRef.current()
    }, 400)
    return () => window.clearTimeout(timer)
  }, [open, autoStartVoice])

  /* Revoke object URLs so we never leak memory. */
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const openCamera = useCallback(() => {
    console.log('[GramMitra] Opening camera / gallery picker')
    inputRef.current?.click()
  }, [])

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      e.target.value = ''
      if (!file) {
        console.log('[GramMitra] No file selected (picker cancelled)')
        return
      }
      console.log('[GramMitra] File selected', {
        name: file.name,
        type: file.type || '(empty)',
        size: file.size,
      })
      if (file.type && !file.type.startsWith('image/')) {
        console.warn('[GramMitra] Rejected non-image file:', file.type)
        setError(UI.imageTypeError[lang])
        return
      }
      if (file.size > MAX_IMAGE_BYTES) {
        console.warn('[GramMitra] Rejected oversized image:', file.size)
        setError(UI.imageSizeError[lang])
        return
      }
      if (previewUrl) URL.revokeObjectURL(previewUrl)
      setImageFile(file)
      setPreviewUrl(URL.createObjectURL(file))
      setError(null)
      console.log('[GramMitra] Preview ready, still on ask screen')
    },
    [lang, previewUrl],
  )

  const handleRemove = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setImageFile(null)
    setPreviewUrl(null)
    setError(null)
    console.log('[GramMitra] Photo removed')
  }, [previewUrl])

  const startVoice = useCallback(() => {
    if (!speech.supported) {
      console.warn('[GramMitra] Voice not supported on this browser')
      setError(UI.voiceUnsupported[lang])
      return
    }
    console.log('[GramMitra] Voice listening started')
    textBeforeVoiceRef.current = text
    speech.setTranscript('')
    speech.startListening()
  }, [speech, text, lang])
  startVoiceRef.current = startVoice

  const stopVoice = useCallback(() => {
    console.log('[GramMitra] Voice listening stopped')
    speech.stopListening()
    textBeforeVoiceRef.current = null
  }, [speech])

  const toggleVoice = useCallback(() => {
    if (speech.isListening) stopVoice()
    else startVoice()
  }, [speech.isListening, startVoice, stopVoice])

  const focusText = useCallback(() => {
    console.log('[GramMitra] Text input focused')
    textareaRef.current?.focus()
  }, [])

  const hasInput = Boolean(imageFile) || text.trim().length > 0

  const handleAnalyze = useCallback(async () => {
    const question = text.trim()
    if (!imageFile && !question) {
      console.warn('[GramMitra] Cannot analyze: no photo and no question')
      setError(UI.noQuestionError[lang])
      return
    }
    speech.stopListening()
    textBeforeVoiceRef.current = null
    setStep('analyzing')
    setError(null)
    setSlowHint(false)
    console.log('[GramMitra] Image selected / analyze clicked', {
      lang,
      hasImage: Boolean(imageFile),
      imageType: imageFile?.type ?? null,
      imageSize: imageFile?.size ?? null,
      text: question,
    })
    try {
      console.log('[GramMitra] Upload started → backend /api/crop/analyze')
      const res = await api.analyzeCrop(imageFile, question, lang)
      console.log('[GramMitra] Frontend received response', {
        topic: res.crop,
        issue: res.disease,
        confidence: res.confidence,
        severity: res.severity,
        summaryPreview: res.summary?.slice(0, 120),
      })
      saveAnalysis(res, imageFile, lang)
      console.log('[GramMitra] Navigating to result screen')
      router.push('/analyze')
    } catch (err) {
      console.error('[GramMitra] Analysis failed after retries', err)
      const message =
        err instanceof ApiError
          ? err.message
          : UI.cropAnalysisFailed[lang]
      setError(message)
      setStep('ask')
    }
  }, [imageFile, text, lang, speech.stopListening, router])

  const handleClose = useCallback(() => {
    speech.stopSpeaking()
    speech.stopListening()
    clearAnalysis()
    onClose()
  }, [speech.stopSpeaking, speech.stopListening, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="crop-doctor-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={UI.appName[lang]}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex max-h-[92dvh] w-full max-w-md flex-col overflow-hidden rounded-3xl bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-3xl bg-primary px-5 py-4 text-primary-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden>
                  🌾
                </span>
                <span className="text-lg font-bold">{UI.appName[lang]}</span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                disabled={step === 'analyzing'}
                aria-label={UI.cancel[lang]}
                className={`flex size-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 ${FOCUS_RING} focus-visible:ring-white`}
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Body */}
            <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-6">
              {error && step !== 'analyzing' && (
                <div className="mb-4 flex items-start gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 ring-1 ring-rose-200">
                  <span aria-hidden>⚠️</span>
                  <p>{error}</p>
                </div>
              )}

              <AnimatePresence mode="wait">
                {/* --------------------------- Ask (3 ways) --------------------------- */}
                {step === 'ask' && (
                  <motion.div
                    key="ask"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col"
                  >
                    <p className="text-center text-xl font-bold leading-snug text-foreground text-balance">
                      {UI.askHeading[lang]}
                    </p>
                    <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground text-pretty">
                      {UI.askSubtitle[lang]}
                    </p>

                    {/* Three ways to ask */}
                    <div className="mt-5 flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={openCamera}
                        className={`flex items-center gap-4 rounded-2xl bg-card p-4 text-left shadow-sm ring-1 ring-border/60 transition active:scale-[0.98] ${FOCUS_RING}`}
                      >
                        <span
                          className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                          aria-hidden
                        >
                          <Camera className="size-8" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-base font-bold text-foreground">
                            📷 {UI.photoOption[lang]}
                          </span>
                          <span className="mt-0.5 block text-sm leading-snug text-muted-foreground text-pretty">
                            {UI.photoOptionDesc[lang]}
                          </span>
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={toggleVoice}
                        aria-pressed={speech.isListening}
                        className={`flex items-center gap-4 rounded-2xl p-4 text-left shadow-sm ring-1 transition active:scale-[0.98] ${FOCUS_RING} ${
                          speech.isListening
                            ? 'bg-rose-50 ring-2 ring-rose-300'
                            : 'bg-card ring-border/60'
                        }`}
                      >
                        <span
                          className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${
                            speech.isListening
                              ? 'bg-rose-600 text-white'
                              : 'bg-primary/10 text-primary'
                          }`}
                          aria-hidden
                        >
                          {speech.isListening ? (
                            <Loader2 className="size-8 animate-spin" />
                          ) : (
                            <Mic className="size-8" />
                          )}
                        </span>
                        <span className="flex-1">
                          <span className="block text-base font-bold text-foreground">
                            🎤 {UI.voiceOption[lang]}
                          </span>
                          <span className="mt-0.5 block text-sm leading-snug text-muted-foreground text-pretty">
                            {speech.isListening
                              ? UI.listening[lang]
                              : UI.voiceOptionDesc[lang]}
                          </span>
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={focusText}
                        className={`flex items-center gap-4 rounded-2xl bg-card p-4 text-left shadow-sm ring-1 ring-border/60 transition active:scale-[0.98] ${FOCUS_RING}`}
                      >
                        <span
                          className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                          aria-hidden
                        >
                          <Keyboard className="size-8" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-base font-bold text-foreground">
                            ⌨️ {UI.textOption[lang]}
                          </span>
                          <span className="mt-0.5 block text-sm leading-snug text-muted-foreground text-pretty">
                            {UI.textOptionDesc[lang]}
                          </span>
                        </span>
                      </button>
                    </div>

                    {/* Image preview (photo box stays + text box stays + mic stays) */}
                    {previewUrl && (
                      <div className="mt-4">
                        <div className="relative overflow-hidden rounded-2xl shadow-md ring-1 ring-border/60">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={previewUrl}
                            alt={UI.appName[lang]}
                            className="h-52 w-full object-cover"
                          />
                          <span
                            className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow"
                            aria-hidden
                          >
                            <Check className="size-5" />
                          </span>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={openCamera}
                            className={`flex items-center justify-center gap-2 rounded-2xl bg-card p-4 text-base font-bold text-card-foreground shadow-sm ring-1 ring-border/60 active:scale-95 ${FOCUS_RING}`}
                          >
                            <RefreshCw className="size-6 text-primary" />
                            {UI.retake[lang]}
                          </button>
                          <button
                            type="button"
                            onClick={handleRemove}
                            className={`flex items-center justify-center gap-2 rounded-2xl bg-card p-4 text-base font-bold text-card-foreground shadow-sm ring-1 ring-border/60 active:scale-95 ${FOCUS_RING}`}
                          >
                            <Trash2 className="size-6 text-rose-600" />
                            {UI.remove[lang]}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Question text + mic */}
                    <div className="mt-4">
                      <div className="relative">
                        <textarea
                          ref={textareaRef}
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          rows={imageFile ? 2 : 4}
                          placeholder={
                            imageFile ? UI.photoDetailPlaceholder[lang] : UI.questionPlaceholder[lang]
                          }
                          aria-label={UI.questionInputLabel[lang]}
                          className="w-full resize-none rounded-2xl border-2 border-border bg-secondary/40 px-4 py-3 pr-16 text-base leading-relaxed text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={toggleVoice}
                          aria-label={
                            speech.isListening ? UI.stop[lang] : UI.voiceOption[lang]
                          }
                          aria-pressed={speech.isListening}
                          className={`absolute bottom-3 right-3 flex size-12 items-center justify-center rounded-full shadow-md active:scale-95 ${FOCUS_RING} ${
                            speech.isListening
                              ? 'bg-rose-600 text-white'
                              : 'bg-primary text-primary-foreground'
                          }`}
                        >
                          {speech.isListening ? (
                            <Loader2 className="size-6 animate-spin" />
                          ) : (
                            <Mic className="size-6" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Analyze */}
                    <motion.button
                      type="button"
                      onClick={handleAnalyze}
                      whileTap={hasInput ? { scale: 0.97 } : undefined}
                      className={`mt-4 flex w-full items-center justify-center gap-2 rounded-2xl p-4 text-lg font-bold shadow-md active:scale-[0.98] ${FOCUS_RING} ${
                        hasInput
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-muted-foreground ring-1 ring-border/60'
                      }`}
                    >
                      <ImagePlus className="size-6" />
                      {UI.analyze[lang]}
                    </motion.button>
                  </motion.div>
                )}

                {/* ------------------------------- Analyzing ------------------------------ */}
                {step === 'analyzing' && (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-10"
                    aria-busy="true"
                    aria-live="polite"
                  >
                    <div className="relative flex size-36 items-center justify-center">
                      {/* Outer scanning ring */}
                      <motion.span
                        className="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1.4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: 'linear',
                        }}
                      />
                      {/* Soft pulse */}
                      <motion.span
                        className="absolute inset-3 rounded-full bg-primary/15"
                        animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.2, 0.55] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: 'easeInOut',
                        }}
                      />
                      {/* Leaf / plant center */}
                      <motion.span
                        className="relative z-10 text-5xl"
                        aria-hidden
                        animate={{ y: [0, -6, 0], rotate: [-4, 4, -4] }}
                        transition={{
                          duration: 2.4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: 'easeInOut',
                        }}
                      >
                        🌿
                      </motion.span>
                    </div>

                    <p className="mt-7 text-center text-xl font-bold text-foreground text-balance">
                      🔍 {UI.analyzing[lang]}
                    </p>
                    <p className="mt-2 max-w-[18rem] text-center text-sm leading-relaxed text-muted-foreground text-pretty">
                      {UI.analyzingHint[lang]}
                    </p>
                    <p className="mt-3 text-center text-xs font-medium text-primary/80">
                      {slowHint ? UI.analyzingSlow[lang] : UI.analyzingWait[lang]}
                    </p>
                    {slowHint && (
                      <p className="mt-1 text-center text-xs text-muted-foreground">
                        {UI.analyzingStillWorking[lang]}
                      </p>
                    )}

                    {previewUrl && (
                      <div className="relative mt-8 w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-border/60">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={previewUrl}
                          alt=""
                          className="h-40 w-full object-cover opacity-90"
                        />
                        <motion.div
                          className="pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-primary/50 to-transparent"
                          animate={{ top: ['0%', '85%', '0%'] }}
                          transition={{
                            duration: 2.2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'easeInOut',
                          }}
                        />
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hidden camera / gallery input */}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              aria-hidden
              onChange={handleFileChange}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
