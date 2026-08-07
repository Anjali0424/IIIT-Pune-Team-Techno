"""Government Schemes API routes."""

from typing import List, Optional

from fastapi import APIRouter, HTTPException, Query

from app.schemas import Scheme
from app.services import scheme_service

router = APIRouter(prefix="/schemes", tags=["Government Schemes"])


@router.get(
    "",
    response_model=List[Scheme],
    summary="List government schemes",
    description="Returns all schemes. Supports filtering by category, state, "
    "popularity, eligibility text and free-text search (voice-search ready).",
)
def list_schemes(
    category: Optional[str] = Query(default=None, description="Filter by category, e.g. Dairy"),
    state: Optional[str] = Query(default=None, description="Filter by state, e.g. Maharashtra"),
    popular: Optional[bool] = Query(default=None, description="Filter by popularity (true/false)"),
    eligibility: Optional[str] = Query(default=None, description="Filter by eligibility keyword, e.g. women"),
    search: Optional[str] = Query(default=None, description="Search name/description/keywords in any language, e.g. gokul"),
) -> List[Scheme]:
    return scheme_service.filter_schemes(
        category=category,
        state=state,
        popular=popular,
        eligibility=eligibility,
        search=search,
    )


@router.get(
    "/categories",
    response_model=List[str],
    summary="List scheme categories",
)
def list_categories() -> List[str]:
    return scheme_service.get_categories()


@router.get(
    "/states",
    response_model=List[str],
    summary="List states covered by schemes",
)
def list_states() -> List[str]:
    return scheme_service.get_states()


@router.get(
    "/{scheme_id}",
    response_model=Scheme,
    summary="Get a single scheme",
    description="Returns complete scheme details: benefits, eligibility, "
    "required documents and the official website.",
)
def get_scheme(scheme_id: str) -> Scheme:
    scheme = scheme_service.get_scheme(scheme_id)
    if scheme is None:
        raise HTTPException(status_code=404, detail=f"Scheme '{scheme_id}' not found")
    return scheme
