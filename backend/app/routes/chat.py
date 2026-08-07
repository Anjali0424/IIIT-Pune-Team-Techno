"""Voice and AI Chat API routes (Gemini preferred, Ollama fallback).

Supports POST /api/chat and POST /chat
Accepts conversation history or single prompt text.
"""

import logging
from typing import Optional

from fastapi import APIRouter, HTTPException

from app.schemas import ChatMessage, ChatRequest, ChatResponse
from app.services import chat_service

logger = logging.getLogger(__name__)

router = APIRouter(tags=["AI & Voice Chat"])


@router.post(
    "/api/chat",
    response_model=ChatResponse,
    summary="Ask the AI Assistant (Full Conversation History)",
    description=(
        "Sends conversation history or question to Google Gemini when GEMINI_API_KEY is set, "
        "otherwise to local Ollama (Llama 3.2 / TinyLlama). Returns a concise reply for TTS."
    ),
)
@router.post(
    "/chat",
    response_model=ChatResponse,
    summary="Ask the AI Assistant (Single prompt or Conversation)",
    description="Alias route for /api/chat supporting simple or full conversation payloads.",
)
async def chat_endpoint(req: ChatRequest) -> ChatResponse:
    # Normalize language code (e.g. 'mr-IN' -> 'mr', 'hi-IN' -> 'hi', 'en-IN' -> 'en')
    lang_code = (req.language or "mr").split("-")[0].lower()
    if lang_code not in ("mr", "hi", "en"):
        lang_code = "mr"

    # Build messages list from req.messages or req.text
    messages_list = []
    if req.messages:
        messages_list = [m.model_dump() for m in req.messages]
    elif req.text:
        messages_list = [{"role": "user", "content": req.text}]

    if not messages_list:
        raise HTTPException(
            status_code=400,
            detail="Either 'messages' or 'text' must be provided in request.",
        )

    try:
        res = chat_service.chat(messages_list, lang_code)
        return ChatResponse(
            reply=res["reply"],
            category=res.get("category", "general"),
            language=lang_code,
        )
    except chat_service.ChatUnavailableError as exc:
        raise HTTPException(
            status_code=503,
            detail=(
                "AI is currently unavailable. Set GEMINI_API_KEY or run local Ollama."
            ),
        ) from exc
    except Exception as exc:
        logger.error("Unexpected chat error: %s", exc)
        raise HTTPException(
            status_code=500,
            detail=f"Chat processing failed: {str(exc)}",
        ) from exc
