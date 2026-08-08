'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mic,
  Square,
  Loader2,
  Play,
  Pause,
  Send,
  WifiOff,
  Languages,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import { ScreenHeader } from '@/components/screen-header'
import { useFeedSpeech } from '@/hooks/useFeedSpeech'

const ANIMALS = [
  { id: 'cow', emoji: '🐄', label: { mr: 'गाय', hi: 'गाय', en: 'Cow' } },
  { id: 'buffalo', emoji: '🐃', label: { mr: 'म्हैस', hi: 'भैंस', en: 'Buffalo' } },
  { id: 'goat', emoji: '🐐', label: { mr: 'शेळी', hi: 'बकरी', en: 'Goat' } },
  { id: 'sheep', emoji: '🐑', label: { mr: 'मेंढी', hi: 'भेड़', en: 'Sheep' } },
  { id: 'calf', emoji: '🐂', label: { mr: 'वासरू', hi: 'बछड़ा', en: 'Calf' } },
  { id: 'horse', emoji: '🐎', label: { mr: 'घोडा', hi: 'घोड़ा', en: 'Horse' } },
  { id: 'poultry', emoji: '🐔', label: { mr: 'कोंबडी', hi: 'मुर्गी', en: 'Poultry' } },
]

const EXAMPLES = [
  {
    mr: 'माझी गाय 10 लिटर दूध देते. कोणता चारा देऊ?',
    hi: 'मेरी गाय 10 लीटर दूध देती है। क्या चारा दूं?',
    en: 'My cow gives 10 litres of milk. What should I feed?',
  },
  {
    mr: 'माझी म्हैस गाभण आहे.',
    hi: 'मेरी भैंस गर्भवती है।',
    en: 'My buffalo is pregnant.',
  },
  {
    mr: 'माझी शेळी अशक्त आहे.',
    hi: 'मेरी बकरी कमजोर है।',
    en: 'My goat is weak.',
  },
  {
    mr: 'मी माझ्या वासराला काय खायला देऊ?',
    hi: 'मैं अपने बछड़े को क्या खिलाऊं?',
    en: 'What should I feed my calf?',
  },
]

export function FeedRecommendationScreen({ lang, back }: ScreenProps) {
  const {
    state,
    inputText,
    result,
    errorMsg,
    isPlaying,
    isPaused,
    setInputText,
    startListening,
    stopListening,
    submitQuery,
    playResult,
    pausePlayback,
    resumePlayback,
    stopPlayback,
  } = useFeedSpeech(lang)

  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    submitQuery(inputText)
  }

  // Translation helpers
  const t = {
    title: { mr: 'चारा सल्ला AI', hi: 'चारा सुझाव AI', en: 'Feed Advice AI' },
    placeholder: {
      mr: 'येथे टाइप करा...',
      hi: 'यहां टाइप करें...',
      en: 'Type here...',
    },
    listening: { mr: 'ऐकत आहे...', hi: 'सुन रहा है...', en: 'Listening...' },
    loading: { mr: 'सल्ला बनवत आहे...', hi: 'सुझाव बना रहा है...', en: 'Generating advice...' },
    sourceLocal: { mr: 'ऑफलाइन डेटा', hi: 'ऑफ़लाइन डेटा', en: 'Offline Data' },
    sourceAI: { mr: 'AI सल्ला', hi: 'AI सुझाव', en: 'AI Advice' },
    selectAnimal: { mr: 'प्राणी निवडा', hi: 'पशु चुनें', en: 'Select Animal' },
    exampleQuestions: { mr: 'उदाहरणे', hi: 'उदाहरण', en: 'Example Questions' },
    features: {
      offline: { mr: 'इंटरनेटशिवाय चालते', hi: 'बिना इंटरनेट चलता है', en: 'Works Offline' },
      languages: { mr: 'मराठी, हिंदी व इंग्रजी', hi: 'मराठी, हिंदी और अंग्रेजी', en: 'Multilingual' },
      voice: { mr: 'आवाजाने विचारा', hi: 'आवाज़ से पूछें', en: 'Voice Input' },
      ai: { mr: 'AI आधारित योग्य सल्ला', hi: 'AI आधारित सही सलाह', en: 'AI Recommendation' },
    },
  }

  const handleExampleClick = (text: string) => {
    setInputText(text)
    submitQuery(text)
  }

  const handleAnimalClick = (animalName: string) => {
    setInputText(animalName)
  }

  return (
    <div className="flex h-full flex-col bg-slate-50 relative">
      <ScreenHeader screen="feed" lang={lang} onBack={back} />

      <div className="flex-1 overflow-y-auto no-scrollbar pb-[88px]">
        {/* State: Idle (Home View) */}
        {state === 'idle' && !result && !errorMsg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4 p-3"
          >
            {/* Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 text-white shadow-md">
              <div className="relative z-10">
                <h2 className="text-xl font-bold">{t.title[lang]}</h2>
                <p className="mt-1 max-w-[85%] text-xs font-medium text-emerald-50">
                  {lang === 'mr' && 'तुमच्या प्राण्याला काय खायला द्यावे ते विचारा.'}
                  {lang === 'hi' && 'अपने पशु को क्या खिलाएं, यह पूछें।'}
                  {lang === 'en' && 'Ask what to feed your animals.'}
                </p>
              </div>
              <div className="absolute -bottom-3 -right-2 flex opacity-20">
                <span className="text-5xl">🐄</span>
                <span className="text-5xl -ml-3">🐐</span>
              </div>
            </div>

            {/* Select Animal */}
            <div>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                {t.selectAnimal[lang]}
              </h3>
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {ANIMALS.map((animal) => (
                  <button
                    key={animal.id}
                    onClick={() => handleAnimalClick(animal.label[lang])}
                    className="flex min-w-[64px] flex-col items-center justify-center gap-1 rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200 transition hover:bg-emerald-50 hover:ring-emerald-200 active:scale-95"
                  >
                    <span className="text-2xl">{animal.emoji}</span>
                    <span className="text-[10px] font-semibold text-slate-700">
                      {animal.label[lang]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Example Questions */}
            <div>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                {t.exampleQuestions[lang]}
              </h3>
              <div className="flex flex-col gap-2">
                {EXAMPLES.map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => handleExampleClick(ex[lang])}
                    className="flex items-center justify-between rounded-xl bg-white p-3 text-left shadow-sm ring-1 ring-slate-200 transition hover:bg-emerald-50 active:scale-[0.98]"
                  >
                    <span className="text-xs font-medium text-slate-700">{ex[lang]}</span>
                    <ChevronRight className="size-3 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="flex items-center gap-2 rounded-xl bg-emerald-100/50 p-2 ring-1 ring-emerald-200/50">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="size-3" />
                </div>
                <span className="text-[10px] font-semibold text-emerald-900 leading-tight">
                  {t.features.ai[lang]}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-blue-100/50 p-2 ring-1 ring-blue-200/50">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <Mic className="size-3" />
                </div>
                <span className="text-[10px] font-semibold text-blue-900 leading-tight">
                  {t.features.voice[lang]}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-orange-100/50 p-2 ring-1 ring-orange-200/50">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  <WifiOff className="size-3" />
                </div>
                <span className="text-[10px] font-semibold text-orange-900 leading-tight">
                  {t.features.offline[lang]}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-purple-100/50 p-2 ring-1 ring-purple-200/50">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white">
                  <Languages className="size-3" />
                </div>
                <span className="text-[10px] font-semibold text-purple-900 leading-tight">
                  {t.features.languages[lang]}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* State: Loading */}
        {state === 'loading' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex h-48 flex-col items-center justify-center gap-3"
          >
            <div className="relative flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
              <Loader2 className="size-6 animate-spin" />
            </div>
            <p className="animate-pulse text-xs font-semibold text-emerald-700">
              {t.loading[lang]}
            </p>
          </motion.div>
        )}

        {/* State: Error */}
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="m-3 rounded-2xl bg-red-100 p-4 text-red-900 ring-1 ring-red-200"
          >
            <p className="text-xs font-medium">{errorMsg}</p>
          </motion.div>
        )}

        {/* State: Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100">
              {/* Result Header with Playback Controls */}
              <div className="flex items-center justify-between border-b border-emerald-100 bg-emerald-50/50 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  {result.source === 'local' ? t.sourceLocal[lang] : t.sourceAI[lang]}
                </span>
                <div className="flex items-center gap-2">
                  {isPlaying ? (
                    <>
                      <button
                        onClick={isPaused ? resumePlayback : pausePlayback}
                        className="flex size-8 items-center justify-center rounded-full bg-emerald-200 text-emerald-800 shadow-sm transition active:scale-90"
                      >
                        {isPaused ? <Play className="size-4 ml-0.5" /> : <Pause className="size-4" />}
                      </button>
                      <button
                        onClick={stopPlayback}
                        className="flex size-8 items-center justify-center rounded-full bg-rose-200 text-rose-800 shadow-sm transition active:scale-90"
                      >
                        <Square className="size-3 fill-current" />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={playResult}
                      className="flex size-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm transition hover:bg-emerald-600 active:scale-90"
                    >
                      <Play className="size-4 ml-0.5 fill-current" />
                    </button>
                  )}
                </div>
              </div>

              {/* Result Content */}
              <div className="p-4">
                <div className="prose prose-sm prose-emerald max-w-none whitespace-pre-wrap text-slate-800 text-[13px] leading-relaxed">
                  {result.reply}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Persistent Bottom Input Area (WhatsApp Style) */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0))]">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md items-center gap-2">
          
          <div className="relative flex-1 flex items-center bg-slate-100 rounded-full border border-slate-200 focus-within:ring-1 focus-within:ring-emerald-400 focus-within:border-emerald-400 transition-colors">
            {/* Input Field */}
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={state === 'listening' ? t.listening[lang] : t.placeholder[lang]}
              disabled={state === 'loading'}
              className="w-full bg-transparent py-3 pl-4 pr-12 text-sm text-slate-800 outline-none disabled:opacity-50 placeholder:text-slate-400"
            />
            
            {/* Mic Button (Inside Input) */}
            <button
              type="button"
              onClick={state === 'listening' ? stopListening : startListening}
              disabled={state === 'loading'}
              className={`absolute right-1 flex size-9 items-center justify-center rounded-full transition-all disabled:opacity-50 ${
                state === 'listening'
                  ? 'bg-rose-100 text-rose-600'
                  : 'text-slate-400 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              {state === 'listening' ? (
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0 rounded-full bg-rose-200"
                  />
                  <Square className="relative z-10 size-4 fill-current" />
                </div>
              ) : (
                <Mic className="size-5" />
              )}
            </button>
          </div>
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={!inputText.trim() || state === 'loading' || state === 'listening'}
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm transition hover:bg-emerald-600 disabled:opacity-50 disabled:bg-slate-300 disabled:text-white"
          >
            <Send className="size-4 ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  )
}
