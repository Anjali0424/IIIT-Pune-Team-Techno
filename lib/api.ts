/**
 * Reusable API client for the GramMitra AI FastAPI backend.
 *
 * All request logic lives here so screens stay clean and the backend URL is
 * configured in exactly one place (NEXT_PUBLIC_API_URL).
 */

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

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8100'

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

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 15000)
  try {
    const res = await fetch(`${API_URL}${path}`, {
      ...options,
      signal: options.signal ?? controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers ?? {}),
      },
    })
    if (!res.ok) {
      const detail = await readError(res)
      throw new ApiError(detail, res.status)
    }
    if (res.status === 204) return undefined as T
    return (await res.json()) as T
  } finally {
    window.clearTimeout(timeout)
  }
}

export const api = {
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
}
