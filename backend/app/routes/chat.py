"""Voice chat API routes backed by the local Ollama LLM."""

from fastapi import APIRouter, HTTPException

from app.schemas import ChatRequest, ChatResponse
from app.services import chat_service

router = APIRouter(prefix="/api/chat", tags=["Voice Chat"])


@router.post(
    "",
    response_model=ChatResponse,
    summary="Ask the Ollama LLM a question with full conversation history",
    description="Sends the whole conversation (system + user + assistant turns) "
    "to the local Ollama model (default: llama3.2) and returns a short, "
    "simple-language answer spoken back to the user. Returns HTTP 503 with "
    "'AI is currently unavailable.' when Ollama cannot be reached.",
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
