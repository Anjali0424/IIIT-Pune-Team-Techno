"""GramMitra AI Backend - FastAPI application.

Run with: uvicorn app.main:app --reload
"""

import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import init_db
from app.routes import (
    chat,
    crop,
    emergency,
    feed,
    issues,
    schemes,
    vaccination,
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s [%(name)s] %(message)s",
)


@asynccontextmanager
async def lifespan(_: FastAPI):
    """Create database tables on startup."""
    init_db()
    yield


app = FastAPI(
    title="GramMitra AI Backend",
    description=(
        "AI-powered rural assistant backend for farmers and livestock owners "
        "(PS07 - Human-Centered AI for Rural Communities in India)."
    ),
    version="1.0.0",
    lifespan=lifespan,
)


# Allow the Next.js frontend to call the API during development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------- ROUTES --------------------

app.include_router(schemes.router)
app.include_router(vaccination.router)
app.include_router(emergency.router)
app.include_router(emergency.emergency_router)
app.include_router(issues.router)
app.include_router(crop.router)
app.include_router(chat.router)

# Feed recommendation
app.include_router(
    feed.feed_router,
    prefix="/feed",
    tags=["Feed"],
)


# -------------------- META --------------------

@app.get("/", tags=["Meta"])
def root() -> dict:
    return {
        "message": "GramMitra AI Backend is running",
        "docs": "/docs",
        "health": "/health",
    }


@app.get("/health", tags=["Meta"])
def health() -> dict:
    return {"status": "ok"}