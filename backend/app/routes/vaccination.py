"""Vaccination Reminder API routes."""

from typing import List, Literal, Optional

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas import VaccinationCreate, VaccinationResponse, VaccinationUpdate
from app.services import vaccination_service

router = APIRouter(prefix="/vaccination", tags=["Vaccination"])


@router.post(
    "",
    response_model=VaccinationResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Add a vaccination record",
    description="Creates a record and automatically computes the next due date "
    "from the vaccine knowledge base.",
)
def create_vaccination(
    payload: VaccinationCreate,
    db: Session = Depends(get_db),
) -> VaccinationResponse:
    return vaccination_service.create_vaccination(db, payload)


@router.get(
    "",
    response_model=List[VaccinationResponse],
    summary="List vaccination records",
)
def list_vaccinations(
    status_filter: Optional[Literal["upcoming", "completed"]] = Query(
        default=None, alias="status", description="Filter by record status"
    ),
    due: Optional[Literal["today", "tomorrow", "overdue"]] = Query(
        default=None, description="Filter by due window"
    ),
    animal_type: Optional[str] = Query(default=None, description="Filter by animal type"),
    search: Optional[str] = Query(default=None, description="Search animal/owner/vaccine name"),
    db: Session = Depends(get_db),
) -> List[VaccinationResponse]:
    return vaccination_service.list_vaccinations(
        db, status=status_filter, due=due, animal_type=animal_type, search=search
    )


@router.get(
    "/upcoming",
    response_model=List[VaccinationResponse],
    summary="Upcoming vaccinations",
    description="All non-completed vaccinations due today or later, with reminder messages.",
)
def upcoming_vaccinations(db: Session = Depends(get_db)) -> List[VaccinationResponse]:
    return vaccination_service.get_upcoming(db)


@router.get(
    "/due/today",
    response_model=List[VaccinationResponse],
    summary="Vaccinations due today",
)
def due_today(db: Session = Depends(get_db)) -> List[VaccinationResponse]:
    return vaccination_service.list_vaccinations(db, due="today")


@router.get(
    "/due/tomorrow",
    response_model=List[VaccinationResponse],
    summary="Vaccinations due tomorrow",
)
def due_tomorrow(db: Session = Depends(get_db)) -> List[VaccinationResponse]:
    return vaccination_service.list_vaccinations(db, due="tomorrow")


@router.get(
    "/{vaccination_id}",
    response_model=VaccinationResponse,
    summary="Get a vaccination record",
)
def get_vaccination(
    vaccination_id: int,
    db: Session = Depends(get_db),
) -> VaccinationResponse:
    record = vaccination_service.get_vaccination(db, vaccination_id)
    if record is None:
        raise HTTPException(status_code=404, detail="Vaccination record not found")
    return record


@router.put(
    "/{vaccination_id}",
    response_model=VaccinationResponse,
    summary="Update a vaccination record",
    description="When vaccination_date or vaccine_name changes, the next due "
    "date is recomputed automatically.",
)
def update_vaccination(
    vaccination_id: int,
    payload: VaccinationUpdate,
    db: Session = Depends(get_db),
) -> VaccinationResponse:
    record = vaccination_service.update_vaccination(db, vaccination_id, payload)
    if record is None:
        raise HTTPException(status_code=404, detail="Vaccination record not found")
    return record


@router.delete(
    "/{vaccination_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete a vaccination record",
)
def delete_vaccination(
    vaccination_id: int,
    db: Session = Depends(get_db),
) -> None:
    deleted = vaccination_service.delete_vaccination(db, vaccination_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Vaccination record not found")
