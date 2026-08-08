import type { Lang, LangText } from './data'

export type PlaceCategory = 'hospital' | 'school' | 'veterinary' | 'bank'

export type NearbyPlace = {
  id: string
  category: PlaceCategory
  name: LangText
  type: LangText
  lat: number
  lng: number
  rating: number
  ratingsTotal: number
  address: LangText
  phone: string
  hours: { open: string; close: string }
  days: number[]
  open24h?: boolean
}

export type GeoPoint = { lat: number; lng: number }

export const VILLAGE_CENTER: GeoPoint = { lat: 19.0435, lng: 74.6881 }

export const VILLAGE_LABEL: LangText = {
  mr: 'सोनई, अहमदनगर',
  hi: 'सोनई, अहमदनगर',
  en: 'Sonai, Ahmednagar',
}

const HOSPITAL = 'hospital' as const
const SCHOOL = 'school' as const
const VETERINARY = 'veterinary' as const
const BANK = 'bank' as const

export const NEARBY_PLACES: NearbyPlace[] = [
  {
    id: 'grammitra-health-centre',
    category: HOSPITAL,
    name: { mr: 'ग्राममित्र ग्रामीण आरोग्य केंद्र', hi: 'ग्राममित्र ग्रामीण स्वास्थ्य केंद्र', en: 'GramMitra Rural Health Centre' },
    type: { mr: 'सरकारी रुग्णालय', hi: 'सरकारी अस्पताल', en: 'Government Hospital' },
    lat: 19.0442,
    lng: 74.6895,
    rating: 4.1,
    ratingsTotal: 120,
    address: { mr: 'मेन रोड, सोनई', hi: 'मेन रोड, सोनई', en: 'Main Road, Sonai' },
    phone: '02424251234',
    hours: { open: '08:00', close: '20:00' },
    days: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    id: 'sonai-subdistrict-hospital',
    category: HOSPITAL,
    name: { mr: 'सोनई उपजिल्हा रुग्णालय', hi: 'सोनई उपजिला अस्पताल', en: 'Sonai Sub-District Hospital' },
    type: { mr: 'सरकारी रुग्णालय', hi: 'सरकारी अस्पताल', en: 'Government Hospital' },
    lat: 19.0401,
    lng: 74.692,
    rating: 3.8,
    ratingsTotal: 87,
    address: { mr: 'हॉस्पिटल रोड, सोनई', hi: 'हॉस्पिटल रोड, सोनई', en: 'Hospital Road, Sonai' },
    phone: '02424251345',
    hours: { open: '00:00', close: '23:59' },
    days: [0, 1, 2, 3, 4, 5, 6],
    open24h: true,
  },
  {
    id: 'dr-kale-clinic',
    category: HOSPITAL,
    name: { mr: 'डॉ. काळे क्लिनिक व पॅथॉलॉजी', hi: 'डॉ. काले क्लिनिक व पैथोलॉजी', en: 'Dr. Kale Clinic & Pathology' },
    type: { mr: 'खाजगी क्लिनिक', hi: 'निजी क्लिनिक', en: 'Private Clinic' },
    lat: 19.047,
    lng: 74.6841,
    rating: 4.6,
    ratingsTotal: 210,
    address: { mr: 'शॉप ४, मार्केट यार्ड, सोनई', hi: 'शॉप 4, मार्केट यार्ड, सोनई', en: 'Shop 4, Market Yard, Sonai' },
    phone: '9876543210',
    hours: { open: '09:30', close: '21:00' },
    days: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    id: 'zp-primary-school',
    category: SCHOOL,
    name: { mr: 'जिल्हा परिषद प्राथमिक शाळा', hi: 'जिला परिषद प्राथमिक स्कूल', en: 'Zilla Parishad Primary School' },
    type: { mr: 'प्राथमिक शाळा', hi: 'प्राथमिक स्कूल', en: 'Primary School' },
    lat: 19.045,
    lng: 74.6872,
    rating: 4.2,
    ratingsTotal: 64,
    address: { mr: 'झेडपी शाळा रोड, सोनई', hi: 'जेडपी स्कूल रोड, सोनई', en: 'ZP School Road, Sonai' },
    phone: '02424251456',
    hours: { open: '09:00', close: '17:00' },
    days: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 'jijamata-kanya-vidyalaya',
    category: SCHOOL,
    name: { mr: 'जिजामाता कन्या विद्यालय', hi: 'जीजामाता कन्या विद्यालय', en: 'Jijamata Kanya Vidyalaya' },
    type: { mr: 'मुलींची उच्च माध्यमिक शाळा', hi: 'बालिका उच्च माध्यमिक स्कूल', en: "Girls' High School" },
    lat: 19.041,
    lng: 74.6901,
    rating: 4.4,
    ratingsTotal: 98,
    address: { mr: 'शिवाजी नगर, सोनई', hi: 'शिवाजी नगर, सोनई', en: 'Shivaji Nagar, Sonai' },
    phone: '02424251567',
    hours: { open: '09:00', close: '17:00' },
    days: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 'sant-gadge-high-school',
    category: SCHOOL,
    name: { mr: 'संत गाडगे महाराज हायस्कूल', hi: 'संत गाडगे महाराज हाई स्कूल', en: 'Shri Sant Gadge Maharaj High School' },
    type: { mr: 'हायस्कूल', hi: 'हाई स्कूल', en: 'High School' },
    lat: 19.0485,
    lng: 74.6822,
    rating: 4.0,
    ratingsTotal: 51,
    address: { mr: 'गाडगे नगर, सोनई', hi: 'गाडगे नगर, सोनई', en: 'Gadge Nagar, Sonai' },
    phone: '02424251678',
    hours: { open: '07:30', close: '13:30' },
    days: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 'bal-sanskar-school',
    category: SCHOOL,
    name: { mr: 'बाल संस्कार इंग्लिश मीडियम शाळा', hi: 'बाल संस्कार इंग्लिश मीडियम स्कूल', en: 'Bal Sanskar English Medium School' },
    type: { mr: 'इंग्रजी माध्यम शाळा', hi: 'अंग्रेज़ी माध्यम स्कूल', en: 'English Medium School' },
    lat: 19.0422,
    lng: 74.695,
    rating: 4.3,
    ratingsTotal: 142,
    address: { mr: 'नगर रोड, सोनई', hi: 'नगर रोड, सोनई', en: 'Nagar Road, Sonai' },
    phone: '02424251789',
    hours: { open: '08:30', close: '15:30' },
    days: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 'sonai-vet-dispensary',
    category: VETERINARY,
    name: { mr: 'पशुवैद्यकीय दवाखाना, सोनई', hi: 'पशु चिकित्सालय, सोनई', en: 'District Veterinary Dispensary, Sonai' },
    type: { mr: 'पशुवैद्यकीय रुग्णालय', hi: 'पशु चिकित्सालय', en: 'Veterinary Hospital' },
    lat: 19.0438,
    lng: 74.6912,
    rating: 4.3,
    ratingsTotal: 156,
    address: { mr: 'व्हेट कॉलनी, सोनई', hi: 'वेट कॉलोनी, सोनई', en: 'Vet Colony, Sonai' },
    phone: '02424251890',
    hours: { open: '09:00', close: '17:00' },
    days: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 'dr-jadhav-vet',
    category: VETERINARY,
    name: { mr: 'डॉ. बाबासाहेब जाधव', hi: 'डॉ. बाबासाहेब जाधव', en: 'Dr. Babasaheb Jadhav' },
    type: { mr: 'पशुवैद्यक', hi: 'पशु चिकित्सक', en: 'Veterinary Doctor' },
    lat: 19.0463,
    lng: 74.686,
    rating: 4.7,
    ratingsTotal: 233,
    address: { mr: 'शिंदे गल्ली, सोनई', hi: 'शिंदे गली, सोनई', en: 'Shinde Galli, Sonai' },
    phone: '9822012345',
    hours: { open: '08:00', close: '20:00' },
    days: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    id: 'pashu-arogya-kendra',
    category: VETERINARY,
    name: { mr: 'पशु आरोग्य केंद्र', hi: 'पशु स्वास्थ्य केंद्र', en: 'Pashu Arogya Kendra' },
    type: { mr: 'पशुवैद्यकीय क्लिनिक', hi: 'पशु चिकित्सा क्लिनिक', en: 'Veterinary Clinic' },
    lat: 19.0492,
    lng: 74.6888,
    rating: 4.0,
    ratingsTotal: 75,
    address: { mr: 'केंद्र रोड, सोनई', hi: 'केंद्र रोड, सोनई', en: 'Kendra Road, Sonai' },
    phone: '02424251901',
    hours: { open: '10:00', close: '18:00' },
    days: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 'bom-sonai',
    category: BANK,
    name: { mr: 'बँक ऑफ महाराष्ट्र, सोनई', hi: 'बैंक ऑफ महाराष्ट्र, सोनई', en: 'Bank of Maharashtra, Sonai' },
    type: { mr: 'बँक', hi: 'बैंक', en: 'Bank' },
    lat: 19.0446,
    lng: 74.6903,
    rating: 4.1,
    ratingsTotal: 188,
    address: { mr: 'मेन रोड, सोनई', hi: 'मेन रोड, सोनई', en: 'Main Road, Sonai' },
    phone: '18002034455',
    hours: { open: '09:30', close: '15:30' },
    days: [1, 2, 3, 4, 5],
  },
  {
    id: 'sbi-sonai',
    category: BANK,
    name: { mr: 'स्टेट बँक ऑफ इंडिया, सोनई', hi: 'स्टेट बैंक ऑफ इंडिया, सोनई', en: 'State Bank of India, Sonai' },
    type: { mr: 'बँक', hi: 'बैंक', en: 'Bank' },
    lat: 19.0415,
    lng: 74.689,
    rating: 3.9,
    ratingsTotal: 301,
    address: { mr: 'एसबीआय रोड, सोनई', hi: 'एसबीआई रोड, सोनई', en: 'SBI Road, Sonai' },
    phone: '1800112211',
    hours: { open: '09:30', close: '15:30' },
    days: [1, 2, 3, 4, 5],
  },
  {
    id: 'sonai-urban-coop',
    category: BANK,
    name: { mr: 'सोनई नागरी सहकारी बँक', hi: 'सोनई नगरीय सहकारी बैंक', en: 'Sonai Urban Co-operative Bank' },
    type: { mr: 'सहकारी बँक', hi: 'सहकारी बैंक', en: 'Co-operative Bank' },
    lat: 19.0475,
    lng: 74.6855,
    rating: 4.2,
    ratingsTotal: 97,
    address: { mr: 'सहकारी बँक चौक, सोनई', hi: 'सहकारी बैंक चौक, सोनई', en: 'Co-op Bank Chowk, Sonai' },
    phone: '02424252012',
    hours: { open: '10:00', close: '16:00' },
    days: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 'boi-atm',
    category: BANK,
    name: { mr: 'बँक ऑफ इंडिया एटीएम', hi: 'बैंक ऑफ इंडिया एटीएम', en: 'Bank of India ATM' },
    type: { mr: 'एटीएम', hi: 'एटीएम', en: 'ATM' },
    lat: 19.043,
    lng: 74.6941,
    rating: 3.7,
    ratingsTotal: 34,
    address: { mr: 'बस स्टँड, सोनई', hi: 'बस स्टैंड, सोनई', en: 'Bus Stand, Sonai' },
    phone: '',
    hours: { open: '00:00', close: '23:59' },
    days: [0, 1, 2, 3, 4, 5, 6],
    open24h: true,
  },
]

export function haversineKm(a: GeoPoint, b: GeoPoint): number {
  const toRad = (d: number) => (d * Math.PI) / 180
  const R = 6371
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(x))
}

export function formatKm(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`
  return `${km.toFixed(1)} km`
}

export function isOpenNow(place: NearbyPlace, now = new Date()): boolean {
  if (place.open24h) return true
  if (!place.days.includes(now.getDay())) return false
  const toMin = (hhmm: string) => {
    const [h, m] = hhmm.split(':').map(Number)
    return h * 60 + m
  }
  const current = now.getHours() * 60 + now.getMinutes()
  return current >= toMin(place.hours.open) && current < toMin(place.hours.close)
}

function worldPixel(lat: number, lng: number, zoom: number) {
  const x = ((lng + 180) / 360) * 256 * 2 ** zoom
  const sin = Math.sin((lat * Math.PI) / 180)
  const y = (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * 256 * 2 ** zoom
  return { x, y }
}

export function projectToPixels(
  point: GeoPoint,
  center: GeoPoint,
  zoom: number,
  width: number,
  height: number,
) {
  const p = worldPixel(point.lat, point.lng, zoom)
  const c = worldPixel(center.lat, center.lng, zoom)
  return { x: p.x - c.x + width / 2, y: p.y - c.y + height / 2 }
}

export function fitBounds(places: GeoPoint[], width: number, height: number) {
  if (places.length === 0 || width <= 0 || height <= 0) {
    return { center: VILLAGE_CENTER, zoom: 15 }
  }
  const baseZoom = 15
  const xs = places.map((p) => worldPixel(p.lat, p.lng, baseZoom).x)
  const ys = places.map((p) => worldPixel(p.lat, p.lng, baseZoom).y)
  const spanX = Math.max(...xs) - Math.min(...xs)
  const spanY = Math.max(...ys) - Math.min(...ys)
  const span = Math.max(spanX, spanY)
  const fitSpan = Math.min(width, height) * 0.68
  const zoom = Math.max(14, Math.min(17, baseZoom + Math.log2(fitSpan / Math.max(span, 1))))
  const center = {
    lat: (Math.min(...places.map((p) => p.lat)) + Math.max(...places.map((p) => p.lat))) / 2,
    lng: (Math.min(...places.map((p) => p.lng)) + Math.max(...places.map((p) => p.lng))) / 2,
  }
  return { center, zoom }
}

export function buildEmbedSrc(center: GeoPoint, zoom: number, lang: Lang): string {
  const q = `${center.lat.toFixed(5)},${center.lng.toFixed(5)}`
  return `https://www.google.com/maps?q=${q}&z=${zoom}&hl=${lang}&output=embed`
}

export function directionsUrl(place: NearbyPlace): string {
  const dest = `${place.lat.toFixed(6)},${place.lng.toFixed(6)}`
  return `https://www.google.com/maps/dir/?api=1&destination=${dest}`
}

export function viewOnMapsUrl(place: NearbyPlace): string {
  const q = `${place.lat.toFixed(6)},${place.lng.toFixed(6)}`
  return `https://www.google.com/maps?q=${q}`
}
