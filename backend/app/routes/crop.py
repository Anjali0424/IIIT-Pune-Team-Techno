"""Universal Visual Assistant API routes (photo + voice based)."""

from fastapi import APIRouter, File, Form, HTTPException, UploadFile

from app.schemas import CropAnalysis
from app.services import crop_service

router = APIRouter(prefix="/api/crop", tags=["Universal AI Assistant"])


@router.post(
    "/analyze",
    response_model=CropAnalysis,
    summary="Answer a question from a photo and optional spoken description",
    description="Accepts a JPG/JPEG/PNG photo plus an optional voice transcript "
    "and language (mr/hi/en). Returns a structured, simple-language answer for "
    "crops, animals, documents, roads, water, electricity and more.",
)
async def analyze_crop(
    image: UploadFile = File(..., description="Crop photo (jpg/jpeg/png)"),
    speech_text: str = Form(default="", description="Optional spoken description"),
    language: str = Form(default="mr", description="Farmer language: mr | hi | en"),
) -> CropAnalysis:
    if language not in crop_service.LANG_NAMES:
        raise HTTPException(
            status_code=400, detail="language must be one of: mr, hi, en"
        )
    if image.content_type not in crop_service.ALLOWED_MIME:
        raise HTTPException(
            status_code=400, detail="Only JPG, JPEG or PNG images are supported."
        )

    data = await image.read()
    if not data:
        raise HTTPException(status_code=400, detail="The uploaded image is empty.")
    if len(data) > crop_service.MAX_IMAGE_BYTES:
        raise HTTPException(status_code=413, detail="Image is too large (max 10 MB).")

    return crop_service.analyze(
        data, image.content_type, (speech_text or "").strip(), language
    )
