"""Voice chat service backed by a local Ollama LLM (Llama 3.2).

Flow: user speech -> speech-to-text (browser) -> this service -> Ollama LLM ->
answer text -> browser text-to-speech.

No responses are hardcoded. The only logic besides calling the model is a
lightweight category classifier used for routing + debug logging; the actual
answer always comes from the LLM with the full conversation history.
"""

import json
import logging
import os
import re
import urllib.error
import urllib.request

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://127.0.0.1:11434").rstrip("/")
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "llama3.2")
OLLAMA_TIMEOUT = float(os.getenv("OLLAMA_TIMEOUT", "30"))
OLLAMA_TEMPERATURE = float(os.getenv("OLLAMA_TEMPERATURE", "0.7"))

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
    """Raised when the Ollama server cannot be reached or fails to answer."""


# ---------------------------------------------------------------------------
# Lightweight category classification (routing + debug logging only)
# ---------------------------------------------------------------------------

# Matched in priority order; the first hit wins.
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

_CATEGORY_ORDER = [name for name, _ in _CATEGORIES]


def classify(text: str, lang: str = "mr") -> str:
    """Return the best-guess category of the user query (for routing + logs)."""
    t = " ".join((text or "").lower().split())
    if not t:
        return "unknown"
    for name, keywords in _CATEGORIES:
        for kw in keywords:
            if kw.lower() in t:
                return name
    return "unknown"


# ---------------------------------------------------------------------------
# LLM call
# ---------------------------------------------------------------------------


def _load_env() -> None:
    """Load backend/.env (if present) without extra dependencies."""
    from pathlib import Path

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


def _build_messages(messages: list[dict], lang: str) -> list[dict]:
    """Prepend the system prompt and normalize roles for the Ollama API."""
    language = LANG_NAMES.get(lang, "Marathi")
    system = {"role": "system", "content": SYSTEM_PROMPT_TEMPLATE.format(language=language)}
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


def chat(messages: list[dict], lang: str) -> dict:
    """Ask Ollama for the next assistant turn. Returns {reply, category, language}."""
    oauth_messages = _build_messages(messages, lang)
    user_text = ""
    for m in reversed(oauth_messages):
        if m["role"] == "user":
            user_text = m["content"]
            break

    payload = json.dumps(
        {
            "model": OLLAMA_MODEL,
            "messages": oauth_messages,
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

    logger.info("Ollama request -> model=%s messages=%d", OLLAMA_MODEL, len(oauth_messages))
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

    category = classify(user_text, lang)
    logger.info("Detected category -> %s", category)
    return {"reply": reply, "category": category, "language": lang}
