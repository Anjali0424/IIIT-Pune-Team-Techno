'use client'

import type { LangText } from '@/lib/data'

export interface MockPlace {
  id: string
  name: LangText
  address: LangText
  phone?: string
  rating?: number
  userRatingsTotal?: number
  isOpen: boolean
  type: string
  lat: number
  lng: number
}

// Categories map covering all 24+ rural services
export const CATEGORY_MAP: Record<string, { en: string; hi: string; mr: string; emoji: string }> = {
  'school': { en: 'School', hi: 'विद्यालय / स्कूल', mr: 'शाळा', emoji: '🏫' },
  'college': { en: 'College', hi: 'महाविद्यालय / कॉलेज', mr: 'महाविद्यालय / कॉलेज', emoji: '🎓' },
  'government-hospital': { en: 'Government Hospital', hi: 'सरकारी अस्पताल', mr: 'शासकीय रुग्णालय', emoji: '🏥' },
  'private-hospital': { en: 'Private Hospital', hi: 'निजी अस्पताल', mr: 'खाजगी रुग्णालय', emoji: '🏥' },
  'phc': { en: 'Primary Health Centre (PHC)', hi: 'प्राथमिक स्वास्थ्य केंद्र (PHC)', mr: 'प्राथमिक आरोग्य केंद्र (PHC)', emoji: '🩺' },
  'vet-doctor': { en: 'Veterinary Doctor', hi: 'पशु चिकित्सक', mr: 'पशुवैद्यकीय डॉक्टर', emoji: '👨‍⚕️' },
  'vet-hospital': { en: 'Veterinary Hospital', hi: 'पशु चिकित्सालय', mr: 'पशुवैद्यकीय रुग्णालय', emoji: '🐄' },
  'gram-panchayat': { en: 'Gram Panchayat', hi: 'ग्राम पंचायत', mr: 'ग्रामपंचायत कार्यालय', emoji: '🏛️' },
  'talathi-office': { en: 'Talathi Office', hi: 'तलाठी कार्यालय', mr: 'तलाठी कार्यालय', emoji: '📋' },
  'tahsil-office': { en: 'Tehsil Office', hi: 'तहसील कार्यालय', mr: 'तहसील कार्यालय', emoji: '🏢' },
  'police-station': { en: 'Police Station', hi: 'पुलिस स्टेशन', mr: 'पोलीस स्टेशन', emoji: '👮' },
  'bank': { en: 'Bank', hi: 'बैंक', mr: 'बँक', emoji: '🏦' },
  'atm': { en: 'ATM', hi: 'एटीएम', mr: 'एटीएम', emoji: '🏧' },
  'post-office': { en: 'Post Office', hi: 'डाकघर / पोस्ट ऑफिस', mr: 'टपाल कार्यालय / पोस्ट ऑफिस', emoji: '📮' },
  'medical-store': { en: 'Medical Store', hi: 'मेडिकल स्टोर / फार्मेसी', mr: 'औषध दुकान (मेडिकल)', emoji: '💊' },
  'eseva-center': { en: 'e-Seva Center', hi: 'ई-सेवा केंद्र', mr: 'आपले सरकार ई-सेवा केंद्र', emoji: '💻' },
  'csc-center': { en: 'CSC Center', hi: 'सीएससी केंद्र (CSC)', mr: 'सीएससी केंद्र (CSC)', emoji: '🖥️' },
  'milk-collection': { en: 'Milk Collection Center', hi: 'दूध संकलन केंद्र (डेयरी)', mr: 'दूध संकलन केंद्र (डेअरी)', emoji: '🥛' },
  'krishi-seva': { en: 'Agriculture Shop (Krishi Seva)', hi: 'कृषि सेवा केंद्र', mr: 'कृषी सेवा केंद्र', emoji: '🌾' },
  'seed-shop': { en: 'Seed Shop', hi: 'बीज भंडार', mr: 'बियाणे दुकान', emoji: '🌱' },
  'fertilizer-shop': { en: 'Fertilizer Shop', hi: 'खाद दुकान', mr: 'खत दुकान', emoji: '🧪' },
  'government-office': { en: 'Government Office', hi: 'सरकारी कार्यालय', mr: 'शासकीय कार्यालय', emoji: '🏛️' },
  'agri-office': { en: 'Agriculture Office', hi: 'कृषि कार्यालय', mr: 'कृषी अधिकारी कार्यालय', emoji: '🌿' },
  'bus-stand': { en: 'Bus Stand', hi: 'बस स्टैंड', mr: 'एस.टी. बस स्थानक', emoji: '🚌' },
  'railway-station': { en: 'Railway Station', hi: 'रेलवे स्टेशन', mr: 'रेल्वे स्टेशन', emoji: '<ctrl42>' },
  'market': { en: 'Market (Mandi)', hi: 'बाजार (मंडी)', mr: 'बाजार / मंडी', emoji: '🛒' },
  'fire-station': { en: 'Fire Station', hi: 'दमकल केंद्र', mr: 'अग्निशमन केंद्र', emoji: '🚒' },
  'petrol-pump': { en: 'Petrol Pump', hi: 'पेट्रोल पंप', mr: 'पेट्रोल पंप', emoji: '⛽' },
  'grocery': { en: 'Grocery Shop', hi: 'किराना दुकान', mr: 'किराणा दुकान', emoji: '🏪' },
}

export const MOCK_PLACES: MockPlace[] = [
  // ================= PUNE / MAHARASHTRA RURAL SEEDS =================
  {
    id: 'mock-school-1',
    name: {
      en: 'ZP Primary School Ghodegaon',
      hi: 'जिला परिषद प्राथमिक शाला घोडेगांव',
      mr: 'जिल्हा परिषद प्राथमिक शाळा घोडेगाव',
    },
    address: {
      en: 'Main Bazar Road, Ghodegaon, Ambegaon, Pune - 410504',
      hi: 'मुख्य बाजार मार्ग, घोडेगांव, आंबेगांव, पुणे - 410504',
      mr: 'मुख्य बाजार रस्ता, घोडेगाव, आंबेगाव, पुणे - 410504',
    },
    phone: '+91 9876543210',
    rating: 4.7,
    userRatingsTotal: 42,
    isOpen: true,
    type: 'school',
    lat: 19.0430,
    lng: 73.8320,
  },
  {
    id: 'mock-college-1',
    name: {
      en: 'Arts & Commerce Junior College Manchar',
      hi: 'कला और वाणिज्य कनिष्ठ महाविद्यालय मंचर',
      mr: 'कला व वाणिज्य कनिष्ठ महाविद्यालय मंचर',
    },
    address: {
      en: 'College Road, Manchar, Pune - 410503',
      hi: 'कॉलेज मार्ग, मंचर, पुणे - 410503',
      mr: 'कॉलेज रोड, मंचर, पुणे - 410503',
    },
    phone: '+91 2133 224050',
    rating: 4.5,
    userRatingsTotal: 128,
    isOpen: true,
    type: 'college',
    lat: 19.0110,
    lng: 73.9450,
  },
  {
    id: 'mock-govt-hosp-1',
    name: {
      en: 'Sub-District Civil Government Hospital',
      hi: 'उप-उपजिल्हा सरकारी रुग्णालय',
      mr: 'उप-जिल्हा शासकीय रुग्णालय मंचर',
    },
    address: {
      en: 'Pune-Nagar Road, Manchar, Pune - 410503',
      hi: 'पुणे-नगर मार्ग, मंचर, पुणे - 410503',
      mr: 'पुणे-नगर रस्ता, मंचर, पुणे - 410503',
    },
    phone: '+91 2133 222100',
    rating: 4.4,
    userRatingsTotal: 210,
    isOpen: true,
    type: 'government-hospital',
    lat: 19.0090,
    lng: 73.9410,
  },
  {
    id: 'mock-phc-1',
    name: {
      en: 'Primary Health Centre (PHC) Ghodegaon',
      hi: 'प्राथमिक स्वास्थ्य केंद्र घोडेगांव',
      mr: 'प्राथमिक आरोग्य केंद्र (PHC) घोडेगाव',
    },
    address: {
      en: 'Near Talathi Office, Ghodegaon - 410504',
      hi: 'तलाठी कार्यालय के पास, घोडेगांव - 410504',
      mr: 'तलाठी कार्यालयाजवळ, घोडेगाव - 410504',
    },
    phone: '+91 2133 225120',
    rating: 4.3,
    userRatingsTotal: 64,
    isOpen: true,
    type: 'phc',
    lat: 19.0415,
    lng: 73.8340,
  },
  {
    id: 'mock-vet-doc-1',
    name: {
      en: 'Dr. Patil Veterinary Clinic',
      hi: 'डॉ. पाटिल पशु क्लिनिक',
      mr: 'डॉ. पाटील पशुवैद्यकीय क्लिनिक',
    },
    address: {
      en: 'Main Chowk, Narayangaon, Pune - 410504',
      hi: 'मुख्य चौक, नारायणगाव, पुणे - 410504',
      mr: 'मुख्य चौक, नारायणगाव, पुणे - 410504',
    },
    phone: '+91 9822011223',
    rating: 4.8,
    userRatingsTotal: 39,
    isOpen: true,
    type: 'vet-doctor',
    lat: 19.1180,
    lng: 73.9750,
  },
  {
    id: 'mock-vet-hosp-1',
    name: {
      en: 'Government Veterinary Hospital Junnar',
      hi: 'सरकारी पशु चिकित्सालय जुन्नर',
      mr: 'शासकीय पशुवैद्यकीय रुग्णालय जुन्नर',
    },
    address: {
      en: 'ST Stand Road, Junnar, Pune - 410502',
      hi: 'एसटी स्टैंड मार्ग, जुन्नर, पुणे - 410502',
      mr: 'एस.टी. स्टँड रोड, जुन्नर, पुणे - 410502',
    },
    phone: '+91 2132 242045',
    rating: 4.6,
    userRatingsTotal: 58,
    isOpen: true,
    type: 'vet-hospital',
    lat: 19.2120,
    lng: 73.8790,
  },
  {
    id: 'mock-gp-1',
    name: {
      en: 'Gram Panchayat Office Manchar',
      hi: 'ग्राम पंचायत कार्यालय मंचर',
      mr: 'ग्रामपंचायत कार्यालय मंचर',
    },
    address: {
      en: 'Shivaji Chowk, Manchar, Pune - 410503',
      hi: 'शिवाजी चौक, मंचर, पुणे - 410503',
      mr: 'शिवाजी चौक, मंचर, पुणे - 410503',
    },
    phone: '+91 2133 223010',
    rating: 4.2,
    userRatingsTotal: 31,
    isOpen: true,
    type: 'gram-panchayat',
    lat: 19.0060,
    lng: 73.9385,
  },
  {
    id: 'mock-talathi-1',
    name: {
      en: 'Talathi Office Ghodegaon',
      hi: 'तलाठी कार्यालय घोडेगांव',
      mr: 'तलाठी कार्यालय (सजा घोडेगाव)',
    },
    address: {
      en: 'Tehsil Road, Ghodegaon - 410504',
      hi: 'तहसील मार्ग, घोडेगांव - 410504',
      mr: 'तहसील रोड, घोडेगाव - 410504',
    },
    phone: '+91 9423012345',
    rating: 4.1,
    userRatingsTotal: 19,
    isOpen: true,
    type: 'talathi-office',
    lat: 19.0425,
    lng: 73.8310,
  },
  {
    id: 'mock-tehsil-1',
    name: {
      en: 'Tehsil / Tahsildar Office Junnar',
      hi: 'तहसीलदार कार्यालय जुन्नर',
      mr: 'तहसीलदार कार्यालय जुन्नर',
    },
    address: {
      en: 'Kacheri Road, Junnar - 410502',
      hi: 'कचेरी मार्ग, जुन्नर - 410502',
      mr: 'कचेरी रोड, जुन्नर - 410502',
    },
    phone: '+91 2132 242001',
    rating: 4.0,
    userRatingsTotal: 72,
    isOpen: true,
    type: 'tahsil-office',
    lat: 19.2095,
    lng: 73.8755,
  },
  {
    id: 'mock-police-1',
    name: {
      en: 'Manchar Police Station',
      hi: 'मंचर पुलिस स्टेशन',
      mr: 'मंचर पोलीस ठाणे',
    },
    address: {
      en: 'Highway Chowk, Manchar, Pune - 410503',
      hi: 'हाईवे चौक, मंचर, पुणे - 410503',
      mr: 'हायवे चौक, मंचर, पुणे - 410503',
    },
    phone: '+91 2133 222333',
    rating: 4.2,
    userRatingsTotal: 95,
    isOpen: true,
    type: 'police-station',
    lat: 19.0075,
    lng: 73.9405,
  },
  {
    id: 'mock-bank-1',
    name: {
      en: 'Bank of Maharashtra & ATM',
      hi: 'बैंक ऑफ महाराष्ट्र और एटीएम',
      mr: 'बँक ऑफ महाराष्ट्र व एटीएम मंचर',
    },
    address: {
      en: 'Bazar Peth, Manchar, Pune - 410503',
      hi: 'बाजार पेठ, मंचर, पुणे - 410503',
      mr: 'बाजार पेठ, मंचर, पुणे - 410503',
    },
    phone: '+91 2133 222040',
    rating: 4.4,
    userRatingsTotal: 160,
    isOpen: true,
    type: 'bank',
    lat: 19.0055,
    lng: 73.9390,
  },
  {
    id: 'mock-atm-1',
    name: {
      en: 'SBI 24/7 ATM Machine',
      hi: 'एसबीआई 24/7 एटीएम',
      mr: 'स्टेट बँक ऑफ इंडिया एटीएम',
    },
    address: {
      en: 'ST Bus Stand Road, Manchar - 410503',
      hi: 'एसटी बस स्टैंड मार्ग, मंचर - 410503',
      mr: 'एस.टी. बस स्थानक रस्ता, मंचर - 410503',
    },
    rating: 4.3,
    userRatingsTotal: 88,
    isOpen: true,
    type: 'atm',
    lat: 19.0065,
    lng: 73.9398,
  },
  {
    id: 'mock-post-1',
    name: {
      en: 'Sub Post Office (India Post)',
      hi: 'डाकघर (इंडिया पोस्ट)',
      mr: 'उप टपाल कार्यालय (पोस्ट ऑफिस) मंचर',
    },
    address: {
      en: 'Post Office Lane, Manchar - 410503',
      hi: 'पोस्ट ऑफिस लेन, मंचर - 410503',
      mr: 'पोस्ट ऑफिस गल्ली, मंचर - 410503',
    },
    phone: '+91 2133 222150',
    rating: 4.1,
    userRatingsTotal: 44,
    isOpen: true,
    type: 'post-office',
    lat: 19.0070,
    lng: 73.9380,
  },
  {
    id: 'mock-medical-1',
    name: {
      en: 'Mauli Medical & Pharmacy Store',
      hi: 'माऊली मेडिकल एंड फार्मेसी',
      mr: 'माऊली मेडिकल व औषध दुकान',
    },
    address: {
      en: 'Opposite Government Hospital, Manchar - 410503',
      hi: 'सरकारी अस्पताल के सामने, मंचर - 410503',
      mr: 'शासकीय रुग्णालयासमोर, मंचर - 410503',
    },
    phone: '+91 9890123456',
    rating: 4.6,
    userRatingsTotal: 112,
    isOpen: true,
    type: 'medical-store',
    lat: 19.0092,
    lng: 73.9415,
  },
  {
    id: 'mock-eseva-1',
    name: {
      en: 'Aaple Sarkar e-Seva Center',
      hi: 'आपले सरकार ई-सेवा केंद्र',
      mr: 'आपले सरकार डिजिटल ई-सेवा केंद्र',
    },
    address: {
      en: 'Near Gram Panchayat, Manchar - 410503',
      hi: 'ग्राम पंचायत के पास, मंचर - 410503',
      mr: 'ग्रामपंचायतीजवळ, मंचर - 410503',
    },
    phone: '+91 9765432109',
    rating: 4.5,
    userRatingsTotal: 56,
    isOpen: true,
    type: 'eseva-center',
    lat: 19.0062,
    lng: 73.9388,
  },
  {
    id: 'mock-csc-1',
    name: {
      en: 'Common Service Centre (CSC) Digital Seva',
      hi: 'सीएससी डिजिटल सेवा केंद्र',
      mr: 'सीएससी कॉमन सर्व्हिस सेंटर',
    },
    address: {
      en: 'Main Bazar, Ghodegaon - 410504',
      hi: 'मुख्य बाजार, घोडेगांव - 410504',
      mr: 'मुख्य बाजार, घोडेगाव - 410504',
    },
    phone: '+91 9422012345',
    rating: 4.4,
    userRatingsTotal: 27,
    isOpen: true,
    type: 'csc-center',
    lat: 19.0420,
    lng: 73.8330,
  },
  {
    id: 'mock-milk-1',
    name: {
      en: 'Gokul & Chitale Milk Collection Dairy',
      hi: 'गोकुल व चितले दूध संकलन केंद्र',
      mr: 'गोकुळ व चितळे दूध संकलन केंद्र (डेअरी)',
    },
    address: {
      en: 'Milk Dairy Road, Manchar - 410503',
      hi: 'दूध डेअरी मार्ग, मंचर - 410503',
      mr: 'दूध डेअरी रोड, मंचर - 410503',
    },
    phone: '+91 9860112233',
    rating: 4.6,
    userRatingsTotal: 83,
    isOpen: true,
    type: 'milk-collection',
    lat: 19.0085,
    lng: 73.9430,
  },
  {
    id: 'mock-krishi-1',
    name: {
      en: 'Shetkari Krishi Seva Kendra & Agro Agency',
      hi: 'शेतकरी कृषि सेवा केंद्र',
      mr: 'शेतकरी कृषी सेवा केंद्र व ॲग्रो',
    },
    address: {
      en: 'APMC Market Yard, Manchar - 410503',
      hi: 'मार्केट यार्ड, मंचर - 410503',
      mr: 'मार्केट यार्ड, मंचर - 410503',
    },
    phone: '+91 9422055667',
    rating: 4.7,
    userRatingsTotal: 145,
    isOpen: true,
    type: 'krishi-seva',
    lat: 19.0095,
    lng: 73.9422,
  },
  {
    id: 'mock-seed-1',
    name: {
      en: 'Mahabeej Certified Seed Shop',
      hi: 'महाबीज प्रमाणित बीज दुकान',
      mr: 'महाबीज प्रमाणित बियाणे दुकान',
    },
    address: {
      en: 'Mandi Road, Narayangaon - 410504',
      hi: 'मंडी मार्ग, नारायणगाव - 410504',
      mr: 'मंडी रोड, नारायणगाव - 410504',
    },
    phone: '+91 9822334455',
    rating: 4.5,
    userRatingsTotal: 62,
    isOpen: true,
    type: 'seed-shop',
    lat: 19.1175,
    lng: 73.9740,
  },
  {
    id: 'mock-fertilizer-1',
    name: {
      en: 'IFFCO & Mahafed Fertilizer Depot',
      hi: 'इफको और महाफेड खाद डिपो',
      mr: 'इफको व महाफेड खत विक्री केंद्र',
    },
    address: {
      en: 'Co-op Society Complex, Manchar - 410503',
      hi: 'को-ऑप सोसाइटी परिसर, मंचर - 410503',
      mr: 'सोसायटी संकुल, मंचर - 410503',
    },
    phone: '+91 9766554433',
    rating: 4.6,
    userRatingsTotal: 77,
    isOpen: true,
    type: 'fertilizer-shop',
    lat: 19.0100,
    lng: 73.9428,
  },
  {
    id: 'mock-bus-1',
    name: {
      en: 'MSRTC Bus Stand Depot Manchar',
      hi: 'एमएसआरटीसी बस स्टैंड मंचर',
      mr: 'एस.टी. बस स्थानक व आगार मंचर',
    },
    address: {
      en: 'Bus Stand Chowk, Manchar - 410503',
      hi: 'बस स्टैंड चौक, मंचर - 410503',
      mr: 'बस स्थानक चौक, मंचर - 410503',
    },
    phone: '+91 2133 222020',
    rating: 4.1,
    userRatingsTotal: 340,
    isOpen: true,
    type: 'bus-stand',
    lat: 19.0068,
    lng: 73.9395,
  },
  {
    id: 'mock-railway-1',
    name: {
      en: 'Talegaon Railway Station',
      hi: 'तलेगांव रेलवे स्टेशन',
      mr: 'तळेगाव रेल्वे स्टेशन',
    },
    address: {
      en: 'Station Road, Talegaon Dabhade - 410506',
      hi: 'स्टेशन मार्ग, तळेगांव दाभाडे - 410506',
      mr: 'स्टेशन रोड, तळेगाव दाभाडे - 410506',
    },
    rating: 4.2,
    userRatingsTotal: 520,
    isOpen: true,
    type: 'railway-station',
    lat: 18.7305,
    lng: 73.6765,
  },

  // ================= DYNAMIC FALLBACK GENERIC PLACES =================
  // Positioned close to Pune default center, automatically offset if user location changes!
  {
    id: 'generic-school',
    name: {
      en: 'ZP Model Primary School',
      hi: 'जिला परिषद आदर्श प्राथमिक शाला',
      mr: 'जिल्हा परिषद आदर्श प्राथमिक शाळा',
    },
    address: {
      en: 'Gram Panchayat Road, Village Center',
      hi: 'ग्राम पंचायत मार्ग, गांव केंद्र',
      mr: 'ग्रामपंचायत रोड, गाव केंद्र',
    },
    phone: '+91 9876501234',
    rating: 4.7,
    userRatingsTotal: 48,
    isOpen: true,
    type: 'school',
    lat: 18.5215,
    lng: 73.8580,
  },
  {
    id: 'generic-vet-hosp',
    name: {
      en: 'GramMitra Veterinary Care Center',
      hi: 'ग्राममित्र पशु चिकित्सालय',
      mr: 'ग्राममित्र पशुवैद्यकीय रुग्णालय',
    },
    address: {
      en: 'Near Milk Collection Dairy, Village Road',
      hi: 'दूध संकलन केंद्र के पास, गांव रोड',
      mr: 'दूध संकलन डेअरी जवळ, गाव रस्ता',
    },
    phone: '+91 9988776655',
    rating: 4.8,
    userRatingsTotal: 65,
    isOpen: true,
    type: 'vet-hospital',
    lat: 18.5204,
    lng: 73.8567,
  },
  {
    id: 'generic-vet-doc',
    name: {
      en: 'Dr. Anand Shinde (Vet Doctor)',
      hi: 'डॉ. आनंद शिंदे (पशु चिकित्सक)',
      mr: 'डॉ. आनंद शिंदे (पशुवैद्यकीय डॉक्टर)',
    },
    address: {
      en: 'Shivaji Chowk, Main Village',
      hi: 'शिवाजी चौक, मुख्य गांव',
      mr: 'शिवाजी चौक, मुख्य गाव',
    },
    phone: '+91 9011223344',
    rating: 4.9,
    userRatingsTotal: 42,
    isOpen: true,
    type: 'vet-doctor',
    lat: 18.5180,
    lng: 73.8530,
  },
  {
    id: 'generic-gram-panchayat',
    name: {
      en: 'Gram Panchayat Office Bhavan',
      hi: 'ग्राम पंचायत कार्यालय भवन',
      mr: 'ग्रामपंचायत कार्यालय भवन',
    },
    address: {
      en: 'Main Chowk, Village Center',
      hi: 'मुख्य चौक, गांव केंद्र',
      mr: 'मुख्य चौक, गाव केंद्र',
    },
    phone: '+91 20 25531234',
    rating: 4.3,
    userRatingsTotal: 34,
    isOpen: true,
    type: 'gram-panchayat',
    lat: 18.5220,
    lng: 73.8600,
  },
  {
    id: 'generic-bank',
    name: {
      en: 'District Central Co-operative Bank & ATM',
      hi: 'जिला मध्यवर्ती सहकारी बैंक व एटीएम',
      mr: 'जिल्हा मध्यवर्ती सहकारी बँक व एटीएम',
    },
    address: {
      en: 'Bazar Peth, Village Center',
      hi: 'बाजार पेठ, गांव केंद्र',
      mr: 'बाजार पेठ, गाव केंद्र',
    },
    phone: '+91 20 25678900',
    rating: 4.5,
    userRatingsTotal: 89,
    isOpen: true,
    type: 'bank',
    lat: 18.5195,
    lng: 73.8570,
  },
  {
    id: 'generic-krishi',
    name: {
      en: 'Krishi Seva Kendra & Seed Depot',
      hi: 'कृषि सेवा केंद्र और बीज भंडार',
      mr: 'कृषी सेवा केंद्र व खत-बियाणे दुकान',
    },
    address: {
      en: 'Opposite State Bank, Main Road',
      hi: 'स्टेट बैंक के सामने, मुख्य रोड',
      mr: 'स्टेट बँकेच्या समोर, मुख्य रस्ता',
    },
    phone: '+91 9890123456',
    rating: 4.6,
    userRatingsTotal: 55,
    isOpen: true,
    type: 'krishi-seva',
    lat: 18.5190,
    lng: 73.8580,
  },
]

/**
 * Helper to retrieve mock places relative to user location.
 * If user location is in a different region, generic places shift around user coordinates.
 */
export function getOfflineNearbyPlaces(
  centerLat: number,
  centerLng: number,
  categoryType: string = 'all'
): MockPlace[] {
  const shiftedPlaces = MOCK_PLACES.map((p) => {
    if (p.id.startsWith('generic-')) {
      const latOffset = p.lat - 18.5204
      const lngOffset = p.lng - 73.8567
      return {
        ...p,
        lat: centerLat + latOffset,
        lng: centerLng + lngOffset,
      }
    }
    return p
  })

  return shiftedPlaces.filter((p) => {
    if (categoryType === 'all') return true

    // Category grouping logic
    if (categoryType === 'school' || categoryType === 'education') {
      return ['school', 'college'].includes(p.type)
    }
    if (categoryType === 'hospital' || categoryType === 'health') {
      return ['government-hospital', 'private-hospital', 'phc', 'vet-hospital', 'medical-store'].includes(p.type)
    }
    if (categoryType === 'vet') {
      return ['vet-hospital', 'vet-doctor'].includes(p.type)
    }
    if (categoryType === 'emergency') {
      return ['government-hospital', 'phc', 'vet-hospital', 'police-station', 'fire-station'].includes(p.type)
    }
    if (categoryType === 'dairy') {
      return ['milk-collection', 'vet-hospital', 'vet-doctor'].includes(p.type)
    }
    if (categoryType === 'government') {
      return ['gram-panchayat', 'talathi-office', 'tahsil-office', 'government-office', 'agri-office', 'police-station', 'eseva-center', 'csc-center'].includes(p.type)
    }
    if (categoryType === 'krishi') {
      return ['krishi-seva', 'seed-shop', 'fertilizer-shop', 'agri-office', 'market'].includes(p.type)
    }
    if (categoryType === 'finance') {
      return ['bank', 'atm', 'post-office'].includes(p.type)
    }

    return p.type === categoryType
  })
}
