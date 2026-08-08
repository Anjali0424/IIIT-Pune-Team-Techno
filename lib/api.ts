/**
 * Reusable API client for the GramMitra AI FastAPI backend.
 *
 * All request logic lives here so screens stay clean and the backend URL is
 * configured in exactly one place (NEXT_PUBLIC_API_URL).
 */

import type { Lang } from '@/lib/data'

export type LangText = {
  mr: string
  hi: string
  en: string
}

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

export type CropAnalysis = {
  crop: string
  disease: string
  pest: string | null
  nutrient_deficiency: string | null
  confidence: number
  severity: string
  cause: string
  recommended_medicine: string
  organic_treatment: string
  chemical_treatment: string
  prevention: string
  summary: string
}

export type Product = {
  id: number
  name: string
  description?: string | null
  category: string
  price: number
  unit: string
  quantity?: number | null
  seller_name: string
  seller_phone: string
  village?: string | null
  district?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type ProductPayload = {
  name: string
  description?: string | null
  category: string
  price: number
  unit: string
  quantity?: number | null
  seller_name: string
  seller_phone: string
  village?: string | null
  district?: string | null
}

/* -------------------------- Market Research -------------------------- */

export type MarketPrice = {
  state: string
  district: string
  market: string
  commodity: string
  arrival_date: string
  min_price: string
  max_price: string
  modal_price: string
  variety?: string | null
}

export type AIInsight = {
  commodity: string
  insight: string
}

/* ------------------------------ API URL ------------------------------ */

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000'

/* ------------------------------ Errors ------------------------------- */

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

/* ---------------------------- Query Params --------------------------- */

export type QueryParams = Record<
  string,
  string | number | boolean | null | undefined
>

function buildQuery(params?: QueryParams): string {
  if (!params) return ''

  const search = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    if (
      value !== undefined &&
      value !== null &&
      value !== ''
    ) {
      search.set(key, String(value))
    }
  }

  const query = search.toString()

  return query ? `?${query}` : ''
}

/* ----------------------------- Error Read ---------------------------- */

async function readError(res: Response): Promise<string> {
  try {
    const body = (await res.json()) as {
      detail?: unknown
    }

    if (body.detail) {
      if (typeof body.detail === 'string') {
        return body.detail
      }

      return JSON.stringify(body.detail)
    }
  } catch {
    // Response was not JSON.
  }

  return `Request failed (${res.status})`
}

/* ------------------------------- Request ----------------------------- */

async function request<T>(
  path: string,
  options: RequestInit = {},
  timeoutMs = 15000,
): Promise<T> {
  const controller = new AbortController()

  const timeout = window.setTimeout(
    () => controller.abort(),
    timeoutMs,
  )

  const isFormData = options.body instanceof FormData

  try {
    const res = await fetch(`${API_URL}${path}`, {
      ...options,

      signal:
        options.signal ?? controller.signal,

      headers: {
        // Browser automatically sets the correct multipart boundary.
        ...(isFormData
          ? {}
          : {
            'Content-Type': 'application/json',
          }),

        ...(options.headers ?? {}),
      },
    })

    if (!res.ok) {
      const detail = await readError(res)

      throw new ApiError(
        detail,
        res.status,
      )
    }

    if (res.status === 204) {
      return undefined as T
    }

    return (await res.json()) as T
  } finally {
    window.clearTimeout(timeout)
  }
}

/* ==================================================================== */
/*                                API                                   */
/* ==================================================================== */

export const api = {
  /* ----------------------------- Government Schemes ---------------------------- */

  getSchemes(
    params?: QueryParams,
  ): Promise<Scheme[]> {
    return request<Scheme[]>(
      `/schemes${buildQuery(params)}`,
    )
  },

  getScheme(id: string): Promise<Scheme> {
    return request<Scheme>(
      `/schemes/${encodeURIComponent(id)}`,
    )
  },

  /* ------------------------------- Vaccination ------------------------------- */

  getVaccinations(
    params?: QueryParams,
  ): Promise<Vaccination[]> {
    return request<Vaccination[]>(
      `/vaccination${buildQuery(params)}`,
    )
  },

  getUpcomingVaccinations(): Promise<Vaccination[]> {
    return request<Vaccination[]>(
      '/vaccination/upcoming',
    )
  },

  getVaccinationsDueToday(): Promise<Vaccination[]> {
    return request<Vaccination[]>(
      '/vaccination/due/today',
    )
  },

  getVaccinationsDueTomorrow(): Promise<Vaccination[]> {
    return request<Vaccination[]>(
      '/vaccination/due/tomorrow',
    )
  },

  createVaccination(
    payload: VaccinationPayload,
  ): Promise<Vaccination> {
    return request<Vaccination>(
      '/vaccination',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    )
  },

  updateVaccination(
    id: number,
    payload: Partial<VaccinationPayload>,
  ): Promise<Vaccination> {
    return request<Vaccination>(
      `/vaccination/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(payload),
      },
    )
  },

  deleteVaccination(
    id: number,
  ): Promise<void> {
    return request<void>(
      `/vaccination/${id}`,
      {
        method: 'DELETE',
      },
    )
  },

  /* -------------------------------- Emergency -------------------------------- */

  getContacts(
    params?: QueryParams,
  ): Promise<EmergencyContact[]> {
    return request<EmergencyContact[]>(
      `/contacts${buildQuery(params)}`,
    )
  },

  createContact(
    payload: EmergencyContactPayload,
  ): Promise<EmergencyContact> {
    return request<EmergencyContact>(
      '/emergency',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    )
  },

  /* ---------------------------- Village Head issues ---------------------------- */

  getIssues(
    params?: QueryParams,
  ): Promise<VillageIssue[]> {
    return request<VillageIssue[]>(
      `/issues${buildQuery(params)}`,
    )
  },

  createIssue(
    payload: IssuePayload,
  ): Promise<VillageIssue> {
    return request<VillageIssue>(
      '/issues',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    )
  },

  updateIssueStatus(
    id: number,
    status: IssueStatus,
  ): Promise<VillageIssue> {
    return request<VillageIssue>(
      `/issues/${id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      },
    )
  },

  deleteIssue(
    id: number,
  ): Promise<void> {
    return request<void>(
      `/issues/${id}`,
      {
        method: 'DELETE',
      },
    )
  },

  /* ------------------------------- AI Crop Doctor ------------------------------ */

  analyzeCrop(
    image: Blob,
    speechText: string,
    language: Lang,
  ): Promise<CropAnalysis> {
    const form = new FormData()

    form.append(
      'image',
      image,
      'crop-photo.jpg',
    )

    form.append(
      'speech_text',
      speechText,
    )

    form.append(
      'language',
      language,
    )

    return request<CropAnalysis>(
      '/api/crop/analyze',
      {
        method: 'POST',
        body: form,
      },
      45000,
    )
  },

  /* --------------------------------- AgMarket --------------------------------- */

  getProductCategories(): Promise<string[]> {
    return request<string[]>(
      '/agmarket/products/categories',
    )
  },

  getProducts(
    params?: QueryParams,
  ): Promise<Product[]> {
    return request<Product[]>(
      `/agmarket/products${buildQuery(params)}`,
    )
  },

  getProduct(
    id: number,
  ): Promise<Product> {
    return request<Product>(
      `/agmarket/products/${id}`,
    )
  },

  createProduct(
    payload: ProductPayload,
  ): Promise<Product> {
    return request<Product>(
      '/agmarket/products',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    )
  },

  updateProduct(
    id: number,
    payload: Partial<ProductPayload>,
  ): Promise<Product> {
    return request<Product>(
      `/agmarket/products/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(payload),
      },
    )
  },

  deleteProduct(
    id: number,
  ): Promise<void> {
    return request<void>(
      `/agmarket/products/${id}`,
      {
        method: 'DELETE',
      },
    )
  },

  /* -------------------------- Market Research -------------------------- */

  getMarketPrices(
    params?: QueryParams,
  ): Promise<MarketPrice[]> {
    return request<MarketPrice[]>(
      `/agmarket/prices${buildQuery(params)}`,
    )
  },

  getMarketInsight(
    params: {
      commodity: string
      state?: string
      district?: string
      market?: string
      language?: Lang
    },
  ): Promise<AIInsight> {
    return request<AIInsight>(
      `/agmarket/insight${buildQuery(params)}`,
    )
  },
}