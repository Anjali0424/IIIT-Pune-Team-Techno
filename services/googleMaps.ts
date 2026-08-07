'use client'

let loadPromise: Promise<any> | null = null

/**
 * Dynamically loads the Google Maps JavaScript API script.
 * Returns a promise that resolves with the `google` namespace.
 */
export function loadGoogleMaps(apiKey: string): Promise<any> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Maps can only be loaded in the browser.'))
  }

  if ((window as any).google?.maps) {
    return Promise.resolve((window as any).google)
  }

  if (loadPromise) {
    return loadPromise
  }

  loadPromise = new Promise((resolve, reject) => {
    const callbackName = 'initGoogleMapsApiCallback'
    
    ;(window as any)[callbackName] = () => {
      resolve((window as any).google)
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry&callback=${callbackName}`
    script.async = true
    script.defer = true
    script.onerror = () => {
      loadPromise = null
      reject(new Error('Failed to load Google Maps script. Check your internet connection or API key.'))
    }

    document.head.appendChild(script)
  })

  return loadPromise
}

/**
 * Calculates distance in kilometers between two GPS coordinates using the Haversine formula.
 * Used online and offline.
 */
export function calculateHaversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRad = (value: number) => (value * Math.PI) / 180
  const R = 6371 // Earth radius in km
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}
