/**
 * API client for GramMitra AI
 */

const API_URL = "http://127.0.0.1:8000";

/* -------------------- TYPES -------------------- */

export type LangText = {
  mr: string;
  hi: string;
  en: string;
};

export type FeedRecommendationResponse = {
  success: boolean;
  question: string;
  language: string;
  answer: string;
};

export type ChatResponse = {
  success: boolean;
  question: string;
  language: string;
  answer: string;
};

export type SpeechToTextResponse = {
  success: boolean;
  text: string;
};

export type Scheme = {
  id: string;
  name: LangText;
  category: string;
  state: string[];
  description: LangText;
  benefits: LangText;
  eligibility: LangText;
  required_documents: LangText[];
  official_url: string;
  language: string[];
  popular: boolean;
  keywords?: string[];
};

export type EmergencyContact = {
  id: string;
  district: string;
  name: string;
  phone: string;
  type: string;
};

export type VaccinationStatus = "upcoming" | "completed";

export type Vaccination = {
  id: number;
  animal_name: string;
  owner_name: string;
  animal_type: string;
  vaccine_name: string;
  vaccination_date: string;
  next_due_date?: string | null;
  status: VaccinationStatus;
  notes?: string | null;
  reminder_message?: string | null;
  days_until_due?: number | null;
  is_overdue?: boolean;
  created_at?: string | null;
  updated_at?: string | null;
};

export type VaccinationCreatePayload = {
  animal_name: string;
  owner_name: string;
  animal_type: string;
  vaccine_name: string;
  vaccination_date: string;
  status?: VaccinationStatus;
  notes?: string;
};

export type VaccinationUpdatePayload = {
  animal_name?: string;
  owner_name?: string;
  animal_type?: string;
  vaccine_name?: string;
  vaccination_date?: string;
  status?: VaccinationStatus;
  notes?: string;
};

export type IssueStatus =
  | "pending"
  | "in_progress"
  | "resolved";

export type VillageIssue = {
  id: number;
  reporter_name: string;
  phone: string;
  village: string;
  issue_text: string;
  status: IssueStatus;
  created_at?: string | null;
  updated_at?: string | null;
};

export type IssueCreatePayload = {
  reporter_name: string;
  phone: string;
  village: string;
  issue_text: string;
};

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

/* -------------------- COMMON REQUEST -------------------- */

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
  } catch (err) {
    throw new ApiError(
      err instanceof Error
        ? err.message
        : "Network error. Please check your connection.",
      0
    );
  }

  if (!response.ok) {
    let message = "Something went wrong.";

    try {
      const error = await response.json();

      if (
        error &&
        typeof error.detail === "string"
      ) {
        message = error.detail;
      }
    } catch {
      // ignore
    }

    throw new ApiError(message, response.status);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

function buildQuery(
  params: Record<
    string,
    string | number | boolean | undefined
  >
): string {

  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {

    if (
      value !== undefined &&
      value !== ""
    ) {
      query.set(key, String(value));
    }

  }

  return query.toString()
    ? `?${query.toString()}`
    : "";
}
/* -------------------- FEED RECOMMENDATION -------------------- */

export async function feedRecommendation(
  question: string,
  language: string
): Promise<FeedRecommendationResponse> {
  return request<FeedRecommendationResponse>("/feed", {
    method: "POST",
    body: JSON.stringify({
      question,
      language,
    }),
  });
}

/* -------------------- AI CHAT -------------------- */

export async function chat(
  question: string,
  language: string
): Promise<ChatResponse> {
  return request<ChatResponse>("/chat", {
    method: "POST",
    body: JSON.stringify({
      question,
      language,
    }),
  });
}

/* -------------------- SPEECH TO TEXT -------------------- */

export async function speechToText(
  blob: Blob,
  language: string
): Promise<SpeechToTextResponse> {
  const form = new FormData();

  form.append("language", language);

  const ext = blob.type.includes("ogg")
    ? "ogg"
    : blob.type.includes("mp4")
    ? "m4a"
    : blob.type.includes("mpeg")
    ? "mp3"
    : "webm";

  form.append("audio", blob, `recording.${ext}`);

  let response: Response;

  try {
    response = await fetch(`${API_URL}/speech-to-text`, {
      method: "POST",
      body: form,
    });
  } catch (err) {
    throw new ApiError(
      err instanceof Error
        ? err.message
        : "Network error. Please check your connection.",
      0
    );
  }

  if (!response.ok) {
    let message = "Speech recognition failed.";

    try {
      const error = await response.json();

      if (
        error &&
        typeof error.detail === "string"
      ) {
        message = error.detail;
      }
    } catch {
      // Ignore parse errors
    }

    throw new ApiError(message, response.status);
  }

  return response.json() as Promise<SpeechToTextResponse>;
}
/* -------------------- GOVERNMENT SCHEMES -------------------- */

export async function getSchemes(params?: {
  category?: string;
  state?: string;
  popular?: boolean;
  eligibility?: string;
  search?: string;
}): Promise<Scheme[]> {
  return request<Scheme[]>(
    `/schemes${buildQuery({
      category: params?.category,
      state: params?.state,
      popular: params?.popular,
      eligibility: params?.eligibility,
      search: params?.search,
    })}`
  );
}

/* -------------------- VACCINATION -------------------- */

export async function getVaccinations(params?: {
  status?: VaccinationStatus;
  due?: "today" | "tomorrow" | "overdue";
  animal_type?: string;
  search?: string;
}): Promise<Vaccination[]> {
  return request<Vaccination[]>(
    `/vaccination${buildQuery({
      status: params?.status,
      due: params?.due,
      animal_type: params?.animal_type,
      search: params?.search,
    })}`
  );
}

export async function getUpcomingVaccinations(): Promise<Vaccination[]> {
  return request<Vaccination[]>("/vaccination/upcoming");
}

export async function getVaccinationsDueToday(): Promise<Vaccination[]> {
  return request<Vaccination[]>("/vaccination/due/today");
}

export async function getVaccinationsDueTomorrow(): Promise<Vaccination[]> {
  return request<Vaccination[]>("/vaccination/due/tomorrow");
}

export async function createVaccination(
  payload: VaccinationCreatePayload
): Promise<Vaccination> {
  return request<Vaccination>("/vaccination", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateVaccination(
  id: number,
  payload: VaccinationUpdatePayload
): Promise<Vaccination> {
  return request<Vaccination>(`/vaccination/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deleteVaccination(id: number): Promise<void> {
  return request<void>(`/vaccination/${id}`, {
    method: "DELETE",
  });
}

/* -------------------- VILLAGE ISSUES -------------------- */

export async function getIssues(params?: {
  status?: IssueStatus;
  village?: string;
  search?: string;
}): Promise<VillageIssue[]> {
  return request<VillageIssue[]>(
    `/issues${buildQuery({
      status: params?.status,
      village: params?.village,
      search: params?.search,
    })}`
  );
}

export async function createIssue(
  payload: IssueCreatePayload
): Promise<VillageIssue> {
  return request<VillageIssue>("/issues", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateIssueStatus(
  id: number,
  status: IssueStatus
): Promise<VillageIssue> {
  return request<VillageIssue>(`/issues/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}

export async function deleteIssue(id: number): Promise<void> {
  return request<void>(`/issues/${id}`, {
    method: "DELETE",
  });
}

/* -------------------- API EXPORT -------------------- */

export const api = {
  // AI
  feedRecommendation,
  chat,
  speechToText,

  // Schemes
  getSchemes,

  // Vaccination
  getVaccinations,
  getUpcomingVaccinations,
  getVaccinationsDueToday,
  getVaccinationsDueTomorrow,
  createVaccination,
  updateVaccination,
  deleteVaccination,

  // Village Issues
  getIssues,
  createIssue,
  updateIssueStatus,
  deleteIssue,
};