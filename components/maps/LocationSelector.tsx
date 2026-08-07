'use client'

import { useState, useEffect } from 'react'
import { MapPin, Navigation, ArrowRight, RefreshCw } from 'lucide-react'
import type { Lang } from '@/lib/data'
import { GEOGRAPHIC_DATA } from '@/lib/offline-geocoder'

interface LocationSelectorProps {
  lang: Lang
  onSelectGPS: () => void
  onSelectManual: (lat: number, lng: number, name: string) => void
  loadingGPS: boolean
  gpsError: string | null
}

const LABELS = {
  title: {
    en: 'Find Nearby Services',
    hi: 'नजदीकी सेवाएं खोजें',
    mr: 'जवळपासच्या सेवा शोधा',
  },
  desc: {
    en: 'Please select how to find your village or current location.',
    hi: 'कृपया चुनें कि आपका गांव या वर्तमान स्थान कैसे खोजना है।',
    mr: 'कृपया तुमचे गाव किंवा चालू जागा कशी शोधायची ते निवडा.',
  },
  useGPS: {
    en: 'Use GPS Current Location',
    hi: 'जीपीएस चालू स्थान का उपयोग करें',
    mr: 'जीपीएस चालू जागा वापरा',
  },
  gpsDesc: {
    en: 'Finds your exact position automatically using your phone GPS',
    hi: 'आपके फोन जीपीएस का उपयोग करके स्वचालित रूप से आपकी स्थिति ढूंढता है',
    mr: 'तुमच्या फोन जीपीएसचा वापर करून तुमची अचूक जागा शोधते',
  },
  selectCity: {
    en: 'Select Village / City Manually',
    hi: 'गांव या शहर मैन्युअल रूप से चुनें',
    mr: 'गाव किंवा शहर स्वतः निवडा',
  },
  selectCityDesc: {
    en: 'Choose State, District, Taluka, and Village from a list',
    hi: 'सूची से राज्य, जिला, तहसील और गांव चुनें',
    mr: 'यादीमधून राज्य, जिल्हा, तालुका आणि गाव निवडा',
  },
  selectState: { en: 'Select State', hi: 'राज्य चुनें', mr: 'राज्य निवडा' },
  selectDistrict: { en: 'Select District', hi: 'जिला चुनें', mr: 'जिल्हा निवडा' },
  selectTaluka: { en: 'Select Taluka', hi: 'तहसील चुनें', mr: 'तालुका निवडा' },
  selectVillage: { en: 'Select Village', hi: 'गांव चुनें', mr: 'गाव निवडा' },
  confirmBtn: { en: 'Set Selected Location', hi: 'चुना हुआ स्थान सेट करें', mr: 'निवडलेली जागा सेट करा' },
  gpsLoading: { en: 'Getting GPS Coordinates...', hi: 'जीपीएस स्थान प्राप्त कर रहा है...', mr: 'जीपीएस जागा मिळवत आहे...' },
}

export function LocationSelector({
  lang,
  onSelectGPS,
  onSelectManual,
  loadingGPS,
  gpsError,
}: LocationSelectorProps) {
  const [showManual, setShowManual] = useState(false)
  const [selectedState, setSelectedState] = useState('Maharashtra')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedTaluka, setSelectedTaluka] = useState('')
  const [selectedVillage, setSelectedVillage] = useState('')

  // Automatically open manual selector when GPS fails/permission denied to avoid dead ends
  useEffect(() => {
    if (gpsError) {
      console.log('[LocationSelector] GPS Error detected. Automatically switching to manual selection.');
      setShowManual(true)
    }
  }, [gpsError])

  const currentState = GEOGRAPHIC_DATA.find((s) => s.name === selectedState)
  const districts = currentState ? currentState.districts : []
  const currentDistrict = districts.find((d) => d.name === selectedDistrict)
  const talukas = currentDistrict ? currentDistrict.talukas : []
  const currentTaluka = talukas.find((t) => t.name === selectedTaluka)
  const villages = currentTaluka ? currentTaluka.villages : []

  const handleConfirm = () => {
    if (!selectedDistrict || !selectedTaluka || !selectedVillage) return
    const villageObj = villages.find((v) => v.name === selectedVillage)
    if (villageObj) {
      onSelectManual(villageObj.lat, villageObj.lng, `${villageObj.name}, ${selectedTaluka} (${villageObj.pincode})`)
    }
  }

  return (
    <div className="flex flex-1 flex-col justify-center px-4 py-8 bg-background">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-card p-6 shadow-lg border border-border/50">
        <div className="flex flex-col items-center text-center">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 text-3xl mb-4 shadow-sm animate-bounce" aria-hidden>
            📍
          </span>
          <h2 className="text-2xl font-bold text-foreground leading-snug">{LABELS.title[lang]}</h2>
          <p className="mt-2 text-sm text-muted-foreground text-pretty px-2">{LABELS.desc[lang]}</p>
        </div>

        {gpsError && (
          <div className="mt-4 rounded-2xl bg-destructive/10 p-4 border border-destructive/20 text-destructive text-xs leading-normal">
            ⚠️ {gpsError}
          </div>
        )}

        {!showManual ? (
          <div className="mt-6 flex flex-col gap-4">
            {/* GPS Button */}
            <button
              onClick={onSelectGPS}
              disabled={loadingGPS}
              className="flex w-full items-center gap-4 rounded-3xl bg-primary text-primary-foreground p-4 text-left shadow-md hover:bg-primary/95 active:scale-[0.98] transition-all disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
                {loadingGPS ? <RefreshCw className="size-6 animate-spin" /> : <Navigation className="size-6 fill-white" />}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-base">{loadingGPS ? LABELS.gpsLoading[lang] : LABELS.useGPS[lang]}</p>
                <p className="text-xs text-primary-foreground/80 leading-normal mt-0.5">{LABELS.gpsDesc[lang]}</p>
              </div>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 py-2 text-muted-foreground text-xs uppercase tracking-widest font-semibold justify-center">
              <span className="h-px bg-border flex-1" />
              <span>{lang === 'mr' ? 'किंवा' : lang === 'hi' ? 'या' : 'OR'}</span>
              <span className="h-px bg-border flex-1" />
            </div>

            {/* Manual Toggle Button */}
            <button
              onClick={() => setShowManual(true)}
              className="flex w-full items-center gap-4 rounded-3xl bg-secondary text-secondary-foreground p-4 text-left shadow hover:bg-secondary/80 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                <MapPin className="size-6 fill-primary/10" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-base text-foreground">{LABELS.selectCity[lang]}</p>
                <p className="text-xs text-muted-foreground leading-normal mt-0.5">{LABELS.selectCityDesc[lang]}</p>
              </div>
            </button>
          </div>
        ) : (
          <div className="mt-5 flex flex-col gap-4">
            {/* Back to top selector */}
            <button
              onClick={() => setShowManual(false)}
              className="text-primary text-xs font-semibold hover:underline self-start flex items-center gap-1 cursor-pointer"
            >
              ← {lang === 'mr' ? 'मागे जा' : lang === 'hi' ? 'पीछे जाएं' : 'Back to Selection'}
            </button>

            {/* State selection (read-only for simplicity since we focus on Maharashtra) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-muted-foreground uppercase px-1">{LABELS.selectState[lang]}</label>
              <select
                value={selectedState}
                disabled
                className="w-full rounded-2xl border border-border bg-muted p-3.5 text-base font-semibold text-foreground"
              >
                <option value="Maharashtra">Maharashtra (महाराष्ट्र)</option>
              </select>
            </div>

            {/* District Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-muted-foreground uppercase px-1">{LABELS.selectDistrict[lang]}</label>
              <select
                value={selectedDistrict}
                onChange={(e) => {
                  setSelectedDistrict(e.target.value)
                  setSelectedTaluka('')
                  setSelectedVillage('')
                }}
                className="w-full rounded-2xl border border-border bg-card p-3.5 text-base font-semibold text-foreground focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="">-- {lang === 'mr' ? 'जिल्हा निवडा' : lang === 'hi' ? 'जिला चुनें' : 'Choose District'} --</option>
                {districts.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Taluka Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-muted-foreground uppercase px-1">{LABELS.selectTaluka[lang]}</label>
              <select
                value={selectedTaluka}
                disabled={!selectedDistrict}
                onChange={(e) => {
                  setSelectedTaluka(e.target.value)
                  setSelectedVillage('')
                }}
                className="w-full rounded-2xl border border-border bg-card p-3.5 text-base font-semibold text-foreground focus:ring-2 focus:ring-primary outline-none disabled:bg-muted disabled:text-muted-foreground"
              >
                <option value="">-- {lang === 'mr' ? 'तालुका निवडा' : lang === 'hi' ? 'तहसील चुनें' : 'Choose Taluka'} --</option>
                {talukas.map((t) => (
                  <option key={t.name} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Village Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-muted-foreground uppercase px-1">{LABELS.selectVillage[lang]}</label>
              <select
                value={selectedVillage}
                disabled={!selectedTaluka}
                onChange={(e) => setSelectedVillage(e.target.value)}
                className="w-full rounded-2xl border border-border bg-card p-3.5 text-base font-semibold text-foreground focus:ring-2 focus:ring-primary outline-none disabled:bg-muted disabled:text-muted-foreground"
              >
                <option value="">-- {lang === 'mr' ? 'गाव निवडा' : lang === 'hi' ? 'गांव चुनें' : 'Choose Village'} --</option>
                {villages.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} ({v.pincode})
                  </option>
                ))}
              </select>
            </div>

            {/* Confirm button */}
            <button
              onClick={handleConfirm}
              disabled={!selectedVillage}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-3xl bg-primary text-primary-foreground py-4 text-base font-bold shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
            >
              {LABELS.confirmBtn[lang]}
              <ArrowRight className="size-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
