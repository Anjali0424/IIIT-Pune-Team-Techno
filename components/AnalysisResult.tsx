'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  RefreshCw,
  Sparkles,
  Volume2,
  VolumeX,
  Search,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  Target,
} from 'lucide-react'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'
import { useSpeech } from '@/hooks/use-speech'
import type { VisionResponse } from '@/lib/api'

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'

/** Labels for structured sections in 3 languages. */
const SECTION_LABELS = {
  objectDetected: { mr: '🔍 ओळखले', hi: '🔍 पहचाना', en: '🔍 Detected' },
  explanation: { mr: '📝 स्पष्टीकरण', hi: '📝 विवरण', en: '📝 Explanation' },
  problem: { mr: '⚠️ समस्या', hi: '⚠️ समस्या', en: '⚠️ Problem' },
  solution: { mr: '💡 उपाय', hi: '💡 समाधान', en: '💡 Solution' },
  precautions: { mr: '🛡️ सावधानी', hi: '🛡️ सावधानी', en: '🛡️ Precautions' },
  confidence: { mr: '🎯 विश्वास', hi: '🎯 विश्वास', en: '🎯 Confidence' },
} as const

/** Return true if the value is a useful non-empty answer. */
function hasValue(v: string | undefined | null): boolean {
  if (!v) return false
  const t = v.trim().toLowerCase()
  return t.length > 0 && t !== 'none' && t !== 'null' && t !== '—' && t !== '-'
}

/**
 * Voice-first structured answer screen. Shows the Gemini Vision response as
 * clean cards (Object Detected → Explanation → Problem → Solution →
 * Precautions → Confidence) and reads the summary_text aloud automatically.
 */
export function AnalysisResult({
  result,
  lang,
  onAnalyzeAgain,
  onBack,
}: {
  result: VisionResponse
  lang: Lang
  onAnalyzeAgain: () => void
  onBack: () => void
}) {
  const speech = useSpeech(lang)
  const ttsText = result.summary_text || result.reply || result.explanation || ''

  /* Voice-first: read the answer aloud automatically. */
  useEffect(() => {
    if (!ttsText) return
    const timer = window.setTimeout(() => speech.speak(ttsText), 450)
    return () => window.clearTimeout(timer)
  }, [speech.speak, ttsText])

  const toggleReadAloud = () => {
    if (speech.isSpeaking) speech.stopSpeaking()
    else speech.speak(ttsText)
  }

  const sections = [
    {
      key: 'objectDetected',
      icon: <Search className="size-5" />,
      label: SECTION_LABELS.objectDetected[lang],
      value: result.object_detected,
      color: 'bg-blue-50 text-blue-700 ring-blue-200',
      iconBg: 'bg-blue-100 text-blue-600',
    },
    {
      key: 'explanation',
      icon: <Sparkles className="size-5" />,
      label: SECTION_LABELS.explanation[lang],
      value: result.explanation,
      color: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      key: 'problem',
      icon: <AlertTriangle className="size-5" />,
      label: SECTION_LABELS.problem[lang],
      value: result.problem,
      color: 'bg-amber-50 text-amber-700 ring-amber-200',
      iconBg: 'bg-amber-100 text-amber-600',
    },
    {
      key: 'solution',
      icon: <Lightbulb className="size-5" />,
      label: SECTION_LABELS.solution[lang],
      value: result.suggested_solution,
      color: 'bg-violet-50 text-violet-700 ring-violet-200',
      iconBg: 'bg-violet-100 text-violet-600',
    },
    {
      key: 'precautions',
      icon: <ShieldCheck className="size-5" />,
      label: SECTION_LABELS.precautions[lang],
      value: result.precautions,
      color: 'bg-teal-50 text-teal-700 ring-teal-200',
      iconBg: 'bg-teal-100 text-teal-600',
    },
    {
      key: 'confidence',
      icon: <Target className="size-5" />,
      label: SECTION_LABELS.confidence[lang],
      value: result.confidence,
      color: 'bg-sky-50 text-sky-700 ring-sky-200',
      iconBg: 'bg-sky-100 text-sky-600',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex flex-col gap-3"
    >
      {/* AI Answer header card with summary_text */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="rounded-3xl bg-card p-5 shadow-md ring-1 ring-border/60"
      >
        <p className="flex items-center gap-2 text-base font-bold text-primary">
          <span
            className="flex size-9 items-center justify-center rounded-full bg-primary/10"
            aria-hidden
          >
            <Sparkles className="size-5" />
          </span>
          {UI.aiAnswer[lang]}
        </p>
        <p
          aria-live="polite"
          className="mt-3 text-pretty text-lg font-medium leading-relaxed text-foreground whitespace-pre-wrap"
        >
          {ttsText}
        </p>
      </motion.div>

      {/* Structured detail cards */}
      {sections.map(
        (sec, i) =>
          hasValue(sec.value) && (
            <motion.div
              key={sec.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 + i * 0.05 }}
              className={`rounded-2xl p-4 ring-1 ${sec.color}`}
            >
              <p className="flex items-center gap-2 text-sm font-bold">
                <span
                  className={`flex size-7 items-center justify-center rounded-full ${sec.iconBg}`}
                  aria-hidden
                >
                  {sec.icon}
                </span>
                {sec.label}
              </p>
              <p className="mt-2 text-base leading-relaxed whitespace-pre-wrap">
                {sec.value}
              </p>
            </motion.div>
          ),
      )}

      {/* Replay voice */}
      <motion.button
        type="button"
        onClick={toggleReadAloud}
        aria-pressed={speech.isSpeaking}
        whileTap={{ scale: 0.98 }}
        className={`mt-2 flex w-full items-center justify-center gap-3 rounded-2xl p-5 text-xl font-bold shadow-lg transition-colors ${FOCUS_RING} ${
          speech.isSpeaking ? 'bg-rose-600 text-white' : 'bg-primary text-primary-foreground'
        }`}
      >
        {speech.isSpeaking ? <VolumeX className="size-7" /> : <Volume2 className="size-7" />}
        {speech.isSpeaking ? UI.stop[lang] : UI.replayVoice[lang]}
      </motion.button>

      {/* Analyze again + Back */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onAnalyzeAgain}
          className={`flex items-center justify-center gap-2 rounded-2xl bg-primary/10 p-4 text-lg font-bold text-primary shadow-sm ring-1 ring-primary/30 transition active:scale-95 ${FOCUS_RING}`}
        >
          <RefreshCw className="size-6" />
          {UI.analyzeAgain[lang]}
        </button>
        <button
          type="button"
          onClick={onBack}
          className={`flex items-center justify-center gap-2 rounded-2xl bg-card p-4 text-lg font-bold text-card-foreground shadow-sm ring-1 ring-border/60 transition active:scale-95 ${FOCUS_RING}`}
        >
          <ArrowLeft className="size-6" />
          {UI.backButton[lang]}
        </button>
      </div>
    </motion.div>
  )
}
