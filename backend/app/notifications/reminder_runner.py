"""Vaccination reminder worker.

Sends reminders for vaccinations that are due today, due tomorrow or overdue,
through a pluggable provider (see ``providers.py``). Run it periodically from
cron or a systemd timer — a few times a day is plenty.

Usage::

    cd backend
    python -m app.notifications.reminder_runner [--provider console|sms]
                                                [--lang mr|hi|en]
                                                [--due all|today|tomorrow|overdue]
                                                [--dry-run]

Example cron line (every day at 07:00)::

    0 7 * * * cd /path/to/backend && python -m app.notifications.reminder_runner \
        --provider sms --lang mr >> /var/log/grammitra-reminders.log 2>&1

Environment:
    SMS_WEBHOOK_URL   webhook that receives the reminder (e.g. an SMS gateway).
    REMINDER_PHONE    fallback recipient phone number for the SMS provider.
"""

import argparse
from typing import List, Optional

from app.database import crud
from app.database.database import SessionLocal, init_db
from app.notifications import state
from app.notifications.providers import Reminder, get_provider
from app.utils import reminder_helper

LANGS = ("mr", "hi", "en")
BUCKETS = ("all", "today", "tomorrow", "overdue")


def _bucket_for(days_until_due: Optional[int]) -> Optional[str]:
    if days_until_due is None:
        return None
    if days_until_due < 0:
        return "overdue"
    if days_until_due == 0:
        return "today"
    if days_until_due == 1:
        return "tomorrow"
    return None


def _build_reminder(record, lang: str) -> Reminder:
    next_due = record.next_due_date
    days = reminder_helper.days_until(next_due)
    message = reminder_helper.build_reminder_message(record, lang)
    return Reminder(
        vaccination_id=record.id,
        animal_name=record.animal_name,
        owner_name=record.owner_name,
        animal_type=record.animal_type,
        vaccine_name=record.vaccine_name,
        vaccination_date=record.vaccination_date.isoformat(),
        next_due_date=next_due.isoformat() if next_due else "",
        status=record.status,
        bucket=_bucket_for(days) or "none",
        days_until_due=days,
        message=message,
        lang=lang,
    )


def collect(records, lang: str, due: str) -> List[Reminder]:
    """Map ORM records to reminders, filtering by due bucket."""
    reminders: List[Reminder] = []
    for record in records:
        reminder = _build_reminder(record, lang)
        if reminder.bucket in ("today", "tomorrow", "overdue") and (
            due == "all" or due == reminder.bucket
        ):
            reminders.append(reminder)
    return reminders


def main() -> int:
    parser = argparse.ArgumentParser(description="Send vaccination reminders.")
    parser.add_argument("--provider", default="console", help="delivery provider: console|sms")
    parser.add_argument("--lang", default="mr", choices=LANGS, help="reminder language")
    parser.add_argument(
        "--due", default="all", choices=BUCKETS, help="which reminders to send"
    )
    parser.add_argument(
        "--dry-run", action="store_true", help="print what would be sent without sending"
    )
    args = parser.parse_args()

    init_db()  # idempotent; ensures tables exist
    provider = get_provider(args.provider)

    db = SessionLocal()
    try:
        records = crud.list_vaccinations(db, status="upcoming")
    finally:
        db.close()

    reminders = collect(records, args.lang, args.due)
    if not reminders:
        print("No vaccination reminders due.")
        return 0

    pending = [
        r
        for r in reminders
        if not state.is_sent(state.reminder_key(r.vaccination_id, r.next_due_date, r.status))
    ]
    print(
        f"Collected {len(reminders)} due reminder(s); "
        f"{len(pending)} new, {len(reminders) - len(pending)} already sent."
    )

    if args.dry_run:
        for reminder in pending:
            print(f"[dry-run] {reminder.log_line()}")
        return 0

    provider.send_many(pending)
    for reminder in pending:
        state.mark_sent(
            state.reminder_key(reminder.vaccination_id, reminder.next_due_date, reminder.status),
            reminder.vaccination_id,
            reminder.next_due_date,
            reminder.status,
            reminder.lang,
        )
    state.prune()
    print(f"Sent {len(pending)} reminder(s) via '{provider.name}'.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
