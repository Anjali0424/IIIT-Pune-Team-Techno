"""Voice chat service for GramMitra AI.

Providers (in order):
1. Google Gemini when GEMINI_API_KEY is set (same stack as Crop Doctor / README)
2. Local Ollama otherwise (or when Gemini fails)

The frontend always sends the full conversation history; answers are never
hardcoded. A lightweight keyword classifier is used only for routing / logs.
"""

from __future__ import annotations

import json
import logging
import os
import urllib.error
import urllib.request
from pathlib import Path

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://127.0.0.1:11434").rstrip("/")
# Default to tinyllama because that is commonly installed locally; override
# with OLLAMA_MODEL when a larger model (e.g. llama3.2) is available.
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "tinyllama")
OLLAMA_TIMEOUT = float(os.getenv("OLLAMA_TIMEOUT", "60"))
OLLAMA_TEMPERATURE = float(os.getenv("OLLAMA_TEMPERATURE", "0.7"))
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-2.0-flash")

LANG_NAMES = {"mr": "Marathi", "hi": "Hindi", "en": "English"}

SYSTEM_PROMPT_TEMPLATE = (
    "You are GramMitra AI. You are a friendly rural assistant.\n"
    "Answer in the user's selected language ({language}).\n"
    "Keep responses short (3-5 sentences max). Use simple words.\n"
    "If the question is about farming, provide agricultural guidance.\n"
    "If it is a general question, answer normally.\n"
    "Never assume every question is about animals.\n"
    "Only ask follow-up questions when information is actually missing.\n"
    "Never mention that you are an AI model or language model."
)


class ChatUnavailableError(Exception):
    """Raised when no LLM provider can produce an answer."""


# ---------------------------------------------------------------------------
# Env loading
# ---------------------------------------------------------------------------


def _load_env() -> None:
    """Load backend/.env (if present) without extra dependencies."""
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

# Re-read after .env so values from the file take effect for module-level consts
# that were evaluated before _load_env() in the first import path.
def _refresh_config() -> None:
    global OLLAMA_URL, OLLAMA_MODEL, OLLAMA_TIMEOUT, OLLAMA_TEMPERATURE, GEMINI_MODEL
    OLLAMA_URL = os.getenv("OLLAMA_URL", OLLAMA_URL).rstrip("/")
    OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", OLLAMA_MODEL)
    OLLAMA_TIMEOUT = float(os.getenv("OLLAMA_TIMEOUT", str(OLLAMA_TIMEOUT)))
    OLLAMA_TEMPERATURE = float(os.getenv("OLLAMA_TEMPERATURE", str(OLLAMA_TEMPERATURE)))
    GEMINI_MODEL = os.getenv("GEMINI_MODEL", GEMINI_MODEL)


_refresh_config()


# ---------------------------------------------------------------------------
# Lightweight category classification (routing + debug logging only)
# ---------------------------------------------------------------------------

_CATEGORIES: list[tuple[str, list[str]]] = [
    (
        "emergency",
        [
            "emergency", "urgent", "bleeding", "poison", "आपत्कालीन", "आपातकालीन",
            "खून निघतोय", "खून बह रहा", "विष", "जहर", "help me", "मदत करा", "मदद करें",
        ],
    ),
    (
        "greeting",
        [
            "hello", " hi", "hey", "namaste", "good morning", "good evening",
            "how are you", "नमस्कार", "सुप्रभात", "नमस्ते", "कसे आहात", "कैसे हो",
        ],
    ),
    (
        "weather",
        [
            "weather", "rain", "temperature", "हवामान", "मौसम", "पाऊस", "बारिश",
            "तापमान", "उष्णतेचा अंदाज",
        ],
    ),
    (
        "scheme",
        [
            "scheme", "subsidy", "loan", "grant", "pension", "government",
            "योजना", "अनुदान", "कर्ज", "पेंशन", "सरकारी", "सरकार",
        ],
    ),
    (
        "animal_health",
        [
            "animal", "cow", "buffalo", "goat", "sheep", "chicken", "fever",
            "milk", "vaccine", "diarrhea", "गाय", "म्हैस", "शेळी", "मेंढी",
            "कोंबडी", "ताप", "दूध", "लस", "टीका", "दस्त", "अतिसार", "जनावर", "पशु",
        ],
    ),
    (
        "crop_disease",
        [
            "crop", "leaf", "fruit", "blight", "pest", "fungus", "पीक", "फसल",
            "पान", "फळ", "कीड", "कीट", "रोग", "डाग", "बुरशी", "कवक",
        ],
    ),
    (
        "agriculture",
        [
            "agriculture", "farmer", "wheat", "rice", "fertilizer", "irrigation",
            "soil", "harvest", "शेती", "खेती", "किसान", "गहू", "तांदूळ", "चावल",
            "खत", "सिंचन", "माती",
        ],
    ),
]


def classify(text: str, lang: str = "mr") -> str:
    """Return the best-guess category of the user query (for routing + logs)."""
    del lang  # reserved for future language-aware classification
    t = " ".join((text or "").lower().split())
    if not t:
        return "unknown"
    for name, keywords in _CATEGORIES:
        for kw in keywords:
            if kw.lower() in t:
                return name
    return "unknown"


# ---------------------------------------------------------------------------
# Message helpers
# ---------------------------------------------------------------------------


def _build_messages(messages: list[dict], lang: str) -> list[dict]:
    """Prepend the system prompt and normalize roles for the LLM APIs."""
    language = LANG_NAMES.get(lang, "Marathi")
    system = {
        "role": "system",
        "content": SYSTEM_PROMPT_TEMPLATE.format(language=language),
    }
    chat: list[dict] = [system]
    for msg in messages:
        role = msg.get("role")
        content = (msg.get("content") or "").strip()
        if role not in ("user", "assistant") or not content:
            continue
        chat.append({"role": role, "content": content})
    if not any(m["role"] == "user" for m in chat):
        raise ChatUnavailableError("No user message to answer")
    return chat


def _last_user_text(messages: list[dict]) -> str:
    for m in reversed(messages):
        if m.get("role") == "user":
            return m.get("content") or ""
    return ""


# ---------------------------------------------------------------------------
# Gemini provider
# ---------------------------------------------------------------------------


def _chat_gemini(messages: list[dict], lang: str) -> str:
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ChatUnavailableError("GEMINI_API_KEY is not set")

    import google.generativeai as genai
    from google.generativeai import types

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(
        model_name=GEMINI_MODEL,
        generation_config=types.GenerationConfig(temperature=OLLAMA_TEMPERATURE),
        system_instruction=messages[0]["content"],
    )

    history = []
    latest_user = ""
    for msg in messages[1:]:
        if msg["role"] == "user":
            latest_user = msg["content"]
        elif msg["role"] == "assistant" and latest_user:
            history.append({"role": "user", "parts": [latest_user]})
            history.append({"role": "model", "parts": [msg["content"]]})
            latest_user = ""

    if not latest_user:
        # Odd history (ends on assistant) — use the last user turn as prompt.
        latest_user = _last_user_text(messages)
    if not latest_user:
        raise ChatUnavailableError("No user message for Gemini")

    chat = model.start_chat(history=history)
    response = chat.send_message(latest_user)
    reply = (getattr(response, "text", None) or "").strip()
    if not reply:
        raise ChatUnavailableError("Gemini returned an empty reply")
    return reply


# ---------------------------------------------------------------------------
# Ollama provider
# ---------------------------------------------------------------------------


def _resolve_ollama_model() -> str:
    """Use OLLAMA_MODEL if present on the server; otherwise pick any local model."""
    preferred = os.getenv("OLLAMA_MODEL", OLLAMA_MODEL)
    try:
        with urllib.request.urlopen(f"{OLLAMA_URL}/api/tags", timeout=5) as res:
            data = json.loads(res.read().decode("utf-8"))
    except (urllib.error.URLError, TimeoutError, OSError, json.JSONDecodeError) as exc:
        raise ChatUnavailableError(f"Ollama is unavailable: {exc}") from exc

    names = [m.get("name", "") for m in data.get("models") or [] if m.get("name")]
    if not names:
        raise ChatUnavailableError("Ollama has no models installed")

    # Exact match, then prefix match (tinyllama == tinyllama:latest)
    for name in names:
        if name == preferred or name.startswith(f"{preferred}:"):
            return name
    base = preferred.split(":")[0]
    for name in names:
        if name == base or name.startswith(f"{base}:"):
            return name

    logger.warning(
        "Configured Ollama model %r not found; using installed model %r",
        preferred,
        names[0],
    )
    return names[0]


def _chat_ollama(messages: list[dict]) -> str:
    model = _resolve_ollama_model()
    payload = json.dumps(
        {
            "model": model,
            "messages": messages,
            "stream": False,
            "options": {"temperature": OLLAMA_TEMPERATURE},
        }
    ).encode("utf-8")

    req = urllib.request.Request(
        f"{OLLAMA_URL}/api/chat",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    logger.info("Ollama request -> model=%s messages=%d", model, len(messages))
    try:
        with urllib.request.urlopen(req, timeout=OLLAMA_TIMEOUT) as res:
            body = res.read().decode("utf-8")
    except (urllib.error.URLError, TimeoutError, OSError) as exc:
        logger.error("Ollama request failed: %s", exc)
        raise ChatUnavailableError("Ollama is unavailable") from exc

    logger.info("Ollama response -> %s", body[:300])
    try:
        data = json.loads(body)
        reply = (data.get("message") or {}).get("content") or ""
    except (json.JSONDecodeError, AttributeError) as exc:
        logger.error("Invalid Ollama response: %s", exc)
        raise ChatUnavailableError("Invalid Ollama response") from exc

    reply = reply.strip()
    if not reply:
        raise ChatUnavailableError("Ollama returned an empty reply")
    return reply


# ---------------------------------------------------------------------------
# Public entry point
# ---------------------------------------------------------------------------


def chat(messages: list[dict], lang: str) -> dict:
    """Ask an LLM for the next assistant turn. Returns {reply, category, language}."""
    _refresh_config()
    oauth_messages = _build_messages(messages, lang)
    user_text = _last_user_text(oauth_messages)

    errors: list[str] = []

    # Prefer Gemini when configured (project README / Crop Doctor stack).
    if os.getenv("GEMINI_API_KEY"):
        try:
            reply = _chat_gemini(oauth_messages, lang)
            category = classify(user_text, lang)
            logger.info("Chat via Gemini -> category=%s", category)
            return {"reply": reply, "category": category, "language": lang}
        except Exception as exc:  # noqa: BLE001 — fall through to Ollama
            logger.warning("Gemini chat failed, trying Ollama: %s", exc)
            errors.append(f"gemini: {exc}")

    try:
        reply = _chat_ollama(oauth_messages)
        category = classify(user_text, lang)
        logger.info("Chat via Ollama -> category=%s", category)
        return {"reply": reply, "category": category, "language": lang}
    except ChatUnavailableError as exc:
        errors.append(f"ollama: {exc}")
        logger.error("All chat providers failed: %s", errors)
        raise ChatUnavailableError("AI is currently unavailable.") from exc
