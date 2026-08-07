'use client'

import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, RefreshCw, Sparkles, Volume2, VolumeX } from 'lucide-react'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'
import { useSpeech } from '@/hooks/use-speech'
import type { CropAnalysis } from '@/lib/api'

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'

/** Drop empty / placeholder values that would look like raw API output. */
function clean(value: string | null | undefined): string | null {
  if (!value) return null
  const t = value.trim()
  if (!t || t === '—') return null
  if (/^(not needed|no need|no disease|no problem|no issue|nothing)/i.test(t)) return null
  if (/आवश्यक नाही|ज़रूरी नहीं|जरूरत नहीं|काही नाही|कोणतीही/i.test(t)) return null
  return t
}

/** Phrases that mean "everything is fine" -> show the healthy message. */
const HEALTHY_RE =
  /^(no (problem|disease|issue)|nothing (wrong|found)|healthy|crop is healthy|all (good|fine)|निरोगी|स्वस्थ|पीक निरोगी|फसल स्वस्थ|कोणताही रोग नाही|कोई रोग नहीं|बिल्कुल ठीक|सब ठीक)/i

/** Phrases that mean the AI could not identify anything -> ask for a better photo. */
const UNKNOWN_RE =
  /^—$|^analysis unavailable|^विश्लेषण सध्या उपलब्ध|^विश्लेषण अभी उपलब्ध|unable to (identify|determine|tell)|cannot (identify|determine|tell)|can'?t (identify|determine|tell)|not (clear|sure|identified|recognizable)|unclear/i

type ResponseKind = 'healthy' | 'unclear' | 'normal'

function getResponseKind(result: CropAnalysis): ResponseKind {
  const disease = clean(result.disease)
  const summary = clean(result.summary)
  if (disease && HEALTHY_RE.test(disease)) return 'healthy'
  if ((!disease || UNKNOWN_RE.test(disease)) && !summary) return 'unclear'
  if (disease && UNKNOWN_RE.test(disease) && summary && UNKNOWN_RE.test(summary)) return 'unclear'
  return 'normal'
}

/** Build the single spoken-style paragraph shown on screen and read aloud. */
function buildResponseParagraph(result: CropAnalysis, lang: Lang): string {
  const kind = getResponseKind(result)
  if (kind === 'healthy') return UI.healthyResponse[lang]
  if (kind === 'unclear') return UI.unclearImageResponse[lang]

  const summary = clean(result.summary)
  if (summary) return summary

  const parts = [clean(result.cause), clean(result.recommended_medicine), clean(result.prevention)]
    .filter((v): v is string => Boolean(v))
  if (parts.length) return `${parts.join('. ')}.`

  return UI.cropAnalysisFailed[lang]
}

/**
 * Voice-first answer screen. The parent page renders the uploaded photo; this
 * component shows ONE natural-language paragraph (like a village expert
 * speaking), reads it aloud automatically in the selected language, and gives
 * three large actions: replay the voice, analyze again, and go back. No cards,
 * no confidence, no severity - nothing that looks like a technical report.
 */
export function AnalysisResult({
  result,
  lang,
  onAnalyzeAgain,
  onBack,
}: {
  result: CropAnalysis
  lang: Lang
  onAnalyzeAgain: () => void
  onBack: () => void
}) {
  const speech = useSpeech(lang)
  const paragraph = useMemo(() => buildResponseParagraph(result, lang), [result, lang])

  /* Voice-first: read the answer aloud automatically as soon as it appears. */
  useEffect(() => {
    const timer = window.setTimeout(() => speech.speak(paragraph), 450)
    return () => window.clearTimeout(timer)
  }, [speech.speak, paragraph])

  const toggleReadAloud = () => {
    if (speech.isSpeaking) speech.stopSpeaking()
    else speech.speak(paragraph)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex flex-col"
    >
      {/* One AI response card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="rounded-3xl bg-card p-6 shadow-md ring-1 ring-border/60"
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
          className="mt-4 text-pretty text-xl font-medium leading-relaxed text-foreground"
        >
          {paragraph}
        </p>
      </motion.div>

      {/* Replay voice */}
      <motion.button
        type="button"
        onClick={toggleReadAloud}
        aria-pressed={speech.isSpeaking}
        whileTap={{ scale: 0.98 }}
        className={`mt-5 flex w-full items-center justify-center gap-3 rounded-2xl p-5 text-xl font-bold shadow-lg transition-colors ${FOCUS_RING} ${
          speech.isSpeaking ? 'bg-rose-600 text-white' : 'bg-primary text-primary-foreground'
        }`}
      >
        {speech.isSpeaking ? <VolumeX className="size-7" /> : <Volume2 className="size-7" />}
        {speech.isSpeaking ? UI.stop[lang] : UI.replayVoice[lang]}
      </motion.button>

      {/* Analyze again + Back */}
      <div className="mt-3 grid grid-cols-2 gap-3">
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
