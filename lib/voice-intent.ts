'use client'

/**
 * Voice Intent Parser for GramMitra AI Nearby Services module.
 * Converts spoken phrases in Marathi, Hindi, or English into specific service category keys.
 */

export interface VoiceIntentResult {
  categoryKey: string
  categoryName: { en: string; hi: string; mr: string }
  cleanQuery: string
}

interface CategoryIntentRule {
  key: string
  name: { en: string; hi: string; mr: string }
  keywords: string[]
}

const CATEGORY_RULES: CategoryIntentRule[] = [
  {
    key: 'vet-doctor',
    name: { en: 'Veterinary Doctor', hi: 'पशु चिकित्सक', mr: 'पशु डॉक्टर' },
    keywords: ['veterinary doctor', 'vet doctor', 'animal doctor', 'पशुवैद्यक', 'पशु डॉक्टर', 'जनावरांचे डॉक्टर', 'पशू डॉक्टर'],
  },
  {
    key: 'vet-hospital',
    name: { en: 'Veterinary Hospital', hi: 'पशु चिकित्सालय', mr: 'पशु रुग्णालय' },
    keywords: ['veterinary hospital', 'vet hospital', 'animal hospital', 'पशु दवाखाना', 'पशू रुग्णालय', 'पशुवैद्यकीय रुग्णालय'],
  },
  {
    key: 'government-hospital',
    name: { en: 'Government Hospital', hi: 'सरकारी अस्पताल', mr: 'शासकीय रुग्णालय' },
    keywords: ['government hospital', 'govt hospital', 'hospital', 'सरकारी दवाखाना', 'शासकीय रुग्णालय', 'सरकारी रुग्णालय', 'हॉस्पिटल', 'दवाखाना', 'अस्पताल'],
  },
  {
    key: 'phc',
    name: { en: 'Primary Health Centre (PHC)', hi: 'प्राथमिक स्वास्थ्य केंद्र (PHC)', mr: 'प्राथमिक आरोग्य केंद्र (PHC)' },
    keywords: ['primary health centre', 'phc', 'phc center', 'प्राथमिक आरोग्य केंद्र', 'आरोग्य केंद्र'],
  },
  {
    key: 'school',
    name: { en: 'School', hi: 'स्कूल / विद्यालय', mr: 'शाळा' },
    keywords: ['school', 'primary school', 'शाळा', 'शाळा दाखव', 'शाला', 'स्कूल', 'विद्यालय'],
  },
  {
    key: 'college',
    name: { en: 'College', hi: 'कॉलेज / महाविद्यालय', mr: 'कॉलेज' },
    keywords: ['college', 'junior college', 'कॉलेज', 'महाविद्यालय', 'उच्च माध्यमिक'],
  },
  {
    key: 'gram-panchayat',
    name: { en: 'Gram Panchayat', hi: 'ग्राम पंचायत', mr: 'ग्रामपंचायत' },
    keywords: ['gram panchayat', 'panchayat office', 'ग्रामपंचायत', 'ग्राम पंचायत', 'गाव कार्यालय', 'ग्रामपंचायत कार्यालय'],
  },
  {
    key: 'talathi-office',
    name: { en: 'Talathi Office', hi: 'तलाठी कार्यालय', mr: 'तलाठी कार्यालय' },
    keywords: ['talathi office', 'talathi', 'तलाठी', 'तलाठी कार्यालय', 'सजा कार्यालय'],
  },
  {
    key: 'tahsil-office',
    name: { en: 'Tehsil Office', hi: 'तहसील कार्यालय', mr: 'तहसील कार्यालय' },
    keywords: ['tehsil office', 'tahsil office', 'tehsildar', 'तहसील', 'तहसीलदार', 'तहसील कार्यालय', 'तालुका कार्यालय'],
  },
  {
    key: 'police-station',
    name: { en: 'Police Station', hi: 'पुलिस स्टेशन', mr: 'पोलीस स्टेशन' },
    keywords: ['police station', 'police', 'पोलीस स्टेशन', 'पुलिस स्टेशन', 'पोलीस ठाणे', 'ठाणे'],
  },
  {
    key: 'bank',
    name: { en: 'Bank', hi: 'बैंक', mr: 'बँक' },
    keywords: ['bank', 'cooperative bank', 'बँक', 'बैंक', 'पैसे'],
  },
  {
    key: 'atm',
    name: { en: 'ATM', hi: 'एटीएम', mr: 'एटीएम' },
    keywords: ['atm', 'cash machine', 'एटीएम', 'atm machine'],
  },
  {
    key: 'post-office',
    name: { en: 'Post Office', hi: 'डाकघर', mr: 'पोस्ट ऑफिस' },
    keywords: ['post office', 'india post', 'पोस्ट ऑफिस', 'डाकघर', 'टपाल कार्यालय', 'पोस्ट'],
  },
  {
    key: 'medical-store',
    name: { en: 'Medical Store', hi: 'मेडिकल स्टोर', mr: 'मेडिकल दुकान' },
    keywords: ['medical store', 'pharmacy', 'chemist', 'मेडिकल', 'औषध दुकान', 'मेडिकल स्टोर', 'फार्मेसी'],
  },
  {
    key: 'eseva-center',
    name: { en: 'e-Seva Center', hi: 'ई-सेवा केंद्र', mr: 'ई-सेवा केंद्र' },
    keywords: ['e-seva', 'eseva', 'aaple sarkar', 'ई सेवा', 'इ सेवा', 'ई-सेवा', 'आपले सरकार'],
  },
  {
    key: 'csc-center',
    name: { en: 'CSC Center', hi: 'सीएससी केंद्र', mr: 'सीएससी केंद्र' },
    keywords: ['csc center', 'csc', 'digital seva', 'सीएससी', 'कॉमन सर्व्हिस'],
  },
  {
    key: 'milk-collection',
    name: { en: 'Milk Collection Center', hi: 'दूध संकलन केंद्र', mr: 'दूध संकलन डेअरी' },
    keywords: ['milk collection', 'milk dairy', 'dairy', 'दूध संकलन', 'दूध डेअरी', 'डेअरी', 'दूध संकलन केंद्र'],
  },
  {
    key: 'krishi-seva',
    name: { en: 'Agriculture Shop (Krishi Seva)', hi: 'कृषि सेवा केंद्र', mr: 'कृषी सेवा केंद्र' },
    keywords: ['krishi seva', 'agriculture shop', 'fertilizer shop', 'seed shop', 'कृषी सेवा', 'कृषि सेवा', 'खत दुकान', 'बियाणे दुकान'],
  },
  {
    key: 'seed-shop',
    name: { en: 'Seed Shop', hi: 'बीज भंडार', mr: 'बियाणे दुकान' },
    keywords: ['seed shop', 'seeds', 'बियाणे दुकान', 'बीज भंडार', 'बियाणे'],
  },
  {
    key: 'fertilizer-shop',
    name: { en: 'Fertilizer Shop', hi: 'खाद दुकान', mr: 'खत दुकान' },
    keywords: ['fertilizer shop', 'fertilizer', 'खत दुकान', 'खाद दुकान', 'खत'],
  },
  {
    key: 'bus-stand',
    name: { en: 'Bus Stand', hi: 'बस स्टैंड', mr: 'बस स्थानक' },
    keywords: ['bus stand', 'st stand', 'bus stop', 'बस स्थानक', 'बस स्टँड', 'एसटी स्टँड', 'बस स्टैंड'],
  },
  {
    key: 'railway-station',
    name: { en: 'Railway Station', hi: 'रेलवे स्टेशन', mr: 'रेल्वे स्टेशन' },
    keywords: ['railway station', 'train station', 'रेल्वे स्टेशन', 'रेलवे स्टेशन', 'स्टेशन'],
  },
  {
    key: 'market',
    name: { en: 'Market (Mandi)', hi: 'बाजार (मंडी)', mr: 'बाजार / मंडी' },
    keywords: ['market', 'mandi', 'bazar', 'बाजार', 'मंडी', 'मार्केट', 'बाजार समिती'],
  },
]

export function parseVoiceCategoryIntent(speechText: string): VoiceIntentResult {
  const normalized = speechText.toLowerCase().trim()

  for (const rule of CATEGORY_RULES) {
    for (const keyword of rule.keywords) {
      if (normalized.includes(keyword.toLowerCase())) {
        return {
          categoryKey: rule.key,
          categoryName: rule.name,
          cleanQuery: keyword,
        }
      }
    }
  }

  // Default fallback if no specific category matched
  return {
    categoryKey: 'all',
    categoryName: { en: 'Nearby Places', hi: 'नजदीकी स्थान', mr: 'जवळपासच्या जागा' },
    cleanQuery: normalized,
  }
}
