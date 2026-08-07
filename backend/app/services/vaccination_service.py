"""Business logic for the Vaccination Reminder module.

Records live in the SQLite database (through app.database.crud) and the next
due date is computed from the vaccine knowledge base
(knowledge/vaccines.json) using utils/reminder_helper.
"""

from datetime import date
from typing import List, Optional

from sqlalchemy.orm import Session

from app.database import crud
from app.database.models import Vaccination
from app.schemas import (
    VaccinationCreate,
    VaccinationResponse,
    VaccinationStatus,
    VaccinationUpdate,
)
from app.utils import reminder_helper
from app.utils.json_loader import load_json

_VACCINES_FILE = "vaccines.json"


def _vaccine_meta() -> List[dict]:
    """Return the vaccine reference list from the knowledge base."""
    raw = load_json(_VACCINES_FILE)
    return raw.get("vaccines", []) if isinstance(raw, dict) else raw


def _to_response(record: Vaccination) -> VaccinationResponse:
    """Map an ORM record to its API response with computed fields."""
    days = reminder_helper.days_until(record.next_due_date)

    message: Optional[str] = None
    if (
        record.status == VaccinationStatus.UPCOMING.value
        and record.next_due_date is not None
    ):
        message = reminder_helper.build_reminder_message(record)

    is_overdue = (
        record.next_due_date is not None
        and record.next_due_date < date.today()
        and record.status == VaccinationStatus.UPCOMING.value
    )

    return VaccinationResponse(
        id=record.id,
        animal_name=record.animal_name,
        owner_name=record.owner_name,
        animal_type=record.animal_type,
        vaccine_name=record.vaccine_name,
        vaccination_date=record.vaccination_date,
        next_due_date=record.next_due_date,
        status=record.status,
        notes=record.notes,
        reminder_message=message,
        days_until_due=days,
        is_overdue=is_overdue,
        created_at=record.created_at,
        updated_at=record.updated_at,
    )


def create_vaccination(
    db: Session,
    data: VaccinationCreate,
) -> VaccinationResponse:
    """Add a vaccination record and compute its next due date."""
    next_due = reminder_helper.calculate_next_due_date(
        data.vaccination_date, data.vaccine_name, _vaccine_meta()
    )
    record = crud.create_vaccination(db, data, next_due_date=next_due)
    return _to_response(record)


def get_vaccination(db: Session, vaccination_id: int) -> Optional[VaccinationResponse]:
    """Fetch a single vaccination record."""
    record = crud.get_vaccination(db, vaccination_id)
    if record is None:
        return None
    return _to_response(record)


def list_vaccinations(
    db: Session,
    status: Optional[str] = None,
    due: Optional[str] = None,
    animal_type: Optional[str] = None,
    search: Optional[str] = None,
) -> List[VaccinationResponse]:
    """List vaccinations with optional status / due-window / animal type filters."""
    records = crud.list_vaccinations(
        db, status=status, animal_type=animal_type, search=search
    )
    responses = [_to_response(record) for record in records]

    if due == "today":
        responses = [r for r in responses if r.days_until_due == 0]
    elif due == "tomorrow":
        responses = [r for r in responses if r.days_until_due == 1]
    elif due == "overdue":
        responses = [r for r in responses if r.is_overdue]

    responses.sort(key=_sort_key)
    return responses


def get_upcoming(db: Session) -> List[VaccinationResponse]:
    """Return upcoming (today or later) vaccinations that are not completed."""
    records = crud.list_vaccinations(db, status=VaccinationStatus.UPCOMING.value)
    responses = [
        _to_response(record)
        for record in records
        if record.next_due_date is not None
        and record.next_due_date >= date.today()
    ]
    responses.sort(key=lambda r: r.next_due_date or date.max)
    return responses


def update_vaccination(
    db: Session,
    vaccination_id: int,
    data: VaccinationUpdate,
) -> Optional[VaccinationResponse]:
    """Update a vaccination record, recomputing the next due date when needed."""
    existing = crud.get_vaccination(db, vaccination_id)
    if existing is None:
        return None

    payload = data.model_dump(exclude_unset=True)
    recompute = "vaccination_date" in payload or "vaccine_name" in payload

    next_due: Optional[date] = None
    if recompute:
        new_date = payload.get("vaccination_date", existing.vaccination_date)
        new_vaccine = payload.get("vaccine_name", existing.vaccine_name)
        next_due = reminder_helper.calculate_next_due_date(
            new_date, new_vaccine, _vaccine_meta()
        )

    record = crud.update_vaccination(db, vaccination_id, data, next_due_date=next_due)
    return _to_response(record) if record else None


def delete_vaccination(db: Session, vaccination_id: int) -> bool:
    """Delete a vaccination record. Returns True when removed."""
    return crud.delete_vaccination(db, vaccination_id)


def _sort_key(record: VaccinationResponse) -> tuple:
    """Upcoming records first (by due date), completed records last."""
    if record.next_due_date is None:
        return (1, date.max.toordinal())
    group = 0 if record.status == VaccinationStatus.UPCOMING.value else 1
    return (group, record.next_due_date.toordinal())
