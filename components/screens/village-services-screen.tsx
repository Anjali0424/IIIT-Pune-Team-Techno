'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useDragControls, type PanInfo } from 'framer-motion'
import {
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Clock,
  ExternalLink,
  GraduationCap,
  Hospital,
  Landmark,
  LayoutGrid,
  LocateFixed,
  MapPin,
  Navigation,
  Phone,
  Search,
  Star,
  Syringe,
  X,
  type LucideIcon,
} from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import type { Lang, LangText } from '@/lib/data'
import type { GeoPoint, NearbyPlace, PlaceCategory } from '@/lib/nearby-places'
import {
  NEARBY_PLACES,
  VILLAGE_CENTER,
  VILLAGE_LABEL,
  buildEmbedSrc,
  directionsUrl,
  fitBounds,
  formatKm,
  haversineKm,
  isOpenNow,
  projectToPixels,
  viewOnMapsUrl,
} from '@/lib/nearby-places'
import { VoiceButton } from '@/components/VoiceButton'
import { VoiceSearchModal } from '@/components/VoiceSearchModal'

const COLLAPSED_HEADER = 76
const FULL_TOP = 96

const T = {
  sheetTitle: { mr: 'जवळील सेवा', hi: 'आस-पास की सेवाएं', en: 'Services nearby' },
  location: { mr: 'जवळील ठिकाण', hi: 'आपका स्थान', en: 'Your location' },
  finding: { mr: 'जवळील सेवा शोधत आहोत…', hi: 'आस-पास की सेवाएं खोज रहे हैं…', en: 'Finding nearby services…' },
  searchPlaceholder: { mr: 'सेवा किंवा ठिकाण शोधा', hi: 'सेवा या स्थान खोजें', en: 'Search services or places' },
  suggestions: { mr: 'सूचना', hi: 'सुझाव', en: 'Suggestions' },
  results: { mr: 'निकाल', hi: 'परिणाम', en: 'results' },
  openNow: { mr: 'आता उघडे आहे', hi: 'अभी खुला है', en: 'Open now' },
  until: { mr: 'पर्यंत', hi: 'तक', en: 'until' },
  closedNow: { mr: 'आता बंद', hi: 'अभी बंद', en: 'Closed now' },
  open24h: { mr: '२४ तास खुले', hi: '24 घंटे खुला', en: 'Open 24 hrs' },
  closedToday: { mr: 'आज बंद', hi: 'आज बंद', en: 'Closed today' },
  call: { mr: 'कॉल करा', hi: 'कॉल करें', en: 'Call' },
  directions: { mr: 'मार्गदर्शन', hi: 'दिशा', en: 'Directions' },
  details: { mr: 'तपशील', hi: 'विवरण', en: 'Details' },
  hours: { mr: 'वेळ', hi: 'समय', en: 'Hours' },
  days: { mr: 'दिवस', hi: 'दिन', en: 'Days' },
  phone: { mr: 'फोन', hi: 'फोन', en: 'Phone' },
  viewOnMaps: { mr: 'गुगल नकाशावर पहा', hi: 'गूगल मैप पर देखें', en: 'View on Google Maps' },
  getDirections: { mr: 'मार्गदर्शन मिळवा', hi: 'दिशा-निर्देश पाएं', en: 'Get directions' },
  noResultsTitle: { mr: 'कोणतीही सेवा सापडली नाही', hi: 'कोई सेवा नहीं मिली', en: 'No services found' },
  noResultsHint: { mr: 'दुसरी श्रेणी निवडा किंवा शोध शब्द बदला.', hi: 'दूसरी श्रेणी चुनें या खोज शब्द बदलें।', en: 'Try a different category or search term.' },
  tapToCenter: { mr: 'नकाशावर टॅप करा', hi: 'मैप पर टैप करें', en: 'Tap map' },
  demoData: { mr: 'डेमो डेटा', hi: 'डेमो डेटा', en: 'Demo data' },
  noPhone: { mr: 'फोन उपलब्ध नाही', hi: 'फोन उपलब्ध नहीं', en: 'No phone' },
  recenter: { mr: 'केंद्रावर परत या', hi: 'केंद्र पर लौटें', en: 'Recenter' },
  new: { mr: 'नवीन', hi: 'नया', en: 'New' },
} satisfies Record<string, LangText>

const CATEGORY_META: Record<
  PlaceCategory,
  { icon: LucideIcon; label: LangText; marker: string; pulse: string; tile: string }
> = {
  hospital: {
    icon: Hospital,
    label: { mr: 'रुग्णालय', hi: 'अस्पताल', en: 'Hospital' },
    marker: 'bg-rose-600',
    pulse: 'bg-rose-600/30',
    tile: 'bg-rose-100 text-rose-700',
  },
  school: {
    icon: GraduationCap,
    label: { mr: 'शाळा', hi: 'स्कूल', en: 'School' },
    marker: 'bg-indigo-600',
    pulse: 'bg-indigo-600/30',
    tile: 'bg-indigo-100 text-indigo-700',
  },
  veterinary: {
    icon: Syringe,
    label: { mr: 'पशुवैद्यक', hi: 'पशु चिकित्सक', en: 'Veterinary' },
    marker: 'bg-emerald-600',
    pulse: 'bg-emerald-600/30',
    tile: 'bg-emerald-100 text-emerald-700',
  },
  bank: {
    icon: Landmark,
    label: { mr: 'बँक', hi: 'बैंक', en: 'Bank' },
    marker: 'bg-amber-600',
    pulse: 'bg-amber-600/30',
    tile: 'bg-amber-100 text-amber-700',
  },
}

const FILTERS: { key: PlaceCategory | 'all'; icon: LucideIcon; label: LangText }[] = [
  { key: 'all', icon: LayoutGrid, label: { mr: 'सर्व', hi: 'सभी', en: 'All' } },
  { key: 'hospital', icon: Hospital, label: CATEGORY_META.hospital.label },
  { key: 'school', icon: GraduationCap, label: CATEGORY_META.school.label },
  { key: 'veterinary', icon: Syringe, label: CATEGORY_META.veterinary.label },
  { key: 'bank', icon: Landmark, label: CATEGORY_META.bank.label },
]

const DAY_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function formatClock(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return m === 0 ? `${hour12} ${period}` : `${hour12}:${`${m}`.padStart(2, '0')} ${period}`
}

function formatPhone(phone: string): string {
  if (!phone) return ''
  return phone.length === 10 ? `${phone.slice(0, 5)} ${phone.slice(5)}` : phone
}

function daysLabel(days: number[]): string {
  if (days.length === 7) return 'Daily'
  return DAY_SHORT.filter((_, i) => days.includes(i)).join('–')
}

function statusLabel(place: NearbyPlace, open: boolean, lang: Lang): string {
  if (place.open24h) return T.open24h[lang]
  if (!open) {
    if (!place.days.includes(new Date().getDay())) return T.closedToday[lang]
    return T.closedNow[lang]
  }
  return `${T.until[lang]} ${formatClock(place.hours.close)}`
}

function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [size, setSize] = useState({ w: 360, h: 640 })
  useEffect(() => {
    const el = ref.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const { width, height } = entry.contentRect
      if (width > 0 && height > 0) setSize({ w: width, h: height })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return { ref, size }
}

function GoogleMapSurface({ src }: { src: string }) {
  const [layers, setLayers] = useState<{ src: string; opacity: number }[]>(() => [
    { src, opacity: 1 },
  ])

  useEffect(() => {
    setLayers((prev) => {
      const latest = prev[prev.length - 1]
      if (latest && latest.src === src) return prev
      const next = prev.map((l) => ({ ...l, opacity: 0 }))
      return [...next, { src, opacity: 1 }].slice(-2)
    })
  }, [src])

  return (
    <div className="absolute inset-0 bg-[#e8e0d3]">
      {layers.map((l) => (
        <iframe
          key={l.src}
          src={l.src}
          title="Google Maps"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none absolute inset-0 h-full w-full border-0 transition-opacity duration-500"
          style={{ opacity: l.opacity }}
        />
      ))}
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border/40">
      <div className="flex items-start gap-3">
        <div className="size-12 animate-pulse rounded-xl bg-muted" />
        <div className="flex-1 space-y-2">
          <div className="h-3.5 w-3/4 animate-pulse rounded-full bg-muted" />
          <div className="h-3 w-1/2 animate-pulse rounded-full bg-muted" />
        </div>
        <div className="h-6 w-16 animate-pulse rounded-full bg-muted" />
      </div>
      <div className="mt-4 h-3 w-2/3 animate-pulse rounded-full bg-muted" />
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="h-9 animate-pulse rounded-xl bg-muted" />
        <div className="h-9 animate-pulse rounded-xl bg-muted" />
        <div className="h-9 animate-pulse rounded-xl bg-muted" />
      </div>
    </div>
  )
}

function PlaceCard({
  place,
  lang,
  distanceKm,
  open,
  selected,
  expanded,
  index,
  onSelect,
  onToggleDetails,
}: {
  place: NearbyPlace
  lang: Lang
  distanceKm: number
  open: boolean
  selected: boolean
  expanded: boolean
  index: number
  onSelect: () => void
  onToggleDetails: () => void
}) {
  const meta = CATEGORY_META[place.category]
  const Icon = meta.icon
  const status = statusLabel(place, open, lang)
  const statusOpen = open

  return (
    <motion.article
      data-place-id={place.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.5), duration: 0.3, ease: 'easeOut' }}
      onClick={onSelect}
      className={`cursor-pointer rounded-2xl bg-card p-4 shadow-md ring-1 transition-all active:scale-[0.99] ${
        selected ? 'shadow-lg ring-2 ring-primary' : 'ring-border/60 hover:shadow-lg'
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${meta.tile}`}
          aria-hidden
        >
          <Icon className="size-6" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-bold leading-snug text-card-foreground text-pretty">
            {place.name[lang]}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-muted-foreground">
            {place.type[lang]}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 rounded-lg bg-amber-400 px-1.5 py-0.5 text-xs font-bold text-amber-950">
              <Star className="size-3 fill-amber-950" />
              {place.rating.toFixed(1)}
            </span>
            <span className="text-[11px] text-muted-foreground">
              ({place.ratingsTotal})
            </span>
            <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <MapPin className="size-3.5" />
              {formatKm(distanceKm)}
            </span>
          </div>
        </div>
        <span
          className={`mt-0.5 flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            statusOpen
              ? 'bg-emerald-600/10 text-emerald-700'
              : 'bg-rose-600/10 text-rose-700'
          }`}
        >
          <span
            className={`size-1.5 rounded-full ${
              statusOpen ? 'bg-emerald-600' : 'bg-rose-600'
            }`}
          />
          {status}
        </span>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground text-pretty">
        {place.address[lang]}
      </p>

      {place.phone ? (
        <a
          href={`tel:${place.phone}`}
          onClick={(e) => e.stopPropagation()}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium text-primary"
        >
          <Phone className="size-3.5" />
          {formatPhone(place.phone)}
        </a>
      ) : (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground/70">
          <Phone className="size-3.5" />
          {T.noPhone[lang]}
        </p>
      )}

      <div className="mt-3 grid grid-cols-3 gap-2">
        {place.phone ? (
          <a
            href={`tel:${place.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-primary/30 bg-primary/5 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10 active:scale-95"
          >
            <Phone className="size-3.5" />
            {T.call[lang]}
          </a>
        ) : (
          <span className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary/50 py-2.5 text-xs font-medium text-muted-foreground/70">
            <Phone className="size-3.5" />
            {T.call[lang]}
          </span>
        )}
        <a
          href={directionsUrl(place)}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:brightness-105 active:scale-95"
        >
          <Navigation className="size-3.5" />
          {T.directions[lang]}
        </a>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onToggleDetails()
          }}
          aria-expanded={expanded}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-secondary py-2.5 text-xs font-semibold text-secondary-foreground transition-transform active:scale-95"
        >
          {T.details[lang]}
          <ChevronDown
            className={`size-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-2.5 rounded-xl bg-secondary/50 p-3 text-xs">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-1.5 font-semibold text-secondary-foreground">
                  <Clock className="size-3.5" />
                  {T.hours[lang]}
                </span>
                <span className="text-right text-secondary-foreground/90">
                  {place.open24h
                    ? T.open24h[lang]
                    : `${formatClock(place.hours.open)} – ${formatClock(place.hours.close)}`}
                  {!place.open24h && (
                    <span className="block text-[11px] text-muted-foreground">
                      {daysLabel(place.days)}
                    </span>
                  )}
                </span>
              </div>
              <div className="h-px bg-border/70" />
              <div className="flex flex-col gap-1.5">
                <a
                  href={viewOnMapsUrl(place)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 font-semibold text-primary"
                >
                  <ExternalLink className="size-3.5" />
                  {T.viewOnMaps[lang]}
                </a>
                <a
                  href={directionsUrl(place)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 font-semibold text-primary"
                >
                  <Navigation className="size-3.5" />
                  {T.getDirections[lang]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export function VillageServicesScreen({ lang, back }: ScreenProps) {
  const { ref: containerRef, size } = useElementSize<HTMLDivElement>()
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState<PlaceCategory | 'all'>('all')
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [center, setCenter] = useState<GeoPoint>(VILLAGE_CENTER)
  const [zoom, setZoom] = useState(15)
  const [snap, setSnap] = useState(1)
  const [voiceOpen, setVoiceOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const dragStartY = useRef(0)
  const dragControls = useDragControls()
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!selectedId || snap === 2) return
    const el = listRef.current?.querySelector(`[data-place-id="${selectedId}"]`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [selectedId, snap, loading])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = NEARBY_PLACES.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (!q) return true
      const haystack = [
        p.name.mr,
        p.name.hi,
        p.name.en,
        p.type.mr,
        p.type.hi,
        p.type.en,
        p.address.mr,
        p.address.hi,
        p.address.en,
        CATEGORY_META[p.category].label.mr,
        CATEGORY_META[p.category].label.hi,
        CATEGORY_META[p.category].label.en,
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
    return list.sort(
      (a, b) =>
        haversineKm(VILLAGE_CENTER, a) - haversineKm(VILLAGE_CENTER, b),
    )
  }, [category, query])

  useEffect(() => {
    if (loading) return
    const t = setTimeout(() => {
      if (filtered.length === 0) return
      const fitted = fitBounds(filtered, size.w, size.h)
      setCenter(fitted.center)
      setZoom(fitted.zoom)
    }, 220)
    return () => clearTimeout(t)
  }, [category, query, size.w, size.h, loading])

  const snaps = useMemo(() => {
    const full = Math.min(FULL_TOP, size.h - COLLAPSED_HEADER)
    const half = Math.round(size.h * 0.52)
    const collapsed = size.h - COLLAPSED_HEADER
    return [full, Math.max(full + 40, Math.min(half, collapsed - 20)), collapsed]
  }, [size.h])

  const selectPlace = useCallback((id: string) => {
    const place = NEARBY_PLACES.find((p) => p.id === id)
    if (!place) return
    setSelectedId(id)
    setCenter({ lat: place.lat, lng: place.lng })
    setSnap((s) => (s === 2 ? 1 : s))
  }, [])

  const changeCategory = useCallback((key: PlaceCategory | 'all') => {
    if (key === category) return
    setCategory(key)
    setSelectedId(null)
    setExpandedId(null)
    setLoading(true)
    setTimeout(() => setLoading(false), 450)
  }, [category])

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const y = dragStartY.current + info.offset.y + info.velocity.y * 0.15
      let best = 0
      let bestDist = Number.POSITIVE_INFINITY
      snaps.forEach((target, i) => {
        const d = Math.abs(target - y)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      setSnap(best)
    },
    [snaps],
  )

  const src = useMemo(
    () => buildEmbedSrc(center, zoom, lang),
    [center, zoom, lang],
  )

  const suggestions = useMemo(() => {
    if (!query.trim()) return []
    const q = query.trim().toLowerCase()
    return filtered
      .filter((p) => p.name[lang].toLowerCase().includes(q) || p.name.en.toLowerCase().includes(q))
      .slice(0, 5)
  }, [filtered, query, lang])

  return (
    <div className="relative flex-1 min-h-0 overflow-hidden bg-background">
      <div ref={containerRef} className="absolute inset-0">
        <GoogleMapSurface src={src} />

        <div className="absolute inset-0" onClick={() => setSnap(2)} />

        {loading ? (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-xl ring-1 ring-border/50 backdrop-blur">
              <span className="size-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <span className="text-sm font-semibold text-foreground">{T.finding[lang]}</span>
            </div>
          </div>
        ) : (
          <div className="pointer-events-none absolute inset-0">
            {filtered.map((place) => {
              const meta = CATEGORY_META[place.category]
              const MarkerIcon = meta.icon
              const selected = place.id === selectedId
              const pos = projectToPixels(place, center, zoom, size.w, size.h)
              return (
                <button
                  key={place.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    selectPlace(place.id)
                  }}
                  aria-label={`${place.name[lang]} · ${CATEGORY_META[place.category].label[lang]}`}
                  className="pointer-events-auto absolute z-10 -translate-x-1/2 -translate-y-full cursor-pointer border-0 bg-transparent p-0 outline-none"
                  style={{
                    left: pos.x,
                    top: pos.y,
                    transitionProperty: 'left, top',
                    transitionDuration: '500ms',
                    transitionTimingFunction: 'ease-out',
                  }}
                >
                  <motion.span
                    animate={
                      selected
                        ? { y: [0, -14, 0], scale: [1, 1.22, 1.12] }
                        : { y: 0, scale: 1 }
                    }
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative flex flex-col items-center"
                  >
                    {selected && (
                      <motion.span
                        initial={{ scale: 0.6, opacity: 0.8 }}
                        animate={{ scale: 1.9, opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`absolute -top-1 size-9 rounded-full ${meta.pulse}`}
                      />
                    )}
                    <span
                      className={`relative flex size-9 items-center justify-center rounded-full border-2 border-white text-white shadow-lg transition-transform duration-200 ${
                        meta.marker
                      } ${selected ? 'z-10 scale-110' : 'hover:scale-105'}`}
                    >
                      <MarkerIcon className="size-4" />
                      <span
                        className={`absolute -bottom-1 left-1/2 size-2.5 -translate-x-1/2 rotate-45 ${meta.marker}`}
                      />
                    </span>
                    {selected && (
                      <span className="mt-1.5 max-w-[10rem] truncate rounded-full bg-foreground px-2.5 py-1 text-[11px] font-semibold text-background shadow-lg">
                        {place.name[lang]}
                      </span>
                    )}
                  </motion.span>
                </button>
              )
            })}

            <div
              className="absolute z-0 -translate-x-1/2 -translate-y-1/2"
              style={{ left: size.w / 2, top: size.h / 2 }}
            >
              <motion.span
                animate={{ scale: [1, 2.1], opacity: [0.55, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeOut' }}
                className="block size-5 rounded-full bg-sky-500/40"
              />
              <span className="absolute -inset-0.5 flex items-center justify-center rounded-full border-2 border-white bg-sky-500 shadow-lg">
                <span className="size-1.5 rounded-full bg-white" />
              </span>
              <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-sky-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow">
                {T.location[lang]}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 p-3">
        <div className="relative">
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              type="button"
              onClick={back}
              aria-label="Go back"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/95 text-foreground shadow-lg ring-1 ring-border/50 transition-transform active:scale-95"
            >
              <ChevronLeft className="size-6" />
            </button>
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white/95 py-2 pl-4 pr-2 shadow-lg ring-1 ring-border/50">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
                placeholder={T.searchPlaceholder[lang]}
                type="search"
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-transform active:scale-90"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => {
                  setSelectedId(null)
                  setCenter(VILLAGE_CENTER)
                  const fitted = fitBounds(filtered, size.w, size.h)
                  setZoom(fitted.zoom)
                }}
                aria-label={T.recenter[lang]}
                className="flex size-8 shrink-0 items-center justify-center rounded-full text-primary transition-transform active:scale-90"
              >
                <LocateFixed className="size-4.5" />
              </button>
              <VoiceButton lang={lang} onPress={() => setVoiceOpen(true)} />
            </div>
          </div>

          <AnimatePresence>
            {searchFocused && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-auto absolute inset-x-0 top-full mt-2 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-border/50"
              >
                <p className="px-4 pt-3 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  {T.suggestions[lang]}
                </p>
                {suggestions.map((p) => {
                  const meta = CATEGORY_META[p.category]
                  const SIcon = meta.icon
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setQuery(p.name[lang])
                        setSearchFocused(false)
                        selectPlace(p.id)
                      }}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-secondary/60"
                    >
                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${meta.tile}`}
                      >
                        <SIcon className="size-4.5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-foreground">
                          {p.name[lang]}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {meta.label[lang]}
                        </span>
                      </span>
                      <span className="shrink-0 text-xs font-semibold text-emerald-600">
                        {formatKm(haversineKm(VILLAGE_CENTER, p))}
                      </span>
                    </button>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[104px] z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-foreground shadow-md ring-1 ring-border/40 backdrop-blur">
        <MapPin className="size-3 text-primary" />
        {VILLAGE_LABEL[lang]}
        <span className="rounded-full bg-primary/10 px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-primary">
          {T.demoData[lang]}
        </span>
      </div>

      <motion.div
        className="absolute inset-x-0 top-0 z-20 flex flex-col overflow-hidden rounded-t-3xl bg-background shadow-[0_-8px_30px_rgba(0,0,0,0.14)] ring-1 ring-border/50"
        animate={{ y: snaps[snap] }}
        transition={{ type: 'spring', stiffness: 300, damping: 34, mass: 0.9 }}
        style={{ height: size.h }}
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: snaps[0], bottom: snaps[2] }}
        dragElastic={0.08}
        dragMomentum={false}
        onDragStart={() => {
          dragStartY.current = snaps[snap]
        }}
        onDragEnd={handleDragEnd}
      >
        <div
          onPointerDown={(e) => dragControls.start(e)}
          className="shrink-0 cursor-grab select-none px-4 pt-2.5 active:cursor-grabbing"
          style={{ touchAction: 'none' }}
        >
          <div className="mx-auto h-1.5 w-10 rounded-full bg-muted-foreground/25" />
          <div className="flex items-center gap-2 pb-2 pt-2">
            <MapPin className="size-4 shrink-0 text-primary" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-foreground">{T.sheetTitle[lang]}</p>
              <p className="truncate text-[11px] text-muted-foreground">
                {VILLAGE_LABEL[lang]} ·{' '}
                <span className="font-semibold text-primary">
                  {filtered.length} {T.results[lang]}
                </span>
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => setSnap(0)}
                aria-label="Expand"
                className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform active:scale-90"
              >
                <ChevronUp className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setSnap(2)}
                aria-label="Collapse"
                className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform active:scale-90"
              >
                <ChevronDown className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="no-scrollbar shrink-0 overflow-x-auto px-4 pb-3">
          <div className="flex w-max items-center gap-2">
            {FILTERS.map((f) => {
              const FIcon = f.icon
              const active = category === f.key
              return (
                <motion.button
                  key={f.key}
                  type="button"
                  onClick={() => changeCategory(f.key)}
                  whileTap={{ scale: 0.94 }}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? 'text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-primary shadow"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <FIcon className="size-4" />
                    {f.label[lang]}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>

        <div
          ref={listRef}
          className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 pb-10 pt-1"
        >
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center gap-2 py-14 text-center"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-3xl">
                🔍
              </span>
              <p className="text-sm font-bold text-foreground">{T.noResultsTitle[lang]}</p>
              <p className="max-w-[16rem] text-xs text-muted-foreground text-pretty">
                {T.noResultsHint[lang]}
              </p>
            </motion.div>
          ) : (
            filtered.map((place, i) => {
              const open = isOpenNow(place)
              const selected = place.id === selectedId
              return (
                <PlaceCard
                  key={place.id}
                  place={place}
                  lang={lang}
                  distanceKm={haversineKm(VILLAGE_CENTER, place)}
                  open={open}
                  selected={selected}
                  expanded={expandedId === place.id}
                  index={i}
                  onSelect={() => selectPlace(place.id)}
                  onToggleDetails={() =>
                    setExpandedId((prev) => (prev === place.id ? null : place.id))
                  }
                />
              )
            })
          )}
        </div>
      </motion.div>

      <VoiceSearchModal
        open={voiceOpen}
        lang={lang}
        onClose={() => setVoiceOpen(false)}
        onInterim={setQuery}
        onResult={setQuery}
      />
    </div>
  )
}
