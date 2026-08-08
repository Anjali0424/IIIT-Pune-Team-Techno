'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mic, Phone, Send, Trash2 } from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import { ApiError, api, type IssueStatus, type VillageIssue } from '@/lib/api'
import { UI } from '@/lib/assistant'
import { ScreenHeader } from '@/components/screen-header'
import { useVoiceSearch, type VoiceSearchError } from '@/hooks/useVoiceSearch'
import { EmptyState, ErrorState, LoadingState } from '@/components/ui/data-states'
import { formatDate } from '@/lib/utils'
import type { Lang } from '@/lib/data'

type Role = 'farmer' | 'head'

type StatusFilter = 'all' | IssueStatus

const STATUS_FILTERS: StatusFilter[] = ['all', 'pending', 'in_progress', 'resolved']

const STATUS_LABELS: Record<IssueStatus, keyof typeof UI> = {
  pending: 'statusPending',
  in_progress: 'statusInProgress',
  resolved: 'statusResolved',
}

const STATUS_STYLES: Record<IssueStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  in_progress: 'bg-sky-100 text-sky-700',
  resolved: 'bg-emerald-100 text-emerald-700',
}

const EMPTY_FORM = { name: '', phone: '', village: '', issue: '' }

function voiceErrorMessage(code: VoiceSearchError): Record<Lang, string> {
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

export function VillageHeadScreen({ lang, back }: ScreenProps) {
  const [role, setRole] = useState<Role>('farmer')

  // Farmer mode state
  const [form, setForm] = useState(EMPTY_FORM)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  // Head mode state
  const [filter, setFilter] = useState<StatusFilter>('all')
  const [issues, setIssues] = useState<VillageIssue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadKey, setReloadKey] = useState(0)

  const { listening, interim, error: voiceError, start, stop, resetError } =
    useVoiceSearch(lang)

  useEffect(() => {
    if (role !== 'head') return
    let active = true
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    setError(null)
    api
      .getIssues({ status: filter === 'all' ? undefined : filter })
      .then((data) => {
        if (active) setIssues(data)
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
  }, [role, filter, reloadKey])

  const handleDictate = useCallback(() => {
    if (listening) {
      stop()
      return
    }
    resetError()
    start((text) =>
      setForm((f) => ({ ...f, issue: f.issue ? `${f.issue.trim()} ${text}` : text })),
    )
  }, [listening, start, stop, resetError])

  const setField = (field: keyof typeof EMPTY_FORM, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
    setFormError(null)
    resetError()
  }

  const submit = async () => {
    if (!form.name.trim() || !form.phone.trim() || !form.village.trim() || !form.issue.trim()) {
      setFormError(UI.fillAllFields[lang])
      return
    }
    setSending(true)
    setFormError(null)
    setSent(false)
    try {
      await api.createIssue({
        reporter_name: form.name.trim(),
        phone: form.phone.trim(),
        village: form.village.trim(),
        issue_text: form.issue.trim(),
      })
      setForm(EMPTY_FORM)
      setSent(true)
    } catch (err) {
      setFormError(
        err instanceof ApiError && err.status === 429
          ? UI.rateLimitExceeded[lang]
          : UI.sendFailed[lang],
      )
    } finally {
      setSending(false)
    }
  }

  const changeStatus = async (issue: VillageIssue, status: IssueStatus) => {
    try {
      await api.updateIssueStatus(issue.id, status)
      setReloadKey((k) => k + 1)
    } catch {
      setError(UI.sendFailed[lang])
    }
  }

  const removeIssue = async (issue: VillageIssue) => {
    if (!window.confirm(UI.confirmDeleteReport[lang])) return
    try {
      await api.deleteIssue(issue.id)
      setReloadKey((k) => k + 1)
    } catch {
      setError(UI.sendFailed[lang])
    }
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      <ScreenHeader screen="village" lang={lang} onBack={back} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-5">
        {/* Role toggle */}
        <div className="flex rounded-full bg-card p-1 shadow-sm ring-1 ring-border/60">
          {(
            [
              { id: 'farmer', label: UI.roleFarmer[lang] },
              { id: 'head', label: UI.roleHead[lang] },
            ] as { id: Role; label: string }[]
          ).map((r) => (
            <button
              key={r.id}
              onClick={() => setRole(r.id)}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-all active:scale-95 ${
                role === r.id
                  ? 'bg-primary text-primary-foreground shadow'
                  : 'text-muted-foreground'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {role === 'farmer' ? (
          <FarmerForm
            lang={lang}
            form={form}
            listening={listening}
            interim={interim}
            voiceError={voiceError}
            sending={sending}
            sent={sent}
            error={formError}
            onField={setField}
            onDictate={handleDictate}
            onStop={stop}
            onSubmit={submit}
            onResetError={resetError}
          />
        ) : (
          <div className="mt-5">
            {/* Status filter chips */}
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
              {STATUS_FILTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${
                    filter === s
                      ? 'bg-primary text-primary-foreground shadow'
                      : 'bg-card text-card-foreground ring-1 ring-border/60'
                  }`}
                >
                  {s === 'all' ? UI.all[lang] : UI[STATUS_LABELS[s]][lang]}
                </button>
              ))}
            </div>

            {/* Issue list */}
            {loading ? (
              <LoadingState label={UI.loading[lang]} />
            ) : error ? (
              <ErrorState
                lang={lang}
                message={error}
                onRetry={() => setReloadKey((k) => k + 1)}
              />
            ) : issues.length === 0 ? (
              <EmptyState label={UI.noReports[lang]} />
            ) : (
              <div className="mt-4 flex flex-col gap-3">
                {issues.map((issue, i) => (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold text-foreground">
                          {issue.reporter_name}
                          <span className="font-normal text-muted-foreground">
                            {' · '}
                            {issue.village}
                          </span>
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {UI.reportedBy[lang]}: {formatDate(issue.created_at?.slice(0, 10), lang)}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[issue.status]}`}
                      >
                        {UI[STATUS_LABELS[issue.status]][lang]}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-foreground text-pretty">{issue.issue_text}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <a
                        href={`tel:${issue.phone}`}
                        className="flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary active:scale-95"
                      >
                        <Phone className="size-3.5" />
                        {issue.phone}
                      </a>
                      {issue.status !== 'in_progress' && (
                        <button
                          onClick={() => void changeStatus(issue, 'in_progress')}
                          className="rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700 active:scale-95"
                        >
                          {UI.markInProgress[lang]}
                        </button>
                      )}
                      {issue.status !== 'resolved' && (
                        <button
                          onClick={() => void changeStatus(issue, 'resolved')}
                          className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 active:scale-95"
                        >
                          {UI.markResolved[lang]}
                        </button>
                      )}
                      <button
                        onClick={() => void removeIssue(issue)}
                        aria-label={UI.deleteReport[lang]}
                        className="ml-auto flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive active:scale-95"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function FarmerForm({
  lang,
  form,
  listening,
  interim,
  voiceError,
  sending,
  sent,
  error,
  onField,
  onDictate,
  onStop,
  onSubmit,
  onResetError,
}: {
  lang: Lang
  form: typeof EMPTY_FORM
  listening: boolean
  interim: string
  voiceError: VoiceSearchError | null
  sending: boolean
  sent: boolean
  error: string | null
  onField: (field: keyof typeof EMPTY_FORM, value: string) => void
  onDictate: () => void
  onStop: () => void
  onSubmit: () => void
  onResetError: () => void
}) {
  const issueValue = listening ? interim || form.issue : form.issue

  return (
    <div className="mt-5 flex flex-col gap-4">
      <Field
        label={UI.yourName[lang]}
        value={form.name}
        placeholder=""
        onChange={(v) => onField('name', v)}
      />
      <Field
        label={UI.yourPhone[lang]}
        value={form.phone}
        type="tel"
        placeholder=""
        onChange={(v) => onField('phone', v)}
      />
      <Field
        label={UI.yourVillage[lang]}
        value={form.village}
        placeholder=""
        onChange={(v) => onField('village', v)}
      />

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-foreground">
          {UI.describeProblem[lang]}
        </label>
        <div className="relative">
          <textarea
            value={issueValue}
            onChange={(e) => {
              onField('issue', e.target.value)
              onResetError()
            }}
            placeholder={UI.issuePlaceholder[lang]}
            rows={4}
            className="w-full resize-none rounded-3xl bg-card px-4 py-3.5 pr-14 text-sm text-foreground shadow-sm ring-1 ring-border/60 outline-none placeholder:text-muted-foreground"
          />
          <button
            onClick={listening ? onStop : onDictate}
            aria-label={UI.speakIssue[lang]}
            className={`absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full transition-all active:scale-95 ${
              listening ? 'bg-destructive text-destructive-foreground' : 'bg-primary text-primary-foreground'
            }`}
          >
            {listening ? (
              <motion.span
                className="size-2 rounded-full bg-white"
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            ) : (
              <Mic className="size-5" />
            )}
          </button>
        </div>
        {listening && (
          <p className="mt-1.5 text-xs font-medium text-destructive">{UI.listening[lang]}</p>
        )}
        {voiceError && !listening && (
          <p className="mt-1.5 text-xs text-destructive">{voiceErrorMessage(voiceError)[lang]}</p>
        )}
      </div>

      {sent && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-2xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700"
        >
          <CheckCircle2 className="size-4 shrink-0" />
          {UI.reportSent[lang]}
        </motion.p>
      )}
      {error && !listening && (
        <p className="rounded-2xl bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
          {error}
        </p>
      )}

      <motion.button
        onClick={() => void onSubmit()}
        disabled={sending}
        whileTap={{ scale: 0.97 }}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-lg disabled:opacity-60"
      >
        {sending ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
        {sending ? UI.sending[lang] : UI.sendReport[lang]}
      </motion.button>
    </div>
  )
}

function Field({
  label,
  value,
  type = 'text',
  placeholder,
  onChange,
}: {
  label: string
  value: string
  type?: string
  placeholder: string
  onChange: (value: string) => void
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-foreground">{label}</label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-3xl bg-card px-4 py-3 text-sm text-foreground shadow-sm ring-1 ring-border/60 outline-none placeholder:text-muted-foreground"
      />
    </div>
  )
}
