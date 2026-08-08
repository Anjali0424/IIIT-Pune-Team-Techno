import type { Lang } from './data'

export const LANG_LABELS: { id: Lang; label: string }[] = [
  { id: 'mr', label: 'मराठी' },
  { id: 'hi', label: 'हिंदी' },
  { id: 'en', label: 'English' },
]

// BCP-47 codes for the Web Speech API
export const SPEECH_LOCALE: Record<Lang, string> = {
  mr: 'mr-IN',
  hi: 'hi-IN',
  en: 'en-IN',
}

export const UI = {
  greetingLine1: {
    mr: 'ग्राममित्र AI मध्ये आपले स्वागत आहे! 🌾',
    hi: 'ग्राममित्र AI में आपका स्वागत है! 🌾',
    en: 'Welcome to GramMitra AI! 🌾',
  },
  greetingLine2: {
    mr: 'तुमच्या गावातील शेती, पशुपालन, सरकारी योजना, हवामान आणि दैनंदिन समस्यांसाठी तुमचा AI सहाय्यक.',
    hi: 'खेती, पशुपालन, सरकारी योजनाओं, मौसम और गांव की समस्याओं के लिए आपका AI सहायक।',
    en: 'Your AI assistant for farming, livestock, government schemes, weather and village services.',
  },
  tapToSpeak: { mr: 'बोलण्यासाठी दाबा', hi: 'बोलने के लिए दबाएं', en: 'Tap to Speak' },
  listening: { mr: 'ऐकत आहे...', hi: 'सुन रहा हूँ...', en: 'Listening...' },
  speaking: { mr: 'बोलत आहे...', hi: 'बोल रहा हूँ...', en: 'Speaking...' },
  stop: { mr: 'थांबा', hi: 'रुकें', en: 'Stop' },
  askAnything: {
    mr: 'तुमच्या जनावरांबद्दल काहीही विचारा',
    hi: 'अपने पशुओं के बारे में कुछ भी पूछें',
    en: 'Ask anything about your animals',
  },
  you: { mr: 'तुम्ही', hi: 'आप', en: 'You' },
  assistant: { mr: 'सहाय्यक', hi: 'सहायक', en: 'Assistant' },
  quickHelp: { mr: 'पटकन विचारा', hi: 'जल्दी पूछें', en: 'Quick questions' },
  disclaimer: {
    mr: 'ही माहिती फक्त जागरूकतेसाठी आहे आणि पशुवैद्यकीय सल्ल्याला पर्याय नाही.',
    hi: 'यह जानकारी केवल जागरूकता के लिए है और पशु चिकित्सा सलाह का विकल्प नहीं है।',
    en: 'This guidance is for awareness only and does not replace professional veterinary advice.',
  },
  online: { mr: 'AI शी जोडलेले', hi: 'AI से जुड़ा हुआ', en: 'Connected to AI' },
  offline: { mr: 'ऑफलाइन AI उपलब्ध', hi: 'ऑफलाइन AI उपलब्ध', en: 'Offline AI Available' },
  offlineNote: {
    mr: 'इंटरनेटशिवाय सामान्य पशु मार्गदर्शन उपलब्ध आहे.',
    hi: 'इंटरनेट के बिना सामान्य पशु मार्गदर्शन उपलब्ध है।',
    en: 'Common livestock guidance is available without internet.',
  },
  animalType: { mr: 'जनावराचा प्रकार', hi: 'पशु का प्रकार', en: 'Animal Type' },
  symptoms: { mr: 'लक्षणे', hi: 'लक्षण', en: 'Symptoms' },
  symptomsPlaceholder: {
    mr: 'उदा. ताप, खात नाही, तोंडात फोड',
    hi: 'जैसे बुखार, खाना न खाना, मुंह में छाले',
    en: 'e.g. fever, not eating, mouth blisters',
  },
  checkHealth: { mr: 'तपासा', hi: 'जाँचें', en: 'Check Health' },
  possibleCauses: { mr: 'संभाव्य कारणे', hi: 'संभावित कारण', en: 'Possible Causes' },
  precautions: { mr: 'त्वरित काळजी', hi: 'तत्काल सावधानियाँ', en: 'Immediate Precautions' },
  recommendedFeed: { mr: 'शिफारस केलेला चारा', hi: 'अनुशंसित आहार', en: 'Recommended Feed' },
  emergencyLevel: { mr: 'आपत्कालीन पातळी', hi: 'आपातकालीन स्तर', en: 'Emergency Level' },
  contactVet: {
    mr: '🚨 त्वरित पशुवैद्यकाशी संपर्क साधा',
    hi: '🚨 तुरंत पशु चिकित्सक से संपर्क करें',
    en: '🚨 Contact Veterinarian Immediately',
  },
  bestPrice: { mr: 'सर्वोत्तम भाव', hi: 'सर्वोत्तम भाव', en: 'Best Price' },
  lastUpdated: { mr: 'शेवटचे अपडेट', hi: 'अंतिम अपडेट', en: 'Last Updated' },
  benefits: { mr: 'फायदे', hi: 'लाभ', en: 'Benefits' },
  eligibility: { mr: 'पात्रता', hi: 'पात्रता', en: 'Eligibility' },
  documents: { mr: 'आवश्यक कागदपत्रे', hi: 'आवश्यक दस्तावेज़', en: 'Required Documents' },
  apply: { mr: 'अर्ज करा', hi: 'आवेदन करें', en: 'Apply' },
  dueDate: { mr: 'नियोजित तारीख', hi: 'नियत तिथि', en: 'Due Date' },
  completed: { mr: 'पूर्ण', hi: 'पूर्ण', en: 'Completed' },
  upcoming: { mr: 'येणारे', hi: 'आगामी', en: 'Upcoming' },
  humidity: { mr: 'आर्द्रता', hi: 'नमी', en: 'Humidity' },
  livestockAdvice: {
    mr: 'जनावरांसाठी सल्ला',
    hi: 'पशुओं के लिए सलाह',
    en: 'Livestock Advice',
  },
  loading: { mr: 'लोड होत आहे…', hi: 'लोड हो रहा है…', en: 'Loading…' },
  retry: { mr: 'पुन्हा प्रयत्न करा', hi: 'पुनः प्रयास करें', en: 'Retry' },
  failedToLoad: {
    mr: 'माहिती लोड करताना त्रुटी आली. तुमचे इंटरनेट कनेक्शन तपासा.',
    hi: 'जानकारी लोड करने में त्रुटि हुई। अपना इंटरनेट कनेक्शन जांचें।',
    en: 'Failed to load data. Please check your internet connection.',
  },
  all: { mr: 'सर्व', hi: 'सभी', en: 'All' },
  searchSchemes: {
    mr: 'योजना शोधा…',
    hi: 'योजनाएं खोजें…',
    en: 'Search schemes…',
  },
  noSchemesFound: {
    mr: 'कोणतीही योजना सापडली नाही',
    hi: 'कोई योजना नहीं मिली',
    en: 'No schemes found',
  },
  searchContacts: {
    mr: 'संपर्क शोधा…',
    hi: 'संपर्क खोजें…',
    en: 'Search contacts…',
  },
  noContactsFound: {
    mr: 'कोणतेही संपर्क सापडले नाहीत',
    hi: 'कोई संपर्क नहीं मिला',
    en: 'No contacts found',
  },
  allDistricts: { mr: 'सर्व जिल्हे', hi: 'सभी जिले', en: 'All Districts' },
  voiceUnsupported: {
    mr: 'या ब्राउझरवर आवाज शोध उपलब्ध नाही.',
    hi: 'इस ब्राउज़र पर वॉइस सर्च उपलब्ध नहीं है।',
    en: 'Voice search is not supported on this browser.',
  },
  voicePermissionDenied: {
    mr: 'मायक्रोफोन परवानगी आवश्यक आहे.',
    hi: 'माइक्रोफोन अनुमति आवश्यक है।',
    en: 'Microphone permission is required.',
  },
  voiceNoSpeech: {
    mr: 'आवाज आढळला नाही. कृपया पुन्हा प्रयत्न करा.',
    hi: 'कोई आवाज़ नहीं मिली। कृपया पुनः प्रयास करें।',
    en: 'No speech detected. Please try again.',
  },
  voiceFailed: {
    mr: 'आवाज शोध अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
    hi: 'वॉइस सर्च विफल हुई। कृपया पुनः प्रयास करें।',
    en: 'Voice search failed. Please try again.',
  },
  searchEmergency: {
    mr: 'आपत्कालीन सेवा शोधा...',
    hi: 'आपातकालीन सेवा खोजें...',
    en: 'Search emergency service...',
  },
  callNow: {
    mr: '📞 आता कॉल करा',
    hi: '📞 अभी कॉल करें',
    en: '📞 Call Now',
  },
  quickEmergency: {
    mr: '🚨 त्वरित आपत्कालीन',
    hi: '🚨 त्वरित आपातकालीन',
    en: '🚨 Quick Emergency',
  },
  openDialPad: {
    mr: '☎ डायल पॅड उघडा',
    hi: '☎ डायल पैड खोलें',
    en: '☎ Open Dial Pad',
  },
  favourite: { mr: 'आवडते', hi: 'पसंदीदा', en: 'Favourite' },
  favourites: { mr: 'आवडते संपर्क', hi: 'पसंदीदा संपर्क', en: 'Favourite Contacts' },
  locationFiltered: {
    mr: 'तुमच्या जवळचे संपर्क',
    hi: 'आपके पास के संपर्क',
    en: 'Contacts near you',
  },
  addVaccination: {
    mr: 'लसीकरण जोडा',
    hi: 'टीकाकरण जोड़ें',
    en: 'Add Vaccination',
  },
  save: { mr: 'जतन करा', hi: 'सेव करें', en: 'Save' },
  cancel: { mr: 'रद्द करा', hi: 'रद्द करें', en: 'Cancel' },
  animalName: { mr: 'जनावराचे नाव', hi: 'पशु का नाम', en: 'Animal Name' },
  ownerName: { mr: 'मालकाचे नाव', hi: 'मालिक का नाम', en: 'Owner Name' },
  vaccineName: { mr: 'लसीचे नाव', hi: 'टीके का नाम', en: 'Vaccine Name' },
  vaccinationDate: {
    mr: 'लसीकरण तारीख',
    hi: 'टीकाकरण तिथि',
    en: 'Vaccination Date',
  },
  markCompleted: { mr: 'पूर्ण करा', hi: 'पूर्ण करें', en: 'Mark Completed' },
  revertToUpcoming: {
    mr: 'येणारे करा',
    hi: 'आगामी करें',
    en: 'Revert to Upcoming',
  },
  deleteVaccination: { mr: 'हटवा', hi: 'हटाएं', en: 'Delete' },
  filterUpcoming: { mr: 'येणारे', hi: 'आगामी', en: 'Upcoming' },
  filterCompleted: { mr: 'पूर्ण', hi: 'पूर्ण', en: 'Completed' },
  filterDueToday: { mr: 'आज देय', hi: 'आज देय', en: 'Due Today' },
  filterDueTomorrow: { mr: 'उद्या देय', hi: 'कल देय', en: 'Due Tomorrow' },
  noVaccinations: {
    mr: 'कोणतेही लसीकरण रेकॉर्ड नाही',
    hi: 'कोई टीकाकरण रिकॉर्ड नहीं',
    en: 'No vaccination records',
  },
  confirmDeleteVaccination: {
    mr: 'हे लसीकरण रेकॉर्ड हटवायचे का?',
    hi: 'क्या यह टीकाकरण रिकॉर्ड हटाना है?',
    en: 'Delete this vaccination record?',
  },
  roleFarmer: { mr: 'शेतकरी', hi: 'किसान', en: 'Farmer' },
  roleHead: { mr: 'सरपंच', hi: 'सरपंच', en: 'Village Head' },
  yourName: { mr: 'तुमचे नाव', hi: 'आपका नाम', en: 'Your Name' },
  yourPhone: { mr: 'फोन नंबर', hi: 'फोन नंबर', en: 'Phone Number' },
  yourVillage: { mr: 'गावाचे नाव', hi: 'गांव का नाम', en: 'Village Name' },

  describeProblem: {
    mr: 'तुमची समस्या थोडक्यात सांगा',
    hi: 'अपनी समस्या संक्षेप में बताएं',
    en: 'Describe your problem briefly',
  },

  speakIssue: { mr: 'बोलून सांगा', hi: 'बोलकर बताएं', en: 'Speak' },

  issuePlaceholder: {
    mr: 'उदा. गावातील पाण्याची टाकी बिघडली आहे',
    hi: 'जैसे गांव की पानी की टंकी खराब है',
    en: 'e.g. the village water tank is broken',
  },

  sendReport: { mr: 'अहवाल पाठवा', hi: 'रिपोर्ट भेजें', en: 'Send Report' },
  sending: { mr: 'पाठवत आहे…', hi: 'भेज रहे हैं…', en: 'Sending…' },

  reportSent: {
    mr: 'अहवाल सरपंचांना पाठवला गेला आहे.',
    hi: 'रिपोर्ट सरपंच को भेज दी गई है।',
    en: 'Report sent to the Village Head.',
  },

  fillAllFields: {
    mr: 'कृपया सर्व तपशील भरा.',
    hi: 'कृपया सभी विवरण भरें।',
    en: 'Please fill in all details.',
  },

  rateLimitExceeded: {
    mr: 'तुम्ही खूप जास्त अहवाल पाठवले आहेत. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.',
    hi: 'आपने बहुत सारी रिपोर्ट भेजीं। कृपया कुछ देर बाद प्रयास करें।',
    en: 'Too many reports sent. Please try again after some time.',
  },

  sendFailed: {
    mr: 'अहवाल पाठवता आला नाही. पुन्हा प्रयत्न करा.',
    hi: 'रिपोर्ट नहीं भेजी जा सकी। पुनः प्रयास करें।',
    en: 'Could not send the report. Please try again.',
  },

  statusPending: { mr: 'प्रलंबित', hi: 'लंबित', en: 'Pending' },
  statusInProgress: { mr: 'कार्यरत', hi: 'कार्यरत', en: 'In Progress' },
  statusResolved: { mr: 'सोडवले', hi: 'हल हो गया', en: 'Resolved' },
  markInProgress: { mr: 'कार्यरत करा', hi: 'कार्यरत करें', en: 'Mark In Progress' },
  markResolved: { mr: 'सोडवले करा', hi: 'हल हुआ करें', en: 'Mark Resolved' },
  deleteReport: { mr: 'हटवा', hi: 'हटाएं', en: 'Delete' },

  confirmDeleteReport: {
    mr: 'हा अहवाल हटवायचा का?',
    hi: 'क्या यह रिपोर्ट हटानी है?',
    en: 'Delete this report?',
  },

  noReports: {
    mr: 'अद्याप कोणतेही अहवाल नाहीत',
    hi: 'अभी तक कोई रिपोर्ट नहीं',
    en: 'No reports yet',
  },

  reportedBy: { mr: 'अहवाल देणारे', hi: 'रिपोर्टकर्ता', en: 'Reported by' },
  issuesCount: { mr: 'एकूण अहवाल', hi: 'कुल रिपोर्ट', en: 'Total reports' },

  officialUnavailable: {
    mr: 'अधिकृत वेबसाइट सध्या उपलब्ध नाही.',
    hi: 'आधिकारिक वेबसाइट वर्तमान में उपलब्ध नहीं है।',
    en: 'Official website is currently unavailable.',
  },

  redirectConfirm: {
    mr: 'तुम्हाला अधिकृत सरकारी वेबसाइटवर पुनर्निर्देशित केले जाईल.',
    hi: 'आपको आधिकारिक सरकारी वेबसाइट पर पुनर्निर्देशित किया जाएगा।',
    en: 'You will be redirected to the official government website.',
  },

  continue: { mr: 'पुढे जा', hi: 'जारी रखें', en: 'Continue' },
  recognized: { mr: 'ओळखले:', hi: 'पहचाना गया:', en: 'Recognized:' },
  searching: { mr: 'शोधत आहे...', hi: 'खोज रहे हैं...', en: 'Searching...' },
  speakNow: { mr: 'बोला...', hi: 'बोलिए...', en: 'Speak now...' },

  searchVaccinations: {
    mr: 'लसीकरण शोधा…',
    hi: 'टीकाकरण खोजें…',
    en: 'Search vaccinations…',
  },

  /* --------------------------- Universal AI Assistant --------------------------- */

  appName: { mr: 'ग्राममित्र AI', hi: 'ग्राममित्र AI', en: 'GramMitra AI' },
  cropDoctor: { mr: 'पीक डॉक्टर', hi: 'फसल डॉक्टर', en: 'Crop Doctor' },
  captureCrop: { mr: 'पिकाचा फोटो घ्या', hi: 'फसल का फोटो लें', en: 'Capture Crop' },
  takePhoto: { mr: 'फोटो काढा', hi: 'फोटो लें', en: 'Take Photo' },
  cameraDescription: {
    mr: 'पिके, जनावरे किंवा गावातील कोणतीही समस्या फोटोद्वारे विचारा.',
    hi: 'फसल, पशु या गांव की किसी भी समस्या की फोटो लेकर पूछें।',
    en: 'Capture crops, animals or any village problem using your camera.',
  },
  speak: { mr: 'बोला', hi: 'बोलें', en: 'Speak' },
  speakDescription: {
    mr: 'तुमचा प्रश्न बोला. टाइप करण्याची गरज नाही.',
    hi: 'अपना प्रश्न बोलें। टाइप करने की आवश्यकता नहीं।',
    en: 'Speak your question. No typing required.',
  },
  cropDoctorTagline: {
    mr: 'फोटो घ्या किंवा बोला, आम्ही मदत करू',
    hi: 'फोटो लें या बोलें, हम मदद करेंगे',
    en: 'Take a photo or speak — we will help you',
  },
  capturePhoto: { mr: 'फोटो घ्या', hi: 'फोटो लें', en: 'Take Photo' },
  cameraHelp: {
    mr: 'पिके, जनावरे, कागदपत्रे, रस्ते, पाणी, वीज किंवा कोणत्याही समस्येचा फोटो काढा.',
    hi: 'फसल, पशु, दस्तावेज़, सड़क, पानी, बिजली या किसी भी समस्या की फोटो लें।',
    en: 'Capture crops, animals, documents, roads, water, electricity or any other problem.',
  },
  retake: { mr: 'पुन्हा घ्या', hi: 'फिर से लें', en: 'Retake' },
  remove: { mr: 'काढा', hi: 'हटाएं', en: 'Remove' },
  analyzing: { mr: 'तपासत आहे…', hi: 'जांच हो रही है…', en: 'Analyzing…' },
  analyzingHint: {
    mr: 'तुमच्या फोटोची आणि वर्णनाची तपासणी होत आहे',
    hi: 'आपके फोटो और विवरण की जांच हो रही है',
    en: 'Checking your photo and description',
  },
  analysisHint: {
    mr: 'स्पष्ट फोटो घ्या जेणेकरून आम्ही चांगले उत्तर देऊ शकू.',
    hi: 'साफ फोटो लें ताकि हम अच्छा जवाब दे सकें।',
    en: 'Take a clear photo so we can give you a better answer.',
  },
  nowSpeakSymptoms: {
    mr: 'तुमचा प्रश्न बोला किंवा फोटोद्वारे विचारा',
    hi: 'अपना प्रश्न बोलें या फोटो के माध्यम से पूछें',
    en: 'Speak your question or ask using a photo',
  },
  speakSymptomsHint: {
    mr: 'शेती, जनावरे, अभ्यास, सरकारी योजना किंवा गावातील कोणतीही समस्या विचारा.',
    hi: 'खेती, पशुपालन, पढ़ाई, सरकारी योजनाएं या गांव की किसी भी समस्या के बारे में पूछें।',
    en: 'Ask about farming, livestock, studies, government schemes or any village-related problem.',
  },
  questionPlaceholder: {
    mr: 'तुमचा प्रश्न येथे दिसेल...',
    hi: 'आपका प्रश्न यहाँ दिखाई देगा...',
    en: 'Your question will appear here...',
  },
  askByVoice: { mr: 'बोलून विचारा', hi: 'बोलकर पूछें', en: 'Ask by Voice' },
  noTyping: {
    mr: 'टाइप करण्याची गरज नाही.',
    hi: 'टाइप करने की आवश्यकता नहीं।',
    en: 'No typing required.',
  },
  skip: { mr: 'वगळा', hi: 'छोड़ें', en: 'Skip' },
  diagnose: { mr: 'तपासणी करा', hi: 'जांच करें', en: 'Diagnose' },
  retrySpeaking: { mr: 'पुन्हा बोला', hi: 'फिर बोलिए', en: 'Speak again' },
  diagnosisReady: {
    mr: 'तुमचे उत्तर तयार आहे',
    hi: 'आपका जवाब तैयार है',
    en: 'Your answer is ready',
  },
  crop: { mr: 'पीक', hi: 'फसल', en: 'Crop' },
  disease: { mr: 'रोग', hi: 'रोग', en: 'Disease' },
  whatItIs: { mr: 'काय आहे?', hi: 'क्या है?', en: 'What is it?' },
  issue: { mr: 'समस्या', hi: 'समस्या', en: 'Issue' },
  confidence: { mr: 'आत्मविश्वास', hi: 'विश्वास', en: 'Confidence' },
  cause: { mr: 'कारण', hi: 'कारण', en: 'Cause' },
  recommendedMedicine: {
    mr: 'शिफारस केलेले औषध',
    hi: 'अनुशंसित दवा',
    en: 'Recommended Medicine',
  },
  recommendedSolution: {
    mr: 'शिफारस केलेला उपाय',
    hi: 'अनुशंसित उपाय',
    en: 'Recommended Solution',
  },
  organicTreatment: { mr: 'सेंद्रिय उपाय', hi: 'जैविक उपचार', en: 'Organic Treatment' },
  chemicalTreatment: { mr: 'रासायनिक उपचार', hi: 'रासायनिक उपचार', en: 'Chemical Treatment' },
  prevention: { mr: 'प्रतिबंध', hi: 'रोकथाम', en: 'Prevention' },
  pest: { mr: 'कीडक', hi: 'कीट', en: 'Pest' },
  nutrientDeficiency: {
    mr: 'पोषक घटकांची कमतरता',
    hi: 'पोषक तत्वों की कमी',
    en: 'Nutrient Deficiency',
  },
  severityLabel: { mr: 'तीव्रता', hi: 'गंभीरता', en: 'Severity' },
  listen: { mr: 'ऐका', hi: 'सुनें', en: 'Listen' },
  stopListening: { mr: 'ऐकणे थांबवा', hi: 'सुनना बंद करें', en: 'Stop' },
  newDiagnosis: {
    mr: 'नवीन प्रश्न',
    hi: 'नया प्रश्न',
    en: 'New question',
  },
  imageTypeError: {
    mr: 'फक्त JPG, JPEG किंवा PNG फोटो.',
    hi: 'केवल JPG, JPEG या PNG फोटो।',
    en: 'Only JPG, JPEG or PNG photos.',
  },
  imageSizeError: {
    mr: 'फोटो खूप मोठा आहे (जास्तीत जास्त १० MB).',
    hi: 'फोटो बहुत बड़ा है (अधिकतम 10 MB)।',
    en: 'Photo is too large (max 10 MB).',
  },
  cropAnalysisFailed: {
    mr: 'उत्तर मिळाले नाही. पुन्हा प्रयत्न करा.',
    hi: 'जवाब नहीं मिला। पुनः प्रयास करें।',
    en: 'Could not get an answer. Please try again.',
  },
  searchProducts: {
    mr: 'उत्पादने शोधा…',
    hi: 'उत्पाद खोजें…',
    en: 'Search products…',
  },
  noProductsFound: {
    mr: 'कोणतेही उत्पादन सापडले नाही',
    hi: 'कोई उत्पाद नहीं मिला',
    en: 'No products found',
  },
  addProduct: { mr: 'उत्पादन जोडा', hi: 'उत्पाद जोड़ें', en: 'Add Product' },
  editProduct: { mr: 'संपादित करा', hi: 'संपादित करें', en: 'Edit' },
  deleteProduct: { mr: 'हटवा', hi: 'हटाएं', en: 'Delete' },
  productName: { mr: 'उत्पादनाचे नाव', hi: 'उत्पाद का नाम', en: 'Product Name' },
  productDescription: { mr: 'वर्णन', hi: 'विवरण', en: 'Description' },
  category: { mr: 'श्रेणी', hi: 'श्रेणी', en: 'Category' },
  price: { mr: 'किंमत (₹)', hi: 'कीमत (₹)', en: 'Price (₹)' },
  unit: { mr: 'एकक', hi: 'इकाई', en: 'Unit' },
  quantity: { mr: 'प्रमाण', hi: 'मात्रा', en: 'Quantity' },
  sellerName: { mr: 'विक्रेत्याचे नाव', hi: 'विक्रेता का नाम', en: 'Seller Name' },
  sellerPhone: { mr: 'फोन नंबर', hi: 'फोन नंबर', en: 'Phone Number' },
  village: { mr: 'गाव', hi: 'गांव', en: 'Village' },
  district: { mr: 'जिल्हा', hi: 'जिला', en: 'District' },
  perUnit: { mr: 'प्रति', hi: 'प्रति', en: 'per' },
  seller: { mr: 'विक्रेता', hi: 'विक्रेता', en: 'Seller' },
  listedOn: { mr: 'सूचीबद्ध', hi: 'सूचीबद्ध', en: 'Listed' },
  confirmDelete: {
    mr: 'हे उत्पादन हटवायचे आहे का?',
    hi: 'क्या इस उत्पाद को हटाना है?',
    en: 'Delete this product?',
  },
  editProductTitle: { mr: 'उत्पादन संपादित करा', hi: 'उत्पाद संपादित करें', en: 'Edit Product' },
} satisfies Record<string, Record<Lang, string>>

export const QUICK_PROMPTS: Record<Lang, string[]> = {
  mr: ['माझ्या गाईला ताप आहे', 'दूध कमी झाले आहे', 'चारा कोणता द्यावा?', 'लसीकरण कधी?'],
  hi: ['मेरी गाय को बुखार है', 'दूध कम हो गया है', 'कौन सा चारा दें?', 'टीकाकरण कब?'],
  en: ['My cow has fever', 'Milk yield has dropped', 'Which feed to give?', 'When to vaccinate?'],
}

type Reply = Record<Lang, string>

const REPLIES: { keywords: string[]; reply: Reply }[] = [
  {
    keywords: ['fever', 'ताप', 'बुखार', 'hot', 'temperature'],
    reply: {
      mr: 'तापाच्या जनावराला सावलीत ठेवा, भरपूर स्वच्छ पाणी द्या आणि तापमान नोंदवा. १२ तासांत सुधारणा नसेल तर पशुवैद्यकाशी संपर्क साधा.',
      hi: 'बुखार वाले पशु को छाँव में रखें, भरपूर साफ पानी दें और तापमान नोट करें। 12 घंटे में सुधार न हो तो पशु चिकित्सक से संपर्क करें।',
      en: 'Keep the feverish animal in shade, give plenty of clean water and record its temperature. If there is no improvement in 12 hours, contact a veterinarian.',
    },
  },
  {
    keywords: ['milk', 'दूध', 'yield', 'कमी'],
    reply: {
      mr: 'दूध कमी होण्याची कारणे म्हणजे कमी चारा, पाणी किंवा तणाव. संतुलित आहार, खनिज मिश्रण आणि नियमित दूध काढणे सुरू ठेवा.',
      hi: 'दूध कम होने के कारण कम चारा, पानी या तनाव हो सकते हैं। संतुलित आहार, खनिज मिश्रण और नियमित दूध निकालना जारी रखें।',
      en: 'Lower milk yield can be due to less fodder, water or stress. Continue a balanced ration, mineral mixture and milking at regular times.',
    },
  },
  {
    keywords: ['feed', 'चारा', 'खाणे', 'nutrition', 'पोषण'],
    reply: {
      mr: 'दररोज ३०-४० किलो हिरवा चारा, थोडा वाळलेला चारा आणि ५०-१०० ग्रॅम खनिज मिश्रण द्या. आहार अचानक बदलू नका.',
      hi: 'रोज़ 30-40 किलो हरा चारा, थोड़ा सूखा चारा और 50-100 ग्राम खनिज मिश्रण दें। आहार अचानक न बदलें।',
      en: 'Give 30-40 kg green fodder daily, some dry fodder and 50-100 g mineral mixture. Do not change the diet suddenly.',
    },
  },
  {
    keywords: ['vaccine', 'vaccinat', 'लस', 'टीका', 'लसीकरण'],
    reply: {
      mr: 'FMD लस दर ६ महिन्यांनी आणि HS लस पावसाळ्यापूर्वी द्या. तुमच्या लसीकरण स्मरणपत्रात पुढील तारखा पहा.',
      hi: 'FMD टीका हर 6 महीने और HS टीका बरसात से पहले लगवाएं। अपने टीकाकरण रिमाइंडर में अगली तिथियाँ देखें।',
      en: 'Give the FMD vaccine every 6 months and the HS vaccine before monsoon. Check your vaccination reminder for the next dates.',
    },
  },
  {
    keywords: ['diarrhea', 'loose', 'हगवण', 'दस्त', 'पातळ'],
    reply: {
      mr: 'जुलाबासाठी स्वच्छ पाणी आणि मीठ-गूळ पाणी द्या. वाळलेला चारा द्या. रक्त किंवा अशक्तपणा दिसल्यास त्वरित पशुवैद्यक.',
      hi: 'दस्त के लिए साफ पानी और नमक-गुड़ पानी दें। सूखा चारा दें। खून या कमजोरी दिखे तो तुरंत पशु चिकित्सक।',
      en: 'For diarrhea give clean water and salt-jaggery water, plus dry fodder. If you see blood or weakness, see a vet immediately.',
    },
  },
  {
    keywords: ['heat', 'summer', 'ऊन', 'गर्मी', 'उष्ण'],
    reply: {
      mr: 'उन्हाळ्यात सकाळी ११ ते ४ जनावरे सावलीत ठेवा, गोठ्यात हवा खेळती ठेवा आणि थंड पाणी सतत उपलब्ध ठेवा.',
      hi: 'गर्मी में सुबह 11 से 4 पशुओं को छाँव में रखें, गौशाला में हवा रखें और ठंडा पानी हमेशा उपलब्ध रखें।',
      en: 'In summer keep animals in shade from 11 AM to 4 PM, keep the shed ventilated and provide cool water at all times.',
    },
  },
  {
    keywords: ['scheme', 'योजना', 'loan', 'कर्ज', 'subsidy', 'अनुदान'],
    reply: {
      mr: 'पशु किसान क्रेडिट कार्ड आणि राष्ट्रीय गोकुळ मिशन सारख्या योजना उपलब्ध आहेत. सरकारी योजना विभागात तपशील पहा.',
      hi: 'पशु किसान क्रेडिट कार्ड और राष्ट्रीय गोकुल मिशन जैसी योजनाएं उपलब्ध हैं। सरकारी योजना अनुभाग में विवरण देखें।',
      en: 'Schemes like the Pashu Kisan Credit Card and Rashtriya Gokul Mission are available. Check the Government Schemes section for details.',
    },
  },
]

const FALLBACK: Reply = {
  mr: 'मी समजून घेण्याचा प्रयत्न करत आहे. कृपया जनावराचा प्रकार आणि लक्षणे थोडक्यात सांगा, जसे "गाईला ताप आहे".',
  hi: 'मैं समझने की कोशिश कर रहा हूँ। कृपया पशु का प्रकार और लक्षण संक्षेप में बताएं, जैसे "गाय को बुखार है"।',
  en: 'I am trying to understand. Please tell me the animal type and symptoms briefly, like "cow has fever".',
}

export function generateReply(text: string, lang: Lang): string {
  const t = text.toLowerCase()
  for (const item of REPLIES) {
    if (item.keywords.some((k) => t.includes(k.toLowerCase()))) {
      return item.reply[lang]
    }
  }
  return FALLBACK[lang]
}
