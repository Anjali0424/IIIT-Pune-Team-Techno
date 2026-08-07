'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarClock, Check, ChevronDown, Loader2, Plus, RotateCcw, Search, Syringe, Trash2 } from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import { api, type Vaccination } from '@/lib/api'
import { UI } from '@/lib/assistant'
import { ScreenHeader } from '@/components/screen-header'
import { VoiceButton } from '@/components/VoiceButton'
import { VoiceSearchModal } from '@/components/VoiceSearchModal'
import { formatDate, todayISO } from '@/lib/utils'
import { EmptyState, ErrorState } from '@/components/ui/data-states'
import { VaccinationReminderBanner } from '@/components/vaccination-reminder-banner'

type Filter = 'all' | 'upcoming' | 'completed' | 'today' | 'tomorrow'

const FILTERS: { id: Filter; labelKey: keyof typeof UI }[] = [
  { id: 'all', labelKey: 'all' },
  { id: 'upcoming', labelKey: 'filterUpcoming' },
  { id: 'completed', labelKey: 'filterCompleted' },
  { id: 'today', labelKey: 'filterDueToday' },
  { id: 'tomorrow', labelKey: 'filterDueTomorrow' },
]

const ANIMAL_TYPES = ['Cow', 'Buffalo', 'Goat', 'Sheep', 'Poultry', 'Dog']

const EMPTY_FORM = {
  animal_name: '',
  owner_name: '',
  animal_type: 'Cow',
  vaccine_name: '',
  vaccination_date: todayISO(),
}

export function VaccinationScreen({ lang, back }: ScreenProps) {
  const [filter, setFilter] = useState<Filter>('all')
  const [records, setRecords] = useState<Vaccination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const [actionError, setActionError] = useState<string | null>(null)

  const [searchInput, setSearchInput] = useState('')
  const [voiceOpen, setVoiceOpen] = useState(false)

  const fetchRecords = async (f: Filter) => {
    setLoading(true)
    setError(null)
    try {
      const data =
        f === 'all'
          ? await api.getVaccinations()
          : f === 'upcoming'
            ? await api.getUpcomingVaccinations()
            : f === 'completed'
              ? await api.getVaccinations({ status: 'completed' })
              : f === 'today'
                ? await api.getVaccinationsDueToday()
                : await api.getVaccinationsDueTomorrow()
      setRecords(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void fetchRecords('all')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeFilter = (f: Filter) => {
    setFilter(f)
    void fetchRecords(f)
  }

  const refresh = () => {
    void fetchRecords(filter)
  }

  const q = searchInput.trim().toLowerCase()
  const filteredRecords = useMemo(() => {
    if (!q) return records
    return records.filter((v) => {
      const haystack = [v.animal_name, v.animal_type, v.vaccine_name, v.owner_name]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [records, q])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setFormError(null)
    try {
      await api.createVaccination({
        animal_name: form.animal_name.trim(),
        owner_name: form.owner_name.trim(),
        animal_type: form.animal_type,
        vaccine_name: form.vaccine_name.trim(),
        vaccination_date: form.vaccination_date,
        status: 'upcoming',
      })
      setShowForm(false)
      setForm(EMPTY_FORM)
      refresh()
    } catch (err) {
      setFormError(err instanceof Error ? err.message : String(err))
    } finally {
      setSaving(false)
    }
  }

  const handleMarkCompleted = async (id: number) => {
    setActionError(null)
    try {
      await api.updateVaccination(id, { status: 'completed' })
      refresh()
    } catch (err) {
      setActionError(err instanceof Error ? err.message : String(err))
    }
  }

  const handleRevert = async (id: number) => {
    setActionError(null)
    try {
      await api.updateVaccination(id, { status: 'upcoming' })
      refresh()
    } catch (err) {
      setActionError(err instanceof Error ? err.message : String(err))
    }
  }

  const handleDelete = async (id: number) => {
    if (!window.confirm(UI.confirmDeleteVaccination[lang])) return
    setActionError(null)
    try {
      await api.deleteVaccination(id)
      refresh()
    } catch (err) {
      setActionError(err instanceof Error ? err.message : String(err))
    }
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      <ScreenHeader screen="vaccination" lang={lang} onBack={back} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-5">
        <VaccinationReminderBanner lang={lang} />

        {/* Filter tabs */}
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => changeFilter(f.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${
                filter === f.id
                  ? 'bg-primary text-primary-foreground shadow'
                  : 'bg-card text-card-foreground ring-1 ring-border/60'
              }`}
            >
              {UI[f.labelKey][lang]}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="mt-4 flex items-center gap-2 rounded-full bg-card px-4 py-2.5 shadow-sm ring-1 ring-border/60">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={UI.searchVaccinations[lang]}
            className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            type="search"
          />
          <VoiceButton lang={lang} onPress={() => setVoiceOpen(true)} />
        </div>

        {/* Add vaccination */}
        <button
          onClick={() => setShowForm((v) => !v)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md active:scale-[0.98]"
        >
          <Plus className="size-4" />
          {UI.addVaccination[lang]}
          <ChevronDown className={`size-4 transition-transform ${showForm ? 'rotate-180' : ''}`} />
        </button>

        {showForm && (
          <form
            onSubmit={handleAdd}
            className="mt-4 flex flex-col gap-3 rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60"
          >
            <Field
              label={UI.animalName[lang]}
              value={form.animal_name}
              onChange={(v) => setForm((f) => ({ ...f, animal_name: v }))}
              placeholder="Ganga"
            />
            <Field
              label={UI.ownerName[lang]}
              value={form.owner_name}
              onChange={(v) => setForm((f) => ({ ...f, owner_name: v }))}
              placeholder="Rajendra Kale"
            />
            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">
                {UI.animalType[lang]}
              </label>
              <select
                value={form.animal_type}
                onChange={(e) => setForm((f) => ({ ...f, animal_type: e.target.value }))}
                className="w-full rounded-2xl border-0 bg-secondary px-4 py-2.5 text-sm text-foreground outline-none ring-1 ring-border/60 focus:ring-2 focus:ring-primary"
              >
                {ANIMAL_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <Field
              label={UI.vaccineName[lang]}
              value={form.vaccine_name}
              onChange={(v) => setForm((f) => ({ ...f, vaccine_name: v }))}
              placeholder="FMD Vaccine / FMD लस"
            />
            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">
                {UI.vaccinationDate[lang]}
              </label>
              <input
                type="date"
                value={form.vaccination_date}
                onChange={(e) => setForm((f) => ({ ...f, vaccination_date: e.target.value }))}
                className="w-full rounded-2xl border-0 bg-secondary px-4 py-2.5 text-sm text-foreground outline-none ring-1 ring-border/60 focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {formError ? (
              <p className="text-xs font-medium text-destructive">{formError}</p>
            ) : null}

            <div className="mt-1 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setFormError(null)
                }}
                className="flex-1 rounded-2xl bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground active:scale-[0.98]"
              >
                {UI.cancel[lang]}
              </button>
              <button
                type="submit"
                disabled={saving}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow active:scale-[0.98] disabled:opacity-60"
              >
                {saving && <Loader2 className="size-4 animate-spin" />}
                {UI.save[lang]}
              </button>
            </div>
          </form>
        )}

        {actionError ? (
          <p className="mt-4 rounded-2xl bg-destructive/10 px-4 py-2.5 text-xs font-medium text-destructive">
            {actionError}
          </p>
        ) : null}

        {/* Timeline */}
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
            <Loader2 className="size-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="mt-5">
            <ErrorState lang={lang} message={error} onRetry={() => refresh()} />
          </div>
        ) : records.length === 0 ? (
          <div className="mt-5">
            <EmptyState label={UI.noVaccinations[lang]} />
          </div>
        ) : filteredRecords.length === 0 ? (
          <div className="mt-5">
            <EmptyState label={UI.noVaccinations[lang]} />
          </div>
        ) : (
          <div className="relative mt-5 pl-6">
            <div className="absolute bottom-2 left-[10px] top-2 w-0.5 bg-border" />
            <div className="flex flex-col gap-4">
              {filteredRecords.map((v, i) => {
                const done = v.status === 'completed'
                const dueLabel = v.next_due_date ?? v.vaccination_date
                return (
                  <motion.div
                    key={v.id}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="relative"
                  >
                    <span
                      className={`absolute -left-6 top-4 flex size-5 items-center justify-center rounded-full ring-4 ring-background ${
                        done ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                    >
                      {done && <Check className="size-3 text-white" />}
                    </span>

                    <div
                      className={`rounded-3xl p-4 shadow-sm ring-1 ${
                        done ? 'bg-emerald-50 ring-emerald-200' : 'bg-amber-50 ring-amber-200'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="min-w-0 text-base font-semibold text-foreground">
                          {v.animal_name}
                          <span className="ml-1 text-sm font-medium text-muted-foreground">
                            ({v.animal_type})
                          </span>
                        </h3>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            done ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                          }`}
                        >
                          {done ? UI.completed[lang] : UI.upcoming[lang]}
                        </span>
                      </div>
                      <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                        <Syringe className="size-4" />
                        {v.vaccine_name}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarClock className="size-3.5" />
                        {UI.dueDate[lang]}: {formatDate(dueLabel, lang)}
                      </p>

                      {/* Actions */}
                      <div className="mt-3 flex gap-2">
                        {done ? (
                          <button
                            onClick={() => handleRevert(v.id)}
                            className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-emerald-200 active:scale-95"
                          >
                            <RotateCcw className="size-3" />
                            {UI.revertToUpcoming[lang]}
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMarkCompleted(v.id)}
                            className="flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white active:scale-95"
                          >
                            <Check className="size-3" />
                            {UI.markCompleted[lang]}
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(v.id)}
                          className="flex items-center gap-1 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive ring-1 ring-destructive/20 active:scale-95"
                        >
                          <Trash2 className="size-3" />
                          {UI.deleteVaccination[lang]}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Voice search */}
      <VoiceSearchModal
        open={voiceOpen}
        lang={lang}
        onClose={() => setVoiceOpen(false)}
        onInterim={setSearchInput}
        onResult={setSearchInput}
      />
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-muted-foreground">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        className="w-full rounded-2xl border-0 bg-secondary px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 ring-1 ring-border/60 focus:ring-2 focus:ring-primary"
      />
    </div>
  )
}
