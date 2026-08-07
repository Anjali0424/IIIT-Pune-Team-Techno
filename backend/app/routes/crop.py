"""Universal Visual Assistant API routes (photo + voice based)."""

import logging

from fastapi import APIRouter, File, Form, HTTPException, UploadFile

from app.schemas import CropAnalysis
from app.services import crop_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/crop", tags=["Universal AI Assistant"])


@router.post(
    "/analyze",
    response_model=CropAnalysis,
    summary="Answer a question from a photo, typed text or spoken description",
    description="Accepts an optional photo (JPG/PNG/WebP/HEIC/HEIF) plus an "
    "optional question text / voice transcript and language (mr/hi/en). At "
    "least one of photo or text is required. Returns a structured, "
    "simple-language answer for crops, animals, documents, roads, water, "
    "electricity, schemes and more. Returns HTTP 503 when Gemini is unavailable.",
)
async def analyze_crop(
    image: UploadFile | None = File(default=None, description="Optional photo"),
    speech_text: str = Form(default="", description="Optional question text / voice transcript"),
    language: str = Form(default="mr", description="Farmer language: mr | hi | en"),
) -> CropAnalysis:
    logger.info(
        "[crop-route] Incoming analyze request language=%s filename=%s content_type=%s text_len=%d",
        language,
        getattr(image, "filename", None) if image else None,
        getattr(image, "content_type", None) if image else None,
        len(speech_text or ""),
    )

    if language not in crop_service.LANG_NAMES:
        raise HTTPException(
            status_code=400, detail="language must be one of: mr, hi, en"
        )

    data: bytes | None = None
    mime_type: str | None = None
    if image is not None:
        raw_type = (image.content_type or "").strip().lower()
        # Some mobile browsers send empty / octet-stream — sniff later in the service.
        if raw_type and raw_type not in crop_service.ALLOWED_MIME and raw_type not in (
            "application/octet-stream",
            "binary/octet-stream",
            "",
        ):
            logger.warning("[crop-route] Unsupported content_type=%s", raw_type)
            raise HTTPException(
                status_code=400,
                detail="Unsupported image type. Use JPG, PNG, WebP, HEIC or HEIF.",
            )
        data = await image.read()
        logger.info("[crop-route] Image received bytes=%d", len(data) if data else 0)
        if not data:
            raise HTTPException(status_code=400, detail="The uploaded image is empty.")
        if len(data) > crop_service.MAX_IMAGE_BYTES:
            raise HTTPException(status_code=413, detail="Image is too large (max 10 MB).")
        mime_type = raw_type or None

    question = (speech_text or "").strip()
    if not data and not question:
        raise HTTPException(
            status_code=400, detail="Provide a photo or describe your question."
        )

    try:
        result = crop_service.analyze(data, mime_type, question, language)
    except crop_service.CropUnavailableError as exc:
        logger.error("[crop-route] Analysis unavailable: %s", exc)
        raise HTTPException(
            status_code=503,
            detail=str(exc) or "AI is currently unavailable.",
        ) from exc

    logger.info(
        "[crop-route] Response ready topic=%s issue=%s confidence=%s",
        result.crop,
        result.disease,
        result.confidence,
    )
    return result
