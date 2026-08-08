'use client'

import { Mic } from 'lucide-react'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'

type VoiceButtonProps = {
  lang: Lang
  onPress: () => void
  listening?: boolean
  className?: string
}

export function VoiceButton({
  lang,
  onPress,
  listening = false,
  className = '',
}: VoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onPress}
      aria-label={listening ? UI.stop[lang] : UI.tapToSpeak[lang]}
      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors active:scale-95 ${listening
          ? 'bg-rose-600 text-white'
          : 'bg-primary/10 text-primary'
        } ${className}`}
    >
      <Mic className="size-4" />
    </button>
  )
}