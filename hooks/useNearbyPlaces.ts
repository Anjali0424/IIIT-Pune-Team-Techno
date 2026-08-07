'use client'

import { useEffect, useState, useCallback } from 'react'
import { loadGoogleMaps, calculateHaversineDistance } from '@/services/googleMaps'
import { getOfflineNearbyPlaces } from '@/lib/mock-places'

export interface NearbyPlace {
  id: string
  name: string
  address: string
  phone?: string
  rating?: number
  userRatingsTotal?: number
  isOpen?: boolean
  type: string
  lat: number
  lng: number
  distance: number // in km
  travelTimeMinutes: number // in mins (estimated)
  googlePlaceId?: string
}

// Full Google Places queries mapping for 24+ rural categories
const GOOGLE_PLACES_QUERIES: Record<string, string> = {
  'school': 'zilla parishad primary school government school shala vidyalaya',
  'college': 'junior college mahavidyalaya degree college high school',
  'government-hospital': 'government hospital public health centre civil dispensary rural hospital',
  'private-hospital': 'private hospital doctor clinic multispeciality hospital',
  'phc': 'primary health centre PHC government dispensary Arogya Vardhini Kendra',
  'vet-hospital': 'government veterinary hospital animal clinic pashuvaidyakiya shala',
  'vet-doctor': 'veterinary doctor animal doctor vet clinic pashuvaidyakiya doctor',
  'gram-panchayat': 'gram panchayat office village panchayat bhavan kacheri',
  'talathi-office': 'talathi office talathi saza kacheri revenue office',
  'tahsil-office': 'tehsil office tahsildar office block development office BDO',
  'police-station': 'police station police outpost chowki thane',
  'bank': 'bank cooperative bank district bank state bank gramin bank',
  'atm': 'ATM cash dispenser bank atm cash machine',
  'post-office': 'post office india post dakghar tapal karyalaya',
  'medical-store': 'medical store pharmacy chemist drug store aushadh dukan',
  'eseva-center': 'e-seva center aaple sarkar digital seva kendra maha e-seva',
  'csc-center': 'CSC center common service centre digital seva kendra',
  'milk-collection': 'milk collection dairy center mahanand milk amul dairy coop gokul dairy',
  'krishi-seva': 'krishi seva kendra fertilizer seed store agro agency pesticide shop',
  'seed-shop': 'certified seed shop mahabeej seed store beej bhandar',
  'fertilizer-shop': 'fertilizer shop iffco khad depot khet bhandar',
  'government-office': 'government office sarkari karyalaya administrative building',
  'agri-office': 'agriculture office krishi adhikhari office agriculture department',
  'bus-stand': 'bus stand ST stand bus depot bus stop bus stanak',
  'railway-station': 'railway station train station railway booking counter',
  'market': 'vegetable market weekly market mandi bazar apmc yard market yard',
  'fire-station': 'fire station fire brigade dambara agnishaman kendra',
  'petrol-pump': 'petrol pump fuel station gas station diesel pump',
  'grocery': 'grocery store kirana shop general store daily needs shop',
}

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

export function useNearbyPlaces(
  center: { lat: number; lng: number } | null,
  activeCategory: string,
  searchQuery: string,
  online: boolean
) {
  const [places, setPlaces] = useState<NearbyPlace[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [isCached, setIsCached] = useState<boolean>(false)

  const fetchPlaces = useCallback(async () => {
    if (!center) {
      setPlaces([])
      return
    }

    setLoading(true)
    setError(null)
    setIsCached(false)

    const cacheKey = `gm_places_cache_${center.lat.toFixed(4)}_${center.lng.toFixed(4)}_${activeCategory}_${searchQuery}`

    // Helper to calculate travel time (avg rural driving ~30 km/h -> 2 mins/km, min 2 mins)
    const calcTravelMinutes = (distKm: number) => Math.max(2, Math.round(distKm * 2.2))

    // Offline mode or no API key -> load from offline seed
    if (!online || !API_KEY) {
      console.log('[useNearbyPlaces] Offline mode, loading local dataset.')
      try {
        const offlineRaw = getOfflineNearbyPlaces(center.lat, center.lng, activeCategory)

        let filtered = offlineRaw.map((p) => {
          const dist = calculateHaversineDistance(center.lat, center.lng, p.lat, p.lng)
          return {
            id: p.id,
            name: p.name.en, // UI handles localization via CATEGORY_MAP if needed
            address: p.address.en,
            phone: p.phone,
            rating: p.rating,
            userRatingsTotal: p.userRatingsTotal,
            isOpen: p.isOpen,
            type: p.type,
            lat: p.lat,
            lng: p.lng,
            distance: dist,
            travelTimeMinutes: calcTravelMinutes(dist),
          }
        })

        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim()
          filtered = filtered.filter(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.address.toLowerCase().includes(q) ||
              p.type.toLowerCase().includes(q)
          )
        }

        filtered.sort((a, b) => a.distance - b.distance)
        await new Promise((resolve) => setTimeout(resolve, 300))

        setPlaces(filtered)
        setIsCached(true)
      } catch (err) {
        console.error('Offline places fetch error:', err)
        setError('Failed to fetch offline places.')
      } finally {
        setLoading(false)
      }
      return
    }

    // Online Mode -> Google Places API
    try {
      const google = await loadGoogleMaps(API_KEY)

      const dummyDiv = document.createElement('div')
      const service = new google.maps.places.PlacesService(dummyDiv)

      let queryStr = searchQuery.trim()
      if (!queryStr) {
        queryStr = GOOGLE_PLACES_QUERIES[activeCategory] || 'essential services'
      }

      const request: any = {
        location: new google.maps.LatLng(center.lat, center.lng),
        radius: 12000, // 12 km search radius
        query: queryStr,
      }

      service.textSearch(request, (results: any, status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const formatted: NearbyPlace[] = results.map((place: any) => {
            const placeLat = place.geometry?.location?.lat() ?? center.lat
            const placeLng = place.geometry?.location?.lng() ?? center.lng
            const dist = calculateHaversineDistance(center.lat, center.lng, placeLat, placeLng)

            return {
              id: place.place_id || Math.random().toString(),
              name: place.name || '',
              address: place.formatted_address || place.vicinity || '',
              rating: place.rating,
              userRatingsTotal: place.user_ratings_total,
              isOpen: place.opening_hours?.isOpen ? place.opening_hours.isOpen() : true,
              type: activeCategory !== 'all' ? activeCategory : (place.types?.[0] || 'amenity'),
              lat: placeLat,
              lng: placeLng,
              distance: dist,
              travelTimeMinutes: calcTravelMinutes(dist),
              googlePlaceId: place.place_id,
            }
          })

          formatted.sort((a, b) => a.distance - b.distance)

          try {
            localStorage.setItem(cacheKey, JSON.stringify(formatted))
          } catch (e) {
            console.warn('Could not save places cache:', e)
          }

          setPlaces(formatted)
        } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
          // Zero results online: fall back to mock data
          const offlineRaw = getOfflineNearbyPlaces(center.lat, center.lng, activeCategory)
          const fallback = offlineRaw.map((p) => {
            const dist = calculateHaversineDistance(center.lat, center.lng, p.lat, p.lng)
            return {
              id: p.id,
              name: p.name.en,
              address: p.address.en,
              phone: p.phone,
              rating: p.rating,
              userRatingsTotal: p.userRatingsTotal,
              isOpen: p.isOpen,
              type: p.type,
              lat: p.lat,
              lng: p.lng,
              distance: dist,
              travelTimeMinutes: calcTravelMinutes(dist),
            }
          }).sort((a, b) => a.distance - b.distance)

          setPlaces(fallback)
        } else {
          const cached = localStorage.getItem(cacheKey)
          if (cached) {
            setPlaces(JSON.parse(cached))
            setIsCached(true)
          } else {
            setError(`Places API status: ${status}`)
          }
        }
        setLoading(false)
      })
    } catch (err: any) {
      console.error('Google Maps Places loading error:', err)
      const cached = localStorage.getItem(cacheKey)
      if (cached) {
        setPlaces(JSON.parse(cached))
        setIsCached(true)
      } else {
        setError(err.message || 'Failed to load Google Places')
      }
      setLoading(false)
    }
  }, [center, activeCategory, searchQuery, online])

  useEffect(() => {
    fetchPlaces()
  }, [fetchPlaces])

  return {
    places,
    loading,
    error,
    isCached,
    refetch: fetchPlaces,
  }
}
