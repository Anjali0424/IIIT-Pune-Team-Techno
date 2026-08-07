"""AI reply generation via the Google Gemini REST API.

Reads ``GEMINI_API_KEY`` from the environment. Uses the plain REST endpoint so
no extra SDK dependency is required. Returns ``None`` when the key is missing
or the request fails, letting the caller decide how to respond (the frontend
falls back to the built-in rule-based assistant).

Configure the model with ``GEMINI_MODEL`` (default ``gemini-2.5-flash``).
"""

import logging
import os
from typing import Optional

import httpx

logger = logging.getLogger(__name__)

GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models"

# Nice human names used in the prompt so Gemini replies in the right language.
LANGUAGE_NAMES = {
    "en": "English",
    "hi": "Hindi (हिंदी)",
    "mr": "Marathi (मराठी)",
}

SYSTEM_PROMPT = (
    "You are PashuRakshak AI, a trustworthy animal-health assistant for Indian "
    "farmers and livestock owners. Reply in {language}. Keep the answer SHORT "
    "(2 to 4 sentences), practical, and easy to understand when read aloud. "
    "Never invent medicine names or dosages; give general first-aid and care "
    "advice only. If the problem seems serious or needs a veterinarian, say so "
    "clearly and tell the user to contact a vet."
)


def _language_name(language: Optional[str]) -> str:
    if language:
        base = language.strip().lower().replace("_", "-").split("-")[0]
        if base in LANGUAGE_NAMES:
            return LANGUAGE_NAMES[base]
    return "English"


def _extract_text(payload: dict) -> Optional[str]:
    """Pull the generated text out of a Gemini generateContent response."""
    try:
        candidates = payload.get("candidates") or []
        if not candidates:
            logger.warning("Gemini returned no candidates (possibly blocked by safety filters).")
            return None
        parts = candidates[0]["content"]["parts"]
        text = "".join(part.get("text", "") for part in parts).strip()
        return text or None
    except Exception as exc:  # noqa: BLE001 - malformed upstream response
        logger.warning("Could not parse Gemini response: %s", exc)
        return None


def generate_reply(text: str, language: Optional[str] = None) -> Optional[str]:
    """Generate a short reply to ``text`` in the requested ``language``.

    Returns ``None`` when no API key is set or the upstream call fails.
    """
    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        logger.info("GEMINI_API_KEY is not set; skipping LLM provider.")
        return None

    model = os.environ.get("GEMINI_MODEL") or "gemini-2.5-flash"
    lang_name = _language_name(language)
    url = f"{GEMINI_API_URL}/{model}:generateContent?key={key}"

    body = {
        "systemInstruction": {"parts": [{"text": SYSTEM_PROMPT.format(language=lang_name)}]},
        "contents": [{"role": "user", "parts": [{"text": text}]}],
        "generationConfig": {"temperature": 0.5, "maxOutputTokens": 400},
    }

    try:
        response = httpx.post(url, json=body, timeout=45.0)
        response.raise_for_status()
    except Exception as exc:  # noqa: BLE001 - network / auth / quota / invalid model
        logger.warning("Gemini request failed: %s", exc)
        return None

    return _extract_text(response.json())
