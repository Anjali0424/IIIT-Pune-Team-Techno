'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Search, Siren, Star } from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import type { EmergencyContact } from '@/lib/api'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'
import { ScreenHeader } from '@/components/screen-header'
import { VoiceButton } from '@/components/VoiceButton'
import { VoiceSearchModal } from '@/components/VoiceSearchModal'
import { EmptyState } from '@/components/ui/data-states'
import contactsData from '@/lib/emergency-contacts.json'

const ALL_CONTACTS = contactsData as EmergencyContact[]

const CATEGORY_ORDER = [
  'Veterinary Doctor',
  'Animal Ambulance',
  'Police',
  'Fire',
  'Government Helpline',
  'Veterinary Hospital',
]

const CATEGORY_LABELS: Record<string, Record<Lang, string>> = {
  'Veterinary Doctor': { mr: 'पशुवैद्यक', hi: 'पशु चिकित्सक', en: 'Animal Doctor' },
  'Animal Ambulance': { mr: 'पशु रुग्णवाहिका', hi: 'पशु एम्बुलेंस', en: 'Animal Ambulance' },
  'Veterinary Hospital': { mr: 'पशुवैद्यकीय रुग्णालय', hi: 'पशु चिकित्सालय', en: 'Veterinary Hospital' },
  'Government Helpline': { mr: 'सरकारी हेल्पलाइन', hi: 'सरकारी हेल्पलाइन', en: 'Government Helpline' },
  Police: { mr: 'पोलीस', hi: 'पुलिस', en: 'Police' },
  Fire: { mr: 'अग्निशमन', hi: 'अग्निशमन', en: 'Fire Brigade' },
}

const CATEGORY_META: Record<string, { emoji: string; color: string }> = {
  'Veterinary Doctor': { emoji: '🚑', color: 'bg-primary text-primary-foreground' },
  'Animal Ambulance': { emoji: '🐄', color: 'bg-rose-600 text-white' },
  'Veterinary Hospital': { emoji: '👨‍⚕️', color: 'bg-emerald-600 text-white' },
  'Government Helpline': { emoji: '🏛️', color: 'bg-indigo-600 text-white' },
  Police: { emoji: '🚓', color: 'bg-slate-700 text-white' },
  Fire: { emoji: '🚒', color: 'bg-orange-600 text-white' },
}

const FALLBACK_META = { emoji: '📞', color: 'bg-primary text-primary-foreground' }

const QUICK_EMERGENCY = [
  {
    key: 'animal-ambulance',
    emoji: '🚑',
    color: 'bg-rose-600 text-white',
    phone: '1962',
    label: { mr: 'पशु रुग्णवाहिका', hi: 'पशु एम्बुलेंस', en: 'Animal Ambulance' },
  },
  {
    key: 'police',
    emoji: '🚓',
    color: 'bg-slate-700 text-white',
    phone: '100',
    label: { mr: 'पोलीस', hi: 'पुलिस', en: 'Police' },
  },
  {
    key: 'fire',
    emoji: '🚒',
    color: 'bg-orange-600 text-white',
    phone: '101',
    label: { mr: 'अग्निशमन', hi: 'अग्निशमन', en: 'Fire Brigade' },
  },
  {
    key: 'emergency-112',
    emoji: '☎️',
    color: 'bg-indigo-600 text-white',
    phone: '112',
    label: { mr: '112 आपत्कालीन', hi: '112 आपातकालीन', en: '112 Emergency' },
  },
] as const

const FAVOURITES_KEY = 'grammitra.favourite_contacts'

function loadFavourites(): string[] {
  try {
    if (typeof window === 'undefined') return []
    const raw = window.localStorage.getItem(FAVOURITES_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

function saveFavourites(ids: string[]) {
  try {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(FAVOURITES_KEY, JSON.stringify(ids))
  } catch {
    /* noop */
  }
}

const DISTRICT_CENTERS: Record<string, { lat: number; lng: number }> = {
  Pune: { lat: 18.5204, lng: 73.8567 },
  Mumbai: { lat: 19.076, lng: 72.8777 },
  Nashik: { lat: 19.9975, lng: 73.7898 },
  Nagpur: { lat: 21.1458, lng: 79.0882 },
  Kolhapur: { lat: 16.705, lng: 74.2433 },
  Sangli: { lat: 16.8532, lng: 74.581 },
  Ahmednagar: { lat: 19.0948, lng: 74.738 },
}
const MAX_DISTRICT_DISTANCE_KM = 150

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (d: number) => (d * Math.PI) / 180
  const R = 6371
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

function nearestDistrict(lat: number, lng: number): string | null {
  let best: string | null = null
  let bestKm = Number.POSITIVE_INFINITY
  for (const [name, center] of Object.entries(DISTRICT_CENTERS)) {
    const km = haversineKm(lat, lng, center.lat, center.lng)
    if (km < bestKm) {
      bestKm = km
      best = name
    }
  }
  return best && bestKm <= MAX_DISTRICT_DISTANCE_KM ? best : null
}

export function EmergencyScreen({ lang, back, go }: ScreenProps) {
  const [category, setCategory] = useState('All')
  const [district, setDistrict] = useState<string | null>(null)
  const [searchInput, setSearchInput] = useState('')
  const [favourites, setFavourites] = useState<string[]>([])
  const [voiceOpen, setVoiceOpen] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFavourites(loadFavourites())
    if (typeof window === 'undefined' || !('geolocation' in navigator)) return
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const d = nearestDistrict(pos.coords.latitude, pos.coords.longitude)
        if (d) setDistrict(d)
      },
      () => {
        /* permission denied or unavailable → show all contacts */
      },
      { timeout: 8000, maximumAge: 5 * 60 * 1000 },
    )
  }, [])

  const toggleFavourite = useCallback((id: string) => {
    setFavourites((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      saveFavourites(next)
      return next
    })
  }, [])

  const q = searchInput.trim().toLowerCase()

  const filtered = useMemo(() => {
    let list = ALL_CONTACTS
    if (category !== 'All') list = list.filter((c) => c.type === category)
    if (district) list = list.filter((c) => c.district === district || c.district === 'All India')
    if (q) {
      list = list.filter((c) => {
        const labels = CATEGORY_LABELS[c.type]
        const haystack = [c.name, c.type, labels?.mr, labels?.hi, labels?.en]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        return haystack.includes(q)
      })
    }
    return list
  }, [category, district, q])

  const grouped = useMemo(() => {
    const fav = filtered.filter((c) => favourites.includes(c.id))
    const rest = filtered.filter((c) => !favourites.includes(c.id))
    return { fav, rest }
  }, [filtered, favourites])

  const renderCard = (c: EmergencyContact, i: number) => {
    const meta = CATEGORY_META[c.type] ?? FALLBACK_META
    const isFav = favourites.includes(c.id)
    return (
      <motion.div
        key={c.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.06 }}
        className={`rounded-3xl px-5 pb-5 pt-5 shadow-md ${meta.color}`}
      >
        <div className="flex items-start gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-3xl">
            {meta.emoji}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-lg font-bold">{c.name}</p>
            <p className="text-sm opacity-85">
              {CATEGORY_LABELS[c.type]?.[lang] ?? c.type}
              {c.district !== 'All India' ? ` · ${c.district}` : ''}
            </p>
            <p className="mt-1 text-2xl font-extrabold tracking-wider">{c.phone}</p>
          </div>
          <button
            type="button"
            onClick={() => toggleFavourite(c.id)}
            aria-label={UI.favourite[lang]}
            aria-pressed={isFav}
            className={`flex size-11 shrink-0 items-center justify-center rounded-full transition-colors active:scale-95 ${
              isFav ? 'bg-white/25 text-yellow-300' : 'bg-white/10 text-white/85'
            }`}
          >
            <Star className={`size-6 ${isFav ? 'fill-yellow-300 text-yellow-300' : ''}`} />
          </button>
        </div>
        <a
          href={`tel:${c.phone}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white/20 py-3.5 text-base font-bold transition-transform active:scale-[0.98]"
        >
          {UI.callNow[lang]}
          <Phone className="size-5" />
        </a>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      <ScreenHeader screen="emergency" lang={lang} onBack={back} />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-5">
        {/* Red emergency banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-4 rounded-3xl bg-destructive px-5 py-5 text-destructive-foreground shadow-lg"
        >
          <motion.span
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
            className="flex size-12 items-center justify-center rounded-2xl bg-white/20"
          >
            <Siren className="size-7" />
          </motion.span>
          <div>
            <p className="text-lg font-bold">{UI.contactVet[lang].replace('🚨 ', '')}</p>
            <p className="text-sm text-destructive-foreground/85 text-pretty">
              {UI.disclaimer[lang]}
            </p>
          </div>
        </motion.div>

        {/* Link to Nearby Map Services */}
        <motion.button
          onClick={() => go('nearby')}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex w-full items-center justify-between gap-3 rounded-3xl bg-teal-600 px-5 py-4 text-white shadow-md active:scale-[0.98] cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden>📍</span>
            <div className="text-left">
              <p className="font-bold text-sm">
                {lang === 'mr' ? 'नकाशावर जवळपासच्या सेवा शोधा' : lang === 'hi' ? 'नक्शे पर नजदीकी सेवाएं खोजें' : 'Find Nearby Services on Map'}
              </p>
              <p className="text-xs text-teal-100/90 leading-tight">
                {lang === 'mr' ? 'रुग्णालये, शाळा, पंचायती आणि बँका शोधा' : lang === 'hi' ? 'अस्पताल, स्कूल, पंचायत और बैंक खोजें' : 'Search hospitals, schools, panchayat & banks'}
              </p>
            </div>
          </div>
          <span className="text-xl font-bold font-sans">➔</span>
        </motion.button>

        {/* Quick Emergency */}
        <div className="mt-5">
          <h2 className="text-lg font-bold text-foreground">{UI.quickEmergency[lang]}</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {QUICK_EMERGENCY.map((btn) => (
              <a
                key={btn.key}
                href={`tel:${btn.phone}`}
                className={`flex items-center justify-center gap-3 rounded-3xl px-4 py-5 shadow-md transition-transform active:scale-[0.98] ${btn.color}`}
              >
                <span className="text-3xl">{btn.emoji}</span>
                <span className="text-lg font-bold leading-tight">{btn.label[lang]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-5 flex items-center gap-2 rounded-full bg-card px-4 py-2.5 shadow-sm ring-1 ring-border/60">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={UI.searchEmergency[lang]}
            className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            type="search"
          />
          <VoiceButton lang={lang} onPress={() => setVoiceOpen(true)} />
        </div>

        {/* Auto-detected location */}
        {district && (
          <button
            type="button"
            onClick={() => setDistrict(null)}
            className="mt-4 flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-transform active:scale-95"
          >
            <span className="text-base">📍</span>
            {UI.locationFiltered[lang]} · {district}
            <span className="opacity-60">✕</span>
          </button>
        )}

        {/* Category buttons */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {CATEGORY_ORDER.map((t) => {
            const meta = CATEGORY_META[t] ?? FALLBACK_META
            const active = category === t
            return (
              <button
                key={t}
                type="button"
                onClick={() => setCategory(active ? 'All' : t)}
                aria-pressed={active}
                className={`flex flex-col items-center gap-2 rounded-3xl px-2 py-4 text-center shadow-sm ring-1 transition-all active:scale-95 ${
                  active
                    ? `${meta.color} ring-2 ring-ring/60 ring-offset-2 ring-offset-background`
                    : 'bg-card text-card-foreground ring-border/60'
                }`}
              >
                <span className="text-3xl">{meta.emoji}</span>
                <span className="text-sm font-semibold leading-tight">
                  {CATEGORY_LABELS[t]?.[lang] ?? t}
                </span>
              </button>
            )
          })}
        </div>

        {/* Contact list */}
        {filtered.length === 0 ? (
          <EmptyState label={UI.noContactsFound[lang]} />
        ) : (
          <div className="mt-5 flex flex-col gap-3">
            {grouped.fav.length > 0 && (
              <div className="flex flex-col gap-3">
                <p className="px-1 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  {UI.favourites[lang]}
                </p>
                {grouped.fav.map((c, i) => renderCard(c, i))}
              </div>
            )}
            {grouped.rest.length > 0 && (
              <div className="flex flex-col gap-3">
                {grouped.fav.length > 0 && (
                  <p className="mt-2 px-1 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    {UI.all[lang]}
                  </p>
                )}
                {grouped.rest.map((c, i) => renderCard(c, grouped.fav.length + i))}
              </div>
            )}
          </div>
        )}

        {/* Dial pad */}
        <a
          href="tel:"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-3xl bg-card py-4 text-base font-bold text-foreground shadow-sm ring-1 ring-border/60 transition-transform active:scale-[0.98]"
        >
          {UI.openDialPad[lang]}
        </a>
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
