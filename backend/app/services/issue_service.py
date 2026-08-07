"""Business logic for the Village Head issue-reporting module.

Farmers submit voice-to-text issue reports which are persisted to the SQLite
database. A sliding-window rate limit (per user key, stored in SQLite) prevents
spam. The village head can list, update and delete reports.

Limits are configurable through environment variables:

* ISSUE_HOUR_LIMIT : maximum reports per user per rolling hour (default 3)
* ISSUE_DAY_LIMIT  : maximum reports per user per rolling day (default 10)
"""

import os
from datetime import datetime
from typing import List, Optional

from sqlalchemy.orm import Session

from app.database import crud
from app.database.models import VillageIssue
from app.schemas import IssueCreate, IssueResponse

HOUR_LIMIT = int(os.getenv("ISSUE_HOUR_LIMIT", "3"))
DAY_LIMIT = int(os.getenv("ISSUE_DAY_LIMIT", "10"))

_DAY_BUCKET = "day"
_HOUR_BUCKET = "hour"


class RateLimitExceeded(Exception):
    """Raised when a user has sent too many reports within a window."""


def _window_start(bucket: str) -> datetime:
    """Return the start of the current sliding window for a bucket."""
    now = datetime.utcnow()
    if bucket == _HOUR_BUCKET:
        return now.replace(minute=0, second=0, microsecond=0)
    return now.replace(hour=0, minute=0, second=0, microsecond=0)


def _ensure_window(db: Session, user_key: str, bucket: str) -> None:
    """Slide the stored counter into the current window when it has expired."""
    start = _window_start(bucket)
    row = crud.get_rate_window(db, user_key, bucket)
    if row is None:
        crud.create_rate_window(db, user_key, bucket, start)
        return
    if row.window_start < start:
        row.window_start = start
        row.request_count = 0
        db.commit()


def _can_consume(db: Session, user_key: str, bucket: str, limit: int) -> bool:
    _ensure_window(db, user_key, bucket)
    row = crud.get_rate_window(db, user_key, bucket)
    return row is not None and row.request_count < limit


def _consume(db: Session, user_key: str, bucket: str) -> None:
    _ensure_window(db, user_key, bucket)
    row = crud.get_rate_window(db, user_key, bucket)
    if row is not None:
        row.request_count += 1
        db.commit()


def _to_response(record: VillageIssue) -> IssueResponse:
    return IssueResponse(
        id=record.id,
        reporter_name=record.reporter_name,
        phone=record.phone,
        village=record.village,
        issue_text=record.issue_text,
        status=record.status,
        created_at=record.created_at,
        updated_at=record.updated_at,
    )


def create_issue(
    db: Session, data: IssueCreate, user_key: str
) -> IssueResponse:
    """Persist an issue report after validating both sliding rate windows.

    Both limits are checked before either counter is consumed so a request
    nearing one limit never costs the user a slot in the other window.
    """
    if not _can_consume(db, user_key, _HOUR_BUCKET, HOUR_LIMIT):
        raise RateLimitExceeded(f"hourly limit of {HOUR_LIMIT} reports reached")
    if not _can_consume(db, user_key, _DAY_BUCKET, DAY_LIMIT):
        raise RateLimitExceeded(f"daily limit of {DAY_LIMIT} reports reached")

    _consume(db, user_key, _HOUR_BUCKET)
    _consume(db, user_key, _DAY_BUCKET)

    record = crud.create_issue(db, data)
    return _to_response(record)


def get_issue(db: Session, issue_id: int) -> Optional[IssueResponse]:
    """Fetch a single issue report."""
    record = crud.get_issue(db, issue_id)
    return _to_response(record) if record else None


def list_issues(
    db: Session,
    status: Optional[str] = None,
    village: Optional[str] = None,
    search: Optional[str] = None,
) -> List[IssueResponse]:
    """List issue reports with optional status / village / text filters."""
    records = crud.list_issues(db, status=status, village=village, search=search)
    return [_to_response(record) for record in records]


def update_issue_status(
    db: Session, issue_id: int, status: str
) -> Optional[IssueResponse]:
    """Update an issue report's status. Returns None when not found."""
    record = crud.update_issue_status(db, issue_id, status)
    return _to_response(record) if record else None


def delete_issue(db: Session, issue_id: int) -> bool:
    """Delete an issue report. Returns True when removed."""
    return crud.delete_issue(db, issue_id)