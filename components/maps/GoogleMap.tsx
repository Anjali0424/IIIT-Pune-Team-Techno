'use client'

import { useEffect, useRef, useState } from 'react'
import { Compass, RefreshCw, Layers } from 'lucide-react'
import type { Lang } from '@/lib/data'
import type { NearbyPlace } from '@/hooks/useNearbyPlaces'
import { loadGoogleMaps } from '@/services/googleMaps'

declare const google: any

interface GoogleMapProps {
  lang: Lang
  center: { lat: number; lng: number } | null
  places: NearbyPlace[]
  selectedPlace: NearbyPlace | null
  onSelectPlace: (place: NearbyPlace | null) => void
  routeTo: NearbyPlace | null
  travelMode: 'DRIVING' | 'WALKING'
  onRouteCalculated: (data: { distance: string; duration: string } | null) => void
  online: boolean
  apiKey: string
}

export function GoogleMap({
  lang,
  center,
  places,
  selectedPlace,
  onSelectPlace,
  routeTo,
  travelMode,
  onRouteCalculated,
  online,
  apiKey,
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any | null>(null)
  const [mapType, setMapType] = useState<'roadmap' | 'hybrid'>('roadmap')
  const [mapError, setMapError] = useState<string | null>(null)
  const [mapLoading, setMapLoading] = useState<boolean>(false)

  const markersRef = useRef<any[]>([])
  const userMarkerRef = useRef<any | null>(null)
  const directionsRendererRef = useRef<any | null>(null)

  // 1. Initialize Map
  useEffect(() => {
    if (!online || !apiKey || !mapRef.current || !center) return

    let active = true
    setMapLoading(true)
    setMapError(null)

    loadGoogleMaps(apiKey)
      .then((googleInstance) => {
        if (!active || !mapRef.current) return

        const mapInstance = new googleInstance.maps.Map(mapRef.current, {
          center: center,
          zoom: 14,
          mapTypeId: mapType,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        })

        const renderer = new googleInstance.maps.DirectionsRenderer({
          suppressMarkers: false,
          polylineOptions: {
            strokeColor: '#059669', // emerald-600
            strokeWeight: 6,
            strokeOpacity: 0.9,
          },
        })
        renderer.setMap(mapInstance)
        directionsRendererRef.current = renderer

        setMap(mapInstance)
        setMapLoading(false)
      })
      .catch((err) => {
        console.error('Google Map initialization error:', err)
        setMapError(err.message || 'Failed to initialize Google Maps')
        setMapLoading(false)
      })

    return () => {
      active = false
    }
  }, [online, apiKey, center])

  // 2. Toggle Satellite vs Normal View
  const toggleMapType = () => {
    if (!map) return
    const nextType = mapType === 'roadmap' ? 'hybrid' : 'roadmap'
    map.setMapTypeId(nextType)
    setMapType(nextType)
  }

  // 3. User Blue Dot Marker
  useEffect(() => {
    if (!map || !center) return

    if (userMarkerRef.current) {
      userMarkerRef.current.setMap(null)
    }

    userMarkerRef.current = new google.maps.Marker({
      position: center,
      map: map,
      title: 'Your Location',
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: '#2563eb', // blue-600
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 3,
      },
    })
  }, [map, center])

  // 4. Update Place Markers & PanTo on selection
  useEffect(() => {
    if (!map || !places) return

    markersRef.current.forEach((m) => m.setMap(null))
    markersRef.current = []

    places.forEach((p) => {
      const isSelected = selectedPlace?.id === p.id
      const marker = new google.maps.Marker({
        position: { lat: p.lat, lng: p.lng },
        map: map,
        title: p.name,
        animation: isSelected ? google.maps.Animation.BOUNCE : undefined,
        label: {
          text: isSelected ? '👉' : '📍',
          fontSize: '20px',
        },
      })

      marker.addListener('click', () => {
        onSelectPlace(p)
      })

      markersRef.current.push(marker)
    })
  }, [map, places, selectedPlace, onSelectPlace])

  // 5. Smoothly center map when a place is selected
  useEffect(() => {
    if (map && selectedPlace) {
      map.panTo({ lat: selectedPlace.lat, lng: selectedPlace.lng })
      map.setZoom(15)
    }
  }, [map, selectedPlace])

  // 6. Draw Navigation Route
  useEffect(() => {
    if (!map || !center || !directionsRendererRef.current) return

    const renderer = directionsRendererRef.current

    if (!routeTo) {
      renderer.setDirections({ routes: [] } as any)
      onRouteCalculated(null)
      return
    }

    const directionsService = new google.maps.DirectionsService()

    directionsService.route(
      {
        origin: new google.maps.LatLng(center.lat, center.lng),
        destination: new google.maps.LatLng(routeTo.lat, routeTo.lng),
        travelMode: google.maps.TravelMode[travelMode],
      },
      (response: any, status: any) => {
        if (status === google.maps.DirectionsStatus.OK && response) {
          renderer.setDirections(response)
          const leg = response.routes[0]?.legs[0]
          if (leg) {
            onRouteCalculated({
              distance: leg.distance?.text || `${routeTo.distance.toFixed(1)} km`,
              duration: leg.duration?.text || `${routeTo.travelTimeMinutes} mins`,
            })
          }
        } else {
          console.warn('Directions Service error status:', status)
          onRouteCalculated(null)
        }
      }
    )
  }, [map, center, routeTo, travelMode, onRouteCalculated])

  // Offline / Error presentation fallback
  if (!online || !apiKey || mapError) {
    const offlineLabels = {
      title: { en: 'Map Display Offline', hi: 'नक्शा प्रदर्शन ऑफ़लाइन', mr: 'नकाशा ऑफलाइन आहे' },
      desc: {
        en: 'Showing saved rural services markers. Connect to the internet to view interactive map tiles and live routing.',
        hi: 'सहेजी गई सेवाएं दिखाई जा रही हैं। लाइव गूगल मैप्स देखने के लिए इंटरनेट से जुड़ें।',
        mr: 'साठवलेल्या सेवा दाखवत आहे. थेट गुगल मॅप्स आणि नकाशे पाहण्यासाठी इंटरनेट आवश्यक आहे.',
      },
      offlineMode: { en: 'Offline Mode', hi: 'ऑफलाइन मोड', mr: 'ऑफलाइन मोड' },
    }

    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-emerald-50/20 border-b border-border/80 relative overflow-hidden p-6">
        <div className="z-10 flex flex-col items-center text-center max-w-sm">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 shadow mb-3">
            <Compass className="size-8 animate-pulse" />
          </div>
          <span className="bg-emerald-600/10 text-emerald-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            {offlineLabels.offlineMode[lang]}
          </span>
          <h3 className="text-lg font-bold text-foreground">{offlineLabels.title[lang]}</h3>
          <p className="mt-2 text-xs text-muted-foreground leading-normal px-2">
            {offlineLabels.desc[lang]}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <div ref={mapRef} className="h-full w-full bg-muted" />

      {mapLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <RefreshCw className="size-8 animate-spin text-emerald-600" />
        </div>
      )}

      {map && (
        <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
          <button
            onClick={toggleMapType}
            aria-label="Toggle Satellite View"
            className="flex size-12 items-center justify-center rounded-2xl bg-card text-foreground shadow-lg border border-border/80 transition-all hover:bg-muted active:scale-90 cursor-pointer"
          >
            <Layers className="size-5 text-emerald-700" />
          </button>
        </div>
      )}
    </div>
  )
}
