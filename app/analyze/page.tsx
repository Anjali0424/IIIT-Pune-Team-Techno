'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Camera, Home } from 'lucide-react'
import { getAnalysis, clearAnalysis } from '@/lib/analysis-store'
import { setAskIntent } from '@/lib/ask-intent'
import { AnalysisResult } from '@/components/AnalysisResult'
import { UI } from '@/lib/assistant'
import type { Lang } from '@/lib/data'

/**
 * Analysis screen shown after the ask workflow. Receives the result + photo +
 * language via the module-level analysis store and renders only the plain
 * Marathi/Hindi/English answer with simple action buttons.
 */
export default function AnalyzePage() {
  const router = useRouter()
  const [data] = useState(() => getAnalysis())
  const [preview, setPreview] = useState<string | null>(null)
  const lang: Lang = data?.lang ?? 'mr'

  useEffect(() => {
    if (!data?.file) return
    const url = URL.createObjectURL(data.file)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [data])

  const startNew = (intent: 'photo' | 'voice') => {
    clearAnalysis()
    setAskIntent(intent)
    router.push('/')
  }

  const goHome = () => {
    clearAnalysis()
    router.push('/')
  }

  return (
    <div className="flex min-h-dvh w-full justify-center bg-secondary/40">
      <div className="relative flex min-h-dvh w-full max-w-md flex-col overflow-hidden bg-background shadow-xl">
        {/* Header */}
        <header className="flex items-center justify-center gap-2 rounded-b-3xl bg-primary px-5 py-5 text-primary-foreground shadow-lg">
          <span className="text-2xl" aria-hidden>
            🌾
          </span>
          <span className="text-lg font-bold">{UI.appName[lang]}</span>
        </header>

        {/* Body */}
        <div className="no-scrollbar flex-1 overflow-y-auto px-5 pb-10 pt-6">
          {data ? (
            <>
              {preview && (
                <div className="overflow-hidden rounded-3xl shadow-md ring-1 ring-border/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={preview}
                    alt={UI.appName[lang]}
                    className="h-56 w-full object-cover"
                  />
                </div>
              )}
              <div className={preview ? 'mt-5' : ''}>
                <AnalysisResult
                  result={data.result}
                  lang={lang}
                  onNewPhoto={() => startNew('photo')}
                  onNewQuestion={() => startNew('voice')}
                  onHome={goHome}
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center py-20 text-center">
              <Camera className="size-12 text-primary" />
              <p className="mt-4 text-base font-semibold text-foreground">{UI.noAnalysis[lang]}</p>
              <button
                type="button"
                onClick={goHome}
                className="mt-6 flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Home className="size-5" />
                {UI.goHome[lang]}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
