/**
 * Reusable API client for the GramMitra AI FastAPI backend.
 *
 * All request logic lives here so screens stay clean and the backend URL is
 * configured in exactly one place (NEXT_PUBLIC_API_URL).
 */

import type { Lang } from '@/lib/data'

export type LangText = { mr: string; hi: string; en: string }

export type Scheme = {
  id: string
  name: LangText
  category: string
  state: string[]
  description: LangText
  benefits: LangText
  eligibility: LangText
  required_documents: LangText[]
  official_url: string
  language: string[]
  popular: boolean
  keywords?: string[]
  last_date?: LangText | string | null
  application_process?: LangText | string | null
}

export type Vaccination = {
  id: number
  animal_name: string
  owner_name: string
  animal_type: string
  vaccine_name: string
  vaccination_date: string
  next_due_date: string | null
  status: 'upcoming' | 'completed'
  notes?: string | null
  reminder_message?: string | null
  days_until_due?: number | null
  is_overdue?: boolean
  created_at?: string | null
  updated_at?: string | null
}

export type VaccinationPayload = {
  animal_name: string
  owner_name: string
  animal_type: string
  vaccine_name: string
  vaccination_date: string
  status?: 'upcoming' | 'completed' | 'done'
  notes?: string | null
}

export type EmergencyContact = {
  id: string
  district: string
  name: string
  phone: string
  type: string
}

export type EmergencyContactPayload = {
  district: string
  name: string
  phone: string
  type: string
}

export type IssueStatus = 'pending' | 'in_progress' | 'resolved'

export type VillageIssue = {
  id: number
  reporter_name: string
  phone: string
  village: string
  issue_text: string
  status: IssueStatus
  created_at?: string | null
  updated_at?: string | null
}

export type IssuePayload = {
  reporter_name: string
  phone: string
  village: string
  issue_text: string
}

export type VisionResponse = {
  object_detected: string
  explanation: string
  problem: string
  suggested_solution: string
  precautions: string
  confidence: string
  summary_text: string
  reply: string
  language: string
}

export type ChatMessage = {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export type ChatResult = {
  reply: string
  category: string
  language: string
}

export type FeedResult = {
  reply: string
  animal: string
  language: string
  source: 'ai' | 'local' | string
}

/** Legacy payload check not needed for the new simple response format. */
export function isUnavailableCropResult(result: VisionResponse): boolean {
  return false
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000'

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

type QueryParams = Record<string, string | number | boolean | null | undefined>

function buildQuery(params?: QueryParams): string {
  if (!params) return ''
  const search = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') {
      search.set(key, String(value))
    }
  }
  const query = search.toString()
  return query ? `?${query}` : ''
}

async function readError(res: Response): Promise<string> {
  try {
    const body = (await res.json()) as { detail?: unknown }
    if (body.detail) {
      if (typeof body.detail === 'string') return body.detail
      return JSON.stringify(body.detail)
    }
  } catch {
    /* not JSON */
  }
  return `Request failed (${res.status})`
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  timeoutMs = 15000,
): Promise<T> {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs)
  const isFormData = options.body instanceof FormData
  const url = `${API_URL}${path}`
  try {
    const res = await fetch(url, {
      ...options,
      signal: options.signal ?? controller.signal,
      headers: {
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        ...(options.headers ?? {}),
      },
    })
    if (!res.ok) {
      const detail = await readError(res)
      throw new ApiError(detail, res.status)
    }
    if (res.status === 204) return undefined as T
    return (await res.json()) as T
  } catch (err) {
    if (err instanceof ApiError) throw err
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new ApiError(`Request timed out after ${timeoutMs}ms (${url})`, 408)
    }
    const message = err instanceof Error ? err.message : 'Network request failed'
    throw new ApiError(`${message} (${url})`, 0)
  } finally {
    window.clearTimeout(timeout)
  }
}

export const api = {
  /* ----------------------------- Text-to-Speech ---------------------------- */

  async synthesizeSpeech(text: string, language: string, signal?: AbortSignal): Promise<Blob> {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 12000)
    try {
      const res = await fetch(`${API_URL}/tts`, {
        method: 'POST',
        signal: signal ?? controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language }),
      })
      if (!res.ok) {
        const detail = await readError(res)
        throw new ApiError(detail, res.status)
      }
      const type = res.headers.get('content-type')?.split(';')[0] ?? 'audio/mpeg'
      return new Blob([await res.arrayBuffer()], { type })
    } finally {
      window.clearTimeout(timeout)
    }
  },

  /* -------------------------------- AI Chat -------------------------------- */

  async chat(text: string, language: string): Promise<string> {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 45000)
    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language }),
      })
      if (!res.ok) {
        const detail = await readError(res)
        throw new ApiError(detail, res.status)
      }
      const data = (await res.json()) as { reply: string }
      return data.reply
    } finally {
      window.clearTimeout(timeout)
    }
  },

  sendChat(messages: ChatMessage[], language: Lang): Promise<ChatResult> {
    return request(
      '/api/chat',
      { method: 'POST', body: JSON.stringify({ messages, language }) },
      45000,
    )
  },

  /* ------------------------- Feed Recommendation AI ------------------------ */

  getFeedRecommendation(query: string, language: Lang): Promise<FeedResult> {
    return request(
      '/api/feed',
      { method: 'POST', body: JSON.stringify({ query, language }) },
      45000,
    )
  },

  /* ----------------------------- Government Schemes ---------------------------- */

  getSchemes(params?: QueryParams): Promise<Scheme[]> {
    return request(`/schemes${buildQuery(params)}`)
  },

  getScheme(id: string): Promise<Scheme> {
    return request(`/schemes/${encodeURIComponent(id)}`)
  },

  /* ------------------------------- Vaccination ------------------------------- */

  getVaccinations(params?: QueryParams): Promise<Vaccination[]> {
    return request(`/vaccination${buildQuery(params)}`)
  },

  getUpcomingVaccinations(): Promise<Vaccination[]> {
    return request('/vaccination/upcoming')
  },

  getVaccinationsDueToday(): Promise<Vaccination[]> {
    return request('/vaccination/due/today')
  },

  getVaccinationsDueTomorrow(): Promise<Vaccination[]> {
    return request('/vaccination/due/tomorrow')
  },

  createVaccination(payload: VaccinationPayload): Promise<Vaccination> {
    return request('/vaccination', { method: 'POST', body: JSON.stringify(payload) })
  },

  updateVaccination(id: number, payload: Partial<VaccinationPayload>): Promise<Vaccination> {
    return request(`/vaccination/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
  },

  deleteVaccination(id: number): Promise<void> {
    return request(`/vaccination/${id}`, { method: 'DELETE' })
  },

  /* ------------------------------- Emergency -------------------------------- */

  getContacts(params?: QueryParams): Promise<EmergencyContact[]> {
    return request(`/contacts${buildQuery(params)}`)
  },

  createContact(payload: EmergencyContactPayload): Promise<EmergencyContact> {
    return request('/emergency', { method: 'POST', body: JSON.stringify(payload) })
  },

  /* ---------------------------- Village Head issues ---------------------------- */

  getIssues(params?: QueryParams): Promise<VillageIssue[]> {
    return request(`/issues${buildQuery(params)}`)
  },

  createIssue(payload: IssuePayload): Promise<VillageIssue> {
    return request('/issues', { method: 'POST', body: JSON.stringify(payload) })
  },

  updateIssueStatus(id: number, status: IssueStatus): Promise<VillageIssue> {
    return request(`/issues/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) })
  },

  deleteIssue(id: number): Promise<void> {
    return request(`/issues/${id}`, { method: 'DELETE' })
  },

  /* ------------------------------- AI Crop Doctor ------------------------------ */

  analyzeCrop(
    image: Blob | null,
    questionText: string,
    language: Lang,
  ): Promise<VisionResponse> {
    const buildForm = () => {
      const form = new FormData()
      if (image) {
        const typed =
          image.type && image.type.startsWith('image/')
            ? image
            : new File([image], 'crop-photo.jpg', { type: 'image/jpeg' })
        const ext =
          typed.type === 'image/png'
            ? 'png'
            : typed.type === 'image/webp'
            ? 'webp'
            : typed.type === 'image/heic'
            ? 'heic'
            : typed.type === 'image/heif'
            ? 'heif'
            : 'jpg'
        form.append('image', typed, `crop-photo.${ext}`)
      }
      form.append('speech_text', questionText)
      form.append('language', language)
      return form
    }

    const run = async (attempt: number): Promise<VisionResponse> => {
      try {
        const result = await request<VisionResponse>(
          '/api/crop/analyze',
          { method: 'POST', body: buildForm() },
          90000,
        )
        return result
      } catch (err) {
        if (attempt < 2) {
          return run(attempt + 1)
        }
        // Catch raw fetch errors (NetworkError, Failed to fetch) and return user friendly error
        if (err instanceof TypeError && err.message.includes('fetch')) {
          throw new Error('AI service is temporarily unavailable. Please try again.')
        }
        throw err
      }
    }

    return run(1)
  },
}
