'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { api, type Vaccination } from '@/lib/api'

export type VaccinationReminders = {
  dueToday: Vaccination[]
  dueTomorrow: Vaccination[]
  overdue: Vaccination[]
}

export type NotificationPermissionState = 'unsupported' | 'default' | 'granted' | 'denied'

const POLL_INTERVAL_MS = 5 * 60 * 1000

function group(records: Vaccination[]): VaccinationReminders {
  return records.reduce<VaccinationReminders>(
    (acc, v) => {
      if (v.status === 'completed') return acc
      if (v.is_overdue) acc.overdue.push(v)
      else if (v.days_until_due === 0) acc.dueToday.push(v)
      else if (v.days_until_due === 1) acc.dueTomorrow.push(v)
      return acc
    },
    { dueToday: [], dueTomorrow: [], overdue: [] },
  )
}

function notificationKey(v: Vaccination): string {
  return `${v.id}:${v.next_due_date ?? ''}:${v.status}`
}

export function useVaccinationNotifications(intervalMs = POLL_INTERVAL_MS) {
  const [reminders, setReminders] = useState<VaccinationReminders>({
    dueToday: [],
    dueTomorrow: [],
    overdue: [],
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [permission, setPermission] = useState<NotificationPermissionState>('default')
  const firedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      setPermission('unsupported')
      return
    }
    setPermission(Notification.permission as NotificationPermissionState)
  }, [])

  const refresh = useCallback(async () => {
    try {
      const records = await api.getVaccinations()
      setReminders(group(records))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void refresh()
    const id = window.setInterval(() => void refresh(), intervalMs)
    return () => window.clearInterval(id)
  }, [refresh, intervalMs])

  const requestPermission = useCallback(async (): Promise<NotificationPermissionState> => {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      setPermission('unsupported')
      return 'unsupported'
    }
    const result = await Notification.requestPermission()
    setPermission(result as NotificationPermissionState)
    return result as NotificationPermissionState
  }, [])

  const fireBrowserNotifications = useCallback(() => {
    if (typeof window === 'undefined' || !('Notification' in window)) return
    if (Notification.permission !== 'granted') return
    const all = [...reminders.dueToday, ...reminders.dueTomorrow, ...reminders.overdue]
    for (const v of all) {
      const key = notificationKey(v)
      if (firedRef.current.has(key)) continue
      firedRef.current.add(key)
      try {
        new Notification(`🔔 ${v.animal_name}`, {
          body: v.reminder_message ?? `${v.vaccine_name} — ${v.next_due_date ?? ''}`,
        })
      } catch {
        // Some browsers throw when fired outside a user gesture; ignore.
      }
    }
  }, [reminders])

  // Fire browser notifications for any new reminders once permission is granted.
  useEffect(() => {
    if (permission === 'granted') fireBrowserNotifications()
  }, [permission, fireBrowserNotifications])

  const total = reminders.dueToday.length + reminders.dueTomorrow.length + reminders.overdue.length

  return {
    reminders,
    loading,
    error,
    permission,
    requestPermission,
    fireBrowserNotifications,
    refresh,
    total,
  }
}
