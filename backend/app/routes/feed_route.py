"""Feed Recommendation AI route — POST /api/feed."""

import logging
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from app.services import feed_service

logger = logging.getLogger(__name__)

router = APIRouter(tags=["Feed Recommendation AI"])


class FeedRequest(BaseModel):
    query: str = Field(..., description="User question in Marathi, Hindi, or English")
    language: str = Field("mr", description="Language code: mr | hi | en")


class FeedResponse(BaseModel):
    reply: str
    animal: str
    language: str
    source: str  # "ai" | "local"


@router.post(
    "/api/feed",
    response_model=FeedResponse,
    summary="Get AI Feed Recommendation for Livestock",
    description=(
        "Returns a farmer-friendly feed schedule, supplements, and tips "
        "for the detected animal. Uses Gemini → Ollama → local knowledge base."
    ),
)
async def feed_endpoint(req: FeedRequest) -> FeedResponse:
    if not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty.")
    try:
        result = feed_service.get_feed_recommendation(req.query.strip(), req.language)
        return FeedResponse(**result)
    except Exception as exc:
        logger.error("Feed endpoint error: %s", exc)
        raise HTTPException(status_code=500, detail=f"Feed service failed: {exc}") from exc
