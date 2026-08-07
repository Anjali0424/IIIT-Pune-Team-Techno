"""Vaccination reminder helpers.

Responsibilities:
- Calculate the next due date from a vaccination date using the vaccine
  knowledge base (knowledge/vaccines.json).
- Annotate vaccination records with due / overdue / days-until-due info.
- Build human-readable reminder messages in Marathi, Hindi and English.
"""

from datetime import date, timedelta
from typing import Any, List, Optional

_REMINDER_TEMPLATES = {
    "en": "{animal} ({animal_type}) is due for {vaccine} on {due_date}. Please contact your veterinarian.",
    "mr": "{animal} ({animal_type}) ला {due_date} रोजी {vaccine} द्यायची आहे. कृपया पशुवैद्यकांशी संपर्क साधा.",
    "hi": "{animal} ({animal_type}) को {due_date} को {vaccine} देनी है। कृपया पशु चिकित्सक से संपर्क करें।",
}


def days_until(target: Optional[date]) -> Optional[int]:
    """Days from today until the target date (negative when past)."""
    if target is None:
        return None
    return (target - date.today()).days


def find_vaccine_meta(vaccine_name: str, vaccines: List[dict]) -> Optional[dict]:
    """Match a user-supplied vaccine name against the vaccine knowledge base.

    Matching is case-insensitive and checks the English name plus the aliases
    stored in vaccines.json so Marathi/Hindi/English input all resolve.
    """
    needle = (vaccine_name or "").strip().lower()
    if not needle:
        return None

    for vaccine in vaccines:
        candidates: List[str] = []
        en_name = (vaccine.get("name") or {}).get("en", "")
        if en_name:
            candidates.append(str(en_name).lower())
        candidates.extend(str(alias).lower() for alias in vaccine.get("aliases", []))

        for candidate in candidates:
            if candidate and (candidate == needle or candidate in needle or needle in candidate):
                return vaccine
    return None


def calculate_next_due_date(
    vaccination_date: date,
    vaccine_name: str,
    vaccines: List[dict],
) -> Optional[date]:
    """Compute the next due date for a vaccination.

    Returns None when the vaccine is unknown or is a one-time dose
    (e.g. Brucellosis).
    """
    meta = find_vaccine_meta(vaccine_name, vaccines)
    if meta is None:
        return None
    interval = meta.get("interval_days")
    if interval is None or not meta.get("repeat", True):
        return None
    return vaccination_date + timedelta(days=int(interval))


def check_due_vaccines(vaccinations: List[Any]) -> List[dict]:
    """Annotate vaccination records with due / overdue status.

    Each returned dict has the form:
        {"vaccination": <record>, "is_due": bool, "overdue": bool,
         "days_until_due": int | None}
    """
    today = date.today()
    result: List[dict] = []
    for record in vaccinations:
        due = getattr(record, "next_due_date", None)
        if due is None:
            result.append(
                {
                    "vaccination": record,
                    "is_due": False,
                    "overdue": False,
                    "days_until_due": None,
                }
            )
            continue
        diff = (due - today).days
        result.append(
            {
                "vaccination": record,
                "is_due": diff <= 0,
                "overdue": diff < 0,
                "days_until_due": diff,
            }
        )
    return result


def build_reminder_message(record: Any, lang: str = "en") -> str:
    """Build a friendly reminder message for a vaccination record."""
    due = getattr(record, "next_due_date", None)
    if due is None:
        return ""
    template = _REMINDER_TEMPLATES.get(lang, _REMINDER_TEMPLATES["en"])
    return template.format(
        animal=getattr(record, "animal_name", ""),
        animal_type=getattr(record, "animal_type", ""),
        vaccine=getattr(record, "vaccine_name", ""),
        due_date=due.isoformat(),
    )
