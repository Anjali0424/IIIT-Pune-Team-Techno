"""Text-to-Speech API route.

POST /tts  ->  MP3 bytes of the spoken text.

Uses Google Cloud TTS (primary), then Azure AI Speech, then edge-tts (a
no-key fallback that works out of the box). Returns 503 only when every
provider fails (e.g. no network).
"""

import asyncio
import logging

from fastapi import APIRouter, HTTPException
from fastapi.responses import Response

from app.schemas import TtsRequest
from app.services import tts_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/tts", tags=["Text-to-Speech"])


@router.post(
    "",
    summary="Synthesize speech",
    description=(
        "Converts text into MP3 audio spoken with a natural neural voice. "
        "`language` may be a short code (en/hi/mr) or a BCP-47 tag "
        "(en-IN/hi-IN/mr-IN) and is auto-detected from the text when omitted. "
        "Uses Google Cloud TTS, then Azure AI Speech, then edge-tts (no key)."
    ),
    responses={
        200: {"content": {"audio/mpeg": {}}},
        503: {"description": "No TTS provider configured"},
    },
)
async def synthesize(request: TtsRequest) -> Response:
    audio, media_type = await asyncio.to_thread(
        tts_service.synthesize_speech,
        request.text,
        request.language,
        request.voice,
    )
    if audio is None:
        raise HTTPException(
            status_code=503,
            detail=(
                "Speech synthesis failed. No provider could produce audio: "
                "Google/Azure need credentials (GOOGLE_APPLICATION_CREDENTIALS "
                "or AZURE_SPEECH_KEY + AZURE_SPEECH_REGION) and edge-tts "
                "needs an internet connection."
            ),
        )
    return Response(
        content=audio,
        media_type=media_type,
        headers={"Cache-Control": "public, max-age=86400"},
    )
