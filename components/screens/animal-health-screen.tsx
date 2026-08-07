'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  Leaf,
  ListChecks,
  Loader2,
  Mic,
  Pause,
  Phone,
  Play,
  Square,
  Stethoscope,
  Volume2,
} from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import type { EmergencyLevel, HealthResult, Lang, LangText, SubjectType } from '@/lib/data'
import {
  analyzeSymptoms,
  COMMON_SYMPTOMS,
  detectSubjectFromText,
  HEALTH_SUBJECTS,
} from '@/lib/data'
import { UI } from '@/lib/assistant'
import { ScreenHeader } from '@/components/screen-header'
import { VoiceSearchModal } from '@/components/VoiceSearchModal'
import { useTts } from '@/hooks/use-tts'

const LEVEL_STYLES: Record<EmergencyLevel, { bar: string; label: Record<Lang, string> }> = {
  low: {
    bar: 'bg-emerald-500',
    label: { mr: 'कमी', hi: 'कम', en: 'Low' },
  },
  medium: {
    bar: 'bg-amber-500',
    label: { mr: 'मध्यम', hi: 'मध्यम', en: 'Medium' },
  },
  high: {
    bar: 'bg-rose-600',
    label: { mr: 'गंभीर', hi: 'गंभीर', en: 'High' },
  },
}

const CALL_LINK: Record<SubjectType['scope'], string> = {
  human: 'tel:108',
  animal: 'tel:18002330418',
}

function buildResultText(result: HealthResult, subject: SubjectType, lang: Lang): string {
  const dietLabel = subject.scope === 'human' ? UI.recommendedDiet[lang] : UI.recommendedFeed[lang]
  const parts = [
    `${UI.possibleCauses[lang]}: ${result.causes.map((c) => c[lang]).join('. ')}`,
    `${UI.precautions[lang]}: ${result.precautions.map((c) => c[lang]).join('. ')}`,
    `${dietLabel}: ${result.feed.map((c) => c[lang]).join('. ')}`,
    `${UI.emergencyLevel[lang]}: ${LEVEL_STYLES[result.level].label[lang]}`,
  ]
  if (result.level === 'high') {
    parts.push(
      subject.scope === 'human'
        ? UI.contactDoctor[lang].replace('🚨 ', '')
        : UI.contactVet[lang].replace('🚨 ', ''),
    )
  }
  return parts.join('. ')
}

export function AnimalHealthScreen({ lang, back }: ScreenProps) {
  const [subject, setSubject] = useState<SubjectType>(HEALTH_SUBJECTS[0])
  const [symptoms, setSymptoms] = useState('')
  const [result, setResult] = useState<HealthResult | null>(null)
  const [voiceOpen, setVoiceOpen] = useState(false)
  const { speak, stop } = useTts()

  const availableSymptoms = COMMON_SYMPTOMS.filter(
    (s) => !s.scope || s.scope === subject.scope,
  )

  const toggleSymptom = (label: string) => {
    setSymptoms((prev) => {
      const parts = prev.split(',').map((p) => p.trim()).filter(Boolean)
      if (parts.includes(label)) return parts.filter((p) => p !== label).join(', ')
      return [...parts, label].join(', ')
    })
  }

  const runCheck = (s: SubjectType, text: string) => {
    if (!text.trim()) return
    const r = analyzeSymptoms(s.key, text)
    setResult(r)
    speak(buildResultText(r, s, lang), lang, { key: 'health-result' })
  }

  const handleVoice = (text: string) => {
    const detected = detectSubjectFromText(text)
    const next = detected
      ? HEALTH_SUBJECTS.find((x) => x.key === detected) ?? subject
      : subject
    setSubject(next)
    setSymptoms(text)
    runCheck(next, text)
  }

  const handleMic = () => {
    stop()
    setVoiceOpen(true)
  }

  const selected = symptoms.split(',').map((p) => p.trim())

  return (
    <div className="flex flex-1 flex-col bg-background">
      <ScreenHeader screen="health" lang={lang} onBack={back} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-5">
        {/* Input card */}
        <div className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60">
          <label className="text-sm font-semibold text-foreground">{UI.forWhom[lang]}</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {HEALTH_SUBJECTS.map((s) => (
              <button
                key={s.key}
                onClick={() => setSubject(s)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${
                  subject.key === s.key
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'bg-secondary text-secondary-foreground'
                }`}
              >
                {s.labels[lang]}
              </button>
            ))}
          </div>

          <label className="mt-5 block text-sm font-semibold text-foreground">
            {UI.symptoms[lang]}
          </label>
          <div className="relative mt-2">
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              rows={2}
              placeholder={UI.symptomsPlaceholder[lang]}
              className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 pr-12 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="button"
              onClick={handleMic}
              aria-label={UI.speakIssue[lang]}
              title={UI.speakIssue[lang]}
              className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform active:scale-90"
            >
              <Mic className="size-4" />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {availableSymptoms.map((s) => {
              const label = s.labels[lang]
              return (
                <button
                  key={s.key}
                  onClick={() => toggleSymptom(label)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all active:scale-95 ${
                    selected.includes(label)
                      ? 'bg-primary/15 text-primary ring-1 ring-primary/30'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <button
            onClick={() => runCheck(subject, symptoms)}
            disabled={!symptoms.trim()}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all active:scale-[0.98] disabled:opacity-50"
          >
            <Stethoscope className="size-5" />
            {UI.checkHealth[lang]}
          </button>
        </div>

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex flex-col gap-3"
          >
            <div className="flex items-center justify-center rounded-3xl bg-card px-4 py-3 shadow-sm ring-1 ring-border/60">
              <ListenButton text={buildResultText(result, subject, lang)} lang={lang} />
            </div>

            {result.level === 'high' && (
              <div className="flex items-center gap-3 rounded-3xl bg-destructive px-5 py-4 text-destructive-foreground shadow-md">
                <AlertTriangle className="size-6 shrink-0" />
                <span className="text-sm font-semibold text-balance">
                  {subject.scope === 'human' ? UI.contactDoctor[lang] : UI.contactVet[lang]}
                </span>
              </div>
            )}

            <ResultCard
              icon={<ListChecks className="size-5" />}
              title={UI.possibleCauses[lang]}
              items={result.causes}
              lang={lang}
              tint="bg-indigo-50 text-indigo-700"
            />
            <ResultCard
              icon={<AlertTriangle className="size-5" />}
              title={UI.precautions[lang]}
              items={result.precautions}
              lang={lang}
              tint="bg-amber-50 text-amber-700"
            />
            <ResultCard
              icon={<Leaf className="size-5" />}
              title={subject.scope === 'human' ? UI.recommendedDiet[lang] : UI.recommendedFeed[lang]}
              items={result.feed}
              lang={lang}
              tint="bg-emerald-50 text-emerald-700"
            />

            {/* Emergency level meter */}
            <div className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">
                  {UI.emergencyLevel[lang]}
                </span>
                <span className="text-sm font-bold text-foreground">
                  {LEVEL_STYLES[result.level].label[lang]}
                </span>
              </div>
              <div className="mt-3 flex gap-1.5">
                {(['low', 'medium', 'high'] as EmergencyLevel[]).map((lvl, i) => {
                  const active =
                    (result.level === 'low' && i === 0) ||
                    (result.level === 'medium' && i <= 1) ||
                    result.level === 'high'
                  return (
                    <div
                      key={lvl}
                      className={`h-2.5 flex-1 rounded-full ${
                        active ? LEVEL_STYLES[result.level].bar : 'bg-secondary'
                      }`}
                    />
                  )
                })}
              </div>
            </div>

            {result.level !== 'low' && (
              <a
                href={CALL_LINK[subject.scope]}
                className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-md active:scale-[0.98]"
              >
                <Phone className="size-5" />
                {subject.scope === 'human'
                  ? UI.contactDoctor[lang].replace('🚨 ', '')
                  : UI.contactVet[lang].replace('🚨 ', '')}
              </a>
            )}
          </motion.div>
        )}

        {/* Disclaimer */}
        <p className="mt-5 rounded-2xl bg-secondary/60 px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground text-pretty">
          {UI.disclaimer[lang]}
        </p>
      </div>

      {/* Voice input for the query */}
      <VoiceSearchModal
        open={voiceOpen}
        lang={lang}
        onClose={() => setVoiceOpen(false)}
        onResult={handleVoice}
      />
    </div>
  )
}

/**
 * Read the full health answer aloud in the selected language, with
 * pause/resume/stop controls. Replay cancels any other speech first.
 */
function ListenButton({ text, lang }: { text: string; lang: Lang }) {
  const { supported, paused, loading, isActive, speak, pause, resume, stop } = useTts()

  if (!supported) return null

  const key = 'health-result'
  const active = isActive(key)
  const playing = active && !paused

  if (active && loading) {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <Loader2 className="size-4 animate-spin" />
        {UI.readingAnswer[lang]}
      </span>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => (playing ? pause() : active ? resume() : speak(text, lang, { key }))}
        className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md active:scale-95"
      >
        {active ? (
          playing ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4" />
          )
        ) : (
          <Volume2 className="size-4" />
        )}
        {active ? (playing ? UI.pause[lang] : UI.resume[lang]) : UI.hearAnswer[lang]}
      </button>
      {active && (
        <button
          type="button"
          onClick={stop}
          aria-label={UI.stop[lang]}
          className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground active:scale-95"
        >
          <Square className="size-4" />
        </button>
      )}
    </div>
  )
}

function ResultCard({
  icon,
  title,
  items,
  lang,
  tint,
}: {
  icon: React.ReactNode
  title: string
  items: LangText[]
  lang: Lang
  tint: string
}) {
  return (
    <div className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60">
      <div className="flex items-center gap-2">
        <span className={`flex size-9 items-center justify-center rounded-xl ${tint}`}>{icon}</span>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-card-foreground">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
            {it[lang]}
          </li>
        ))}
      </ul>
    </div>
  )
}
