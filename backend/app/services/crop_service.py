"""Universal Visual Assistant service.

Sends a photo (and an optional spoken description) to Google Gemini Vision and
returns a structured, simple-language answer for anything a villager shows the
camera: crops, animals, documents, roads, water issues, electricity problems,
medicine, homework and more. When no GEMINI_API_KEY is configured, or the model
call fails, a localized offline notice is returned so the app never breaks.
"""

import json
import logging
import os
import re
from pathlib import Path

from app.schemas import CropAnalysis

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

MODEL_NAME = os.getenv("GEMINI_MODEL", "gemini-2.0-flash")
MAX_IMAGE_BYTES = 10 * 1024 * 1024  # 10 MB
ALLOWED_MIME = {
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/heic",
    "image/heif",
    "image/bmp",
    "image/gif",
}

LANG_NAMES = {"mr": "Marathi", "hi": "Hindi", "en": "English"}


def _load_env() -> None:
    """Load GEMINI_API_KEY from backend/.env (if present) without extra deps."""
    env_file = Path(__file__).resolve().parents[2] / ".env"
    if not env_file.exists():
        return
    for line in env_file.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        os.environ.setdefault(key.strip(), value.strip())


_load_env()

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
        + f'\nRespond ONLY in {language} using very simple words that a child or an '
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
        "- summary: 1-2 short sentences you would speak aloud to the person\n"
        "Keep every field short and practical. No long paragraphs."
    )


# ---------------------------------------------------------------------------
# Response parsing
# ---------------------------------------------------------------------------


def _extract_json(text: str) -> dict:
    """Robustly pull a JSON object out of Gemini's text output."""
    cleaned = text.strip()
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
    action_steps = []
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


# ---------------------------------------------------------------------------
# Offline / error fallback
# ---------------------------------------------------------------------------

_OFFLINE = {
    "mr": {
        "disease": "विश्लेषण सध्या उपलब्ध नाही",
        "cause": "AI सेवा सुरू करण्यासाठी GEMINI_API_KEY आवश्यक आहे. सेवा सुरू झाल्यावर पुन्हा प्रयत्न करा.",
        "recommended_medicine": "—",
        "organic_treatment": "—",
        "chemical_treatment": "—",
        "prevention": "AI सेवा सुरू झाल्यावर पुन्हा प्रयत्न करा.",
        "summary": "क्षमस्व, सध्या उत्तर देता येत नाही. इंटरनेट आणि AI सेवा तपासून पुन्हा प्रयत्न करा.",
    },
    "hi": {
        "disease": "विश्लेषण अभी उपलब्ध नहीं",
        "cause": "AI सेवा चालू करने के लिए GEMINI_API_KEY आवश्यक है। सेवा चालू होने पर फिर से प्रयास करें।",
        "recommended_medicine": "—",
        "organic_treatment": "—",
        "chemical_treatment": "—",
        "prevention": "AI सेवा चालू होने पर फिर से प्रयास करें।",
        "summary": "माफ़ कीजिए, अभी जवाब नहीं मिल सकता। इंटरनेट और AI सेवा जांच कर फिर प्रयास करें।",
    },
    "en": {
        "disease": "Analysis unavailable right now",
        "cause": "The AI service is not configured (set GEMINI_API_KEY) or is temporarily unavailable.",
        "recommended_medicine": "—",
        "organic_treatment": "—",
        "chemical_treatment": "—",
        "prevention": "Try again once the AI service is running.",
        "summary": "Sorry, an answer is unavailable right now. Please check the internet connection and try again.",
    },
}


def _fallback_result(lang: str) -> CropAnalysis:
    text = _OFFLINE.get(lang, _OFFLINE["en"])
    return CropAnalysis(
        crop="—",
        disease=text["disease"],
        pest=None,
        nutrient_deficiency=None,
        confidence=0,
        severity={"mr": "अज्ञात", "hi": "अज्ञात", "en": "Unknown"}.get(lang, "Unknown"),
        cause=text["cause"],
        recommended_medicine=text["recommended_medicine"],
        organic_treatment=text["organic_treatment"],
        chemical_treatment=text["chemical_treatment"],
        prevention=text["prevention"],
        summary=text["summary"],
        action_steps=[],
        medicine_name=None,
        medicine_dosage=None,
        medicine_when=None,
        emergency=False,
    )


# ---------------------------------------------------------------------------
# Main entry point
# ---------------------------------------------------------------------------


def analyze(
    image_bytes: bytes | None,
    mime_type: str | None,
    speech_text: str,
    lang: str,
) -> CropAnalysis:
    """Run the Gemini diagnosis (photo, text, or both). Never raises for the caller."""
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        logger.warning("GEMINI_API_KEY is not set; returning offline fallback")
        return _fallback_result(lang)

    try:
        import google.generativeai as genai
        from google.generativeai import types

        genai.configure(api_key=api_key)
        model = genai.GenerativeModel(
            model_name=MODEL_NAME,
            generation_config=types.GenerationConfig(
                temperature=0.2,
                response_mime_type="application/json",
            ),
        )
        prompt = _build_prompt(lang, speech_text, image_bytes is not None)
        if image_bytes is not None:
            image_part = types.Part.from_bytes(data=image_bytes, mime_type=mime_type)
            response = model.generate_content([image_part, prompt])
        else:
            response = model.generate_content(prompt)
        return _to_schema(_extract_json(response.text))
    except Exception as exc:  # network, quota, parsing, schema issues...
        logger.exception("Gemini analysis failed: %s", exc)
        return _fallback_result(lang)
