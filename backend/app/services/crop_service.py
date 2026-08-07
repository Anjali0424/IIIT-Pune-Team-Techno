"""Universal Visual Assistant service (Gemini Vision).

Sends a photo (and optional spoken/typed details) to Google Gemini and returns
a structured, simple-language answer. Failures raise CropUnavailableError so
the API returns HTTP 503 instead of a fake success payload.
"""

from __future__ import annotations

import json
import logging
import os
import re
import time
from pathlib import Path

from app.schemas import CropAnalysis

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

MODEL_NAME = os.getenv("GEMINI_MODEL", "gemini-2.0-flash")
MAX_IMAGE_BYTES = 10 * 1024 * 1024  # 10 MB
MAX_ATTEMPTS = 2
RETRY_DELAY_SEC = 0.9

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


class CropUnavailableError(Exception):
    """Raised when Gemini cannot produce an analysis."""


def _load_env() -> None:
    """Load backend/.env and (optionally) repo-root .env.local into os.environ."""
    roots = [
        Path(__file__).resolve().parents[2] / ".env",  # backend/.env
        Path(__file__).resolve().parents[3] / ".env.local",  # repo /.env.local
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
                # Allow .env to fill missing OR empty values.
                current = os.environ.get(key)
                if current is None or current.strip() == "":
                    os.environ[key] = value
        except OSError as exc:
            logger.warning("Could not read %s: %s", env_file, exc)


_load_env()


def _refresh_model_name() -> str:
    global MODEL_NAME
    MODEL_NAME = os.getenv("GEMINI_MODEL", MODEL_NAME) or "gemini-2.0-flash"
    return MODEL_NAME


def _api_key() -> str:
    _load_env()
    return (
        os.getenv("GEMINI_API_KEY")
        or os.getenv("GOOGLE_API_KEY")
        or os.getenv("GOOGLE_GENAI_API_KEY")
        or ""
    ).strip()


# ---------------------------------------------------------------------------
# Prompt
# ---------------------------------------------------------------------------


def _build_prompt(lang: str, speech_text: str, has_image: bool) -> str:
    language = LANG_NAMES.get(lang, "Marathi")
    extra = speech_text.strip()

    if has_image:
        details = extra or "The person did not add any extra details."
        body = (
            "Look at the photo and figure out what it is, then give the most useful help:\n"
            "- a crop / plant leaf / fruit -> diagnose the crop problem\n"
            "- an animal -> assess the animal's health\n"
            "- a document (form, certificate, notice, letter) -> explain what it is and what to do\n"
            "- a road / pothole / water leakage / electricity pole -> identify the issue and the solution\n"
            "- a medicine / packet / bottle -> explain the medicine and its use\n"
            "- a student notebook / homework / textbook -> help the student with the subject\n"
            "- anything else -> help in the most practical way\n\n"
            f'The person\'s extra details: "{details}"\n'
        )
    else:
        question = extra or "help me with something"
        body = (
            "Answer the person's question from knowledge alone (no photo was "
            "provided). Give the most useful, practical advice.\n\n"
            f'The person\'s question: "{question}"\n'
        )

    return (
        "You are GramMitra, a smart AI village assistant for India. You help "
        "farmers, students, children, elderly people and villagers with their "
        "everyday problems. Users prefer simple, spoken-style answers.\n\n"
        + body
        + f"\nRespond ONLY in {language} using very simple words that a child or an "
        "illiterate villager can understand. Return JSON with EXACTLY these keys "
        "(using these general meanings):\n"
        "- crop: the topic of the photo or question (for a crop -> the crop name; "
        "for a document -> 'application form'; for a road -> 'road'; for a text "
        "question -> the subject, e.g. 'government scheme')\n"
        "- disease: the problem, issue or the answer you found (or the word for "
        "'No problem' if everything is fine)\n"
        "- pest: a small cause like a pest or insect if clearly relevant, else empty string\n"
        "- nutrient_deficiency: a missing nutrition / diet factor if relevant, else empty string\n"
        "- confidence: integer 0-100\n"
        "- severity: Low/Medium/High in your language (Low when there is no risk)\n"
        "- cause: likely cause in 1-2 simple sentences\n"
        "- recommended_medicine: the best first action to take (with a simple "
        "dosage or step if applicable)\n"
        "- organic_treatment: a simple home / desi remedy anyone can try\n"
        "- chemical_treatment: a chemical or formal option, or the word for 'not needed'\n"
        "- prevention: 1-2 short tips\n"
        "- action_steps: a list of 1-4 very short steps the person should do "
        "right now (each one is a single short instruction, e.g. \"Spray the "
        "plant\" or \"Remove the infected leaves\")\n"
        "- medicine_name: the medicine name, or an empty string if no medicine\n"
        "- medicine_dosage: a very simple dosage (e.g. \"1 spoon in 5 litres of "
        "water\"), or an empty string if none\n"
        "- medicine_when: when and how to use it (e.g. \"once in the morning\"), "
        "or an empty string if none\n"
        "- emergency: true ONLY if the person needs immediate professional help "
        "(vet, doctor, fire, police), otherwise false\n"
        "- summary: the WHOLE answer as ONE natural spoken paragraph (4-5 short "
        "sentences, about 60-100 words) that you would say aloud to the farmer. "
        "Say what the problem is, the best first action to take, one simple tip, "
        "and what to do if it does not improve. Keep it warm and simple, like a "
        "village expert talking. No headings, no bullet points, no numbers.\n"
        "Keep every other field short and practical."
    )


# ---------------------------------------------------------------------------
# Response parsing
# ---------------------------------------------------------------------------


def _extract_json(text: str) -> dict:
    """Robustly pull a JSON object out of Gemini's text output."""
    cleaned = (text or "").strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned)
    start, end = cleaned.find("{"), cleaned.rfind("}")
    if start == -1 or end == -1:
        raise ValueError("No JSON object found in model output")
    return json.loads(cleaned[start : end + 1])


def _to_schema(payload: dict) -> CropAnalysis:
    """Validate / normalize the raw model payload into the API schema."""
    text = lambda v: (v or "").strip() if isinstance(v, str) else ""
    try:
        confidence = max(0, min(100, int(payload.get("confidence"))))
    except (TypeError, ValueError):
        confidence = 0

    steps_raw = payload.get("action_steps")
    action_steps: list[str] = []
    if isinstance(steps_raw, list):
        action_steps = [
            str(s).strip() for s in steps_raw if isinstance(s, str) and s.strip()
        ]
    elif isinstance(steps_raw, str) and steps_raw.strip():
        action_steps = [part.strip() for part in steps_raw.splitlines() if part.strip()]

    severity = text(payload.get("severity"))
    emergency = bool(payload.get("emergency")) or any(
        k in severity.lower() for k in ("high", "गंभीर", "जास्त", "गंभीर")
    )

    return CropAnalysis(
        crop=text(payload.get("crop")) or "—",
        disease=text(payload.get("disease")) or "—",
        pest=text(payload.get("pest")) or None,
        nutrient_deficiency=text(payload.get("nutrient_deficiency")) or None,
        confidence=confidence,
        severity=severity or "—",
        cause=text(payload.get("cause")) or "—",
        recommended_medicine=text(payload.get("recommended_medicine")) or "—",
        organic_treatment=text(payload.get("organic_treatment")) or "—",
        chemical_treatment=text(payload.get("chemical_treatment")) or "—",
        prevention=text(payload.get("prevention")) or "—",
        summary=text(payload.get("summary")) or text(payload.get("cause")) or "—",
        action_steps=action_steps,
        medicine_name=text(payload.get("medicine_name")) or None,
        medicine_dosage=text(payload.get("medicine_dosage")) or None,
        medicine_when=text(payload.get("medicine_when")) or None,
        emergency=emergency,
    )


def detect_mime(image_bytes: bytes, declared: str | None) -> str:
    """Normalize / sniff image MIME so mobile cameras without type still work."""
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

    # Last resort — most phone cameras produce JPEG.
    return "image/jpeg"


# ---------------------------------------------------------------------------
# Gemini call
# ---------------------------------------------------------------------------


def _call_gemini(
    image_bytes: bytes | None,
    mime_type: str | None,
    speech_text: str,
    lang: str,
) -> CropAnalysis:
    api_key = _api_key()
    if not api_key:
        raise CropUnavailableError(
            "GEMINI_API_KEY is not configured. Add it to backend/.env and restart the server."
        )

    import google.generativeai as genai

    model_name = _refresh_model_name()
    logger.info(
        "[crop] Gemini request -> model=%s has_image=%s mime=%s text_len=%d lang=%s",
        model_name,
        image_bytes is not None,
        mime_type,
        len(speech_text or ""),
        lang,
    )

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(model_name=model_name)
    prompt = _build_prompt(lang, speech_text, image_bytes is not None)

    # google-generativeai 0.8.x expects inline image dicts — NOT types.Part.
    if image_bytes is not None:
        contents = [
            {"mime_type": mime_type or "image/jpeg", "data": image_bytes},
            prompt,
        ]
    else:
        contents = prompt

    response = model.generate_content(
        contents,
        generation_config={
            "temperature": 0.2,
            "response_mime_type": "application/json",
        },
    )

    raw_text = getattr(response, "text", None) or ""
    logger.info("[crop] Gemini response received (%d chars)", len(raw_text))
    if not raw_text.strip():
        # Sometimes the SDK blocks text; surface finish reason for debugging.
        try:
            cand = response.candidates[0] if response.candidates else None
            logger.error("[crop] Empty Gemini text; candidate=%s", cand)
        except Exception:  # noqa: BLE001
            pass
        raise CropUnavailableError("Gemini returned an empty response")

    result = _to_schema(_extract_json(raw_text))
    logger.info(
        "[crop] Parsed result -> topic=%s issue=%s confidence=%s",
        result.crop,
        result.disease,
        result.confidence,
    )
    return result


def analyze(
    image_bytes: bytes | None,
    mime_type: str | None,
    speech_text: str,
    lang: str,
) -> CropAnalysis:
    """Run Gemini diagnosis with one automatic retry. Raises on hard failure."""
    logger.info(
        "[crop] analyze() start bytes=%s mime=%s text_len=%d lang=%s",
        len(image_bytes) if image_bytes else 0,
        mime_type,
        len(speech_text or ""),
        lang,
    )

    if image_bytes is not None:
        mime_type = detect_mime(image_bytes, mime_type)
        logger.info("[crop] Normalized mime -> %s", mime_type)

    last_error: Exception | None = None
    for attempt in range(1, MAX_ATTEMPTS + 1):
        try:
            return _call_gemini(image_bytes, mime_type, speech_text, lang)
        except CropUnavailableError:
            raise
        except Exception as exc:  # network, quota, parsing...
            last_error = exc
            logger.exception(
                "[crop] Gemini attempt %d/%d failed: %s",
                attempt,
                MAX_ATTEMPTS,
                exc,
            )
            if attempt < MAX_ATTEMPTS:
                time.sleep(RETRY_DELAY_SEC)

    raise CropUnavailableError(
        f"Gemini analysis failed after {MAX_ATTEMPTS} attempts: {last_error}"
    ) from last_error
