"""Google Gemini Vision Service (Gemini 2.5 Flash).

Reusable AI Vision module for GramMitra AI. Supports image understanding for
crops, animals, documents, farm equipment, soil, water, and any arbitrary object.
"""

from __future__ import annotations

import json
import logging
import os
import re
from pathlib import Path
from typing import Dict, Any

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Configuration & Environment Loading
# ---------------------------------------------------------------------------

DEFAULT_MODEL = "gemini-2.5-flash"
FALLBACK_MODELS = ["gemini-3.6-flash"]
MAX_IMAGE_BYTES = 10 * 1024 * 1024  # 10 MB

ALLOWED_MIME = {
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/heic",
    "image/heif",
    "image/bmp",
    "image/gif",
}

LANG_NAMES = {"mr": "Marathi", "hi": "Hindi", "en": "English"}

DEFAULT_PROMPT = (
    "Describe this image in simple language and explain if there is any "
    "agricultural, livestock, crop, disease or government scheme related information."
)


class GeminiVisionUnavailableError(Exception):
    """Raised when Gemini Vision API is unavailable or fails."""


def _load_env() -> None:
    """Load environment variables from backend/.env or repo-root .env.local."""
    roots = [
        Path(__file__).resolve().parents[2] / ".env",
        Path(__file__).resolve().parents[3] / ".env.local",
        Path(__file__).resolve().parents[3] / ".env",
    ]
    for env_file in roots:
        if not env_file.exists():
            continue
        try:
            for line in env_file.read_text(encoding="utf-8").splitlines():
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                key, _, value = line.partition("=")
                key = key.strip()
                value = value.strip().strip('"').strip("'")
                if not key:
                    continue
                current = os.environ.get(key)
                if current is None or current.strip() == "":
                    os.environ[key] = value
        except OSError as exc:
            logger.warning("Could not read %s: %s", env_file, exc)


_load_env()


def _get_genai_client(api_key: str):
    """Build a google-genai Client using the modern SDK (single SDK only)."""
    try:
        from google import genai

        return genai.Client(api_key=api_key)
    except Exception as exc:
        logger.exception("[gemini-vision] Failed to import google-genai SDK")
        raise GeminiVisionUnavailableError(
            "Gemini Vision SDK is not installed or could not be loaded."
        ) from exc


def get_api_key() -> str:
    """Safely fetch the Gemini API key from environment."""
    _load_env()
    key = (
        os.getenv("GEMINI_API_KEY")
        or os.getenv("GOOGLE_API_KEY")
        or os.getenv("GOOGLE_GENAI_API_KEY")
        or ""
    ).strip()
    return key


def detect_mime(image_bytes: bytes, declared: str | None) -> str:
    """Normalize / sniff image MIME so mobile camera uploads work reliably."""
    declared_norm = (declared or "").strip().lower()
    if declared_norm == "image/jpg":
        declared_norm = "image/jpeg"
    if declared_norm in ALLOWED_MIME:
        return "image/jpeg" if declared_norm == "image/jpg" else declared_norm

    if image_bytes.startswith(b"\xff\xd8\xff"):
        return "image/jpeg"
    if image_bytes.startswith(b"\x89PNG\r\n\x1a\n"):
        return "image/png"
    if image_bytes.startswith(b"RIFF") and image_bytes[8:12] == b"WEBP":
        return "image/webp"
    if image_bytes.startswith(b"GIF87a") or image_bytes.startswith(b"GIF89a"):
        return "image/gif"
    if len(image_bytes) > 12 and image_bytes[4:8] == b"ftyp":
        brand = image_bytes[8:12]
        if brand in (b"heic", b"heif", b"mif1", b"msf1"):
            return "image/heic"

    return "image/jpeg"


def _build_prompt_instruction(user_prompt: str, language: str) -> str:
    lang_name = LANG_NAMES.get(language, "Marathi")
    prompt_text = (user_prompt or "").strip() or DEFAULT_PROMPT

    return (
        "You are GramMitra AI, a smart village assistant for India. "
        "Analyze the provided image and address the user request.\n\n"
        f"User Prompt: \"{prompt_text}\"\n\n"
        f"Target Language: {lang_name}\n\n"
        "Instructions:\n"
        f"1. Respond ONLY in {lang_name}.\n"
        "2. Use simple, conversational language suitable for rural farmers and villagers.\n"
        "3. Output MUST be valid JSON with EXACTLY these keys:\n"
        "   - object_detected: (string) Short title of what is in the image (e.g. Cow, Soybean Leaf, Ration Card, Tractor)\n"
        "   - explanation: (string) Simple explanation answering the user's prompt or describing the image\n"
        "   - problem: (string) Disease, issue, damage or missing info identified, or 'None' if healthy/normal\n"
        "   - suggested_solution: (string) Practical remedy, medicine, step, or advice, or 'None' if not applicable\n"
        "   - precautions: (string) 1-2 short prevention tips or warning precautions, or 'None' if not applicable\n"
        "   - confidence: (string) Confidence rating (High / Medium / Low)\n"
        "   - summary_text: (string) A complete, warm, spoken paragraph (3-5 short sentences) combining the answer for Text-to-Speech read-aloud. No bullet points or markdown tags in summary_text."
    )


def _clean_json(text: str) -> Dict[str, Any]:
    cleaned = (text or "").strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned)
    start, end = cleaned.find("{"), cleaned.rfind("}")
    if start == -1 or end == -1:
        raise ValueError("No JSON object found in Gemini response")
    return json.loads(cleaned[start : end + 1])


def analyze_image_with_gemini(
    image_bytes: bytes | None,
    mime_type: str | None,
    user_prompt: str = "",
    language: str = "mr",
) -> Dict[str, Any]:
    """Send image + text prompt to Gemini Vision API (gemini-2.5-flash / gemini-2.0-flash).

    Returns a structured dictionary with keys:
    object_detected, explanation, problem, suggested_solution, precautions, confidence, summary_text
    """
    api_key = get_api_key()
    if not api_key:
        logger.error("[gemini-vision] Missing GEMINI_API_KEY in environment")
        raise GeminiVisionUnavailableError("GEMINI_API_KEY not found.")

    client = _get_genai_client(api_key)

    model_name = os.getenv("GEMINI_MODEL", DEFAULT_MODEL).strip()
    if not model_name:
        model_name = DEFAULT_MODEL

    logger.info(
        "[gemini-vision] Calling Gemini API model=%s has_image=%s lang=%s prompt_len=%d",
        model_name,
        image_bytes is not None,
        language,
        len(user_prompt or ""),
    )

    prompt_instruction = _build_prompt_instruction(user_prompt, language)

    from google.genai import types

    parts: list[Any] = []
    if image_bytes is not None:
        sniffed_mime = detect_mime(image_bytes, mime_type)
        parts.append(types.Part.from_bytes(data=image_bytes, mime_type=sniffed_mime))
    parts.append(types.Part.from_text(text=prompt_instruction))

    models_to_try: list[str] = [model_name]
    for fallback in FALLBACK_MODELS:
        if fallback not in models_to_try:
            models_to_try.append(fallback)

    raw_text = ""
    last_err: Exception | None = None

    for attempt_model in models_to_try:
        try:
            response = client.models.generate_content(
                model=attempt_model,
                contents=parts,
                config=types.GenerateContentConfig(
                    temperature=0.3,
                    response_mime_type="application/json",
                ),
            )
            candidate_text = (getattr(response, "text", None) or "").strip()
            if candidate_text:
                raw_text = candidate_text
                break
            logger.warning(
                "[gemini-vision] Model %s returned no text response",
                attempt_model,
            )
        except Exception as exc:  # noqa: BLE001
            logger.exception("[gemini-vision] Model %s failed", attempt_model)
            last_err = exc

    if not raw_text.strip():
        error_details = str(last_err) if last_err else "Gemini returned an empty response."
        logger.error(
            "[gemini-vision] Empty or missing text from Gemini API; last error: %s",
            error_details,
        )
        raise GeminiVisionUnavailableError(
            f"Gemini Vision request failed: {error_details}"
        )

    try:
        data = _clean_json(raw_text)
        return {
            "object_detected": str(data.get("object_detected") or "Object"),
            "explanation": str(data.get("explanation") or raw_text),
            "problem": str(data.get("problem") or "None"),
            "suggested_solution": str(data.get("suggested_solution") or "None"),
            "precautions": str(data.get("precautions") or "None"),
            "confidence": str(data.get("confidence") or "High"),
            "summary_text": str(data.get("summary_text") or data.get("explanation") or raw_text),
        }
    except Exception as exc:
        logger.exception("[gemini-vision] Failed to parse JSON from response")
        # Graceful fallback parsing when Gemini returns valid text but not valid JSON.
        return {
            "object_detected": "Analysis",
            "explanation": raw_text.strip(),
            "problem": "None",
            "suggested_solution": "None",
            "precautions": "None",
            "confidence": "High",
            "summary_text": raw_text.strip(),
        }
