'use client'

export interface VillageCityDetails {
  name: string
  pincode: string
  lat: number
  lng: number
}

export interface TalukaDetails {
  name: string
  villages: VillageCityDetails[]
}

export interface DistrictDetails {
  name: string
  talukas: TalukaDetails[]
}

export interface StateDetails {
  name: string
  districts: DistrictDetails[]
}

export const GEOGRAPHIC_DATA: StateDetails[] = [
  {
    name: 'Maharashtra',
    districts: [
      {
        name: 'Pune',
        talukas: [
          {
            name: 'Haveli',
            villages: [
              { name: 'Uruli Kanchan', pincode: '412301', lat: 18.4877, lng: 74.1332 },
              { name: 'Wagholi', pincode: '412207', lat: 18.5793, lng: 73.9822 },
              { name: 'Loni Kalbhor', pincode: '412201', lat: 18.4842, lng: 74.0205 },
              { name: 'Khadakwasla', pincode: '411024', lat: 18.4362, lng: 73.7629 },
            ],
          },
          {
            name: 'Junnar',
            villages: [
              { name: 'Junnar', pincode: '410502', lat: 19.2104, lng: 73.8767 },
              { name: 'Narayangaon', pincode: '410504', lat: 19.1170, lng: 73.9748 },
              { name: 'Otur', pincode: '412409', lat: 19.2618, lng: 73.9856 },
              { name: 'Alephata', pincode: '412411', lat: 19.1764, lng: 74.1205 },
            ],
          },
          {
            name: 'Ambegaon',
            villages: [
              { name: 'Manchar', pincode: '410503', lat: 19.0069, lng: 73.9392 },
              { name: 'Ghodegaon', pincode: '410513', lat: 19.0272, lng: 73.8344 },
              { name: 'Shinoli', pincode: '410503', lat: 19.0628, lng: 73.9317 },
              { name: 'Pargaon', pincode: '410512', lat: 19.0347, lng: 74.0531 },
            ],
          },
          {
            name: 'Shirur',
            villages: [
              { name: 'Shikrapur', pincode: '412208', lat: 18.6657, lng: 74.1165 },
              { name: 'Shirur', pincode: '412210', lat: 18.8268, lng: 74.3768 },
              { name: 'Ranjangaon', pincode: '412220', lat: 18.7845, lng: 74.2505 },
            ],
          },
        ],
      },
      {
        name: 'Ahmednagar',
        talukas: [
          {
            name: 'Sangamner',
            villages: [
              { name: 'Sangamner', pincode: '422605', lat: 19.5761, lng: 74.2070 },
              { name: 'Loni', pincode: '413736', lat: 19.5936, lng: 74.4552 },
              { name: 'Akole', pincode: '422601', lat: 19.5414, lng: 73.9961 },
              { name: 'Rajur', pincode: '422604', lat: 19.5417, lng: 73.7841 },
            ],
          },
          {
            name: 'Rahata',
            villages: [
              { name: 'Shirdi', pincode: '423109', lat: 19.7662, lng: 74.4762 },
              { name: 'Rahata', pincode: '423107', lat: 19.7128, lng: 74.4789 },
              { name: 'Babhaleshwar', pincode: '413737', lat: 19.6105, lng: 74.4812 },
            ],
          },
        ],
      },
      {
        name: 'Nashik',
        talukas: [
          {
            name: 'Niphad',
            villages: [
              { name: 'Niphad', pincode: '422303', lat: 20.0818, lng: 74.1130 },
              { name: 'Lasalgaon', pincode: '422306', lat: 20.1417, lng: 74.2272 },
              { name: 'Ozar', pincode: '422206', lat: 20.0963, lng: 73.9351 },
              { name: 'Pimpalgaon Baswant', pincode: '422209', lat: 20.1633, lng: 73.9877 },
            ],
          },
          {
            name: 'Sinnar',
            villages: [
              { name: 'Sinnar', pincode: '422103', lat: 19.8494, lng: 74.0009 },
              { name: 'Wavi', pincode: '422104', lat: 19.7712, lng: 74.2256 },
              { name: 'Musalgaon', pincode: '422112', lat: 19.8978, lng: 74.0536 },
            ],
          },
        ],
      },
      {
        name: 'Nagpur',
        talukas: [
          {
            name: 'Katol',
            villages: [
              { name: 'Katol', pincode: '441302', lat: 21.2721, lng: 78.5863 },
              { name: 'Jalalkheda', pincode: '441304', lat: 21.3654, lng: 78.4352 },
              { name: 'Kondhali', pincode: '441103', lat: 21.1432, lng: 78.6852 },
            ],
          },
          {
            name: 'Saoner',
            villages: [
              { name: 'Saoner', pincode: '441107', lat: 21.3853, lng: 78.9157 },
              { name: 'Khapa', pincode: '441101', lat: 21.4172, lng: 78.9482 },
            ],
          },
        ],
      },
    ],
  },
]

/**
 * Searches the local geographic tree for a matching village name, taluka name,
 * district name, or pincode, returning the GPS coordinates.
 */
export function resolveOfflineCoordinates(query: string): { lat: number; lng: number; name: string } | null {
  const q = query.trim().toLowerCase()
  if (!q) return null

  // 1. Direct search by pincode or village name
  for (const state of GEOGRAPHIC_DATA) {
    for (const district of state.districts) {
      for (const taluka of district.talukas) {
        for (const village of taluka.villages) {
          if (village.pincode === q || village.name.toLowerCase() === q) {
            return { lat: village.lat, lng: village.lng, name: `${village.name}, ${taluka.name} (${village.pincode})` }
          }
        }
      }
    }
  }

  // 2. Substring search for village
  for (const state of GEOGRAPHIC_DATA) {
    for (const district of state.districts) {
      for (const taluka of district.talukas) {
        for (const village of taluka.villages) {
          if (village.name.toLowerCase().includes(q)) {
            return { lat: village.lat, lng: village.lng, name: `${village.name}, ${taluka.name} (${village.pincode})` }
          }
        }
      }
    }
  }

  // 3. Match taluka name
  for (const state of GEOGRAPHIC_DATA) {
    for (const district of state.districts) {
      for (const taluka of district.talukas) {
        if (taluka.name.toLowerCase() === q || taluka.name.toLowerCase().includes(q)) {
          // Use first village coordinates
          const first = taluka.villages[0]
          if (first) {
            return { lat: first.lat, lng: first.lng, name: `${taluka.name} Taluka, ${district.name}` }
          }
        }
      }
    }
  }

  // 4. Match district name
  for (const state of GEOGRAPHIC_DATA) {
    for (const district of state.districts) {
      if (district.name.toLowerCase() === q || district.name.toLowerCase().includes(q)) {
        // Find first village of first taluka
        const firstVillage = district.talukas[0]?.villages[0]
        if (firstVillage) {
          return { lat: firstVillage.lat, lng: firstVillage.lng, name: `${district.name} District` }
        }
      }
    }
  }

  return null
}
