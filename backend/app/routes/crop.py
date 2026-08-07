"""Universal Visual Assistant API routes (photo + voice based)."""

from fastapi import APIRouter, File, Form, HTTPException, UploadFile

from app.schemas import CropAnalysis
from app.services import crop_service

router = APIRouter(prefix="/api/crop", tags=["Universal AI Assistant"])


@router.post(
    "/analyze",
    response_model=CropAnalysis,
    summary="Answer a question from a photo, typed text or spoken description",
    description="Accepts an optional photo (JPG/PNG/WebP/HEIC/HEIF) plus an "
    "optional question text / voice transcript and language (mr/hi/en). At "
    "least one of photo or text is required. Returns a structured, "
    "simple-language answer for crops, animals, documents, roads, water, "
    "electricity, schemes and more.",
)
async def analyze_crop(
    image: UploadFile | None = File(default=None, description="Optional photo"),
    speech_text: str = Form(default="", description="Optional question text / voice transcript"),
    language: str = Form(default="mr", description="Farmer language: mr | hi | en"),
) -> CropAnalysis:
    if language not in crop_service.LANG_NAMES:
        raise HTTPException(
            status_code=400, detail="language must be one of: mr, hi, en"
        )

    data: bytes | None = None
    mime_type: str | None = None
    if image is not None:
        if image.content_type not in crop_service.ALLOWED_MIME:
            raise HTTPException(
                status_code=400,
                detail="Unsupported image type. Use JPG, PNG, WebP, HEIC or HEIF.",
            )
        data = await image.read()
        if not data:
            raise HTTPException(status_code=400, detail="The uploaded image is empty.")
        if len(data) > crop_service.MAX_IMAGE_BYTES:
            raise HTTPException(status_code=413, detail="Image is too large (max 10 MB).")
        mime_type = image.content_type

    question = (speech_text or "").strip()
    if not data and not question:
        raise HTTPException(
            status_code=400, detail="Provide a photo or describe your question."
        )

    return crop_service.analyze(data, mime_type, question, language)
