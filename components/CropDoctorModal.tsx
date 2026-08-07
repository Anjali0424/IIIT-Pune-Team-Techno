'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Camera,
  Check,
  ImagePlus,
  Loader2,
  Mic,
  RefreshCw,
  Trash2,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'
import { useSpeech } from '@/hooks/use-speech'
import { api, ApiError, type CropAnalysis } from '@/lib/api'

type Step = 'select' | 'preview' | 'speak' | 'analyzing' | 'result'

const MAX_IMAGE_BYTES = 10 * 1024 * 1024
const ALLOWED_TYPES = ['image/jpeg', 'image/png']

function severityTone(value: string): string {
  const v = value.toLowerCase()
  if (v.includes('गंभीर') || v.includes('high')) return 'bg-rose-100 text-rose-700'
  if (v.includes('मध्यम') || v.includes('medium')) return 'bg-amber-100 text-amber-700'
  return 'bg-emerald-100 text-emerald-700'
}

function confidenceColor(score: number): string {
  if (score >= 70) return 'bg-emerald-500'
  if (score >= 40) return 'bg-amber-500'
  return 'bg-rose-500'
}

function ResultCard({
  emoji,
  label,
  value,
}: {
  emoji: string
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border/60">
      <div className="flex items-center gap-2">
        <span className="text-xl" aria-hidden>
          {emoji}
        </span>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
      </div>
      <p className="mt-1.5 text-base font-semibold leading-snug text-card-foreground">
        {value}
      </p>
    </div>
  )
}

/**
 * Full-screen AI Crop Doctor workflow: camera capture -> preview -> spoken
 * symptoms -> Gemini diagnosis -> read-aloud result. Fully voice + icon first,
 * no typing required.
 */
export function CropDoctorModal({
  open,
  lang,
  onClose,
}: {
  open: boolean
  lang: Lang
  onClose: () => void
}) {
  const speech = useSpeech(lang)
  const [step, setStep] = useState<Step>('select')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [result, setResult] = useState<CropAnalysis | null>(null)
  const [error, setError] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const speechRef = useRef({ startListening: speech.startListening, setTranscript: speech.setTranscript })
  const listeningRef = useRef(speech.isListening)
  speechRef.current = { startListening: speech.startListening, setTranscript: speech.setTranscript }
  listeningRef.current = speech.isListening

  /* Reset the workflow whenever the modal opens. */
  useEffect(() => {
    if (!open) return
    setStep('select')
    setImageFile(null)
    setPreviewUrl(null)
    setResult(null)
    setError(null)
  }, [open])

  /* Auto-start listening as soon as the farmer reaches the "speak" step. */
  useEffect(() => {
    if (!open || step !== 'speak' || listeningRef.current) return
    speechRef.current.setTranscript('')
    speechRef.current.startListening()
  }, [open, step])

  /* Revoke object URLs so we never leak memory. */
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const openCamera = useCallback(() => {
    inputRef.current?.click()
  }, [])

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      e.target.value = ''
      if (!file) return
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError(UI.imageTypeError[lang])
        return
      }
      if (file.size > MAX_IMAGE_BYTES) {
        setError(UI.imageSizeError[lang])
        return
      }
      if (previewUrl) URL.revokeObjectURL(previewUrl)
      setImageFile(file)
      setPreviewUrl(URL.createObjectURL(file))
      setError(null)
      setStep('preview')
    },
    [lang, previewUrl],
  )

  const handleRemove = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setImageFile(null)
    setPreviewUrl(null)
    setError(null)
    setStep('select')
  }, [previewUrl])

  const restartListening = useCallback(() => {
    speechRef.current.setTranscript('')
    speechRef.current.startListening()
  }, [])

  const handleAnalyze = useCallback(async () => {
    if (!imageFile) return
    speech.stopListening()
    setStep('analyzing')
    setError(null)
    try {
      const res = await api.analyzeCrop(imageFile, speech.transcript.trim(), lang)
      setResult(res)
      setStep('result')
      speech.speak(res.summary)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : UI.cropAnalysisFailed[lang])
      setStep('speak')
    }
  }, [imageFile, lang, speech.transcript, speech.stopListening, speech.speak])

  const handleClose = useCallback(() => {
    speech.stopSpeaking()
    speech.stopListening()
    onClose()
  }, [speech.stopSpeaking, speech.stopListening, onClose])

  const resetWorkflow = useCallback(() => {
    speech.stopSpeaking()
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setImageFile(null)
    setPreviewUrl(null)
    setResult(null)
    setError(null)
    setStep('select')
  }, [previewUrl, speech.stopSpeaking])

  const toggleReadAloud = useCallback(() => {
    if (!result) return
    if (speech.isSpeaking) speech.stopSpeaking()
    else speech.speak(result.summary)
  }, [result, speech.isSpeaking, speech.stopSpeaking, speech.speak])

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
                aria-label={UI.cancel[lang]}
                className="flex size-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25 active:scale-95"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Body */}
            <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-6">
              <AnimatePresence mode="wait">
                {/* ------------------------------ Select photo ------------------------------ */}
                {step === 'select' && (
                  <motion.div
                    key="select"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-center text-base font-semibold text-foreground text-pretty">
                      {UI.cropDoctorTagline[lang]}
                    </p>
                    <p className="mt-1 text-center text-sm text-muted-foreground text-pretty">
                      {UI.analysisHint[lang]}
                    </p>

                    <motion.button
                      type="button"
                      onClick={openCamera}
                      whileTap={{ scale: 0.94 }}
                      className="relative mt-8 flex size-32 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl"
                      aria-label={UI.capturePhoto[lang]}
                    >
                      <motion.span
                        className="absolute inset-0 rounded-full bg-primary/40"
                        animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeOut' }}
                      />
                      <Camera className="size-12" />
                    </motion.button>
                    <p className="mt-3 text-base font-semibold text-foreground">
                      {UI.capturePhoto[lang]}
                    </p>
                    <p className="mt-1 max-w-72 text-center text-xs leading-snug text-muted-foreground text-pretty">
                      {UI.cameraHelp[lang]}
                    </p>
                  </motion.div>
                )}

                {/* ------------------------------- Preview ------------------------------- */}
                {step === 'preview' && previewUrl && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-full overflow-hidden rounded-3xl shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={previewUrl}
                        alt={UI.appName[lang]}
                        className="h-72 w-full object-cover"
                      />
                      <span className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow">
                        <Check className="size-4" />
                      </span>
                    </div>

                    <div className="mt-6 grid w-full grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={openCamera}
                        className="flex flex-col items-center gap-1.5 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border/60 active:scale-95"
                      >
                        <RefreshCw className="size-6 text-primary" />
                        <span className="text-xs font-semibold text-card-foreground">
                          {UI.retake[lang]}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={handleRemove}
                        className="flex flex-col items-center gap-1.5 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border/60 active:scale-95"
                      >
                        <Trash2 className="size-6 text-rose-600" />
                        <span className="text-xs font-semibold text-card-foreground">
                          {UI.remove[lang]}
                        </span>
                      </button>
                      <motion.button
                        type="button"
                        onClick={() => setStep('speak')}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-1.5 rounded-2xl bg-primary p-4 text-primary-foreground shadow-md active:scale-95"
                      >
                        <Mic className="size-6" />
                        <span className="text-xs font-bold">{UI.continue[lang]}</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* -------------------------------- Speak -------------------------------- */}
                {step === 'speak' && (
                  <motion.div
                    key="speak"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-center text-lg font-bold text-foreground">
                      {UI.nowSpeakSymptoms[lang]}
                    </p>
                    <p className="mt-1 text-center text-sm text-muted-foreground text-pretty">
                      {UI.speakSymptomsHint[lang]}
                    </p>

                    <div className="relative mt-8 flex size-28 items-center justify-center">
                      {speech.isListening && (
                        <>
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="absolute inset-0 rounded-full bg-rose-500/50"
                              initial={false}
                              animate={{ scale: [1, 2.1], opacity: [0.55, 0] }}
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
                      <motion.button
                        type="button"
                        onClick={speech.isListening ? speech.stopListening : restartListening}
                        whileTap={{ scale: 0.94 }}
                        className={`relative flex size-24 items-center justify-center rounded-full text-white shadow-xl ${
                          speech.isListening ? 'bg-rose-600' : 'bg-primary'
                        }`}
                        aria-label={UI.listening[lang]}
                      >
                        {speech.isListening ? (
                          <Loader2 className="size-10 animate-spin" />
                        ) : (
                          <Mic className="size-10" />
                        )}
                      </motion.button>
                    </div>

                    <p className="mt-3 text-base font-semibold text-foreground">
                      {UI.askByVoice[lang]}
                    </p>
                    <p className="text-xs text-muted-foreground">{UI.noTyping[lang]}</p>

                    {/* Live transcript */}
                    <div className="mt-4 flex min-h-16 w-full items-center justify-center rounded-2xl bg-secondary/60 px-4 py-3">
                      <p
                        aria-live="polite"
                        className={`text-center text-lg font-semibold text-pretty ${
                          speech.transcript
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {speech.transcript || UI.questionPlaceholder[lang]}
                      </p>
                    </div>

                    {!speech.supported && (
                      <p className="mt-3 text-center text-xs text-muted-foreground">
                        {UI.voiceUnsupported[lang]}
                      </p>
                    )}

                    {error && (
                      <p className="mt-3 rounded-xl bg-rose-50 px-4 py-2 text-center text-sm font-medium text-rose-700">
                        {error}
                      </p>
                    )}

                    <div className="mt-6 grid w-full grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setStep('select')}
                        className="flex items-center justify-center gap-2 rounded-2xl bg-card p-4 text-sm font-semibold text-card-foreground shadow-sm ring-1 ring-border/60 active:scale-95"
                      >
                        <Camera className="size-5" />
                        {UI.captureCrop[lang]}
                      </button>
                      <motion.button
                        type="button"
                        onClick={handleAnalyze}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 rounded-2xl bg-primary p-4 text-sm font-bold text-primary-foreground shadow-md active:scale-95"
                      >
                        <Check className="size-5" />
                        {UI.diagnose[lang]}
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* ------------------------------- Analyzing ------------------------------ */}
                {step === 'analyzing' && (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-12"
                  >
                    <div className="relative flex size-28 items-center justify-center">
                      <motion.span
                        className="absolute inset-0 rounded-full bg-primary/40"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeOut' }}
                      />
                      <div className="relative flex size-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl">
                        <Loader2 className="size-10 animate-spin" />
                      </div>
                    </div>
                    <p className="mt-6 text-lg font-bold text-foreground">
                      {UI.analyzing[lang]}
                    </p>
                    <p className="mt-1 text-center text-sm text-muted-foreground text-pretty">
                      {UI.analyzingHint[lang]}
                    </p>
                  </motion.div>
                )}

                {/* -------------------------------- Result -------------------------------- */}
                {step === 'result' && result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold text-foreground">
                          {UI.diagnosisReady[lang]}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-sm font-bold ${severityTone(result.severity)}`}
                          >
                            {UI.severityLabel[lang]}: {result.severity}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={toggleReadAloud}
                        aria-label={speech.isSpeaking ? UI.stopListening[lang] : UI.listen[lang]}
                        className={`flex size-12 items-center justify-center rounded-full shadow-md active:scale-95 ${
                          speech.isSpeaking
                            ? 'bg-rose-600 text-white'
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        {speech.isSpeaking ? (
                          <VolumeX className="size-6" />
                        ) : (
                          <Volume2 className="size-6" />
                        )}
                      </button>
                    </div>

                    {/* Confidence */}
                    <div className="mt-4 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border/60">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-muted-foreground">
                          📊 {UI.confidence[lang]}
                        </p>
                        <span className="text-lg font-bold text-foreground">
                          {result.confidence}%
                        </span>
                      </div>
                      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${result.confidence}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className={`h-full rounded-full ${confidenceColor(result.confidence)}`}
                        />
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <ResultCard emoji="🌾" label={UI.whatItIs[lang]} value={result.crop} />
                      <ResultCard emoji="🦠" label={UI.issue[lang]} value={result.disease} />
                      {result.pest && (
                        <ResultCard emoji="🐛" label={UI.pest[lang]} value={result.pest} />
                      )}
                      {result.nutrient_deficiency && (
                        <ResultCard
                          emoji="🧪"
                          label={UI.nutrientDeficiency[lang]}
                          value={result.nutrient_deficiency}
                        />
                      )}
                    </div>

                    <div className="mt-3 flex flex-col gap-3">
                      <ResultCard emoji="⚠️" label={UI.cause[lang]} value={result.cause} />
                      <ResultCard
                        emoji="💊"
                        label={UI.recommendedSolution[lang]}
                        value={result.recommended_medicine}
                      />
                      <ResultCard
                        emoji="🌿"
                        label={UI.organicTreatment[lang]}
                        value={result.organic_treatment}
                      />
                      <ResultCard
                        emoji="🧪"
                        label={UI.chemicalTreatment[lang]}
                        value={result.chemical_treatment}
                      />
                      <ResultCard emoji="📅" label={UI.prevention[lang]} value={result.prevention} />
                    </div>

                    <button
                      type="button"
                      onClick={resetWorkflow}
                      className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-primary p-4 text-base font-bold text-primary-foreground shadow-md active:scale-95"
                    >
                      <ImagePlus className="size-6" />
                      {UI.newDiagnosis[lang]}
                    </button>
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
