"""Emergency Contacts API routes."""

from typing import List, Optional

from fastapi import APIRouter, HTTPException, Query, status

from app.schemas import EmergencyContact, EmergencyContactCreate
from app.services import emergency_service

router = APIRouter(prefix="/contacts", tags=["Emergency Contacts"])


@router.get(
    "",
    response_model=List[EmergencyContact],
    summary="List emergency contacts",
    description="Returns all contacts. Supports filtering by district, "
    "category (e.g. Veterinary Doctor) and free-text search.",
)
def list_contacts(
    district: Optional[str] = Query(default=None, description="Filter by district, e.g. Pune"),
    category: Optional[str] = Query(default=None, description="Filter by category, e.g. Veterinary Doctor"),
    search: Optional[str] = Query(default=None, description="Search name/district/type/phone"),
) -> List[EmergencyContact]:
    return emergency_service.filter_contacts(
        district=district, category=category, search=search
    )


@router.post(
    "",
    response_model=EmergencyContact,
    status_code=status.HTTP_201_CREATED,
    summary="Add a new emergency contact",
    description="Registers a contact and persists it into the JSON knowledge base.",
)
def create_contact(payload: EmergencyContactCreate) -> EmergencyContact:
    return emergency_service.add_contact(payload)


@router.get(
    "/categories",
    response_model=List[str],
    summary="List contact categories",
)
def list_categories() -> List[str]:
    return emergency_service.get_categories()


@router.get(
    "/districts",
    response_model=List[str],
    summary="List districts",
)
def list_districts() -> List[str]:
    return emergency_service.get_districts()


@router.get(
    "/{contact_id}",
    response_model=EmergencyContact,
    summary="Get a single emergency contact",
)
def get_contact(contact_id: str) -> EmergencyContact:
    contact = emergency_service.get_contact(contact_id)
    if contact is None:
        raise HTTPException(status_code=404, detail=f"Contact '{contact_id}' not found")
    return contact


# ---------------------------------------------------------------------------
# Alias endpoint: POST /emergency (per API specification)
# ---------------------------------------------------------------------------

emergency_router = APIRouter(prefix="/emergency", tags=["Emergency"])


@emergency_router.post(
    "",
    response_model=EmergencyContact,
    status_code=status.HTTP_201_CREATED,
    summary="Register an emergency contact",
    description="Alias of POST /contacts used to register an emergency contact "
    "into the knowledge base.",
)
def register_emergency(payload: EmergencyContactCreate) -> EmergencyContact:
    return emergency_service.add_contact(payload)
