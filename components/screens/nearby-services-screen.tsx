'use client'

import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Mic, Volume2, RefreshCw, X, AlertCircle, Map as MapIcon, List as ListIcon, LayoutGrid } from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import { ScreenHeader } from '@/components/screen-header'
import { useCurrentLocation } from '@/hooks/useCurrentLocation'
import { useNearbyPlaces } from '@/hooks/useNearbyPlaces'
import { useTextToSpeech } from '@/hooks/use-text-to-speech'
import { useVoiceSearch } from '@/hooks/useVoiceSearch'
import { LocationSelector } from '@/components/maps/LocationSelector'
import { GoogleMap } from '@/components/maps/GoogleMap'
import { LocationCard, NearbyServiceCard } from '@/components/maps/NearbyCard'
import { DirectionsPanel } from '@/components/maps/DirectionsPanel'
import { VoiceSearchModal } from '@/components/maps/VoiceSearchModal'
import { CATEGORY_MAP } from '@/lib/mock-places'
import { GEOGRAPHIC_DATA } from '@/lib/offline-geocoder'
import { loadGoogleMaps, calculateHaversineDistance } from '@/services/googleMaps'
import { parseVoiceCategoryIntent } from '@/lib/voice-intent'

// Category Quick Chips for Rural Users
const QUICK_CHIPS = [
  { key: 'all', labels: { mr: 'सर्व', hi: 'सभी', en: 'All' }, emoji: '🌍' },
  { key: 'school', labels: { mr: 'शाळा', hi: 'स्कूल', en: 'Schools' }, emoji: '🏫' },
  { key: 'hospital', labels: { mr: 'हॉस्पिटल व PHC', hi: 'अस्पताल व PHC', en: 'Hospitals & PHC' }, emoji: '🏥' },
  { key: 'vet', labels: { mr: 'पशू डॉक्टर', hi: 'पशु डॉक्टर', en: 'Veterinary' }, emoji: '🐄' },
  { key: 'gram-panchayat', labels: { mr: 'ग्रामपंचायत', hi: 'ग्राम पंचायत', en: 'Panchayat' }, emoji: '🏛️' },
  { key: 'bank', labels: { mr: 'बँक व एटीएम', hi: 'बैंक व एटीएम', en: 'Bank & ATM' }, emoji: '🏦' },
  { key: 'eseva-center', labels: { mr: 'ई-सेवा व CSC', hi: 'ई-सेवा केंद्र', en: 'e-Seva & CSC' }, emoji: '💻' },
  { key: 'krishi', labels: { mr: 'कृषी सेवा व बियाणे', hi: 'कृषि सेवा', en: 'Agri & Seeds' }, emoji: '🌾' },
  { key: 'milk-collection', labels: { mr: 'दूध संकलन', hi: 'दूध डेयरी', en: 'Milk Dairy' }, emoji: '🥛' },
  { key: 'bus-stand', labels: { mr: 'बस व रेल्वे', hi: 'बस व रेलवे', en: 'Transit' }, emoji: '🚌' },
]

export type LoadingStep =
  | 'idle'
  | 'checking-permission'
  | 'requesting-gps'
  | 'fetching-coords'
  | 'reverse-geocoding'
  | 'searching-places'
  | 'done'
  | 'failed'

async function reverseGeocode(
  lat: number,
  lng: number,
  online: boolean,
  apiKey: string
): Promise<{ state: string; district: string; taluka: string; city: string; pincode: string; fullName: string }> {
  if (online && apiKey) {
    try {
      const googleInstance = await loadGoogleMaps(apiKey)
      const geocoder = new googleInstance.maps.Geocoder()

      return new Promise((resolve, reject) => {
        geocoder.geocode({ location: { lat, lng } }, (results: any, status: any) => {
          if (status === 'OK' && results && results[0]) {
            let state = 'Maharashtra'
            let district = ''
            let taluka = ''
            let city = ''
            let pincode = ''

            const addressComponents = results[0].address_components || []
            for (const comp of addressComponents) {
              const types = comp.types || []
              if (types.includes('administrative_area_level_1')) state = comp.long_name
              else if (types.includes('administrative_area_level_2')) district = comp.long_name
              else if (types.includes('locality') || types.includes('sublocality') || types.includes('administrative_area_level_3')) {
                city = comp.long_name
                if (!taluka) taluka = comp.long_name
              } else if (types.includes('postal_code')) pincode = comp.long_name
            }

            const fullName = results[0].formatted_address || `${city || 'Village'}, ${district}`
            resolve({ state, district, taluka, city: city || 'Location', pincode, fullName })
          } else {
            reject(new Error(`Geocoding status: ${status}`))
          }
        })
      })
    } catch (err) {
      console.warn('[ReverseGeocode] Geocoder API fallback to local offline geocoder.', err)
    }
  }

  // Offline Geocoder fallback
  let closestVillage: any = null
  let minDistance = Number.POSITIVE_INFINITY
  let closestDistrict = ''
  let closestTaluka = ''

  for (const state of GEOGRAPHIC_DATA) {
    for (const district of state.districts) {
      for (const taluka of district.talukas) {
        for (const village of taluka.villages) {
          const dist = calculateHaversineDistance(lat, lng, village.lat, village.lng)
          if (dist < minDistance) {
            minDistance = dist
            closestVillage = village
            closestDistrict = district.name
            closestTaluka = taluka.name
          }
        }
      }
    }
  }

  if (closestVillage) {
    return {
      state: 'Maharashtra',
      district: closestDistrict,
      taluka: closestTaluka,
      city: closestVillage.name,
      pincode: closestVillage.pincode,
      fullName: `${closestVillage.name}, ${closestTaluka} (${closestVillage.pincode})`,
    }
  }

  return {
    state: 'Maharashtra',
    district: 'Pune',
    taluka: 'Ambegaon',
    city: 'Manchar',
    pincode: '410503',
    fullName: 'Manchar, Ambegaon, Pune',
  }
}

export function NearbyServicesScreen({ lang, back, online }: ScreenProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

  // Location Hook
  const {
    location: gpsCoords,
    error: gpsError,
    loading: loadingGPS,
    permissionStatus,
    requestLocation,
    clearLocation,
  } = useCurrentLocation()

  // State Management
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(null)
  const [locationName, setLocationName] = useState<string>('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchText, setSearchText] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null)
  const [routeTo, setRouteTo] = useState<any | null>(null)
  const [travelMode, setTravelMode] = useState<'DRIVING' | 'WALKING'>('DRIVING')
  const [routeInfo, setRouteInfo] = useState<{ distance: string; duration: string } | null>(null)
  const [customError, setCustomError] = useState<string | null>(null)
  const [loadingState, setLoadingState] = useState<LoadingStep>('idle')
  const [viewMode, setViewMode] = useState<'split' | 'map' | 'list'>('split')
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState<boolean>(false)

  const searchInputRef = useRef<HTMLInputElement>(null)

  // Places hook
  const { places, loading: loadingPlaces, refetch } = useNearbyPlaces(
    center,
    activeCategory,
    searchQuery,
    online
  )

  // Speech TTS hook
  const { speak, stop, isSpeaking } = useTextToSpeech(lang)

  // Voice Search Hook
  const {
    listening: voiceListening,
    interim: voiceInterim,
    error: voiceError,
    start: startVoiceSearch,
    stop: stopVoiceSearch,
  } = useVoiceSearch(lang)

  // 1. Initial Permission Check
  useEffect(() => {
    setLoadingState('checking-permission')
    if (typeof window !== 'undefined' && navigator.permissions && navigator.permissions.query) {
      navigator.permissions
        .query({ name: 'geolocation' as PermissionName })
        .then((result) => {
          if (result.state === 'granted') {
            setLoadingState('fetching-coords')
            requestLocation()
          } else if (result.state === 'denied') {
            setCustomError(
              lang === 'mr'
                ? 'जीपीएस परवानगी नाकारली आहे. खालीलप्रमाणे तुमचे गाव निवडा.'
                : lang === 'hi'
                ? 'जीपीएस अनुमति अस्वीकृत है। नीचे अपना गांव चुनें।'
                : 'GPS permission denied. Please select your village below.'
            )
            setLoadingState('failed')
          } else {
            setLoadingState('idle')
          }
        })
        .catch(() => setLoadingState('idle'))
    } else {
      setLoadingState('idle')
    }
  }, [permissionStatus, requestLocation, lang])

  // 2. Geolocation coords received
  useEffect(() => {
    if (gpsCoords) {
      setCustomError(null)
      const resolveCoords = async () => {
        setLoadingState('reverse-geocoding')
        try {
          const res = await reverseGeocode(gpsCoords.lat, gpsCoords.lng, online, apiKey)
          setCenter(gpsCoords)
          setLocationName(res.fullName)
          setLoadingState('searching-places')
        } catch {
          setCenter(gpsCoords)
          setLocationName(`${gpsCoords.lat.toFixed(3)}, ${gpsCoords.lng.toFixed(3)}`)
          setLoadingState('searching-places')
        }
      }
      resolveCoords()
    }
  }, [gpsCoords, online, apiKey])

  // 3. Geolocation error
  useEffect(() => {
    if (gpsError) setLoadingState('failed')
  }, [gpsError])

  // 4. Places finish loading state
  useEffect(() => {
    if (center && !loadingPlaces) setLoadingState('done')
  }, [center, loadingPlaces])

  // Automatic Voice Output summary after places load from voice search or category change
  const speakResultsSummary = useCallback(
    (resultsCount: number, placeList: any[], categoryKey: string) => {
      if (!placeList || placeList.length === 0) {
        let noMsg = ''
        if (lang === 'mr') noMsg = 'जवळपास कोणतीही सेवा सापडली नाही.'
        else if (lang === 'hi') noMsg = 'आसपास कोई सेवा नहीं मिली।'
        else noMsg = 'No nearby services found.'
        speak(noMsg, lang)
        return
      }

      const nearest = placeList[0]
      const categoryName = CATEGORY_MAP[nearest.type]?.[lang] || CATEGORY_MAP[categoryKey]?.[lang] || 'सेवा'
      const dist = nearest.distance.toFixed(1)
      const mins = nearest.travelTimeMinutes

      let text = ''
      if (lang === 'mr') {
        text = `मला जवळपास ${resultsCount} ${categoryName} सापडले. सर्वात जवळचे ${nearest.name} हे ${dist} किलोमीटर अंतरावर आहे. अंदाजे वेळ ${mins} मिनिटे आहे. तुम्हाला नकाशा मार्ग हवा आहे का?`
      } else if (lang === 'hi') {
        text = `मुझे आसपास ${resultsCount} ${categoryName} मिले। सबसे नजदीकी ${nearest.name} ${dist} किलोमीटर दूर है। अनुमानित समय ${mins} मिनट है। क्या आपको रास्ता चाहिए?`
      } else {
        text = `I found ${resultsCount} nearby ${categoryName}. The nearest is ${nearest.name}. It is ${dist} kilometres away. Estimated travel time is ${mins} minutes. Would you like directions?`
      }

      speak(text, lang)
    },
    [lang, speak]
  )

  // Voice Search Trigger
  const handleOpenVoiceModal = () => {
    setIsVoiceModalOpen(true)
    startVoiceSearch((recognizedText) => {
      console.log('[NearbyServicesScreen] Voice recognized text:', recognizedText)
      const intent = parseVoiceCategoryIntent(recognizedText)

      setSearchText(recognizedText)
      setSearchQuery(recognizedText)
      setActiveCategory(intent.categoryKey)
      setSelectedPlace(null)
      setRouteTo(null)
      setIsVoiceModalOpen(false)

      // Trigger automatic voice speech summary when places update
      setTimeout(() => {
        if (places && places.length > 0) {
          speakResultsSummary(places.length, places, intent.categoryKey)
        }
      }, 800)
    })
  }

  // Handle prompt click inside voice modal
  const handleSelectVoicePrompt = (promptText: string) => {
    stopVoiceSearch()
    const intent = parseVoiceCategoryIntent(promptText)
    setSearchText(promptText)
    setSearchQuery(promptText)
    setActiveCategory(intent.categoryKey)
    setSelectedPlace(null)
    setRouteTo(null)
    setIsVoiceModalOpen(false)

    setTimeout(() => {
      if (places && places.length > 0) {
        speakResultsSummary(places.length, places, intent.categoryKey)
      }
    }, 800)
  }

  // Manual Selection callback
  const handleSelectManual = (lat: number, lng: number, name: string) => {
    setCenter({ lat, lng })
    setLocationName(name)
    setCustomError(null)
    setLoadingState('searching-places')
  }

  // Reset Location
  const handleResetLocation = () => {
    clearLocation()
    setCenter(null)
    setLocationName('')
    setSelectedPlace(null)
    setRouteTo(null)
    setRouteInfo(null)
    setActiveCategory('all')
    setSearchText('')
    setSearchQuery('')
    setCustomError(null)
    setLoadingState('idle')
    stop()
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(searchText)
    setSelectedPlace(null)
    setRouteTo(null)
    searchInputRef.current?.blur()
  }

  const handleClearSearch = () => {
    setSearchText('')
    setSearchQuery('')
    setActiveCategory('all')
    setSelectedPlace(null)
    setRouteTo(null)
  }

  const handleSharePlace = (place: any) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name)}&query_place_id=${place.googlePlaceId || ''}`
    const shareText = `${place.name}\n📍 Address: ${place.address}\n📏 Distance: ${place.distance.toFixed(1)} km\n🕒 Time: ${place.travelTimeMinutes} mins\n📞 Phone: ${place.phone || 'N/A'}\nMaps: ${mapsUrl}`

    if (navigator.share) {
      navigator.share({ title: place.name, text: shareText, url: mapsUrl }).catch(() => {})
    } else {
      navigator.clipboard.writeText(shareText)
      alert(lang === 'mr' ? 'माहिती सेव्ह झाली!' : lang === 'hi' ? 'विवरण कॉपी हो गया!' : 'Location details copied!')
    }
  }

  const screenLabels = {
    searchPlaceholder: {
      mr: 'बोलून किंवा टाईप करून शोधा...',
      hi: 'बोलकर या टाइप करके खोजें...',
      en: 'Speak or type to search...',
    },
    changeLocation: { mr: 'बदला', hi: 'बदलें', en: 'Change' },
    totalFound: { mr: 'एकूण सेवा:', hi: 'कुल सेवाएं:', en: 'Found:' },
  }

  return (
    <div className="flex flex-1 flex-col bg-background h-dvh w-full overflow-hidden">
      <ScreenHeader screen="nearby" lang={lang} onBack={back} />

      {/* Voice Listening Modal */}
      <VoiceSearchModal
        isOpen={isVoiceModalOpen}
        lang={lang}
        listening={voiceListening}
        interimText={voiceInterim}
        error={voiceError}
        onClose={() => {
          stopVoiceSearch()
          setIsVoiceModalOpen(false)
        }}
        onSelectPrompt={handleSelectVoicePrompt}
      />

      {/* Fullscreen Loading Overlay */}
      {loadingState !== 'idle' && loadingState !== 'done' && loadingState !== 'failed' && (
        <div className="flex flex-1 flex-col items-center justify-center bg-background/95 p-6 z-40">
          <RefreshCw className="size-12 animate-spin text-emerald-600 mb-4" />
          <h4 className="text-base font-bold text-foreground">
            {lang === 'mr' ? 'शोधत आहे...' : lang === 'hi' ? 'खोज रहा है...' : 'Searching nearby services...'}
          </h4>
        </div>
      )}

      {/* Location Selector (Idle or Failed GPS) */}
      {(!center || loadingState === 'failed') && (
        <LocationSelector
          lang={lang}
          onSelectGPS={requestLocation}
          onSelectManual={handleSelectManual}
          loadingGPS={loadingGPS || loadingState === 'fetching-coords'}
          gpsError={customError || gpsError}
        />
      )}

      {/* Main Content Area when location is loaded */}
      {center && loadingState !== 'failed' && (
        <div className="flex flex-1 flex-col overflow-hidden relative">
          
          {/* Top Control Bar: Voice Mic Button + Search Bar + Location Badge */}
          <div className="p-3 bg-card border-b border-border shadow-sm flex flex-col gap-2 shrink-0 z-20">
            <div className="flex items-center gap-2">
              
              {/* Big Voice Search Microphone Button 🎙️ */}
              <button
                type="button"
                onClick={handleOpenVoiceModal}
                className="flex items-center justify-center size-12 rounded-2xl bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 active:scale-95 transition-all cursor-pointer shrink-0"
                title="Voice Search"
              >
                <Mic className="size-6 animate-pulse" />
              </button>

              {/* Text Search Bar Form */}
              <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center gap-2 rounded-2xl bg-muted/60 px-3.5 py-2.5 border border-border">
                <Search className="size-4 shrink-0 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder={screenLabels.searchPlaceholder[lang]}
                  className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted-foreground/70"
                />
                {searchText && (
                  <button type="button" onClick={handleClearSearch} className="text-muted-foreground hover:text-foreground">
                    <X className="size-4" />
                  </button>
                )}
              </form>
            </div>

            {/* Location Badge & Mobile View Mode Switcher */}
            <div className="flex items-center justify-between text-xs pt-1">
              <button
                type="button"
                onClick={handleResetLocation}
                className="flex items-center gap-1.5 font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 cursor-pointer active:scale-95 truncate max-w-[220px]"
              >
                <MapPin className="size-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{locationName.split(',')[0]}</span>
                <span className="text-[10px] text-emerald-600 underline ml-1">{screenLabels.changeLocation[lang]}</span>
              </button>

              {/* View Switcher (Split | Map | List) */}
              <div className="flex items-center gap-1 bg-muted p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('split')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'split' ? 'bg-card text-emerald-700 shadow-sm' : 'text-muted-foreground'}`}
                  title="Split View"
                >
                  <LayoutGrid className="size-4" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'map' ? 'bg-card text-emerald-700 shadow-sm' : 'text-muted-foreground'}`}
                  title="Map View"
                >
                  <MapIcon className="size-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-card text-emerald-700 shadow-sm' : 'text-muted-foreground'}`}
                  title="List View"
                >
                  <ListIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar px-3 py-2 bg-muted/30 border-b border-border shrink-0">
            {QUICK_CHIPS.map((chip) => {
              const active = activeCategory === chip.key
              return (
                <button
                  key={chip.key}
                  onClick={() => {
                    setActiveCategory(chip.key)
                    setSearchText('')
                    setSearchQuery('')
                    setSelectedPlace(null)
                    setRouteTo(null)
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold whitespace-nowrap shadow-sm border transition-all cursor-pointer ${
                    active
                      ? 'bg-emerald-600 text-white border-transparent'
                      : 'bg-card text-foreground border-border hover:bg-muted'
                  }`}
                >
                  <span>{chip.emoji}</span>
                  <span>{chip.labels[lang]}</span>
                </button>
              )
            })}
          </div>

          {/* Main Map + Card Listing Layout Container */}
          <div className="flex flex-1 flex-col md:flex-row overflow-hidden relative">
            
            {/* Embedded Google Map Area */}
            {(viewMode === 'split' || viewMode === 'map') && (
              <div className={`relative w-full ${viewMode === 'split' ? 'h-[45%] md:h-full md:w-1/2' : 'h-full'} shrink-0`}>
                <GoogleMap
                  lang={lang}
                  center={center}
                  places={places}
                  selectedPlace={selectedPlace}
                  onSelectPlace={(place) => {
                    setSelectedPlace(place)
                    setRouteTo(null)
                  }}
                  routeTo={routeTo}
                  travelMode={travelMode}
                  onRouteCalculated={setRouteInfo}
                  online={online}
                  apiKey={apiKey}
                />
              </div>
            )}

            {/* Places List Area */}
            {(viewMode === 'split' || viewMode === 'list') && (
              <div className={`flex flex-1 flex-col ${viewMode === 'split' ? 'h-[55%] md:h-full md:w-1/2' : 'h-full'} bg-background overflow-hidden relative border-t md:border-t-0 md:border-l border-border`}>
                
                {/* Header count bar */}
                <div className="px-4 py-2 shrink-0 flex items-center justify-between text-xs font-extrabold bg-muted/40 border-b border-border/40">
                  <span className="text-muted-foreground flex items-center gap-1">
                    🟢 {screenLabels.totalFound[lang]} {places.length}
                  </span>
                  {places.length > 0 && (
                    <button
                      onClick={() => speakResultsSummary(places.length, places, activeCategory)}
                      className="text-emerald-700 flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <Volume2 className="size-3.5" />
                      <span>{lang === 'mr' ? 'माहिती ऐका' : lang === 'hi' ? 'जानकारी सुनें' : 'Listen Summary'}</span>
                    </button>
                  )}
                </div>

                {/* Cards List Scroll View */}
                <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-3">
                  {loadingPlaces ? (
                    <div className="flex flex-col items-center justify-center py-12 gap-3 text-muted-foreground">
                      <RefreshCw className="size-7 animate-spin text-emerald-600" />
                    </div>
                  ) : places.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center gap-2">
                      <AlertCircle className="size-10 text-emerald-600 mb-2" />
                      <p className="text-sm font-extrabold text-foreground px-4">
                        {lang === 'mr'
                          ? 'कोणतीही सेवा सापडली नाही.'
                          : lang === 'hi'
                          ? 'कोई सेवा नहीं मिली।'
                          : 'No nearby services found.'}
                      </p>
                      <button
                        onClick={refetch}
                        className="mt-2 rounded-full bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow cursor-pointer"
                      >
                        {lang === 'mr' ? 'पुन्हा शोधा' : lang === 'hi' ? 'पुनः प्रयास करें' : 'Try Again'}
                      </button>
                    </div>
                  ) : (
                    places.map((place) => (
                      <LocationCard
                        key={place.id}
                        place={place}
                        lang={lang}
                        onClick={() => setSelectedPlace(place)}
                        onDirections={() => {
                          setSelectedPlace(place)
                          setRouteTo(place)
                        }}
                        isSelected={selectedPlace?.id === place.id}
                      />
                    ))
                  )}
                </div>

                {/* Bottom Sheet Overlays */}
                <AnimatePresence>
                  {/* Route directions panel */}
                  {routeTo && routeInfo && (
                    <div className="absolute inset-x-0 bottom-0 z-30 p-3 bg-background border-t border-border shadow-2xl">
                      <DirectionsPanel
                        lang={lang}
                        distance={routeInfo.distance}
                        duration={routeInfo.duration}
                        travelMode={travelMode}
                        onChangeMode={setTravelMode}
                        onSpeak={() => speakResultsSummary(1, [routeTo], activeCategory)}
                        onClear={() => {
                          setRouteTo(null)
                          setRouteInfo(null)
                        }}
                        placeName={routeTo.name}
                        placeType={routeTo.type}
                        isSpeaking={isSpeaking}
                      />
                    </div>
                  )}

                  {/* Detailed place card bottom sheet */}
                  {selectedPlace && !routeTo && (
                    <div className="absolute inset-x-0 bottom-0 z-30">
                      <NearbyServiceCard
                        place={selectedPlace}
                        lang={lang}
                        onClose={() => setSelectedPlace(null)}
                        onDrawRoute={() => setRouteTo(selectedPlace)}
                        onShare={() => handleSharePlace(selectedPlace)}
                        isDrawingRoute={routeTo?.id === selectedPlace.id}
                      />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
