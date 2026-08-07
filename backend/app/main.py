"""GramMitra AI Backend - FastAPI application.

Run with:  uvicorn app.main:app --reload
"""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import init_db
from app.routes import chat, crop, emergency, issues, schemes, vaccination


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

# Allow the Next.js frontend (localhost:3000) to call the API during dev.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(schemes.router)
app.include_router(vaccination.router)
app.include_router(emergency.router)
app.include_router(emergency.emergency_router)
app.include_router(issues.router)
app.include_router(crop.router)
app.include_router(chat.router)


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
