'use client'

import { useCallback, useEffect, useState } from 'react'

export interface LocationCoordinates {
  lat: number
  lng: number
}

export type PermissionState = 'granted' | 'denied' | 'prompt' | 'unknown'

export function useCurrentLocation() {
  const [location, setLocation] = useState<LocationCoordinates | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [permissionStatus, setPermissionStatus] = useState<PermissionState>('unknown')

  // Check initial permission status if the browser API is available
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions
        .query({ name: 'geolocation' as PermissionName })
        .then((result) => {
          console.log('[useCurrentLocation] Initial permission status:', result.state)
          setPermissionStatus(result.state as PermissionState)
          result.onchange = () => {
            console.log('[useCurrentLocation] Permission status changed:', result.state)
            setPermissionStatus(result.state as PermissionState)
          }
        })
        .catch((err) => {
          console.warn('[useCurrentLocation] Geolocation permission query unsupported:', err)
        })
    }
  }, [])

  const requestLocation = useCallback(() => {
    if (typeof window === 'undefined') return
    
    if (!('geolocation' in navigator)) {
      console.error('[useCurrentLocation] Geolocation is not supported by this browser.')
      setError('Geolocation is not supported by this browser.')
      setPermissionStatus('denied')
      return
    }

    setLoading(true)
    setError(null)
    console.log('[useCurrentLocation] Requesting location with enableHighAccuracy: true')

    // 1. First Attempt: Request with High Accuracy enabled (attempts hardware GPS if available)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        console.log('[useCurrentLocation] GPS Coordinates obtained successfully (High Accuracy):', coords)
        setLocation(coords)
        setPermissionStatus('granted')
        setError(null)
        setLoading(false)
      },
      (err) => {
        console.warn(
          '[useCurrentLocation] GPS High Accuracy failed. Retrying with enableHighAccuracy: false...',
          err
        )
        
        // 2. Second Attempt Fallback: Request with High Accuracy disabled (coarse IP-based / wifi-triangulation)
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            console.log('[useCurrentLocation] GPS Coordinates obtained successfully (Low Accuracy):', coords)
            setLocation(coords)
            setPermissionStatus('granted')
            setError(null)
            setLoading(false)
          },
          (err2) => {
            console.error('[useCurrentLocation] Geolocation failed completely (both accuracy levels):', err2)
            let errMsg = 'Failed to get location.'
            
            switch (err2.code) {
              case err2.PERMISSION_DENIED:
                errMsg = 'Location permission was denied. You can still search by selecting your city.'
                setPermissionStatus('denied')
                break
              case err2.POSITION_UNAVAILABLE:
                errMsg = 'GPS location is currently unavailable. Please verify location services are enabled.'
                break
              case err2.TIMEOUT:
                errMsg = 'GPS location request timed out. Please verify your internet/GPS status.'
                break
              default:
                errMsg = 'An unknown geolocation error occurred.'
                break
            }
            
            setError(errMsg)
            setLoading(false)
          },
          { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
        )
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 10000 }
    )
  }, [])

  const clearLocation = useCallback(() => {
    console.log('[useCurrentLocation] Clearing current coordinates and errors')
    setLocation(null)
    setError(null)
  }, [])

  return {
    location,
    error,
    loading,
    permissionStatus,
    requestLocation,
    clearLocation,
    setLocation,
  }
}
