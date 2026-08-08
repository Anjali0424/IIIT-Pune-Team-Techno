"""Feed Recommendation AI service.

Generates farmer-friendly feed guidance using:
1. Gemini (structured prompt, rich response)
2. Ollama fallback (local LLM)
3. Local JSON knowledge base (fully offline)
"""

from __future__ import annotations

import json
import logging
import os
from pathlib import Path

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Load local knowledge base
# ---------------------------------------------------------------------------

_DATA_FILE = Path(__file__).resolve().parents[1] / "data" / "feed_data.json"

try:
    _FEED_DB: dict = json.loads(_DATA_FILE.read_text(encoding="utf-8"))
except Exception as exc:
    logger.warning("Could not load feed_data.json: %s", exc)
    _FEED_DB = {"animals": {}}

LANG_NAMES = {"mr": "Marathi", "hi": "Hindi", "en": "English"}

# ---------------------------------------------------------------------------
# Animal detector
# ---------------------------------------------------------------------------

def _detect_animal(text: str) -> str | None:
    t = text.lower()
    for key, info in _FEED_DB.get("animals", {}).items():
        for name in info.get("names", []):
            if name.lower() in t:
                return key
    return None


def _detect_flags(text: str) -> dict:
    t = text.lower()
    return {
        "lactating": any(w in t for w in ["milk", "दूध", "दुध", "lactating", "दूध देते", "दूध दे रही"]),
        "pregnant": any(w in t for w in ["pregnant", "गाभण", "गर्भवती", "गाभिन"]),
        "sick": any(w in t for w in [
            "sick", "weak", "not eating", "बीमार", "आजारी", "अशक्त", "खात नाही",
            "खाना नहीं", "कमजोर"
        ]),
        "summer": any(w in t for w in ["summer", "hot", "उन्हाळा", "गर्मी"]),
        "winter": any(w in t for w in ["winter", "cold", "हिवाळा", "ठंड"]),
        "monsoon": any(w in t for w in ["monsoon", "rain", "पाऊस", "बारिश"]),
    }


# ---------------------------------------------------------------------------
# Gemini provider
# ---------------------------------------------------------------------------

_FEED_SYSTEM_PROMPT = """You are GramMitra AI Feed Expert — a friendly, experienced veterinary officer.
Respond ONLY in {language}.
Give simple, practical feed recommendations that a farmer can follow immediately.
Do NOT use scientific jargon. Speak like a village vet officer.
Structure your response EXACTLY like this (use the exact section headers):

🐄 प्राणी / Animal: [detected animal]

🌅 सकाळ / Morning:
• [item 1]
• [item 2]

☀️ दुपार / Afternoon:
• [item 1]

🌙 संध्याकाळ / Evening:
• [item 1]
• [item 2]

💧 पाणी / Water:
• [amount per day]

💊 पूरक आहार / Supplements:
• [item 1]
• [item 2]

💡 टिप्स / Tips:
• [tip 1]
• [tip 2]
• [tip 3]

Keep each line short and practical. Max 200 words total."""


def _chat_gemini_feed(user_query: str, lang: str) -> str:
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise RuntimeError("GEMINI_API_KEY not set")

    try:
        from google import genai
        from google.genai import types
    except Exception as exc:  # noqa: BLE001
        raise RuntimeError(f"google-genai SDK not installed: {exc}") from exc

    language = LANG_NAMES.get(lang, "Marathi")
    system = _FEED_SYSTEM_PROMPT.format(language=language)

    client = genai.Client(api_key=api_key)
    response = client.models.generate_content(
        model=os.getenv("GEMINI_MODEL", "gemini-2.5-flash"),
        contents=user_query,
        config=types.GenerateContentConfig(
            system_instruction=system,
            temperature=0.4,
            max_output_tokens=400,
        ),
    )
    reply = (getattr(response, "text", None) or "").strip()
    if not reply:
        raise RuntimeError("Gemini returned empty reply")
    return reply


# ---------------------------------------------------------------------------
# Ollama provider
# ---------------------------------------------------------------------------

def _chat_ollama_feed(user_query: str, lang: str) -> str:
    import urllib.request, urllib.error

    ollama_url = os.getenv("OLLAMA_URL", "http://127.0.0.1:11434").rstrip("/")
    model = os.getenv("OLLAMA_MODEL", "tinyllama")
    language = LANG_NAMES.get(lang, "Marathi")
    system = _FEED_SYSTEM_PROMPT.format(language=language)

    messages = [
        {"role": "system", "content": system},
        {"role": "user", "content": user_query},
    ]
    payload = json.dumps({
        "model": model, "messages": messages, "stream": False,
        "options": {"temperature": 0.4},
    }).encode()

    req = urllib.request.Request(
        f"{ollama_url}/api/chat",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as res:
            data = json.loads(res.read().decode())
            return (data.get("message") or {}).get("content", "").strip()
    except Exception as exc:
        raise RuntimeError(f"Ollama unavailable: {exc}") from exc


# ---------------------------------------------------------------------------
# Local offline fallback
# ---------------------------------------------------------------------------

_LABELS = {
    "mr": {
        "animal": "प्राणी",
        "morning": "🌅 सकाळ",
        "afternoon": "☀️ दुपार",
        "evening": "🌙 संध्याकाळ",
        "water": "💧 पाणी",
        "supplements": "💊 पूरक आहार",
        "tips": "💡 टिप्स",
        "seasonal": "🌦 हंगामी सल्ला",
        "local_fodder": "🌿 स्थानिक चारा पर्याय",
        "lactating_note": "🥛 दूध उत्पादन",
        "pregnant_note": "🤰 गाभण",
        "unknown": (
            "तुमच्या प्रश्नातून प्राण्याचा प्रकार समजला नाही. कृपया सांगा:\n"
            "• कोणता प्राणी? (गाय, म्हैस, शेळी, मेंढी, वासरू, कोंबडी, डुक्कर)\n"
            "• दूध देते का?\n• गाभण आहे का?"
        ),
    },
    "hi": {
        "animal": "पशु",
        "morning": "🌅 सुबह",
        "afternoon": "☀️ दोपहर",
        "evening": "🌙 शाम",
        "water": "💧 पानी",
        "supplements": "💊 पूरक आहार",
        "tips": "💡 सुझाव",
        "seasonal": "🌦 मौसमी सलाह",
        "local_fodder": "🌿 स्थानीय चारा विकल्प",
        "lactating_note": "🥛 दूध उत्पादन",
        "pregnant_note": "🤰 गर्भवती",
        "unknown": (
            "आपके प्रश्न से पशु का प्रकार समझ नहीं आया। कृपया बताएं:\n"
            "• कौन सा पशु? (गाय, भैंस, बकरी, भेड़, बछड़ा, मुर्गी, सुअर)\n"
            "• दूध दे रही है?\n• गाभिन है?"
        ),
    },
    "en": {
        "animal": "Animal",
        "morning": "🌅 Morning",
        "afternoon": "☀️ Afternoon",
        "evening": "🌙 Evening",
        "water": "💧 Water",
        "supplements": "💊 Supplements",
        "tips": "💡 Tips",
        "seasonal": "🌦 Seasonal Advice",
        "local_fodder": "🌿 Local Fodder Alternatives",
        "lactating_note": "🥛 Lactation",
        "pregnant_note": "🤰 Pregnancy",
        "unknown": (
            "I could not detect the animal type. Please tell me:\n"
            "• Which animal? (Cow, Buffalo, Goat, Sheep, Calf, Poultry, Pig)\n"
            "• Is it giving milk?\n• Is it pregnant?"
        ),
    },
}


def _build_local_response(animal_key: str, flags: dict, lang: str) -> str:
    lbl = _LABELS.get(lang, _LABELS["en"])
    animals = _FEED_DB.get("animals", {})
    info = animals.get(animal_key, {})
    if not info:
        return lbl["unknown"]

    parts: list[str] = []

    # Header
    parts.append(f"🐄 {lbl['animal']}: {animal_key.title()}\n")

    # Schedule
    sched = info.get("schedule", {})
    for slot_key, slot_label in [
        ("morning", lbl["morning"]),
        ("afternoon", lbl["afternoon"]),
        ("evening", lbl["evening"]),
    ]:
        items = sched.get(slot_key, [])
        if items:
            parts.append(f"{slot_label}:")
            for item in items:
                parts.append(f"  ✓ {item}")

    # Water
    water = info.get("water_litres") or info.get("daily_water_litres", "?")
    parts.append(f"\n{lbl['water']}:")
    parts.append(f"  ✓ {water} लिटर/दिवस" if lang == "mr"
                 else f"  ✓ {water} litres/day" if lang == "en"
                 else f"  ✓ {water} लिटर/दिन")

    # Supplements
    supps = info.get("supplements", [])
    if supps:
        parts.append(f"\n{lbl['supplements']}:")
        for s in supps:
            parts.append(f"  ✓ {s}")

    # Lactating note
    if flags.get("lactating") and info.get("lactating_extra"):
        parts.append(f"\n{lbl['lactating_note']}:")
        parts.append(f"  ✓ {info['lactating_extra']}")

    # Pregnant note
    if flags.get("pregnant") and info.get("pregnant_extra"):
        parts.append(f"\n{lbl['pregnant_note']}:")
        parts.append(f"  ✓ {info['pregnant_extra']}")

    # Seasonal
    seasonal = info.get("seasonal", {})
    season_key = "summer" if flags.get("summer") else "monsoon" if flags.get("monsoon") else "winter" if flags.get("winter") else None
    if season_key and seasonal.get(season_key):
        parts.append(f"\n{lbl['seasonal']}:")
        parts.append(f"  ✓ {seasonal[season_key]}")

    # Tips
    tips = info.get("tips", {}).get(lang, info.get("tips", {}).get("en", []))
    if tips:
        parts.append(f"\n{lbl['tips']}:")
        for tip in tips:
            parts.append(f"  • {tip}")

    # Local fodder
    local = info.get("local_fodder", [])
    if local:
        parts.append(f"\n{lbl['local_fodder']}:")
        parts.append(f"  ✓ {', '.join(local)}")

    return "\n".join(parts)


# ---------------------------------------------------------------------------
# Public entry point
# ---------------------------------------------------------------------------

def get_feed_recommendation(query: str, lang: str) -> dict:
    """Return feed recommendation. Falls back gracefully from Gemini → Ollama → local DB."""
    lang = (lang or "mr").split("-")[0].lower()
    if lang not in ("mr", "hi", "en"):
        lang = "mr"

    animal_key = _detect_animal(query)
    flags = _detect_flags(query)

    source = "ai"
    reply = ""

    # 1. Try Gemini
    if os.getenv("GEMINI_API_KEY"):
        try:
            reply = _chat_gemini_feed(query, lang)
            logger.info("Feed via Gemini ok, animal=%s", animal_key)
        except Exception as exc:
            logger.warning("Gemini feed failed: %s", exc)

    # 2. Try Ollama
    if not reply:
        try:
            reply = _chat_ollama_feed(query, lang)
            logger.info("Feed via Ollama ok, animal=%s", animal_key)
        except Exception as exc:
            logger.warning("Ollama feed failed: %s", exc)

    # 3. Local knowledge base
    if not reply:
        source = "local"
        if animal_key:
            reply = _build_local_response(animal_key, flags, lang)
        else:
            reply = _LABELS.get(lang, _LABELS["en"])["unknown"]

    return {
        "reply": reply,
        "animal": animal_key or "unknown",
        "language": lang,
        "source": source,
    }
