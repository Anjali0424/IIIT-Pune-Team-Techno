import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const LANG_LOCALE: Record<string, string> = { mr: 'mr-IN', hi: 'hi-IN', en: 'en-IN' }

/** Format an ISO date (YYYY-MM-DD) for display in the selected language. */
export function formatDate(dateStr: string | null | undefined, lang: string = 'en'): string {
  if (!dateStr) return ''
  const date = new Date(`${dateStr}T00:00:00`)
  if (Number.isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString(LANG_LOCALE[lang] ?? 'en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/** Today's date as an ISO string (YYYY-MM-DD) in local time. */
export function todayISO(): string {
  const now = new Date()
  const month = `${now.getMonth() + 1}`.padStart(2, '0')
  const day = `${now.getDate()}`.padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}
