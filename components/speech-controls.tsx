'use client'

import { Loader2, Pause, Play, Square, Volume2 } from 'lucide-react'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'
import { useTts } from '@/hooks/use-tts'
import { cn } from '@/lib/utils'

/**
 * Per-message speaker control for an assistant message.
 *
 * Clicking the speaker always replays *this* message from the beginning. The
 * shared engine (`lib/tts.ts`) cancels whatever is playing first, so:
 * - clicking a speaker on a different message stops the current one, and
 * - clicking the same speaker again restarts it from the top.
 *
 * While this message is active, Pause/Resume and Stop controls appear so long
 * replies can be managed. While cloud audio is being synthesised a small
 * spinner shows instead. All instances observe the same singleton, so only one
 * message ever speaks at a time and every bubble stays in sync. The spoken
 * language is the message's own `lang`, so the voice always matches the
 * displayed text.
 */
export function SpeechControls({
  text,
  lang,
  messageKey,
  className,
}: {
  text: string
  lang: Lang
  messageKey: string
  className?: string
}) {
  const { supported, paused, loading, isActive, speak, pause, resume, stop } = useTts()

  if (!supported) return null

  const playable = Boolean(text.trim())
  const active = isActive(messageKey)
  const playing = active && !paused

  const buttonClass =
    'flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95 disabled:pointer-events-none disabled:opacity-40'

  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      <button
        type="button"
        onClick={() => speak(text, lang, { key: messageKey })}
        disabled={!playable}
        aria-label={active ? UI.replay[lang] : UI.play[lang]}
        aria-pressed={active}
        className={cn(buttonClass, playing && 'bg-primary/10 text-primary')}
      >
        <Volume2 className={cn('size-3.5', playing && 'animate-pulse')} />
      </button>

      {active && !loading && (
        <>
          <button
            type="button"
            onClick={paused ? resume : pause}
            aria-label={paused ? UI.resume[lang] : UI.pause[lang]}
            className={cn(buttonClass, 'text-primary')}
          >
            {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
          </button>
          <button
            type="button"
            onClick={stop}
            aria-label={UI.stop[lang]}
            className={buttonClass}
          >
            <Square className="size-3" />
          </button>
        </>
      )}

      {active && loading && (
        <span className="flex size-7 items-center justify-center" aria-label={UI.speaking[lang]}>
          <Loader2 className="size-3.5 animate-spin text-primary" />
        </span>
      )}
    </div>
  )
}
