/**
 * API client for GramMitra AI
 */

import type { Lang } from "@/lib/data";

/* -------------------- CONFIG -------------------- */

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

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
  last_date?: LangText | string | null;
  application_process?: LangText | string | null;
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

export type EmergencyContact = {
  id: string;
  district: string;
  name: string;
  phone: string;
  type: string;
};

export type CropAnalysis = {
  crop: string;
  disease: string;
  pest: string | null;
  nutrient_deficiency: string | null;
  confidence: number;
  severity: string;
  cause: string;
  recommended_medicine: string;
  organic_treatment: string;
  chemical_treatment: string;
  prevention: string;
  summary: string;
  action_steps?: string[];
  medicine_name?: string | null;
  medicine_dosage?: string | null;
  medicine_when?: string | null;
  emergency?: boolean;
};

export type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type ChatResult = {
  reply: string;
  category: string;
  language: string;
};

/* -------------------- API ERROR -------------------- */

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

/* -------------------- HELPERS -------------------- */

export function isUnavailableCropResult(
  result: CropAnalysis
): boolean {
  const summary = (result.summary || "").toLowerCase();
  const disease = (result.disease || "").toLowerCase();
  const cause = (result.cause || "").toLowerCase();

  const blob = `${summary} ${disease} ${cause}`;

  return (
    result.confidence === 0 &&
    (
      /gemini_api_key|ai सेवा|ai service|currently unavailable|सध्या उत्तर|अभी जवाब|analysis unavailable|विश्लेषण सध्या|विश्लेषण अभी/.test(
        blob
      ) ||
      disease.includes("विश्लेषण सध्या उपलब्ध") ||
      disease.includes("विश्लेषण अभी उपलब्ध")
    )
  );
}

function buildQuery(
  params: Record<
    string,
    string | number | boolean | undefined
  >
): string {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      query.set(key, String(value));
    }
  }

  const result = query.toString();

  return result ? `?${result}` : "";
}

async function readError(response: Response): Promise<string> {
  try {
    const body = await response.json();

    if (body?.detail) {
      if (typeof body.detail === "string") {
        return body.detail;
      }

      return JSON.stringify(body.detail);
    }
  } catch {
    // Response was not JSON.
  }

  return `Request failed (${response.status})`;
}

/* -------------------- COMMON REQUEST -------------------- */

async function request<T>(
  path: string,
  options: RequestInit = {},
  timeoutMs = 30000
): Promise<T> {
  const controller = new AbortController();

  const timeout = window.setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  const isFormData = options.body instanceof FormData;

  try {
    const response = await fetch(`${API_URL}${path}`, {
      ...options,
      signal: controller.signal,
      headers: {
        // Do not manually set Content-Type for FormData.
        // The browser automatically adds the multipart boundary.
        ...(isFormData
          ? {}
          : { "Content-Type": "application/json" }),
        ...(options.headers ?? {}),
      },
    });

    if (!response.ok) {
      const message = await readError(response);
      throw new ApiError(message, response.status);
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    if (
      error instanceof DOMException &&
      error.name === "AbortError"
    ) {
      throw new ApiError(
        `Request timed out after ${timeoutMs}ms (${API_URL}${path})`,
        408
      );
    }

    const message =
      error instanceof Error
        ? error.message
        : "Network request failed";

    throw new ApiError(
      `${message} (${API_URL}${path})`,
      0
    );
  } finally {
    window.clearTimeout(timeout);
  }
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

  form.append(
    "audio",
    blob,
    `recording.${ext}`
  );

  return request<SpeechToTextResponse>(
    "/speech-to-text",
    {
      method: "POST",
      body: form,
    },
    60000
  );
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

export async function getUpcomingVaccinations(): Promise<
  Vaccination[]
> {
  return request<Vaccination[]>(
    "/vaccination/upcoming"
  );
}

export async function getVaccinationsDueToday(): Promise<
  Vaccination[]
> {
  return request<Vaccination[]>(
    "/vaccination/due/today"
  );
}

export async function getVaccinationsDueTomorrow(): Promise<
  Vaccination[]
> {
  return request<Vaccination[]>(
    "/vaccination/due/tomorrow"
  );
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
  return request<Vaccination>(
    `/vaccination/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
    }
  );
}

export async function deleteVaccination(
  id: number
): Promise<void> {
  return request<void>(
    `/vaccination/${id}`,
    {
      method: "DELETE",
    }
  );
}

/* -------------------- EMERGENCY CONTACTS -------------------- */

export async function getContacts(params?: {
  district?: string;
  type?: string;
  search?: string;
}): Promise<EmergencyContact[]> {
  return request<EmergencyContact[]>(
    `/contacts${buildQuery({
      district: params?.district,
      type: params?.type,
      search: params?.search,
    })}`
  );
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
  return request<VillageIssue>(
    `/issues/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }
  );
}

export async function deleteIssue(
  id: number
): Promise<void> {
  return request<void>(
    `/issues/${id}`,
    {
      method: "DELETE",
    }
  );
}

/* -------------------- AI CROP DOCTOR -------------------- */

export async function analyzeCrop(
  image: Blob | null,
  questionText: string,
  language: Lang
): Promise<CropAnalysis> {
  const buildForm = () => {
    const form = new FormData();

    if (image) {
      const typed =
        image.type &&
        image.type.startsWith("image/")
          ? image
          : new File(
              [image],
              "crop-photo.jpg",
              {
                type: "image/jpeg",
              }
            );

      const ext =
        typed.type === "image/png"
          ? "png"
          : typed.type === "image/webp"
            ? "webp"
            : "jpg";

      form.append(
        "image",
        typed,
        `crop-photo.${ext}`
      );
    }

    form.append(
      "speech_text",
      questionText
    );

    form.append(
      "language",
      language
    );

    return form;
  };

  console.log(
    "[api] analyzeCrop upload started",
    {
      hasImage: Boolean(image),
      imageType: image?.type ?? null,
      size: image?.size ?? null,
      language,
      textLength:
        questionText.trim().length,
      endpoint:
        `${API_URL}/api/crop/analyze`,
    }
  );

  const run = async (
    attempt: number
  ): Promise<CropAnalysis> => {
    console.log(
      `[api] analyzeCrop API request attempt=${attempt}`
    );

    try {
      const result =
        await request<CropAnalysis>(
          "/api/crop/analyze",
          {
            method: "POST",
            body: buildForm(),
          },
          90000
        );

      console.log(
        "[api] analyzeCrop response received",
        {
          topic: result.crop,
          issue: result.disease,
          confidence:
            result.confidence,
        }
      );

      if (
        isUnavailableCropResult(
          result
        )
      ) {
        throw new ApiError(
          "AI analysis did not complete. Please check GEMINI_API_KEY and try again.",
          503
        );
      }

      return result;
    } catch (error) {
      console.error(
        `[api] analyzeCrop attempt ${attempt} failed`,
        error
      );

      if (attempt < 2) {
        console.log(
          "[api] analyzeCrop retrying once..."
        );

        return run(attempt + 1);
      }

      throw error;
    }
  };

  return run(1);
}

/* -------------------- API OBJECT -------------------- */

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

  // Emergency
  getContacts,

  // Village Issues
  getIssues,
  createIssue,
  updateIssueStatus,
  deleteIssue,

  // AI Crop Doctor
  analyzeCrop,
};