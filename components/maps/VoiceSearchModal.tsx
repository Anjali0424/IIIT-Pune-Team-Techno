'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mic, X, Volume2, Sparkles, AlertCircle } from 'lucide-react'
import type { Lang } from '@/lib/data'

interface VoiceSearchModalProps {
  isOpen: boolean
  lang: Lang
  listening: boolean
  interimText: string
  error: string | null
  onClose: () => void
  onSelectPrompt: (phrase: string) => void
}

const SAMPLE_PROMPTS = {
  mr: [
    'माझ्या जवळची शाळा दाखव',
    'माझ्या जवळ हॉस्पिटल',
    'ग्रामपंचायत कुठे आहे',
    'नजीकचे पशुवैद्यकीय डॉक्टर',
    'जवळचे ई-सेवा केंद्र',
    'जवळची बँक दाखव',
  ],
  hi: [
    'माझ्या जवळ स्कूल दिखाओ',
    'नजदीकी अस्पताल',
    'ग्राम पंचायत कहाँ है',
    'नजदीकी पशु डॉक्टर',
    'ई-सेवा केंद्र दिखाओ',
    'नजदीकी बैंक',
  ],
  en: [
    'Nearest school',
    'Nearby hospital',
    'Where is Gram Panchayat',
    'Nearest veterinary doctor',
    'Show nearby e-seva',
    'Show nearest bank',
  ],
}

const MODAL_LABELS = {
  title: {
    mr: 'बोलून शोधा (Voice Search)',
    hi: 'बोलकर खोजें (Voice Search)',
    en: 'Voice Search',
  },
  listening: {
    mr: 'ऐकत आहे... बोला...',
    hi: 'सुन रहा है... बोलिए...',
    en: 'Listening... Speak now...',
  },
  tapToSpeak: {
    mr: 'मायक्रोफोन दाबून बोला',
    hi: 'माइक दबाकर बोलें',
    en: 'Tap microphone to speak',
  },
  trySaying: {
    mr: 'खालीलपैकी काहीही बोला:',
    hi: 'इनमें से कुछ बोलें:',
    en: 'Try saying:',
  },
  permissionDenied: {
    mr: 'मायक्रोफोन परवानगी नाकारली आहे. कृपया ब्राऊझर सेटिंग्समध्ये मायक्रोफोन सुरू करा.',
    hi: 'माइक्रोफोन अनुमति अस्वीकृत है। कृपया ब्राउज़र सेटिंग्स में माइक चालू करें।',
    en: 'Microphone permission denied. Please allow microphone access in browser settings.',
  },
  noSpeech: {
    mr: 'काहीही ऐकू आले नाही. कृपया पुन्हा प्रयत्न करा.',
    hi: 'कुछ सुनाई नहीं दिया। कृपया पुनः प्रयास करें।',
    en: 'No speech detected. Please try speaking again.',
  },
}

export function VoiceSearchModal({
  isOpen,
  lang,
  listening,
  interimText,
  error,
  onClose,
  onSelectPrompt,
}: VoiceSearchModalProps) {
  if (!isOpen) return null

  const prompts = SAMPLE_PROMPTS[lang] || SAMPLE_PROMPTS.en

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md rounded-3xl bg-card p-6 shadow-2xl border border-teal-500/20 text-foreground overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-muted p-2 text-muted-foreground hover:bg-muted/80 active:scale-95 transition-all cursor-pointer z-10"
          >
            <X className="size-5" />
          </button>

          <div className="flex flex-col items-center text-center">
            {/* Pulsing Mic Visualizer */}
            <div className="relative flex items-center justify-center my-6">
              {listening && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="absolute size-28 rounded-full bg-emerald-500/20"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.4, 0.8] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.2, delay: 0.2 }}
                    className="absolute size-20 rounded-full bg-teal-500/30"
                  />
                </>
              )}

              <div
                className={`relative flex size-20 items-center justify-center rounded-full shadow-lg transition-all ${
                  listening
                    ? 'bg-emerald-600 text-white shadow-emerald-500/40 ring-4 ring-emerald-400/50'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                <Mic className={`size-10 ${listening ? 'animate-bounce' : ''}`} />
              </div>
            </div>

            {/* Listening status */}
            <h3 className="text-xl font-extrabold text-foreground flex items-center gap-2">
              <Sparkles className="size-5 text-emerald-600" />
              {listening ? MODAL_LABELS.listening[lang] : MODAL_LABELS.title[lang]}
            </h3>

            {/* Live interim text display */}
            <div className="mt-3 min-h-[50px] w-full rounded-2xl bg-teal-50/60 p-4 border border-teal-500/10 flex items-center justify-center text-center">
              {interimText ? (
                <p className="text-lg font-bold text-teal-950 animate-pulse leading-snug">
                  &ldquo;{interimText}&rdquo;
                </p>
              ) : error ? (
                <div className="flex items-center gap-2 text-destructive text-xs font-semibold">
                  <AlertCircle className="size-4 shrink-0" />
                  <span>
                    {error === 'permission-denied'
                      ? MODAL_LABELS.permissionDenied[lang]
                      : MODAL_LABELS.noSpeech[lang]}
                  </span>
                </div>
              ) : (
                <p className="text-sm font-semibold text-muted-foreground">
                  {MODAL_LABELS.tapToSpeak[lang]}
                </p>
              )}
            </div>

            {/* Quick voice prompts */}
            <div className="mt-5 w-full text-left">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                {MODAL_LABELS.trySaying[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {prompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectPrompt(prompt)}
                    className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-2 text-xs font-bold text-foreground border border-border/60 hover:bg-emerald-50 hover:border-emerald-300 transition-all active:scale-95 cursor-pointer"
                  >
                    <Volume2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>{prompt}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
