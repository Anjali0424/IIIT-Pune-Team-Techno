import type { VisionResponse } from '@/lib/api'
import type { Lang } from '@/lib/data'

type StoredAnalysis = {
  result: VisionResponse
  file: File | null
  lang: Lang
}

let latest: StoredAnalysis | null = null

/**
 * Module-level bridge that hands the finished analysis (plus the source photo,
 * when one was provided) from the camera modal to the /analyze page, because
 * the two screens are separate routes and the result payload is not
 * JSON-serializable safely through the URL.
 */
export function saveAnalysis(result: VisionResponse, file: File | null, lang: Lang): void {
  latest = { result, file, lang }
}

export function getAnalysis(): StoredAnalysis | null {
  return latest
}

export function clearAnalysis(): void {
  latest = null
}
