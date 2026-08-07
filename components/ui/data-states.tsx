'use client'

import { Loader2 } from 'lucide-react'
import type { Lang } from '@/lib/data'
import { UI } from '@/lib/assistant'

export function LoadingState({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
      <Loader2 className="size-8 animate-spin text-primary" />
      {label ? <p className="text-sm font-medium">{label}</p> : null}
    </div>
  )
}

export function EmptyState({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
      <span className="text-4xl" aria-hidden>
        🔍
      </span>
      <p className="text-sm font-semibold text-foreground">{label}</p>
      {hint ? <p className="max-w-[16rem] text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  )
}

export function ErrorState({
  lang,
  message,
  onRetry,
}: {
  lang: Lang
  message: string
  onRetry: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <span className="text-4xl" aria-hidden>
        ⚠️
      </span>
      <p className="max-w-[16rem] text-sm font-semibold text-foreground">{UI.failedToLoad[lang]}</p>
      {message ? (
        <p className="max-w-[16rem] text-xs text-muted-foreground text-pretty">{message}</p>
      ) : null}
      <button
        onClick={onRetry}
        className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow active:scale-95"
      >
        {UI.retry[lang]}
      </button>
    </div>
  )
}
