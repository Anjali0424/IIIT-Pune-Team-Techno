"""Universal Visual Assistant service — delegates to Gemini Vision.

Thin wrapper around gemini_vision_service that the /api/crop/analyze route calls.
"""

from __future__ import annotations

import logging

from app.schemas import VisionResponse
from app.services.gemini_vision_service import (
    ALLOWED_MIME,
    LANG_NAMES,
    MAX_IMAGE_BYTES,
    GeminiVisionUnavailableError,
    analyze_image_with_gemini,
    detect_mime,
)

logger = logging.getLogger(__name__)

# Re-export constants so the route module keeps working without changes.
__all__ = [
    "ALLOWED_MIME",
    "LANG_NAMES",
    "MAX_IMAGE_BYTES",
    "CropUnavailableError",
    "detect_mime",
    "analyze",
]


class CropUnavailableError(Exception):
    """Raised when the AI cannot produce an analysis."""


def analyze(
    image_bytes: bytes | None,
    mime_type: str | None,
    speech_text: str,
    lang: str,
) -> VisionResponse:
    """Run Gemini Vision analysis. Raises CropUnavailableError on failure."""
    try:
        result = analyze_image_with_gemini(
            image_bytes=image_bytes,
            mime_type=mime_type,
            user_prompt=speech_text,
            language=lang,
        )
        summary = result.get("summary_text") or result.get("explanation") or ""
        return VisionResponse(
            object_detected=result.get("object_detected", ""),
            explanation=result.get("explanation", ""),
            problem=result.get("problem", "None"),
            suggested_solution=result.get("suggested_solution", "None"),
            precautions=result.get("precautions", "None"),
            confidence=result.get("confidence", "High"),
            summary_text=summary,
            reply=summary,
            language=lang,
        )
    except GeminiVisionUnavailableError as exc:
        raise CropUnavailableError(str(exc)) from exc
    except Exception as exc:
        logger.exception("[crop] Gemini Vision failed: %s", exc)
        raise CropUnavailableError(str(exc) or "AI service is temporarily unavailable. Please try again.") from exc
