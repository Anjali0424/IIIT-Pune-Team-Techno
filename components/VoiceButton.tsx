'use client'

import { Mic } from 'lucide-react'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'

/**
 * Reusable microphone button that opens the YouTube-style voice search modal.
 * Drop it next to any search input; sizing/colors are overridable via `className`.
 */
export function VoiceButton({
  lang,
  onPress,
  listening = false,
  className = '',
}: {
  lang: Lang
  onPress: () => void
  listening?: boolean
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onPress}
      aria-label={listening ? UI.stop[lang] : UI.tapToSpeak[lang]}
      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors active:scale-95 ${
        listening ? 'bg-rose-600 text-white' : 'bg-primary/10 text-primary'
      } ${className}`}
    >
      <Mic className="size-4" />
    </button>
  )
}
