'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, Loader2 } from 'lucide-react'

import type { ScreenProps } from '@/components/app-shell'
import type { Lang } from '@/lib/data'

import { FEED_OPTIONS, FEED_TEXT } from '@/lib/data'
import { api } from '@/lib/api'

export function FeedScreen({ lang, back }: ScreenProps) {
  const [animal, setAnimal] = useState(
    FEED_OPTIONS.animals[0].value
  )

  const [age, setAge] = useState(
    FEED_OPTIONS.ages[0].value
  )

  const [purpose, setPurpose] = useState(
    FEED_OPTIONS.purposes[0].value
  )

  const [customText, setCustomText] = useState('')

  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (loading) return

    setLoading(true)
    setError(null)
    setAnswer('')

    const season = new Date().toLocaleString('en-IN', {
      month: 'long',
    })

    const prompt = `
Animal: ${animal}

Age: ${age}

Purpose: ${purpose}

Farmer Observation:
${customText.trim() || 'None'}

Season:
${season}

Country:
India

You are an expert livestock nutritionist.

Recommend the best feed according to:
- animal
- age
- purpose
- season
- farmer observation

If the farmer mentions problems like low milk,
weakness, pregnancy, poor appetite or weight loss,
change the feed recommendation accordingly.

Recommend locally available Indian feed.

Mention exact quantities whenever possible.
`

    try {
      const res = await api.getFeedRecommendation(
        prompt,
        lang
      )

      const cleanAnswer = res.reply
  .replace(/\\+/g, '')
  .trim()

      setAnswer(cleanAnswer)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-full flex-col bg-background">
      {/* ================= HEADER ================= */}

      <div className="flex items-center gap-3 border-b border-border/60 bg-background px-4 py-3">
        <button
          type="button"
          onClick={back}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition-all hover:bg-secondary/80 active:scale-95"
          aria-label={
            lang === 'en'
              ? 'Go back'
              : lang === 'hi'
              ? 'वापस जाएं'
              : 'मागे जा'
          }
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-lg font-semibold text-foreground">
          {FEED_TEXT.title[lang]}
        </h1>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="flex-1 overflow-y-auto px-1 pb-6">
        {/* ================= FORM CARD ================= */}

        <div className="mt-3 rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60">
          <div className="flex flex-col gap-4">

            {/* Animal */}

            <SelectField
              label={FEED_TEXT.animal[lang]}
              value={animal}
              options={FEED_OPTIONS.animals}
              lang={lang}
              onChange={setAnimal}
            />

            {/* Age */}

            <SelectField
              label={FEED_TEXT.age[lang]}
              value={age}
              options={FEED_OPTIONS.ages}
              lang={lang}
              onChange={setAge}
            />

            {/* Purpose */}

            <SelectField
              label={FEED_TEXT.purpose[lang]}
              value={purpose}
              options={FEED_OPTIONS.purposes}
              lang={lang}
              onChange={setPurpose}
            />

            {/* Farmer Observation */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground">
                {lang === 'en'
                  ? 'Farmer Observation (Optional)'
                  : lang === 'hi'
                  ? 'किसान की जानकारी (वैकल्पिक)'
                  : 'शेतकऱ्याची माहिती (ऐच्छिक)'}
              </label>

              <textarea
                rows={3}
                value={customText}
                onChange={(e) =>
                  setCustomText(e.target.value)
                }
                className="w-full resize-none rounded-2xl bg-secondary px-4 py-3 text-sm font-medium text-foreground outline-none ring-1 ring-border/60 focus:ring-2 focus:ring-blue-600"
                placeholder={
                  lang === 'en'
                    ? 'Example: My cow gives only 5 litres milk. She looks weak.'
                    : lang === 'hi'
                    ? 'उदाहरण: मेरी गाय कम दूध देती है और कमजोर है।'
                    : 'उदा. माझी गाय कमी दूध देते आणि अशक्त दिसते.'
                }
              />
            </div>

            {/* Get Recommendation Button */}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading && (
                <Loader2 className="size-5 animate-spin" />
              )}

              {FEED_TEXT.button[lang]}
            </button>
          </div>
        </div>

        {/* ================= RECOMMENDATION CARD ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-5 rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60"
        >
          {/* Recommendation Header */}

          <div className="flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-xl bg-amber-50 text-lg">
              🌾
            </span>

            <h3 className="text-base font-semibold text-foreground">
              {FEED_TEXT.recommendation[lang]}
            </h3>
          </div>

          {/* Recommendation Content */}

          <div className="mt-5">
            {/* Loading */}

            {loading && (
              <div className="flex flex-col items-center justify-center gap-3 py-8">
                <Loader2 className="size-7 animate-spin text-blue-600" />

                <p className="text-sm text-muted-foreground">
                  {FEED_TEXT.thinking[lang]}
                </p>
              </div>
            )}

            {/* Error */}

            {!loading && error && (
              <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Answer */}

            {!loading && !error && answer && (
              <div className="whitespace-pre-wrap text-sm leading-7 text-foreground">
                {answer}
              </div>
            )}

            {/* Empty State */}

            {!loading && !error && !answer && (
              <p className="py-5 text-center text-sm text-muted-foreground">
                {lang === 'en'
                  ? 'Select the details and get your personalized feed recommendation.'
                  : lang === 'hi'
                  ? 'जानकारी चुनें और अपनी व्यक्तिगत चारा सिफारिश प्राप्त करें।'
                  : 'माहिती निवडा आणि तुमची वैयक्तिक चारा शिफारस मिळवा.'}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/* =========================================================
   SELECT FIELD
========================================================= */

type SelectFieldProps = {
  label: string
  value: string
  options: {
    value: string
    label: {
      mr: string
      hi: string
      en: string
    }
  }[]
  lang: Lang
  onChange: (value: string) => void
}

function SelectField({
  label,
  value,
  options,
  lang,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="w-full appearance-none rounded-2xl bg-secondary px-4 py-3 pr-10 text-sm font-medium text-foreground outline-none ring-1 ring-border/60 focus:ring-2 focus:ring-blue-600"
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
            >
              {opt.label[lang]}
            </option>
          ))}
        </select>

        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={18}
        />
      </div>
    </div>
  )
}