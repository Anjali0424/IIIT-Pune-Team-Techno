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
    mr: 'तुमच्या गावातील शेती, पशुपालन, आरोग्य, सरकारी योजना, हवामान आणि दैनंदिन समस्यांसाठी तुमचा AI सहाय्यक.',
    hi: 'खेती, पशुपालन, स्वास्थ्य, सरकारी योजनाओं, मौसम और गांव की समस्याओं के लिए आपका AI सहायक।',
    en: 'Your AI assistant for farming, livestock, health, government schemes, weather and village services.',
  },
  tapToSpeak: { mr: 'बोलण्यासाठी दाबा', hi: 'बोलने के लिए दबाएं', en: 'Tap to Speak' },
  listening: { mr: 'ऐकत आहे...', hi: 'सुन रहा हूँ...', en: 'Listening...' },
  speaking: { mr: 'बोलत आहे...', hi: 'बोल रहा हूँ...', en: 'Speaking...' },
  preparingAudio: { mr: 'ऑडिओ तयार होत आहे...', hi: 'ऑडियो तैयार हो रहा है...', en: 'Preparing audio...' },
  speechFailed: {
    mr: 'उत्तर ऐकता आला नाही. व्हॉल्यूम तपासून पुन्हा प्रयत्न करा.',
    hi: 'जवाब सुनाई नहीं दिया। वॉल्यूम जांच कर फिर से कोशिश करें।',
    en: "Couldn't play the voice reply. Check the volume and try again.",
  },
  stop: { mr: 'थांबा', hi: 'रुकें', en: 'Stop' },
  play: { mr: 'ऐका', hi: 'सुनें', en: 'Play' },
  pause: { mr: 'थांबवा', hi: 'विराम दें', en: 'Pause' },
  resume: { mr: 'पुन्हा सुरू करा', hi: 'फिर से शुरू करें', en: 'Resume' },
  replay: { mr: 'पुन्हा ऐका', hi: 'दोबारा सुनें', en: 'Replay' },
  askAnything: {
    mr: 'तुमच्या किंवा तुमच्या जनावरांच्या आरोग्याबद्दल काहीही विचारा',
    hi: 'अपने या अपने पशुओं के स्वास्थ्य के बारे में कुछ भी पूछें',
    en: 'Ask anything about your or your animals\u2019 health',
  },
  you: { mr: 'तुम्ही', hi: 'आप', en: 'You' },
  assistant: { mr: 'सहाय्यक', hi: 'सहायक', en: 'Assistant' },
  quickHelp: { mr: 'पटकन विचारा', hi: 'जल्दी पूछें', en: 'Quick questions' },
  disclaimer: {
    mr: 'ही माहिती फक्त जागरूकतेसाठी आहे आणि डॉक्टर/पशुवैद्यकीय सल्ल्याला पर्याय नाही.',
    hi: 'यह जानकारी केवल जागरूकता के लिए है और डॉक्टर/पशु चिकित्सा सलाह का विकल्प नहीं है।',
    en: 'This guidance is for awareness only and does not replace professional medical or veterinary advice.',
  },
  online: { mr: 'AI शी जोडलेले', hi: 'AI से जुड़ा हुआ', en: 'Connected to AI' },
  offline: { mr: 'ऑफलाइन AI उपलब्ध', hi: 'ऑफलाइन AI उपलब्ध', en: 'Offline AI Available' },
  offlineNote: {
    mr: 'इंटरनेटशिवाय सामान्य पशु मार्गदर्शन उपलब्ध आहे.',
    hi: 'इंटरनेट के बिना सामान्य पशु मार्गदर्शन उपलब्ध है।',
    en: 'Common livestock guidance is available without internet.',
  },
  animalType: { mr: 'जनावराचा प्रकार', hi: 'पशु का प्रकार', en: 'Animal Type' },
  forWhom: {
    mr: 'तपासणी कोणासाठी आहे?',
    hi: 'जांच किसके लिए है?',
    en: 'Who is this check for?',
  },
  symptoms: { mr: 'लक्षणे', hi: 'लक्षण', en: 'Symptoms' },
  symptomsPlaceholder: {
    mr: 'उदा. ताप, खोकला, पोटदुखी, खात नाही',
    hi: 'जैसे बुखार, खांसी, पेट दर्द, खाना न खाना',
    en: 'e.g. fever, cough, stomach pain, not eating',
  },
  checkHealth: { mr: 'तपासा', hi: 'जाँचें', en: 'Check Health' },
  possibleCauses: { mr: 'संभाव्य कारणे', hi: 'संभावित कारण', en: 'Possible Causes' },
  precautions: { mr: 'त्वरित काळजी', hi: 'तत्काल सावधानियाँ', en: 'Immediate Precautions' },
  recommendedFeed: { mr: 'शिफारस केलेला चारा', hi: 'अनुशंसित आहार', en: 'Recommended Feed' },
  recommendedDiet: {
    mr: 'आहार व काळजी',
    hi: 'आहार व देखभाल',
    en: 'Diet & Care',
  },
  emergencyLevel: { mr: 'आपत्कालीन पातळी', hi: 'आपातकालीन स्तर', en: 'Emergency Level' },
  contactVet: {
    mr: '🚨 त्वरित पशुवैद्यकाशी संपर्क साधा',
    hi: '🚨 तुरंत पशु चिकित्सक से संपर्क करें',
    en: '🚨 Contact Veterinarian Immediately',
  },
  contactDoctor: {
    mr: '🚨 त्वरित डॉक्टरांशी संपर्क साधा',
    hi: '🚨 तुरंत डॉक्टर से संपर्क करें',
    en: '🚨 Contact Doctor Immediately',
  },
  hearAnswer: {
    mr: 'पूर्ण उत्तर ऐका',
    hi: 'पूरा उत्तर सुनें',
    en: 'Hear Full Answer',
  },
  readingAnswer: {
    mr: 'उत्तर वाचत आहे...',
    hi: 'उत्तर पढ़ रहा हूँ...',
    en: 'Reading the answer...',
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
<<<<<<< HEAD
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
=======
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
>>>>>>> e33d9751 (f)
} satisfies Record<string, Record<Lang, string>>

export const QUICK_PROMPTS: Record<Lang, string[]> = {
  mr: ['मला ताप आहे', 'माझ्या गाईला ताप आहे', 'डोकेदुखी आहे', 'दूध कमी झाले आहे', 'चारा कोणता द्यावा?', 'लसीकरण कधी?'],
  hi: ['मुझे बुखार है', 'मेरी गाय को बुखार है', 'सिरदर्द है', 'दूध कम हो गया है', 'कौन सा चारा दें?', 'टीकाकरण कब?'],
  en: ['I have fever', 'My cow has fever', 'I have a headache', 'Milk yield has dropped', 'Which feed to give?', 'When to vaccinate?'],
}

type Reply = Record<Lang, string>

type Rule = { keywords: string[]; animal: Reply; human: Reply }

const HUMAN_HINTS = [
  'मला', 'मुझे', 'मुझको', 'मैं बीमार', 'मैं ठीक नहीं',
  'i have', 'i feel', 'i am', 'my head', 'my stomach', 'my body',
  'human', 'person', 'माणूस', 'इंसान', 'आदमी', 'मनुष्य', 'व्यक्ती',
]

function isHumanQuery(text: string): boolean {
  const t = text.toLowerCase()
  return HUMAN_HINTS.some((h) => t.includes(h.toLowerCase()))
}

const REPLIES: Rule[] = [
  {
    keywords: ['fever', 'ताप', 'बुखार', 'hot', 'temperature'],
    animal: {
      mr: 'तापाच्या जनावराला सावलीत ठेवा, भरपूर स्वच्छ पाणी द्या आणि तापमान नोंदवा. १२ तासांत सुधारणा नसेल तर पशुवैद्यकाशी संपर्क साधा.',
      hi: 'बुखार वाले पशु को छाँव में रखें, भरपूर साफ पानी दें और तापमान नोट करें। 12 घंटे में सुधार न हो तो पशु चिकित्सक से संपर्क करें।',
      en: 'Keep the feverish animal in shade, give plenty of clean water and record its temperature. If there is no improvement in 12 hours, contact a veterinarian.',
    },
    human: {
      mr: 'ताप असेल तर विश्रांती घ्या आणि भरपूर पाणी/द्रव प्या. ताप जास्त असेल किंवा २ दिवसांहून अधिक राहिला तर डॉक्टरांकडे जा. औषध डॉक्टरांच्या सल्ल्यानेच घ्या.',
      hi: 'बुखार हो तो आराम करें और भरपूर पानी/तरल पिएं। बुखार तेज़ हो या 2 दिन से ज़्यादा रहे तो डॉक्टर के पास जाएं। दवा डॉक्टर की सलाह से ही लें।',
      en: 'If you have fever, rest and drink plenty of fluids. See a doctor if the fever is high or lasts more than 2 days, and take medicine only on doctor advice.',
    },
  },
  {
    keywords: ['headache', 'डोकेदुखी', 'डोके दुख', 'सिरदर्द', 'सिर दर्द'],
    animal: {
      mr: 'हे लक्षण प्रामुख्याने मानवांसाठी आहे. जनावरांच्या समस्येसाठी ताप, खोकला, पोट फुगणे यासारखी लक्षणे सांगा.',
      hi: 'यह लक्षण मुख्य रूप से इंसानों के लिए है। पशुओं की समस्या के लिए बुखार, खांसी, पेट फूलना जैसे लक्षण बताएं।',
      en: 'This symptom is mainly for humans. For animals, describe symptoms like fever, cough or bloating.',
    },
    human: {
      mr: 'डोकेदुखी असेल तर आराम करा, पाणी प्या आणि नियमित जेवण घ्या. तीव्र किंवा सतत डोकेदुखी असल्यास डॉक्टरांशी सल्लामसलत करा.',
      hi: 'सिरदर्द हो तो आराम करें, पानी पिएं और नियमित भोजन लें। तेज़ या लगातार सिरदर्द हो तो डॉक्टर से सलाह लें।',
      en: 'For a headache, rest, drink water and eat regular meals. See a doctor if it is severe or persistent.',
    },
  },
  {
    keywords: ['stomach', 'abdomen', 'पोटदुखी', 'पोट दुख', 'पेट दर्द', 'पेट में', 'अपचन', 'gas', 'गॅस'],
    animal: {
      mr: 'पोट फुगणे असेल तर ताजा हिरवा द्विदल चारा टाळा, जनावराला हळू चालवा आणि त्रास वाढल्यास पशुवैद्यकांना बोलवा.',
      hi: 'पेट फूलना हो तो ताज़ा हरा फलीदार चारा न दें, पशु को धीरे चलाएं और तकलीफ बढ़े तो पशु चिकित्सक को बुलाएं।',
      en: 'For a bloated belly avoid fresh legume fodder, walk the animal slowly and call a vet if it worsens.',
    },
    human: {
      mr: 'पोटदुखी असल्यास हलका आहार घ्या आणि भरपूर पाणी प्या. तीव्र वेदना किंवा रक्त दिसल्यास ताबडतोब डॉक्टरकडे जा.',
      hi: 'पेट दर्द हो तो हल्का भोजन लें और भरपूर पानी पिएं। तेज़ दर्द या खून दिखे तो तुरंत डॉक्टर के पास जाएं।',
      en: 'For stomach pain eat light and drink plenty of water. If the pain is severe or there is blood, see a doctor immediately.',
    },
  },
  {
    keywords: ['chest', 'heart', 'breath', 'breathless', 'छाती', 'हृदय', 'श्वास', 'सांस', 'दिल', 'छातीत दुख'],
    animal: {
      mr: 'श्वसनाचा त्रास असल्यास जनावराला कोरड्या, हवेशीर गोठ्यात ठेवा आणि त्वरित पशुवैद्यकाशी संपर्क साधा.',
      hi: 'सांस की तकलीफ हो तो पशु को सूखे, हवादार शेड में रखें और तुरंत पशु चिकित्सक से संपर्क करें।',
      en: 'If an animal has breathing trouble, keep it in a dry, airy shed and contact a veterinarian immediately.',
    },
    human: {
      mr: 'छातीत दुखणे किंवा श्वास घेण्यास त्रास ही गंभीर आपत्कालीन स्थिती आहे. ताबडतोब १०८ (रुग्णवाहिका) कॉल करा किंवा जवळच्या रुग्णालयात जा.',
      hi: 'सीने में दर्द या सांस लेने में तकलीफ गंभीर आपातकाल है। तुरंत 108 (एम्बुलेंस) कॉल करें या नजदीकी अस्पताल जाएं।',
      en: 'Chest pain or difficulty breathing is a serious emergency. Call 108 (ambulance) immediately or go to the nearest hospital.',
    },
  },
  {
    keywords: ['cough', 'cold', 'throat', 'खोकला', 'सर्दी', 'घसा', 'खांसी', 'जुकाम', 'गला'],
    animal: {
      mr: 'खोकला असल्यास जनावराला कोरड्या, उबदार व हवेशीर गोठ्यात वाऱ्यापासून दूर ठेवा. सुधारणा नसेल तर पशुवैद्यकाशी संपर्क साधा.',
      hi: 'खांसी हो तो पशु को सूखे, गर्म व हवादार शेड में सीधी हवा से दूर रखें। सुधार न हो तो पशु चिकित्सक से संपर्क करें।',
      en: 'If an animal is coughing, keep it in a dry, warm, ventilated shed away from drafts. See a vet if it does not improve.',
    },
    human: {
      mr: 'सर्दी-खोकला असल्यास कोमट द्रव प्या, वाफ घ्या आणि विश्रांती घ्या. श्वास घेण्यास त्रास किंवा ताप वाढला तर डॉक्टरकडे जा.',
      hi: 'सर्दी-खांसी हो तो गुनगुना तरल पिएं, भाप लें और आराम करें। सांस में तकलीफ या बुखार बढ़े तो डॉक्टर के पास जाएं।',
      en: 'For a cold or cough, drink warm fluids, take steam and rest. See a doctor if breathing becomes hard or fever rises.',
    },
  },
  {
    keywords: ['diarrhea', 'loose', 'vomit', 'हगवण', 'जुलाब', 'उलटी', 'दस्त', 'उल्टी', 'पातळ'],
    animal: {
      mr: 'जुलाबासाठी स्वच्छ पाणी आणि मीठ-गूळ पाणी द्या. वाळलेला चारा द्या. रक्त किंवा अशक्तपणा दिसल्यास त्वरित पशुवैद्यक.',
      hi: 'दस्त के लिए साफ पानी और नमक-गुड़ पानी दें। सूखा चारा दें। खून या कमजोरी दिखे तो तुरंत पशु चिकित्सक।',
      en: 'For diarrhea give clean water and salt-jaggery water, plus dry fodder. If you see blood or weakness, see a vet immediately.',
    },
    human: {
      mr: 'जुलाब/उलटी असल्यास मीठ-साखर पाणी (ओआरएस) आणि भरपूर द्रव घ्या. रक्त किंवा तीव्र अशक्तपणा दिसल्यास ताबडतोब डॉक्टरकडे जा.',
      hi: 'दस्त/उल्टी हो तो नमक-चीनी पानी (ओआरएस) और भरपूर तरल लें। खून या गंभीर कमजोरी दिखे तो तुरंत डॉक्टर के पास जाएं।',
      en: 'For diarrhea or vomiting take salt-sugar water (ORS) and plenty of fluids. See a doctor immediately if there is blood or severe weakness.',
    },
  },
  {
    keywords: ['injur', 'wound', 'cut', 'bleed', 'जखम', 'दुखापत', 'रक्त', 'चोट', 'खून'],
    animal: {
      mr: 'जखम/दुखापत असल्यास जागा स्वच्छ धुवा आणि कोरडी ठेवा. मोठी जखम असल्यास त्वरित पशुवैद्यकांना बोलवा.',
      hi: 'चोट/घाव हो तो जगह साफ धोएं और सूखी रखें। बड़ा घाव हो तो तुरंत पशु चिकित्सक को बुलाएं।',
      en: 'For an injury or wound, wash the area clean and keep it dry. For a major wound, call a vet immediately.',
    },
    human: {
      mr: 'जखम स्वच्छ पाण्याने धुवा, स्वच्छ कापडाने दाब देऊन रक्त थांबवा आणि जंतुनाशक लावा. मोठी/खोल जखम असल्यास रुग्णालयात जा.',
      hi: 'घाव साफ पानी से धोएं, साफ कपड़े से दबाव देकर खून रोकें और एंटीसेप्टिक लगाएं। बड़ा/गहरा घाव हो तो अस्पताल जाएं।',
      en: 'Wash the wound with clean water, press a clean cloth to stop bleeding and apply antiseptic. Go to hospital for deep or major wounds.',
    },
  },
  {
    keywords: ['appetite', 'weak', 'not eating', 'भूक', 'अशक्त', 'भूख', 'कमजोर', 'खा नहीं', 'खात नाही', 'थकवा'],
    animal: {
      mr: 'जनावर खात नसेल तर १२ तास बारकाईने निरीक्षण करा, तापमान नोंदवा आणि रुचकर हिरवा चारा द्या. सुधारणा नसेल तर पशुवैद्यक.',
      hi: 'पशु खा नहीं रहा तो 12 घंटे ध्यान से देखें, तापमान नोट करें और स्वादिष्ट हरा चारा दें। सुधार न हो तो पशु चिकित्सक।',
      en: 'If an animal is not eating, watch it closely for 12 hours, record its temperature and offer palatable green fodder. See a vet if it does not improve.',
    },
    human: {
      mr: 'भूक नसेल किंवा अशक्तपणा असेल तर पौष्टिक, संतुलित आहार, भरपूर पाणी आणि विश्रांती घ्या. १२ तासांत सुधारणा नसल्यास डॉक्टरकडे जा.',
      hi: 'भूख न हो या कमजोरी हो तो पौष्टिक, संतुलित आहार, भरपूर पानी और आराम लें। 12 घंटे में सुधार न हो तो डॉक्टर के पास जाएं।',
      en: 'If you have no appetite or feel weak, eat nutritious balanced meals, drink plenty of water and rest. See a doctor if there is no improvement in 12 hours.',
    },
  },
  {
    keywords: ['feed', 'चारा', 'खाणे', 'nutrition', 'पोषण'],
    animal: {
      mr: 'दररोज ३०-४० किलो हिरवा चारा, थोडा वाळलेला चारा आणि ५०-१०० ग्रॅम खनिज मिश्रण द्या. आहार अचानक बदलू नका.',
      hi: 'रोज़ 30-40 किलो हरा चारा, थोड़ा सूखा चारा और 50-100 ग्राम खनिज मिश्रण दें। आहार अचानक न बदलें।',
      en: 'Give 30-40 kg green fodder daily, some dry fodder and 50-100 g mineral mixture. Do not change the diet suddenly.',
    },
    human: {
      mr: 'संतुलित आहार घ्या: दररोज हिरव्या भाज्या, फळे, धान्ये आणि प्रथिने. जास्त तेलकट व बाहेरचे अन्न टाळा.',
      hi: 'संतुलित आहार लें: रोज़ हरी सब्जियाँ, फल, अनाज और प्रोटीन। ज़्यादा तेल वाला और बाहर का खाना कम करें।',
      en: 'Eat a balanced diet: green vegetables, fruits, grains and protein daily. Avoid oily and outside food.',
    },
  },
  {
    keywords: ['vaccine', 'vaccinat', 'लस', 'टीका', 'लसीकरण'],
    animal: {
      mr: 'FMD लस दर ६ महिन्यांनी आणि HS लस पावसाळ्यापूर्वी द्या. तुमच्या लसीकरण स्मरणपत्रात पुढील तारखा पहा.',
      hi: 'FMD टीका हर 6 महीने और HS टीका बरसात से पहले लगवाएं। अपने टीकाकरण रिमाइंडर में अगली तिथियाँ देखें।',
      en: 'Give the FMD vaccine every 6 months and the HS vaccine before monsoon. Check your vaccination reminder for the next dates.',
    },
    human: {
      mr: 'मुलांसाठी व प्रौढांसाठी नियमित लसीकरण आवश्यक आहे. तुमच्या जवळच्या आरोग्य केंद्रातील लसीकरण वेळापत्रक तपासा.',
      hi: 'बच्चों और बड़ों के लिए नियमित टीकाकरण ज़रूरी है। अपने नजदीकी स्वास्थ्य केंद्र का टीकाकरण कार्यक्रम देखें।',
      en: 'Regular vaccination is important for children and adults. Check the vaccination schedule at your nearest health centre.',
    },
  },
  {
    keywords: ['heat', 'summer', 'ऊन', 'गर्मी', 'उष्ण'],
    animal: {
      mr: 'उन्हाळ्यात सकाळी ११ ते ४ जनावरे सावलीत ठेवा, गोठ्यात हवा खेळती ठेवा आणि थंड पाणी सतत उपलब्ध ठेवा.',
      hi: 'गर्मी में सुबह 11 से 4 पशुओं को छाँव में रखें, गौशाला में हवा रखें और ठंडा पानी हमेशा उपलब्ध रखें।',
      en: 'In summer keep animals in shade from 11 AM to 4 PM, keep the shed ventilated and provide cool water at all times.',
    },
    human: {
      mr: 'उन्हाळ्यात दुपारी घराबाहेर जाणे टाळा, भरपूर पाणी प्या आणि हलके सूती कपडे घाला. ऊन लागल्यास सावलीत विश्रांती घ्या.',
      hi: 'गर्मी में दोपहर बाहर जाने से बचें, भरपूर पानी पिएं और हल्के सूती कपड़े पहनें। लू लगे तो छाँव में आराम करें।',
      en: 'In summer avoid going out at noon, drink plenty of water and wear light cotton clothes. If you feel heat-struck, rest in the shade.',
    },
  },
  {
    keywords: ['scheme', 'योजना', 'loan', 'कर्ज', 'subsidy', 'अनुदान'],
    animal: {
      mr: 'पशु किसान क्रेडिट कार्ड आणि राष्ट्रीय गोकुळ मिशन सारख्या योजना उपलब्ध आहेत. सरकारी योजना विभागात तपशील पहा.',
      hi: 'पशु किसान क्रेडिट कार्ड और राष्ट्रीय गोकुल मिशन जैसी योजनाएं उपलब्ध हैं। सरकारी योजना अनुभाग में विवरण देखें।',
      en: 'Schemes like the Pashu Kisan Credit Card and Rashtriya Gokul Mission are available. Check the Government Schemes section for details.',
    },
    human: {
      mr: 'आरोग्य विमा आणि सरकारी आरोग्य योजना उपलब्ध आहेत. सरकारी योजना विभागात तपशील पहा.',
      hi: 'स्वास्थ्य बीमा और सरकारी स्वास्थ्य योजनाएं उपलब्ध हैं। सरकारी योजना अनुभाग में विवरण देखें।',
      en: 'Health insurance and government health schemes are available. Check the Government Schemes section for details.',
    },
  },
  {
    keywords: ['milk', 'दूध', 'yield', 'कमी'],
    animal: {
      mr: 'दूध कमी होण्याची कारणे म्हणजे कमी चारा, पाणी किंवा तणाव. संतुलित आहार, खनिज मिश्रण आणि नियमित दूध काढणे सुरू ठेवा.',
      hi: 'दूध कम होने के कारण कम चारा, पानी या तनाव हो सकते हैं। संतुलित आहार, खनिज मिश्रण और नियमित दूध निकालना जारी रखें।',
      en: 'Lower milk yield can be due to less fodder, water or stress. Continue a balanced ration, mineral mixture and milking at regular times.',
    },
    human: {
      mr: 'आरोग्यासाठी दररोज दूध/दुग्धजन्य पदार्थ, हिरव्या भाज्या आणि भरपूर पाणी घ्या.',
      hi: 'स्वास्थ्य के लिए रोज़ दूध/दुग्ध उत्पाद, हरी सब्जियाँ और भरपूर पानी लें।',
      en: 'For good health, have milk or dairy, green vegetables and plenty of water every day.',
    },
  },
]

const FALLBACK: Reply = {
  mr: 'मी समजून घेण्याचा प्रयत्न करत आहे. कृपया कोणासाठी आहे (माणूस किंवा जनावर) आणि लक्षणे थोडक्यात सांगा, जसे "मला ताप आहे" किंवा "गाईला ताप आहे".',
  hi: 'मैं समझने की कोशिश कर रहा हूँ। कृपया किसके लिए है (इंसान या पशु) और लक्षण संक्षेप में बताएं, जैसे "मुझे बुखार है" या "गाय को बुखार है"।',
  en: 'I am trying to understand. Please tell me who it is for (human or animal) and the symptoms briefly, like "I have fever" or "cow has fever".',
}

export function generateReply(text: string, lang: Lang): string {
  const t = text.toLowerCase()
  const human = isHumanQuery(text)
  for (const item of REPLIES) {
    if (item.keywords.some((k) => t.includes(k.toLowerCase()))) {
      return (human ? item.human : item.animal)[lang]
    }
  }
  return FALLBACK[lang]
}
