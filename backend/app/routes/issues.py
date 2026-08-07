"""Village Head issue-reporting API routes."""

from typing import List, Literal, Optional

from fastapi import APIRouter, Depends, HTTPException, Query, Request, status
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas import IssueCreate, IssueResponse, IssueUpdate
from app.services import issue_service

router = APIRouter(prefix="/issues", tags=["Village Issues"])

RATE_LIMITED_DETAIL = (
    "You have sent too many reports. Please try again later."
)


@router.post(
    "",
    response_model=IssueResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit an issue report",
    description="Farmers report a problem to the village head. Rate limited "
    "per user (phone number, falling back to client IP) to prevent spam.",
)
def create_issue(
    payload: IssueCreate,
    request: Request,
    db: Session = Depends(get_db),
) -> IssueResponse:
    phone = payload.phone.strip()
    client_ip = request.client.host if request.client else "unknown"
    user_key = phone if phone else client_ip

    try:
        return issue_service.create_issue(db, payload, user_key)
    except issue_service.RateLimitExceeded as exc:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail=f"{RATE_LIMITED_DETAIL} ({exc})",
        ) from exc


@router.get(
    "",
    response_model=List[IssueResponse],
    summary="List issue reports",
    description="Village head view. Returns all reports (newest first) with "
    "optional status / village / search filters.",
)
def list_issues(
    status_filter: Optional[Literal["pending", "in_progress", "resolved"]] = Query(
        default=None, alias="status", description="Filter by report status"
    ),
    village: Optional[str] = Query(default=None, description="Filter by village"),
    search: Optional[str] = Query(default=None, description="Search reporter/village/issue text"),
    db: Session = Depends(get_db),
) -> List[IssueResponse]:
    return issue_service.list_issues(db, status=status_filter, village=village, search=search)


@router.get(
    "/{issue_id}",
    response_model=IssueResponse,
    summary="Get a single issue report",
)
def get_issue(
    issue_id: int,
    db: Session = Depends(get_db),
) -> IssueResponse:
    record = issue_service.get_issue(db, issue_id)
    if record is None:
        raise HTTPException(status_code=404, detail="Issue report not found")
    return record


@router.patch(
    "/{issue_id}",
    response_model=IssueResponse,
    summary="Update an issue report status",
    description="Village head marks a report as in_progress or resolved.",
)
def update_issue(
    issue_id: int,
    payload: IssueUpdate,
    db: Session = Depends(get_db),
) -> IssueResponse:
    record = issue_service.update_issue_status(db, issue_id, payload.status.value)
    if record is None:
        raise HTTPException(status_code=404, detail="Issue report not found")
    return record


@router.delete(
    "/{issue_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete an issue report",
)
def delete_issue(
    issue_id: int,
    db: Session = Depends(get_db),
) -> None:
    deleted = issue_service.delete_issue(db, issue_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Issue report not found")