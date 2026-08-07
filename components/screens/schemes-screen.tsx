'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  FileText,
  Gift,
  Search,
  UserCheck,
  Volume2,
  VolumeX,
} from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import type { Lang } from '@/lib/data'
import { api, type Scheme } from '@/lib/api'
import { UI } from '@/lib/assistant'
import { buildSchemeSpeechParagraph } from '@/lib/scheme-speech'
import { useTextToSpeech } from '@/hooks/use-text-to-speech'
import { ScreenHeader } from '@/components/screen-header'
import { VoiceButton } from '@/components/VoiceButton'
import { VoiceSearchModal } from '@/components/VoiceSearchModal'
import { EmptyState, ErrorState, LoadingState } from '@/components/ui/data-states'

const CATEGORIES = ['All', 'Dairy', 'Livestock', 'Agriculture', 'Loans', 'Insurance', 'Women', 'Youth', 'Education']

const CATEGORY_LABELS: Record<string, Record<Lang, string>> = {
  All: UI.all,
  Dairy: { mr: 'दुग्ध व्यवसाय', hi: 'डेयरी', en: 'Dairy' },
  Livestock: { mr: 'पशुधन', hi: 'पशुधन', en: 'Livestock' },
  Agriculture: { mr: 'शेती', hi: 'कृषि', en: 'Agriculture' },
  Loans: { mr: 'कर्ज', hi: 'ऋण', en: 'Loans' },
  Insurance: { mr: 'विमा', hi: 'बीमा', en: 'Insurance' },
  Women: { mr: 'महिला', hi: 'महिला', en: 'Women' },
  Youth: { mr: 'युवा', hi: 'युवा', en: 'Youth' },
  Education: { mr: 'शिक्षण', hi: 'शिक्षा', en: 'Education' },
}

function isValidOfficialUrl(url: string): boolean {
  if (!url) return false
  try {
    const u = new URL(url)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

export function SchemesScreen({ lang, back }: ScreenProps) {
  const [searchInput, setSearchInput] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [schemes, setSchemes] = useState<Scheme[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadKey, setReloadKey] = useState(0)
  const [applyTarget, setApplyTarget] = useState<Scheme | null>(null)
  const [unavailableId, setUnavailableId] = useState<string | null>(null)
  const [voiceOpen, setVoiceOpen] = useState(false)
  const [speakingId, setSpeakingId] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  const { speak, stop, isSpeaking, isSupported } = useTextToSpeech(lang)
  const speakTimerRef = useRef<number | null>(null)

  // Debounce typing so we don't fire a request per keystroke.
  useEffect(() => {
    const timer = window.setTimeout(() => setSearch(searchInput.trim()), 400)
    return () => window.clearTimeout(timer)
  }, [searchInput])

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)
    api
      .getSchemes({
        search: search || undefined,
        category: category === 'All' ? undefined : category,
      })
      .then((data) => {
        if (active) setSchemes(data)
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : String(err))
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [search, category, reloadKey])

  // Stop playback when language changes mid-speech.
  useEffect(() => {
    if (speakTimerRef.current) window.clearTimeout(speakTimerRef.current)
    stop()
    setSpeakingId(null)
  }, [lang, stop])

  useEffect(() => {
    return () => {
      if (speakTimerRef.current) window.clearTimeout(speakTimerRef.current)
    }
  }, [])

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(null), 3200)
    return () => window.clearTimeout(timer)
  }, [toast])

  const handleApply = useCallback((s: Scheme) => {
    if (!isValidOfficialUrl(s.official_url)) {
      setApplyTarget(null)
      setUnavailableId(s.id)
      return
    }
    setUnavailableId(null)
    setApplyTarget(s)
  }, [])

  const confirmApply = useCallback(() => {
    if (!applyTarget) return
    window.open(applyTarget.official_url, '_blank', 'noopener,noreferrer')
    setApplyTarget(null)
  }, [applyTarget])

  const handleSpeakScheme = useCallback(
    (scheme: Scheme) => {
      if (!isSupported) {
        setToast(UI.speechUnsupported[lang])
        return
      }

      if (speakTimerRef.current) {
        window.clearTimeout(speakTimerRef.current)
        speakTimerRef.current = null
      }

      // Same card tapped again → stop.
      if (speakingId === scheme.id && isSpeaking) {
        stop()
        setSpeakingId(null)
        return
      }

      const paragraph = buildSchemeSpeechParagraph(scheme, lang)
      if (!paragraph) return

      // Stop any other scheme before starting this one.
      // Tiny delay avoids a Chromium bug where cancel() can kill the next utterance.
      stop()
      setSpeakingId(scheme.id)
      speakTimerRef.current = window.setTimeout(() => {
        speakTimerRef.current = null
        speak(paragraph, lang, {
          onEnd: () => {
            setSpeakingId((current) => (current === scheme.id ? null : current))
          },
          onError: () => {
            setSpeakingId((current) => (current === scheme.id ? null : current))
          },
        })
      }, 40)
    },
    [isSpeaking, isSupported, lang, speak, speakingId, stop],
  )

  return (
    <div className="flex flex-1 flex-col bg-background">
      <ScreenHeader screen="schemes" lang={lang} onBack={back} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-5">
        {/* Search bar */}
        <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2.5 shadow-sm ring-1 ring-border/60">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={UI.searchSchemes[lang]}
            className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            type="search"
          />
          <VoiceButton lang={lang} onPress={() => setVoiceOpen(true)} />
        </div>

        {/* Category filter */}
        <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${
                category === c
                  ? 'bg-primary text-primary-foreground shadow'
                  : 'bg-card text-card-foreground ring-1 ring-border/60'
              }`}
            >
              {CATEGORY_LABELS[c]?.[lang] ?? c}
            </button>
          ))}
        </div>

        {/* Body */}
        {loading ? (
          <LoadingState label={UI.loading[lang]} />
        ) : error ? (
          <ErrorState lang={lang} message={error} onRetry={() => setReloadKey((k) => k + 1)} />
        ) : schemes.length === 0 ? (
          <EmptyState label={UI.noSchemesFound[lang]} />
        ) : (
          <div className="mt-5 flex flex-col gap-4">
            {schemes.map((s, i) => {
              const isActive = speakingId === s.id && isSpeaking
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`overflow-hidden rounded-3xl bg-card shadow-sm ring-1 transition-[box-shadow,ring-color] ${
                    isActive
                      ? 'ring-2 ring-primary shadow-md'
                      : 'ring-border/60'
                  }`}
                >
                  <div className="flex items-start gap-3 bg-primary/10 px-5 py-4">
                    <h3 className="min-w-0 flex-1 text-base font-bold text-foreground text-balance">
                      {s.name[lang]}
                    </h3>
                    <SchemeSpeakButton
                      lang={lang}
                      active={isActive}
                      onClick={() => handleSpeakScheme(s)}
                    />
                  </div>
                  <div className="flex flex-col gap-4 px-5 py-4">
                    <Row
                      icon={<Gift className="size-4" />}
                      label={UI.benefits[lang]}
                      value={s.benefits[lang]}
                      tint="bg-emerald-50 text-emerald-700"
                    />
                    <Row
                      icon={<UserCheck className="size-4" />}
                      label={UI.eligibility[lang]}
                      value={s.eligibility[lang]}
                      tint="bg-sky-50 text-sky-700"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                          <FileText className="size-4" />
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          {UI.documents[lang]}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {s.required_documents.map((d) => (
                          <span
                            key={d.en}
                            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {d[lang]}
                          </span>
                        ))}
                      </div>
                    </div>
                    {unavailableId === s.id ? (
                      <div className="flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-medium text-muted-foreground">
                        <AlertTriangle className="size-4 shrink-0" />
                        {UI.officialUnavailable[lang]}
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleApply(s)}
                        className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md active:scale-[0.98]"
                      >
                        {UI.apply[lang]}
                        <ArrowRight className="size-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>

      {/* Speech-unavailable toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
            role="status"
            aria-live="polite"
          >
            <div className="rounded-2xl bg-foreground px-4 py-3 text-sm font-medium text-background shadow-lg">
              {toast}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Apply confirmation dialog */}
      {applyTarget && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
          onClick={() => setApplyTarget(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm overflow-hidden rounded-3xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 pb-4 pt-5">
              <p className="text-sm font-semibold leading-relaxed text-foreground text-balance">
                {UI.redirectConfirm[lang]}
              </p>
            </div>
            <div className="flex gap-3 px-5 pb-5">
              <button
                type="button"
                onClick={() => setApplyTarget(null)}
                className="flex flex-1 items-center justify-center rounded-2xl bg-secondary py-3 text-sm font-semibold text-secondary-foreground active:scale-[0.98]"
              >
                {UI.cancel[lang]}
              </button>
              <button
                type="button"
                onClick={confirmApply}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md active:scale-[0.98]"
              >
                {UI.continue[lang]}
                <ArrowRight className="size-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Voice search */}
      <VoiceSearchModal
        open={voiceOpen}
        lang={lang}
        onClose={() => setVoiceOpen(false)}
        onInterim={setSearchInput}
        onResult={(text) => {
          setSearchInput(text)
          setSearch(text.trim())
        }}
      />
    </div>
  )
}

function SchemeSpeakButton({
  lang,
  active,
  onClick,
}: {
  lang: Lang
  active: boolean
  onClick: () => void
}) {
  const label = active ? UI.stop[lang] : UI.listen[lang]

  return (
    <motion.button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      aria-pressed={active}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.9 }}
      className={`relative flex size-10 shrink-0 items-center justify-center rounded-full shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        active
          ? 'bg-primary text-primary-foreground'
          : 'bg-primary/15 text-primary hover:bg-primary/25'
      }`}
    >
      {active ? (
        <motion.span
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className="flex"
        >
          <VolumeX className="size-5" />
        </motion.span>
      ) : (
        <Volume2 className="size-5" />
      )}
    </motion.button>
  )
}

function Row({
  icon,
  label,
  value,
  tint,
}: {
  icon: React.ReactNode
  label: string
  value: string
  tint: string
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className={`flex size-8 items-center justify-center rounded-lg ${tint}`}>{icon}</span>
        <span className="text-sm font-semibold text-foreground">{label}</span>
      </div>
      <p className="mt-1.5 pl-10 text-sm leading-relaxed text-card-foreground/80 text-pretty">
        {value}
      </p>
    </div>
  )
}
