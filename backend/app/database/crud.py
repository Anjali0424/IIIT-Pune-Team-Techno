"""CRUD operations for the database-backed tables.

Business rules and reminder logic must stay in the service layer; this module
only translates between the database and the rest of the application.
"""

from datetime import date, datetime
from typing import List, Optional, Sequence

from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.database.models import IssueRateLimit, Vaccination, VillageIssue
from app.schemas import IssueCreate, VaccinationCreate, VaccinationUpdate


def create_vaccination(
    db: Session,
    data: VaccinationCreate,
    next_due_date: Optional[date] = None,
) -> Vaccination:
    """Insert a new vaccination record."""
    record = Vaccination(
        animal_name=data.animal_name,
        owner_name=data.owner_name,
        animal_type=data.animal_type,
        vaccine_name=data.vaccine_name,
        vaccination_date=data.vaccination_date,
        next_due_date=next_due_date,
        status=data.status.value,
        notes=data.notes,
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def get_vaccination(db: Session, vaccination_id: int) -> Optional[Vaccination]:
    """Fetch a single vaccination record by id."""
    return db.query(Vaccination).filter(Vaccination.id == vaccination_id).first()


def list_vaccinations(
    db: Session,
    status: Optional[str] = None,
    animal_type: Optional[str] = None,
    search: Optional[str] = None,
) -> Sequence[Vaccination]:
    """List vaccinations with optional status / animal type / text filters."""
    query = db.query(Vaccination)
    if status:
        query = query.filter(Vaccination.status == status)
    if animal_type:
        query = query.filter(Vaccination.animal_type.ilike(f"%{animal_type}%"))
    if search:
        term = f"%{search}%"
        query = query.filter(
            or_(
                Vaccination.animal_name.ilike(term),
                Vaccination.owner_name.ilike(term),
                Vaccination.vaccine_name.ilike(term),
            )
        )
    return query.order_by(Vaccination.vaccination_date.asc()).all()


def update_vaccination(
    db: Session,
    vaccination_id: int,
    data: VaccinationUpdate,
    next_due_date: Optional[date] = None,
) -> Optional[Vaccination]:
    """Update a vaccination record. Returns None when not found."""
    record = get_vaccination(db, vaccination_id)
    if record is None:
        return None

    for field, value in data.model_dump(exclude_unset=True).items():
        if value is not None:
            setattr(record, field, value)

    if next_due_date is not None or "vaccination_date" in data.model_dump(exclude_unset=True) or "vaccine_name" in data.model_dump(exclude_unset=True):
        record.next_due_date = next_due_date

    db.commit()
    db.refresh(record)
    return record


def delete_vaccination(db: Session, vaccination_id: int) -> bool:
    """Delete a vaccination record. Returns True when a record was removed."""
    record = get_vaccination(db, vaccination_id)
    if record is None:
        return False
    db.delete(record)
    db.commit()
    return True


# ---------------------------------------------------------------------------
# Village issue reporting
# ---------------------------------------------------------------------------


def create_issue(db: Session, data: IssueCreate) -> VillageIssue:
    """Insert a new issue report."""
    record = VillageIssue(
        reporter_name=data.reporter_name,
        phone=data.phone,
        village=data.village,
        issue_text=data.issue_text,
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def get_issue(db: Session, issue_id: int) -> Optional[VillageIssue]:
    """Fetch a single issue report by id."""
    return db.query(VillageIssue).filter(VillageIssue.id == issue_id).first()


def list_issues(
    db: Session,
    status: Optional[str] = None,
    village: Optional[str] = None,
    search: Optional[str] = None,
) -> Sequence[VillageIssue]:
    """List issue reports, newest first, with optional filters."""
    query = db.query(VillageIssue)
    if status:
        query = query.filter(VillageIssue.status == status)
    if village:
        query = query.filter(VillageIssue.village.ilike(f"%{village}%"))
    if search:
        term = f"%{search}%"
        query = query.filter(
            or_(
                VillageIssue.reporter_name.ilike(term),
                VillageIssue.village.ilike(term),
                VillageIssue.issue_text.ilike(term),
                VillageIssue.phone.ilike(term),
            )
        )
    return query.order_by(VillageIssue.created_at.desc()).all()


def update_issue_status(
    db: Session, issue_id: int, status: str
) -> Optional[VillageIssue]:
    """Update an issue report status. Returns None when not found."""
    record = get_issue(db, issue_id)
    if record is None:
        return None
    record.status = status
    db.commit()
    db.refresh(record)
    return record


def delete_issue(db: Session, issue_id: int) -> bool:
    """Delete an issue report. Returns True when a record was removed."""
    record = get_issue(db, issue_id)
    if record is None:
        return False
    db.delete(record)
    db.commit()
    return True


# ---------------------------------------------------------------------------
# Issue rate-limit windows
# ---------------------------------------------------------------------------


def get_rate_window(
    db: Session, user_key: str, bucket: str
) -> Optional[IssueRateLimit]:
    """Fetch the rate-limit counter for a user/bucket pair."""
    return (
        db.query(IssueRateLimit)
        .filter(
            IssueRateLimit.user_key == user_key,
            IssueRateLimit.bucket == bucket,
        )
        .first()
    )


def create_rate_window(
    db: Session,
    user_key: str,
    bucket: str,
    window_start: datetime,
    request_count: int = 0,
) -> IssueRateLimit:
    """Create a new rate-limit window counter for a user/bucket pair."""
    row = IssueRateLimit(
        user_key=user_key,
        bucket=bucket,
        window_start=window_start,
        request_count=request_count,
    )
    db.add(row)
    db.commit()
    db.refresh(row)
    return row


# ---------------------------------------------------------------------------
# AgMarket products
# ---------------------------------------------------------------------------


def create_product(db: Session, data) -> "Product":
    """Insert a new product listing."""
    from app.database.models import Product

    record = Product(
        name=data.name.strip(),
        description=data.description.strip() if data.description else None,
        category=data.category,
        price=data.price,
        unit=data.unit.strip(),
        quantity=data.quantity,
        seller_name=data.seller_name.strip(),
        seller_phone=data.seller_phone.strip(),
        village=data.village.strip() if data.village else None,
        district=data.district.strip() if data.district else None,
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def get_product(db: Session, product_id: int):
    """Fetch a single product by id."""
    from app.database.models import Product

    return db.query(Product).filter(Product.id == product_id).first()


def list_products(
    db: Session,
    category: Optional[str] = None,
    search: Optional[str] = None,
):
    """List products, newest first, with optional category / text filters."""
    from app.database.models import Product

    query = db.query(Product)
    if category:
        query = query.filter(Product.category == category)
    if search:
        term = f"%{search}%"
        query = query.filter(
            or_(
                Product.name.ilike(term),
                Product.description.ilike(term),
                Product.seller_name.ilike(term),
                Product.village.ilike(term),
                Product.district.ilike(term),
                Product.category.ilike(term),
            )
        )
    return query.order_by(Product.created_at.desc()).all()


def update_product(db: Session, product_id: int, data):
    """Update a product listing. Returns None when not found."""
    record = get_product(db, product_id)
    if record is None:
        return None

    for field, value in data.model_dump(exclude_unset=True).items():
        if value is not None:
            if isinstance(value, str):
                value = value.strip()
            setattr(record, field, value)

    db.commit()
    db.refresh(record)
    return record


def delete_product(db: Session, product_id: int) -> bool:
    """Delete a product listing. Returns True when a record was removed."""
    record = get_product(db, product_id)
    if record is None:
        return False
    db.delete(record)
    db.commit()
    return True
