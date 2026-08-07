'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, Mic, Volume2 } from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import type { Lang } from '@/lib/data'
import { SCREEN_TITLES } from '@/lib/data'
import { LANG_LABELS, QUICK_PROMPTS, UI } from '@/lib/assistant'
import { useSpeech } from '@/hooks/use-speech'
import { api, type ChatMessage } from '@/lib/api'
import { VoiceSearchModal } from '@/components/VoiceSearchModal'

type Message = { id: number; role: 'user' | 'ai'; text: string }

export function VoiceChatScreen({ lang, setLang, back }: ScreenProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [thinking, setThinking] = useState(false)
  const [voiceOpen, setVoiceOpen] = useState(false)
  const idRef = useRef(1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const messagesRef = useRef<Message[]>([])

  const { isSpeaking, speak, stopSpeaking } = useSpeech(lang)

  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, thinking])

  const handleUserInput = async (text: string) => {
    const cleanText = text.trim()
    if (!cleanText) return
    console.log('[Chat] User input:', cleanText)

    stopSpeaking()

    const userMsg: Message = { id: idRef.current++, role: 'user', text: cleanText }
    const history = [...messagesRef.current, userMsg]
    setMessages(history)
    setThinking(true)

    // Send the WHOLE conversation to the backend LLM, not just the last message.
    const apiMessages: ChatMessage[] = history.map((m) => ({
      role: m.role === 'ai' ? 'assistant' : 'user',
      content: m.text,
    }))
    console.log('[Chat] AI request:', JSON.stringify(apiMessages))

    try {
      const res = await api.sendChat(apiMessages, lang)
      console.log('[Chat] AI response:', res)
      console.log('[Chat] Detected category:', res.category)
      console.log('[Chat] LLM response:', res.reply)

      const aiMsg: Message = { id: idRef.current++, role: 'ai', text: res.reply }
      setMessages((m) => [...m, aiMsg])
      speak(res.reply)
    } catch (err) {
      console.error('[Chat] AI unavailable:', err)
      const aiMsg: Message = {
        id: idRef.current++,
        role: 'ai',
        text: UI.aiUnavailable[lang],
      }
      setMessages((m) => [...m, aiMsg])
    } finally {
      setThinking(false)
    }
  }

  const handleMic = () => {
    stopSpeaking()
    setVoiceOpen(true)
  }

  return (
    <div className="flex flex-1 flex-col bg-secondary/30">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-primary px-4 py-4 text-primary-foreground shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={back}
            aria-label="Go back"
            className="flex size-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 active:scale-95"
          >
            <ChevronLeft className="size-6" />
          </button>
          <h1 className="flex-1 text-lg font-semibold">{SCREEN_TITLES.voice[lang]}</h1>
        </div>
        <div className="mt-3 flex gap-2">
          {LANG_LABELS.map((l) => (
            <button
              key={l.id}
              onClick={() => setLang(l.id)}
              className={`rounded-full px-3.5 py-1 text-sm font-medium transition-all active:scale-95 ${
                lang === l.id
                  ? 'bg-white text-primary shadow'
                  : 'bg-white/15 text-primary-foreground hover:bg-white/25'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </header>

      {/* Chat area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar px-4 py-5">
        {messages.length === 0 && (
          <EmptyState lang={lang} onPick={handleUserInput} />
        )}

        <div className="flex flex-col gap-3">
          {messages.map((m) => (
            <ChatBubble key={m.id} message={m} lang={lang} onSpeak={() => speak(m.text)} />
          ))}

          {thinking && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-3xl rounded-bl-md bg-card px-4 py-3 shadow-sm ring-1 ring-border/60">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="size-2 rounded-full bg-primary"
                    animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 0.9,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom control bar */}
      <div className="border-t border-border bg-card px-4 pb-6 pt-4">
        <div className="flex flex-col items-center">
          <AnimatePresence>
            {isSpeaking && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-3 text-sm font-medium text-primary"
              >
                {UI.speaking[lang]}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="relative flex items-center justify-center">
            <motion.button
              onClick={handleMic}
              whileTap={{ scale: 0.92 }}
              className="flex size-[72px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
              aria-label={UI.tapToSpeak[lang]}
            >
              <Mic className="size-8" />
            </motion.button>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">{UI.tapToSpeak[lang]}</p>
        </div>
      </div>

      {/* Voice search */}
      <VoiceSearchModal
        open={voiceOpen}
        lang={lang}
        onClose={() => setVoiceOpen(false)}
        onResult={handleUserInput}
      />
    </div>
  )
}

function ChatBubble({
  message,
  lang,
  onSpeak,
}: {
  message: Message
  lang: Lang
  onSpeak: () => void
}) {
  const isUser = message.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex max-w-[82%] flex-col gap-1 ${isUser ? 'items-end' : 'items-start'}`}>
        <span className="px-2 text-[11px] font-medium text-muted-foreground">
          {isUser ? `👨‍🌾 ${UI.you[lang]}` : `🤖 ${UI.assistant[lang]}`}
        </span>
        <div
          className={`rounded-3xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
            isUser
              ? 'rounded-br-md bg-primary text-primary-foreground'
              : 'rounded-bl-md bg-card text-card-foreground ring-1 ring-border/60'
          }`}
        >
          {message.text}
        </div>
        {!isUser && (
          <button
            onClick={onSpeak}
            className="flex items-center gap-1 px-2 text-[11px] font-medium text-primary hover:underline"
          >
            <Volume2 className="size-3.5" />
            {UI.speaking[lang].replace('...', '')}
          </button>
        )}
      </div>
    </motion.div>
  )
}

function EmptyState({ lang, onPick }: { lang: Lang; onPick: (t: string) => void }) {
  return (
    <div className="flex flex-col items-center pt-8 text-center">
      <span className="text-5xl" aria-hidden>
        🤖
      </span>
      <p className="mt-3 max-w-[15rem] text-sm text-muted-foreground text-pretty">
        {UI.askAnything[lang]}
      </p>
      <p className="mt-6 mb-2 text-xs font-semibold text-foreground">{UI.quickHelp[lang]}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {QUICK_PROMPTS[lang].map((q) => (
          <button
            key={q}
            onClick={() => onPick(q)}
            className="rounded-full bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm ring-1 ring-border/60 transition-colors hover:bg-secondary active:scale-95"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  )
}
