"""High-quality multilingual Text-to-Speech service.

Provider priority (both return MP3 bytes):

1. **Google Cloud Text-to-Speech** (Neural2 voices) - best multilingual quality.
   Requires the ``google-cloud-texttospeech`` package plus Google credentials:
   - ``GOOGLE_APPLICATION_CREDENTIALS`` pointing at a service-account JSON file,
   - ``gcloud auth application-default login``, or
   - a GCE / Cloud Run service account (ADC).
2. **Microsoft Azure AI Speech** (neural voices) - used when Google is not
   configured or fails. Requires ``AZURE_SPEECH_KEY`` + ``AZURE_SPEECH_REGION``.
   Uses the REST API, no SDK needed.
3. **edge-tts** (Microsoft Edge neural voices) - used when neither Google nor
   Azure is configured or working. Requires no API key and works out of the
   box; it streams from Microsoft's public Edge TTS endpoint (network needed).

If no provider can produce audio the route answers 503 and the frontend can
decide how to behave.
"""

import logging
import os
import re
from typing import Optional, Tuple
from xml.sax.saxutils import escape as xml_escape

logger = logging.getLogger(__name__)

# Preferred neural voices per language. Google first, Azure as fallback.
# Note: Google does not ship a Neural2 voice for Marathi; its premium
# WaveNet voice is used instead so synthesis never falls through to Azure.
GOOGLE_VOICES = {
    "en": "en-IN-Neural2-A",
    "hi": "hi-IN-Neural2-A",
    "mr": "mr-IN-Wavenet-A",
}

AZURE_VOICES = {
    "en": "en-IN-NeerjaNeural",
    "hi": "hi-IN-SwaraNeural",
    "mr": "mr-IN-AarohiNeural",
}

# edge-tts streams the same Microsoft neural voices as Azure, keyed by locale.
EDGE_VOICES = AZURE_VOICES

DEVANAGARI_RE = re.compile(r"[\u0900-\u097F]")


def normalize_language(language: Optional[str], text: str = "") -> str:
    """Map a short code or BCP-47 tag to one of ``en`` | ``hi`` | ``mr``.

    Falls back to script detection on the text (Devanagari -> Hindi) when no
    language hint is supplied, so no manual selection is required.
    """
    if language:
        base = language.strip().lower().replace("_", "-").split("-")[0]
        if base in ("en", "hi", "mr"):
            return base
    if text and DEVANAGARI_RE.search(text):
        return "hi"
    return "en"


def _google_synthesize(text: str, language_code: str, voice_name: str) -> Optional[bytes]:
    """Synthesise with the Google Cloud Text-to-Speech client library."""
    try:
        from google.cloud import texttospeech  # type: ignore
    except ImportError:
        logger.info("google-cloud-texttospeech is not installed; skipping Google provider.")
        return None

    try:
        client = texttospeech.TextToSpeechClient()
    except Exception as exc:  # noqa: BLE001 - missing/invalid credentials
        logger.warning("Google Cloud credentials unavailable: %s", exc)
        return None

    synthesis_input = texttospeech.SynthesisInput(text=text)
    voice = texttospeech.VoiceSelectionParams(language_code=language_code, name=voice_name)
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
        speaking_rate=1.0,
        pitch=0.0,
    )
    try:
        response = client.synthesize_speech(
            input=synthesis_input,
            voice=voice,
            audio_config=audio_config,
        )
    except Exception as exc:  # noqa: BLE001 - quota, permissions, network, ...
        logger.warning("Google Cloud synthesis failed: %s", exc)
        return None

    if not response.audio_content:
        logger.warning("Google Cloud returned an empty synthesis result.")
        return None
    return bytes(response.audio_content)


def _azure_synthesize(text: str, language_code: str, voice_name: str) -> Optional[bytes]:
    """Synthesise with the Azure AI Speech REST API (no SDK required)."""
    key = os.environ.get("AZURE_SPEECH_KEY")
    region = os.environ.get("AZURE_SPEECH_REGION")
    if not key or not region:
        return None

    try:
        import httpx
    except ImportError:
        logger.info("httpx is not installed; skipping Azure provider.")
        return None

    ssml = (
        '<speak version="1.0" xml:lang="{lang}">'
        '<voice name="{voice}">'
        "<prosody rate=\"+0%\">{text}</prosody>"
        "</voice></speak>"
    ).format(lang=language_code, voice=voice_name, text=xml_escape(text))

    url = f"https://{region}.tts.speech.microsoft.com/cognitiveservices/v1"
    headers = {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-24khz-160kbitrate-mono-mp3",
        "User-Agent": "GramMitra-AI",
    }
    try:
        response = httpx.post(url, headers=headers, content=ssml.encode("utf-8"), timeout=30.0)
        response.raise_for_status()
    except Exception as exc:  # noqa: BLE001 - network / auth / quota
        logger.warning("Azure AI Speech synthesis failed: %s", exc)
        return None

    if not response.content:
        logger.warning("Azure returned an empty synthesis result.")
        return None
    return response.content


def _edge_synthesize(text: str, language_code: str, voice_name: str) -> Optional[bytes]:
    """Synthesise with edge-tts (Microsoft Edge neural voices, no API key).

    Must be called from a worker thread (the route runs it via
    ``asyncio.to_thread``); ``stream_sync`` drives the underlying async client
    with its own event loop.
    """
    try:
        import edge_tts
    except ImportError:
        logger.info("edge-tts is not installed; skipping no-key provider.")
        return None

    try:
        communicate = edge_tts.Communicate(text, voice_name)
        audio = b"".join(
            chunk["data"] for chunk in communicate.stream_sync() if chunk["type"] == "audio"
        )
    except Exception as exc:  # noqa: BLE001 - network / service / version issues
        logger.warning("Edge TTS synthesis failed: %s", exc)
        return None

    if not audio:
        logger.warning("Edge TTS returned an empty synthesis result.")
        return None
    return audio


def synthesize_speech(
    text: str,
    language: Optional[str] = None,
    voice: Optional[str] = None,
) -> Tuple[Optional[bytes], Optional[str]]:
    """Synthesise ``text`` and return ``(mp3_bytes, mime_type)``.

    Tries Google, then Azure, then edge-tts. Returns ``(None, None)`` when no
    provider can produce audio so the caller can decide how to respond.
    """
    if not text or not text.strip():
        return None, None

    text = text.strip()
    lang_code = normalize_language(language, text)
    locale = f"{lang_code}-IN"

    audio = _google_synthesize(text, locale, voice or GOOGLE_VOICES[lang_code])
    if audio:
        return audio, "audio/mpeg"

    audio = _azure_synthesize(text, locale, voice or AZURE_VOICES[lang_code])
    if audio:
        return audio, "audio/mpeg"

    audio = _edge_synthesize(text, locale, voice or EDGE_VOICES[lang_code])
    if audio:
        return audio, "audio/mpeg"

    return None, None
