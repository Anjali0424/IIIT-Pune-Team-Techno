'use client'

import { useEffect } from 'react'
import { Camera, Home, Mic, Volume2, VolumeX } from 'lucide-react'
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

function severityTone(value: string): { bg: string; text: string; ring: string } {
  const v = value.toLowerCase()
  if (/high|गंभीर|जास्त|ज्यादा/.test(v))
    return { bg: 'bg-rose-100', text: 'text-rose-700', ring: 'ring-rose-200' }
  if (/medium|मध्यम/.test(v))
    return { bg: 'bg-amber-100', text: 'text-amber-700', ring: 'ring-amber-200' }
  if (/low|कमी|हल्का/.test(v))
    return { bg: 'bg-emerald-100', text: 'text-emerald-700', ring: 'ring-emerald-200' }
  return { bg: 'bg-secondary', text: 'text-muted-foreground', ring: 'ring-border' }
}

function InfoCard({
  emoji,
  label,
  children,
}: {
  emoji: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border/60">
      <p className="flex items-center gap-2.5 text-lg font-bold text-foreground">
        <span className="text-2xl" aria-hidden>
          {emoji}
        </span>
        {label}
      </p>
      <div className="mt-2.5">{children}</div>
    </div>
  )
}

/**
 * Minimal farmer-friendly answer screen. Four large cards - disease/problem,
 * severity, recommended solution and prevention - readable in seconds. If the
 * AI is unsure of the exact problem the card is labelled "Possible Issue".
 * Big listen button reads the answer aloud, plus simple navigation actions.
 */
export function AnalysisResult({
  result,
  lang,
  onNewPhoto,
  onNewQuestion,
  onHome,
}: {
  result: CropAnalysis
  lang: Lang
  onNewPhoto: () => void
  onNewQuestion: () => void
  onHome: () => void
}) {
  const speech = useSpeech(lang)

  const rawDisease = result.disease?.trim()
  const diseaseValue = rawDisease && rawDisease !== '—' ? rawDisease : null
  const diseaseKnown =
    diseaseValue !== null &&
    !/^(no (problem|disease|issue)|nothing|सर्व ठीक|कोणताही प्रश्न नाही)/i.test(diseaseValue)
  const diseaseLabel = diseaseKnown ? UI.diseaseLabel[lang] : UI.possibleIssue[lang]
  const diseaseText = diseaseValue ?? clean(result.summary) ?? clean(result.cause) ?? '—'

  const solution = clean(result.recommended_medicine)
  const prevention = clean(result.prevention)
  const severity = result.severity?.trim() || '—'
  const tone = severityTone(severity)

  const spokenText =
    result.summary?.trim() ||
    [diseaseText, solution, prevention].filter(Boolean).join('. ')

  /* Read the answer aloud automatically once the result is shown. */
  useEffect(() => {
    const timer = window.setTimeout(() => speech.speak(spokenText), 500)
    return () => window.clearTimeout(timer)
  }, [speech.speak, spokenText])

  const toggleReadAloud = () => {
    if (speech.isSpeaking) speech.stopSpeaking()
    else speech.speak(spokenText)
  }

  return (
    <div className="flex flex-col">
      {/* Disease / problem */}
      <InfoCard emoji="🦠" label={diseaseLabel}>
        <p className="text-xl font-semibold leading-relaxed text-foreground">{diseaseText}</p>
      </InfoCard>

      {/* Severity */}
      <div className="mt-3">
        <InfoCard emoji="⚠" label={UI.severityLabel[lang]}>
          <span
            className={`inline-flex items-center rounded-full px-5 py-2 text-lg font-bold ring-1 ${tone.bg} ${tone.text} ${tone.ring}`}
          >
            {severity}
          </span>
        </InfoCard>
      </div>

      {/* Recommended solution */}
      <div className="mt-3">
        <InfoCard emoji="💊" label={UI.recommendedSolution[lang]}>
          <p className="text-lg font-semibold leading-relaxed text-foreground">
            {solution ?? '—'}
          </p>
        </InfoCard>
      </div>

      {/* Prevention */}
      <div className="mt-3">
        <InfoCard emoji="🌱" label={UI.prevention[lang]}>
          <p className="text-lg font-semibold leading-relaxed text-foreground">
            {prevention ?? '—'}
          </p>
        </InfoCard>
      </div>

      {/* Listen */}
      <button
        type="button"
        onClick={toggleReadAloud}
        aria-label={speech.isSpeaking ? UI.stopListening[lang] : UI.listenAnswer[lang]}
        className={`mt-5 flex w-full items-center justify-center gap-3 rounded-2xl p-5 text-xl font-bold shadow-md active:scale-[0.98] ${FOCUS_RING} ${
          speech.isSpeaking ? 'bg-rose-600 text-white' : 'bg-primary text-primary-foreground'
        }`}
      >
        {speech.isSpeaking ? <VolumeX className="size-7" /> : <Volume2 className="size-7" />}
        {speech.isSpeaking ? UI.stopListening[lang] : UI.listenAnswer[lang]}
      </button>

      {/* Navigation */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        <button
          type="button"
          onClick={onNewPhoto}
          className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-card p-4 text-sm font-bold text-card-foreground shadow-sm ring-1 ring-border/60 active:scale-95 ${FOCUS_RING}`}
        >
          <Camera className="size-6 text-primary" />
          {UI.newPhoto[lang]}
        </button>
        <button
          type="button"
          onClick={onNewQuestion}
          className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-card p-4 text-sm font-bold text-card-foreground shadow-sm ring-1 ring-border/60 active:scale-95 ${FOCUS_RING}`}
        >
          <Mic className="size-6 text-primary" />
          {UI.newDiagnosis[lang]}
        </button>
        <button
          type="button"
          onClick={onHome}
          className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-card p-4 text-sm font-bold text-card-foreground shadow-sm ring-1 ring-border/60 active:scale-95 ${FOCUS_RING}`}
        >
          <Home className="size-6 text-primary" />
          {UI.goHome[lang]}
        </button>
      </div>
    </div>
  )
}
