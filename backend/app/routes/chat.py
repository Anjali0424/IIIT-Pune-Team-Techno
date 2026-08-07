"""Voice chat API routes (Gemini preferred, Ollama fallback)."""

from fastapi import APIRouter, HTTPException

from app.schemas import ChatRequest, ChatResponse
from app.services import chat_service

router = APIRouter(prefix="/api/chat", tags=["Voice Chat"])


@router.post(
    "",
    response_model=ChatResponse,
    summary="Ask the LLM a question with full conversation history",
    description="Sends the whole conversation (user + assistant turns) to "
    "Google Gemini when GEMINI_API_KEY is set, otherwise to the local Ollama "
    "model. Returns a short, simple-language answer for TTS. Returns HTTP 503 "
    "with 'AI is currently unavailable.' when no provider can answer.",
)
async def chat(req: ChatRequest) -> ChatResponse:
    if req.language not in chat_service.LANG_NAMES:
        raise HTTPException(
            status_code=400, detail="language must be one of: mr, hi, en"
        )

    messages = [m.model_dump() for m in req.messages]

    try:
        return chat_service.chat(messages, req.language)
    except chat_service.ChatUnavailableError as exc:
        raise HTTPException(
            status_code=503,
            detail="AI is currently unavailable.",
        ) from exc
