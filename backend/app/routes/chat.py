"""AI chat API route.

POST /chat  ->  { "reply": "..." }

Generates a short multilingual reply with Google Gemini. Returns 503 with a
helpful message when no API key is configured or the upstream call fails, so
the frontend can fall back to its built-in assistant.
"""

import asyncio
import logging

from fastapi import APIRouter, HTTPException

from app.schemas import ChatRequest, ChatResponse
from app.services import llm_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/chat", tags=["Chat"])


@router.post(
    "",
    summary="Generate an AI reply",
    description=(
        "Uses Google Gemini to answer an animal-health question in the "
        "requested language (en/hi/mr or a BCP-47 tag). Replies are short and "
        "meant to be read aloud by the TTS endpoint."
    ),
    responses={
        200: {"model": ChatResponse},
        503: {"description": "No LLM configured (set GEMINI_API_KEY)"},
    },
)
async def chat(request: ChatRequest) -> ChatResponse:
    reply = await asyncio.to_thread(
        llm_service.generate_reply,
        request.text,
        request.language,
    )
    if reply is None:
        raise HTTPException(
            status_code=503,
            detail=(
                "No LLM reply. Set GEMINI_API_KEY in backend/.env (free key "
                "from aistudio.google.com) to enable AI answers."
            ),
        )
    return ChatResponse(reply=reply)
