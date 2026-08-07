'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bell, BellRing, X } from 'lucide-react'
import type { Lang } from '@/lib/data'
import type { Vaccination } from '@/lib/api'
import { useVaccinationNotifications } from '@/hooks/use-vaccination-notifications'
import { formatDate } from '@/lib/utils'

const BANNER_UI: Record<
  Lang,
  {
    title: string
    overdue: string
    dueToday: string
    dueTomorrow: string
    enable: string
    denied: string
    unsupported: string
    close: string
  }
> = {
  mr: {
    title: 'लसीकरण स्मरणपत्र',
    overdue: 'उशीर झाले',
    dueToday: 'आज देय',
    dueTomorrow: 'उद्या देय',
    enable: 'या फोनवर सूचना मिळवा',
    denied: 'सूचना अधिकृत नाहीत — ब्राउझर सेटिंग्ज तपासा',
    unsupported: 'या ब्राउझरवर सूचना उपलब्ध नाहीत',
    close: 'बंद करा',
  },
  hi: {
    title: 'टीकाकरण रिमाइंडर',
    overdue: 'विलंबित',
    dueToday: 'आज देय',
    dueTomorrow: 'कल देय',
    enable: 'इस फोन पर सूचना पाएं',
    denied: 'सूचनाएं स्वीकृत नहीं हैं — ब्राउज़र सेटिंग जांचें',
    unsupported: 'इस ब्राउज़र पर सूचनाएं उपलब्ध नहीं हैं',
    close: 'बंद करें',
  },
  en: {
    title: 'Vaccination Reminders',
    overdue: 'Overdue',
    dueToday: 'Due today',
    dueTomorrow: 'Due tomorrow',
    enable: 'Get notified on this phone',
    denied: 'Notifications not allowed — check browser settings',
    unsupported: 'Notifications not supported on this browser',
    close: 'Close',
  },
}

type Row = { label: string; emoji: string; cls: string; items: Vaccination[] }

export function VaccinationReminderBanner({ lang }: { lang: Lang }) {
  const { reminders, total, permission, requestPermission } = useVaccinationNotifications()
  const [dismissed, setDismissed] = useState(false)
  const t = BANNER_UI[lang]

  if (dismissed) return null
  // Show only when there is something to act on, or to prompt enabling.
  if (total === 0 && permission !== 'default') return null

  const rows: Row[] = [
    { label: t.overdue, emoji: '🔴', cls: 'bg-rose-50 text-rose-700 ring-rose-200', items: reminders.overdue },
    { label: t.dueToday, emoji: '🟠', cls: 'bg-amber-50 text-amber-700 ring-amber-200', items: reminders.dueToday },
    { label: t.dueTomorrow, emoji: '🟡', cls: 'bg-sky-50 text-sky-700 ring-sky-200', items: reminders.dueTomorrow },
  ].filter((r) => r.items.length > 0)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="relative mx-4 mt-4 rounded-3xl bg-card p-4 shadow-md ring-1 ring-border/60"
      >
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label={t.close}
          className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground active:scale-95"
        >
          <X className="size-4" />
        </button>

        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BellRing className="size-5" />
          </span>
          <h3 className="text-sm font-bold text-foreground">{t.title}</h3>
        </div>

        {rows.length > 0 && (
          <div className="mt-3 flex flex-col gap-3">
            {rows.map((row) => (
              <div key={row.label}>
                <p
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${row.cls}`}
                >
                  <span aria-hidden>{row.emoji}</span> {row.label}
                </p>
                <ul className="mt-1.5 flex flex-col gap-1.5">
                  {row.items.map((v) => (
                    <li
                      key={v.id}
                      className="flex items-center justify-between gap-3 text-sm leading-snug"
                    >
                      <span className="font-medium text-foreground">{v.animal_name}</span>
                      <span className="flex-1 truncate text-muted-foreground">{v.vaccine_name}</span>
                      <span className="shrink-0 text-xs font-medium text-foreground/70">
                        {formatDate(v.next_due_date ?? v.vaccination_date, lang)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {permission === 'default' && (
          <button
            type="button"
            onClick={() => void requestPermission()}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow active:scale-[0.98]"
          >
            <Bell className="size-4" />
            {t.enable}
          </button>
        )}
        {permission === 'denied' && (
          <p className="mt-3 rounded-2xl bg-warning/25 px-3 py-2 text-xs font-medium text-warning-foreground">
            {t.denied}
          </p>
        )}
        {permission === 'unsupported' && (
          <p className="mt-3 rounded-2xl bg-secondary px-3 py-2 text-xs font-medium text-muted-foreground">
            {t.unsupported}
          </p>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
