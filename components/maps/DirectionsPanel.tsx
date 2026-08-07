'use client'

import { Car, Footprints, Volume2, X } from 'lucide-react'
import type { Lang } from '@/lib/data'
import { CATEGORY_MAP } from '@/lib/mock-places'

interface DirectionsPanelProps {
  lang: Lang
  distance: string // e.g. "2.4 km"
  duration: string // e.g. "12 mins"
  travelMode: 'DRIVING' | 'WALKING'
  onChangeMode: (mode: 'DRIVING' | 'WALKING') => void
  onSpeak: () => void
  onClear: () => void
  placeName: string
  placeType: string
  isSpeaking: boolean
}

export function DirectionsPanel({
  lang,
  distance,
  duration,
  travelMode,
  onChangeMode,
  onSpeak,
  onClear,
  placeName,
  placeType,
  isSpeaking,
}: DirectionsPanelProps) {
  const categoryEmoji = CATEGORY_MAP[placeType]?.emoji || '📍'

  const labels = {
    driving: { en: 'Driving', hi: 'ड्राइविंग', mr: 'वाहन प्रवास' },
    walking: { en: 'Walking', hi: 'पैदल चलना', mr: 'पायपीट (चालणे)' },
    routeInfo: { en: 'Navigation Route', hi: 'नेविगेशन मार्ग', mr: 'मार्ग नकाशा' },
    speakText: { en: 'Listen Directions', hi: 'दिशा-निर्देश सुनें', mr: 'मार्गदर्शन ऐका' },
    speaking: { en: 'Reading...', hi: 'पढ़ रहा है...', mr: 'ऐकवत आहे...' },
  }

  return (
    <div className="rounded-3xl bg-card p-4 shadow-lg border border-teal-500/20 ring-1 ring-black/5">
      <div className="flex items-start justify-between gap-2 border-b border-border/60 pb-3">
        <div>
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">
            {labels.routeInfo[lang]}
          </span>
          <h4 className="text-base font-bold text-foreground mt-0.5 flex items-center gap-1.5 leading-tight">
            <span aria-hidden>{categoryEmoji}</span>
            {placeName}
          </h4>
        </div>
        <button
          onClick={onClear}
          aria-label="Clear Route"
          className="rounded-full bg-secondary p-1.5 text-muted-foreground hover:bg-secondary/80 active:scale-95 transition-all cursor-pointer"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Mode Selectors */}
      <div className="mt-3 flex gap-3">
        <button
          onClick={() => onChangeMode('DRIVING')}
          className={`flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold shadow-sm transition-all active:scale-[0.98] border cursor-pointer ${
            travelMode === 'DRIVING'
              ? 'bg-primary text-primary-foreground border-transparent'
              : 'bg-card text-foreground border-border hover:bg-muted/30'
          }`}
        >
          <Car className="size-5" />
          {labels.driving[lang]}
        </button>
        <button
          onClick={() => onChangeMode('WALKING')}
          className={`flex-1 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold shadow-sm transition-all active:scale-[0.98] border cursor-pointer ${
            travelMode === 'WALKING'
              ? 'bg-primary text-primary-foreground border-transparent'
              : 'bg-card text-foreground border-border hover:bg-muted/30'
          }`}
        >
          <Footprints className="size-5" />
          {labels.walking[lang]}
        </button>
      </div>

      {/* Route Info & Voice Speak */}
      <div className="mt-4 flex items-center justify-between bg-teal-50/50 rounded-2xl p-3 border border-teal-500/10">
        <div>
          <p className="text-2xl font-extrabold text-teal-800 leading-tight">
            {duration}
          </p>
          <p className="text-xs font-semibold text-teal-600/80 mt-0.5">
            Distance: {distance}
          </p>
        </div>

        <button
          onClick={onSpeak}
          disabled={isSpeaking}
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-extrabold shadow transition-all active:scale-95 disabled:opacity-75 cursor-pointer ${
            isSpeaking
              ? 'bg-amber-500 text-white animate-pulse'
              : 'bg-teal-600 text-white hover:bg-teal-700'
          }`}
        >
          <Volume2 className={`size-4.5 ${isSpeaking ? 'animate-bounce' : ''}`} />
          {isSpeaking ? labels.speaking[lang] : labels.speakText[lang]}
        </button>
      </div>
    </div>
  )
}
