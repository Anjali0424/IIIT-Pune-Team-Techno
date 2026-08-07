'use client'

import { Phone, Navigation, Share2, Star, X, MapPin, Clock, Compass } from 'lucide-react'
import type { Lang } from '@/lib/data'
import { CATEGORY_MAP } from '@/lib/mock-places'
import type { NearbyPlace } from '@/hooks/useNearbyPlaces'
import { cn } from '@/lib/utils'

interface LocationCardProps {
  place: NearbyPlace
  lang: Lang
  onClick: () => void
  onCall?: (e: React.MouseEvent) => void
  onDirections?: (e: React.MouseEvent) => void
  isSelected: boolean
}

// ==========================================
// 1. LOCATION CARD (LIST ITEM COMPONENT)
// ==========================================
export function LocationCard({ place, lang, onClick, onCall, onDirections, isSelected }: LocationCardProps) {
  const category = CATEGORY_MAP[place.type]
  const emoji = category?.emoji || '📍'
  const typeLabel = category?.[lang] || place.type

  const ratingStars = place.rating
    ? '★'.repeat(Math.round(place.rating)) + '☆'.repeat(5 - Math.round(place.rating))
    : ''

  const cardLabels = {
    kmAway: { en: 'km', hi: 'किमी', mr: 'किमी' },
    mins: { en: 'mins', hi: 'मिनट', mr: 'मि' },
    open: { en: 'Open', hi: 'खुला', mr: 'उघडे' },
    closed: { en: 'Closed', hi: 'बंद', mr: 'बंद' },
    call: { en: 'Call', hi: 'कॉल', mr: 'कॉल' },
    directions: { en: 'Directions', hi: 'दिशा', mr: 'दिशा' },
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'w-full flex flex-col rounded-3xl p-4 text-left transition-all border outline-none active:scale-[0.99] cursor-pointer bg-card shadow-sm hover:shadow-md',
        isSelected
          ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-emerald-50/20'
          : 'border-border/60 hover:border-emerald-500/50'
      )}
    >
      {/* Top Header Row: Emoji badge, Service Name & Category */}
      <div className="flex items-start gap-3.5">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100/80 text-3xl shadow-sm">
          {emoji}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest bg-emerald-100/60 px-2 py-0.5 rounded-full">
              {typeLabel}
            </span>
            {place.isOpen !== undefined && (
              <span
                className={cn(
                  'text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1',
                  place.isOpen
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-destructive/10 text-destructive'
                )}
              >
                <span>{place.isOpen ? '🟢' : '🔴'}</span>
                {place.isOpen ? cardLabels.open[lang] : cardLabels.closed[lang]}
              </span>
            )}
          </div>

          <h4 className="font-extrabold text-foreground text-base mt-1 leading-tight line-clamp-1">
            {place.name}
          </h4>

          {/* Rating stars & Address */}
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {place.rating && (
              <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                <span className="text-amber-500 text-xs leading-none">⭐</span>
                <span className="text-xs text-amber-900 font-extrabold">{place.rating}</span>
              </div>
            )}
            <span className="text-xs text-muted-foreground truncate max-w-[200px]">
              📍 {place.address}
            </span>
          </div>
        </div>
      </div>

      {/* Middle Stats Bar: Distance, Estimated Travel Time, Phone */}
      <div className="mt-3.5 pt-2.5 border-t border-border/40 grid grid-cols-3 gap-2 text-xs font-bold text-foreground">
        <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-xl">
          <span>📏</span>
          <span>{place.distance.toFixed(1)} {cardLabels.kmAway[lang]}</span>
        </div>
        <div className="flex items-center gap-1 text-teal-800 bg-teal-50 px-2.5 py-1.5 rounded-xl">
          <span>🕒</span>
          <span>{place.travelTimeMinutes} {cardLabels.mins[lang]}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground bg-muted/50 px-2.5 py-1.5 rounded-xl truncate">
          <span>📞</span>
          <span className="truncate">{place.phone || 'N/A'}</span>
        </div>
      </div>

      {/* Bottom Quick Action Buttons */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <a
          href={place.phone ? `tel:${place.phone}` : '#'}
          onClick={(e) => {
            e.stopPropagation()
            if (!place.phone) e.preventDefault()
            if (onCall) onCall(e)
          }}
          className={cn(
            'flex items-center justify-center gap-1.5 rounded-2xl py-2.5 text-xs font-extrabold shadow-sm transition-all border text-center cursor-pointer active:scale-95',
            place.phone
              ? 'bg-emerald-600 text-white border-transparent hover:bg-emerald-700'
              : 'bg-muted text-muted-foreground border-border pointer-events-none'
          )}
        >
          <Phone className="size-3.5 shrink-0" />
          {cardLabels.call[lang]}
        </a>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            if (onDirections) onDirections(e)
          }}
          className="flex items-center justify-center gap-1.5 rounded-2xl py-2.5 text-xs font-extrabold shadow-sm transition-all border border-transparent bg-teal-700 text-white hover:bg-teal-800 cursor-pointer active:scale-95"
        >
          <Navigation className="size-3.5 shrink-0 fill-current" />
          {cardLabels.directions[lang]}
        </button>
      </div>
    </div>
  )
}

// ==========================================
// 2. NEARBY SERVICE CARD (FULL DETAILS BOTTOM SHEET)
// ==========================================
interface NearbyServiceCardProps {
  place: NearbyPlace
  lang: Lang
  onClose: () => void
  onDrawRoute: () => void
  onShare: () => void
  isDrawingRoute: boolean
}

export function NearbyServiceCard({
  place,
  lang,
  onClose,
  onDrawRoute,
  onShare,
  isDrawingRoute,
}: NearbyServiceCardProps) {
  const category = CATEGORY_MAP[place.type]
  const emoji = category?.emoji || '📍'
  const typeLabel = category?.[lang] || place.type

  const ratingStars = place.rating
    ? '★'.repeat(Math.round(place.rating)) + '☆'.repeat(5 - Math.round(place.rating))
    : ''

  const sheetLabels = {
    kmAway: { en: 'km away', hi: 'किमी दूर', mr: 'किमी लांब' },
    travelTime: { en: 'est. travel time', hi: 'अनुमानित समय', mr: 'अंदाजे वेळ' },
    open: { en: 'Open Now', hi: 'खुला है', mr: 'उघडे आहे' },
    closed: { en: 'Closed', hi: 'बंद है', mr: 'बंद आहे' },
    callNow: { en: 'Call Now', hi: 'कॉल करें', mr: 'कॉल करा' },
    drawRoute: { en: 'Directions Route', hi: 'मार्ग दिखाएं', mr: 'नकाशा मार्ग' },
    navApp: { en: 'Google Maps App', hi: 'गूगल मैप्स ऐप', mr: 'गुगल मॅप्स' },
    share: { en: 'Share Location', hi: 'स्थान साझा करें', mr: 'जागा पाठवा' },
    noPhone: { en: 'Phone Unavailable', hi: 'फ़ोन उपलब्ध नहीं', mr: 'फोन उपलब्ध नाही' },
  }

  const handleNativeNavigation = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`
    window.open(url, '_blank')
  }

  return (
    <div className="relative rounded-t-3xl bg-card px-5 pb-7 pt-5 shadow-2xl border-t border-border ring-1 ring-black/5 animate-slide-up">
      {/* Swipe handle bar */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-muted-foreground/35" />

      {/* Header & Close */}
      <div className="flex items-start justify-between gap-4 mt-1">
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-widest block bg-emerald-100/60 px-2.5 py-0.5 rounded-full w-fit">
            {typeLabel}
          </span>
          <h3 className="text-xl font-extrabold text-foreground mt-1 leading-snug flex items-center gap-2">
            <span className="text-2xl" aria-hidden>{emoji}</span>
            {place.name}
          </h3>
        </div>
        <button
          onClick={onClose}
          aria-label="Close Details"
          className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-muted/80 active:scale-90 transition-all cursor-pointer"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Ratings, Distance & Travel Time */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        {place.rating && (
          <div className="flex items-center gap-1.5 bg-amber-50 rounded-full px-3 py-1 border border-amber-200 font-bold text-amber-900">
            <span>⭐</span>
            <span>{place.rating} ({place.userRatingsTotal || 20})</span>
          </div>
        )}
        <span className="font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          📏 {place.distance.toFixed(1)} {sheetLabels.kmAway[lang]}
        </span>
        <span className="font-bold text-teal-900 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          🕒 {place.travelTimeMinutes} mins
        </span>
        {place.isOpen !== undefined && (
          <span
            className={cn(
              'font-extrabold px-3 py-1 rounded-full uppercase tracking-wider',
              place.isOpen
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-destructive/10 text-destructive'
            )}
          >
            {place.isOpen ? sheetLabels.open[lang] : sheetLabels.closed[lang]}
          </span>
        )}
      </div>

      {/* Address & Phone Details */}
      <div className="mt-4 flex flex-col gap-2.5 text-sm text-foreground">
        <div className="flex items-start gap-2 bg-muted/40 p-3 rounded-2xl">
          <MapPin className="size-4 text-emerald-700 mt-0.5 shrink-0" />
          <span className="leading-snug font-semibold">{place.address}</span>
        </div>

        {place.phone ? (
          <a
            href={`tel:${place.phone}`}
            className="flex items-center gap-2 bg-emerald-50/70 p-3 rounded-2xl border border-emerald-500/20 hover:bg-emerald-50 text-emerald-900 font-bold"
          >
            <Phone className="size-4 text-emerald-700 shrink-0" />
            <span>📞 {place.phone}</span>
          </a>
        ) : (
          <div className="flex items-center gap-2 bg-muted/30 p-3 rounded-2xl text-muted-foreground text-xs font-medium">
            <Phone className="size-4 shrink-0" />
            <span>{sheetLabels.noPhone[lang]}</span>
          </div>
        )}
      </div>

      {/* Action Buttons Grid */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {/* Draw Navigation path on map */}
        <button
          onClick={onDrawRoute}
          className={cn(
            'flex items-center justify-center gap-2 rounded-3xl py-3.5 text-sm font-extrabold shadow-md transition-all active:scale-[0.98] border cursor-pointer',
            isDrawingRoute
              ? 'bg-amber-500 text-white border-transparent'
              : 'bg-emerald-600 text-white border-transparent hover:bg-emerald-700'
          )}
        >
          <Navigation className="size-4 fill-current" />
          {sheetLabels.drawRoute[lang]}
        </button>

        {/* Call Now button */}
        <a
          href={place.phone ? `tel:${place.phone}` : '#'}
          onClick={(e) => {
            if (!place.phone) e.preventDefault()
          }}
          className={cn(
            'flex items-center justify-center gap-2 rounded-3xl py-3.5 text-sm font-extrabold shadow-md transition-all active:scale-[0.98] border text-center',
            place.phone
              ? 'bg-teal-700 text-white border-transparent hover:bg-teal-800'
              : 'bg-muted text-muted-foreground border-border pointer-events-none'
          )}
        >
          <Phone className="size-4 shrink-0" />
          {sheetLabels.callNow[lang]}
        </a>

        {/* Share Location */}
        <button
          onClick={onShare}
          className="flex items-center justify-center gap-2 rounded-3xl py-3.5 text-sm font-extrabold shadow transition-all active:scale-[0.98] border border-border bg-card hover:bg-muted/40 cursor-pointer"
        >
          <Share2 className="size-4 shrink-0 text-emerald-700" />
          {sheetLabels.share[lang]}
        </button>

        {/* Navigate using Google Maps App */}
        <button
          onClick={handleNativeNavigation}
          className="flex items-center justify-center gap-2 rounded-3xl py-3.5 text-sm font-extrabold shadow transition-all active:scale-[0.98] border border-border bg-card hover:bg-muted/40 cursor-pointer"
        >
          <span className="text-base leading-none" aria-hidden>🗺️</span>
          {sheetLabels.navApp[lang]}
        </button>
      </div>
    </div>
  )
}
