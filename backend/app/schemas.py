"""Shared Pydantic schemas (request/response models) for GramMitra AI backend."""

from datetime import date, datetime
from enum import Enum
from typing import List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, field_validator


class LangText(BaseModel):
    """A string translated into Marathi, Hindi and English."""

    mr: str
    hi: str
    en: str


# ---------------------------------------------------------------------------
# Government Schemes
# ---------------------------------------------------------------------------


class Scheme(BaseModel):
    """A government scheme entry loaded from the JSON knowledge base."""

    model_config = ConfigDict(extra="allow")

    id: str
    name: LangText
    category: str
    state: List[str]
    description: LangText
    benefits: LangText
    eligibility: LangText
    required_documents: List[LangText]
    official_url: str
    language: List[str]
    popular: bool
    keywords: List[str] = Field(default_factory=list)


# ---------------------------------------------------------------------------
# Emergency Contacts
# ---------------------------------------------------------------------------


class EmergencyContact(BaseModel):
    """An emergency contact entry loaded from the JSON knowledge base."""

    id: str
    district: str
    name: str
    phone: str
    type: str


class EmergencyContactCreate(BaseModel):
    """Payload to register a new emergency contact."""

    district: str = Field(..., min_length=1, max_length=100)
    name: str = Field(..., min_length=1, max_length=200)
    phone: str = Field(..., min_length=1, max_length=30)
    type: str = Field(..., min_length=1, max_length=100)


# ---------------------------------------------------------------------------
# Vaccination
# ---------------------------------------------------------------------------


class VaccinationStatus(str, Enum):
    UPCOMING = "upcoming"
    COMPLETED = "completed"


def _normalize_status(value: object) -> object:
    """Accept frontend 'done' as an alias for 'completed'."""
    if isinstance(value, str) and value.strip().lower() == "done":
        return VaccinationStatus.COMPLETED
    return value


class VaccinationCreate(BaseModel):
    animal_name: str = Field(..., min_length=1, max_length=100)
    owner_name: str = Field(..., min_length=1, max_length=100)
    animal_type: str = Field(..., min_length=1, max_length=50)
    vaccine_name: str = Field(..., min_length=1, max_length=120)
    vaccination_date: date
    status: VaccinationStatus = VaccinationStatus.UPCOMING
    notes: Optional[str] = Field(default=None, max_length=500)

    _normalize_status = field_validator("status", mode="before")(_normalize_status)


class VaccinationUpdate(BaseModel):
    animal_name: Optional[str] = Field(default=None, min_length=1, max_length=100)
    owner_name: Optional[str] = Field(default=None, min_length=1, max_length=100)
    animal_type: Optional[str] = Field(default=None, min_length=1, max_length=50)
    vaccine_name: Optional[str] = Field(default=None, min_length=1, max_length=120)
    vaccination_date: Optional[date] = None
    status: Optional[VaccinationStatus] = None
    notes: Optional[str] = Field(default=None, max_length=500)

    _normalize_status = field_validator("status", mode="before")(_normalize_status)


class VaccinationResponse(BaseModel):
    """Vaccination record returned to the client."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    animal_name: str
    owner_name: str
    animal_type: str
    vaccine_name: str
    vaccination_date: date
    next_due_date: Optional[date] = None
    status: str
    notes: Optional[str] = None
    reminder_message: Optional[str] = None
    days_until_due: Optional[int] = None
    is_overdue: bool = False
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None


# ---------------------------------------------------------------------------
# Village Head issue reporting
# ---------------------------------------------------------------------------


class IssueStatus(str, Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    RESOLVED = "resolved"


class IssueCreate(BaseModel):
    """Payload a farmer sends to report a problem to the village head."""

    reporter_name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=3, max_length=20)
    village: str = Field(..., min_length=1, max_length=100)
    issue_text: str = Field(..., min_length=1, max_length=2000)


class IssueUpdate(BaseModel):
    """Payload the village head uses to change an issue status."""

    status: IssueStatus


class IssueResponse(BaseModel):
    """An issue report returned to the client."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    reporter_name: str
    phone: str
    village: str
    issue_text: str
    status: str
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None


# ---------------------------------------------------------------------------
# AI Crop Doctor
# ---------------------------------------------------------------------------


class CropAnalysis(BaseModel):
    """Structured diagnosis from the AI Crop Doctor (Gemini Vision).

    Every free-text field is written in the farmer's selected language
    (Marathi / Hindi / English) using simple, practical words.
    """

    crop: str = Field(..., description="Detected crop, e.g. Cotton")
    disease: str = Field(..., description="Detected disease (or 'no disease')")
    pest: Optional[str] = Field(default=None, description="Main pest, if any")
    nutrient_deficiency: Optional[str] = Field(
        default=None, description="Nutrient deficiency, if any"
    )
    confidence: int = Field(..., ge=0, le=100, description="Model confidence (0-100)")
    severity: str = Field(..., description="Low / Medium / High (localized)")
    cause: str = Field(..., description="Likely cause in 1-2 simple sentences")
    recommended_medicine: str = Field(..., description="Recommended medicine with simple dosage")
    organic_treatment: str = Field(..., description="Simple desi / organic remedy")
    chemical_treatment: str = Field(..., description="Chemical spray advice, or 'not needed'")
    prevention: str = Field(..., description="1-2 short prevention tips")
    summary: str = Field(..., description="Short summary to be read aloud to the farmer")
    action_steps: List[str] = Field(
        default_factory=list, description="1-4 very short, ordered steps the person should do now"
    )
    medicine_name: Optional[str] = Field(default=None, description="Medicine name, if any")
    medicine_dosage: Optional[str] = Field(default=None, description="Simple dosage")
    medicine_when: Optional[str] = Field(default=None, description="When / how to use it")
    emergency: bool = Field(
        default=False, description="True if the person needs immediate professional help"
    )


# ---------------------------------------------------------------------------
# Voice Chat (Ollama LLM)
# ---------------------------------------------------------------------------


class ChatMessage(BaseModel):
    """One turn of the conversation sent to the LLM."""

    role: Literal["system", "user", "assistant"] = "user"
    content: str = Field(..., min_length=1)


class ChatRequest(BaseModel):
    """The full conversation history plus the selected language."""

    messages: List[ChatMessage] = Field(..., min_length=1)
    language: str = Field("mr", description="Farmer language: mr | hi | en")


class ChatResponse(BaseModel):
    """The LLM answer plus routing metadata for debug logs."""

    reply: str
    category: str
    language: str
