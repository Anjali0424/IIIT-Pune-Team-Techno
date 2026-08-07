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
  analyzing: {
    mr: 'तुमचा फोटो तपासत आहे…',
    hi: 'आपकी फोटो जाँच हो रही है…',
    en: 'Analyzing your image…',
  },
  analyzingHint: {
    mr: 'AI समस्या ओळखत आहे. कृपया थांबा.',
    hi: 'AI समस्या पहचान रहा है। कृपया प्रतीक्षा करें।',
    en: 'Please wait while AI is identifying the problem.',
  },
  analyzingWait: {
    mr: 'यास काही सेकंद लागू शकतात.',
    hi: 'इसमें कुछ सेकंड लग सकते हैं।',
    en: 'This may take a few seconds.',
  },
  analyzingSlow: {
    mr: 'विश्लेषण अपेक्षेपेक्षा जास्त वेळ घेत आहे…',
    hi: 'विश्लेषण अपेक्षा से अधिक समय ले रहा है…',
    en: 'Analysis is taking longer than expected…',
  },
  analyzingStillWorking: {
    mr: 'अजूनही काम सुरू आहे. कृपया थांबा.',
    hi: 'अभी भी काम जारी है। कृपया प्रतीक्षा करें।',
    en: 'Still working. Please keep waiting.',
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
    mr: 'उदा.\n• माझ्या गायीला ताप आहे\n• या पिकाला कोणता रोग आहे?\n• ही सरकारी योजना कशी मिळेल?\n• हे कागदपत्र बरोबर आहे का?\n• या पानावर डाग का आले?',
    hi: 'जैसे\n• मेरी गाय को बुखार है\n• इस फसल को कौन सा रोग है?\n• यह सरकारी योजना कैसे मिलेगी?\n• क्या यह दस्तावेज़ सही है?\n• इस पत्ते पर धब्बे क्यों हैं?',
    en: 'e.g.\n• My cow has a fever\n• Which disease does this crop have?\n• How do I get this government scheme?\n• Is this document correct?\n• Why are there spots on this leaf?',
  },
  askByVoice: { mr: 'बोलून विचारा', hi: 'बोलकर पूछें', en: 'Ask by Voice' },
  noTyping: {
    mr: 'टाइप करण्याची गरज नाही.',
    hi: 'टाइप करने की आवश्यकता नहीं।',
    en: 'No typing required.',
  },
  askHeading: {
    mr: 'फोटो, आवाज किंवा मजकूर वापरून मदत मिळवा',
    hi: 'फोटो, आवाज या टेक्स्ट से मदत पाएं',
    en: 'Get help using a photo, voice or text',
  },
  askSubtitle: {
    mr: 'पीक, जनावरे, कागदपत्रे, सरकारी योजना, पाणी, हवामान, शेती, खत, कीड, रोग किंवा कोणत्याही समस्येबद्दल विचारू शकता.',
    hi: 'फसल, पशु, दस्तावेज़, सरकारी योजनाएं, पानी, मौसम, खेती, खाद, कीट, रोग या किसी भी समस्या के बारे में पूछ सकते हैं।',
    en: 'Ask about crops, animals, documents, government schemes, water, weather, farming, fertilizer, pests, diseases or any other problem.',
  },
  photoOption: { mr: 'फोटो', hi: 'फोटो', en: 'Photo' },
  photoOptionDesc: {
    mr: 'पीक, जनावर, कागदपत्र, बिल, पान, फळ किंवा कोणत्याही वस्तूचा फोटो काढा.',
    hi: 'फसल, पशु, दस्तावेज़, बिल, पत्ता, फल या किसी भी चीज़ की फोटो लें।',
    en: 'Take a photo of a crop, animal, document, bill, leaf, fruit or anything.',
  },
  voiceOption: { mr: 'बोला', hi: 'बोलें', en: 'Voice' },
  voiceOptionDesc: {
    mr: 'तुमचा प्रश्न बोला.',
    hi: 'अपना प्रश्न बोलें।',
    en: 'Speak your question.',
  },
  textOption: { mr: 'लिहा', hi: 'लिखें', en: 'Text' },
  textOptionDesc: {
    mr: 'प्रश्न टाइप करा.',
    hi: 'प्रश्न टाइप करें।',
    en: 'Type your question.',
  },
  photoDetailPlaceholder: {
    mr: 'या फोटोबद्दल आणखी माहिती लिहा (ऐच्छिक)',
    hi: 'इस फोटो के बारे में और जानकारी लिखें (वैकल्पिक)',
    en: 'Write more details about this photo (optional)',
  },
  questionInputLabel: {
    mr: 'तुमचा प्रश्न येथे लिहा किंवा बोला',
    hi: 'अपना प्रश्न यहाँ लिखें या बोलें',
    en: 'Type or speak your question here',
  },
  analyze: { mr: 'विश्लेषण करा', hi: 'विश्लेषण करें', en: 'Analyze' },
  noQuestionError: {
    mr: 'कृपया फोटो काढा किंवा प्रश्न लिहा/बोला.',
    hi: 'कृपया फोटो लें या प्रश्न लिखें/बोलें।',
    en: 'Please take a photo or type/speak your question.',
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
  diseaseLabel: { mr: 'रोग / समस्या', hi: 'रोग / समस्या', en: 'Disease / Problem' },
  possibleIssue: { mr: 'संभाव्य समस्या', hi: 'संभावित समस्या', en: 'Possible Issue' },
  listen: { mr: 'ऐका', hi: 'सुनें', en: 'Listen' },
  stopListening: { mr: 'ऐकणे थांबवा', hi: 'सुनना बंद करें', en: 'Stop' },
  speechUnsupported: {
    mr: 'या ब्राउझरवर आवाज वाचन उपलब्ध नाही.',
    hi: 'इस ब्राउज़र पर आवाज़ पढ़ना उपलब्ध नहीं है।',
    en: 'Speech playback is not supported on this browser.',
  },
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
  noAnalysis: {
    mr: 'अद्याप कोणतेही विश्लेषण उपलब्ध नाही. पहिल्यांदा फोटो काढा.',
    hi: 'अभी तक कोई विश्लेषण उपलब्ध नहीं। पहले फोटो लें।',
    en: 'No analysis yet. Take a photo first.',
  },
  backHome: {
    mr: 'मुख्यपृष्ठावर परत जा',
    hi: 'होम पेज पर वापस जाएं',
    en: 'Back to Home',
  },
  analysisComplete: {
    mr: 'तुमच्या फोटोचे विश्लेषण पूर्ण झाले.',
    hi: 'आपके फोटो का विश्लेषण पूरा हुआ।',
    en: 'Your photo analysis is complete.',
  },
  answerLabel: { mr: 'उत्तर', hi: 'जवाब', en: 'Answer' },
  actionStepsLabel: { mr: 'काय करावे?', hi: 'क्या करें?', en: 'What to do?' },
  recommendationLabel: { mr: 'शिफारस', hi: 'सिफारिश', en: 'Recommendation' },
  medicineDosage: { mr: 'डोस', hi: 'खुराक', en: 'Dosage' },
  medicineWhen: { mr: 'कधी वापरावे?', hi: 'कब उपयोग करें?', en: 'When to use' },
  emergencyContact: {
    mr: '📞 त्वरित पशुवैद्य/कृषी अधिकाऱ्याशी संपर्क साधा.',
    hi: '📞 तुरंत पशु चिकित्सक/कृषि अधिकारी से संपर्क करें।',
    en: '📞 Contact a veterinarian / agriculture officer immediately.',
  },
  listenAnswer: { mr: 'उत्तर ऐका', hi: 'जवाब सुनें', en: 'Listen to answer' },
  newPhoto: { mr: 'नवीन फोटो', hi: 'नया फोटो', en: 'New photo' },
  goHome: { mr: 'मुख्यपृष्ठ', hi: 'मुख्य पृष्ठ', en: 'Home' },
  aiUnavailable: {
    mr: 'AI सध्या उपलब्ध नाही. कृपया नंतर पुन्हा प्रयत्न करा.',
    hi: 'AI अभी उपलब्ध नहीं है। कृपया बाद में फिर से प्रयास करें।',
    en: 'AI is currently unavailable. Please try again later.',
  },
  aiAnswer: { mr: 'AI उत्तर', hi: 'AI जवाब', en: 'AI Answer' },
  replayVoice: { mr: 'पुन्हा ऐका', hi: 'फिर से सुनें', en: 'Replay voice' },
  analyzeAgain: { mr: 'पुन्हा तपासा', hi: 'फिर से जांचें', en: 'Analyze Again' },
  backButton: { mr: 'मागे जा', hi: 'वापस जाएं', en: 'Back' },
  healthyResponse: {
    mr: 'तुमचे पीक निरोगी दिसते आहे. कोणताही मोठा रोग आढळला नाही. नियमित पाणी द्या, संतुलित खत द्या आणि पिकावर नजर ठेवत राहा.',
    hi: 'आपकी फसल स्वस्थ दिख रही है। कोई बड़ी बीमारी नहीं मिली। नियमित पानी दें, संतुलित खाद दें और फसल पर नज़र बनाए रखें।',
    en: 'Your crop appears healthy. No major disease was detected. Continue regular watering, provide balanced nutrients, and keep monitoring your crop.',
  },
  unclearImageResponse: {
    mr: 'या फोटोवरून समस्या स्पष्ट दिसत नाही. कृपया चांगल्या प्रकाशात, प्रभावित भागावर लक्ष केंद्रित करून स्पष्ट फोटो घ्या आणि पुन्हा प्रयत्न करा.',
    hi: 'इस फोटो से समस्या साफ नहीं दिख रही है। कृपया अच्छी रोशनी में, प्रभावित हिस्से पर ध्यान देकर साफ फोटो लें और फिर से प्रयास करें।',
    en: "I couldn't clearly identify the problem from this image. Please capture a clearer photo in good lighting by focusing on the affected area and try again.",
  },
} satisfies Record<string, Record<Lang, string>>

export const QUICK_PROMPTS: Record<Lang, string[]> = {
  mr: ['माझ्या गाईला ताप आहे', 'दूध कमी झाले आहे', 'चारा कोणता द्यावा?', 'लसीकरण कधी?'],
  hi: ['मेरी गाय को बुखार है', 'दूध कम हो गया है', 'कौन सा चारा दें?', 'टीकाकरण कब?'],
  en: ['My cow has fever', 'Milk yield has dropped', 'Which feed to give?', 'When to vaccinate?'],
}
