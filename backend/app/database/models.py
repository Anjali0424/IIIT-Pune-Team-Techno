"""SQLAlchemy ORM models for the GramMitra AI backend.

Vaccinations and village-issue reports are stored in SQLite; government
schemes and emergency contacts live in the JSON knowledge base.
"""

from datetime import datetime

from sqlalchemy import Column, Date, DateTime, Integer, String, Text, UniqueConstraint

from app.database.database import Base


class Vaccination(Base):
    __tablename__ = "vaccinations"

    id = Column(Integer, primary_key=True, index=True)
    animal_name = Column(String(100), nullable=False)
    owner_name = Column(String(100), nullable=False)
    animal_type = Column(String(50), nullable=False)
    vaccine_name = Column(String(120), nullable=False)
    vaccination_date = Column(Date, nullable=False)
    next_due_date = Column(Date, nullable=True)
    status = Column(String(20), nullable=False, default="upcoming")
    notes = Column(String(500), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self) -> str:
        return f"<Vaccination {self.id}: {self.animal_name} - {self.vaccine_name}>"


class VillageIssue(Base):
    __tablename__ = "village_issues"

    id = Column(Integer, primary_key=True, index=True)
    reporter_name = Column(String(100), nullable=False)
    phone = Column(String(20), nullable=False, index=True)
    village = Column(String(100), nullable=False)
    issue_text = Column(Text, nullable=False)
    status = Column(String(20), nullable=False, default="pending", index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self) -> str:
        return f"<VillageIssue {self.id}: {self.village} - {self.status}>"


class IssueRateLimit(Base):
    """Sliding-window request counters used to rate-limit issue reports per user.

    One row per (user_key, bucket) pair; the window slides by resetting the
    row whenever its window_start falls outside the current window.
    """

    __tablename__ = "issue_rate_limits"
    __table_args__ = (
        UniqueConstraint("user_key", "bucket", name="uq_issue_rate_user_bucket"),
    )

    id = Column(Integer, primary_key=True, index=True)
    user_key = Column(String(120), nullable=False)
    bucket = Column(String(10), nullable=False)
    window_start = Column(DateTime, nullable=False)
    request_count = Column(Integer, nullable=False, default=0)

    def __repr__(self) -> str:
        return f"<IssueRateLimit {self.user_key} {self.bucket}: {self.request_count}>"


class Product(Base):
    """Agricultural product listing in the AgMarket marketplace."""

    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False, index=True)
    description = Column(Text, nullable=True)
    category = Column(String(50), nullable=False, index=True)
    price = Column(Integer, nullable=False)
    unit = Column(String(30), nullable=False)
    quantity = Column(Integer, nullable=True)
    seller_name = Column(String(100), nullable=False)
    seller_phone = Column(String(20), nullable=False)
    village = Column(String(100), nullable=True)
    district = Column(String(100), nullable=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self) -> str:
        return f"<Product {self.id}: {self.name} ({self.category})>"
