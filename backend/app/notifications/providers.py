"""Notification delivery providers for the vaccination reminder worker.

Providers are pluggable so the same worker can deliver through different
channels without changing the runner. The console provider works out of the
box (useful for cron logs and demos); the SMS/webhook provider requires an
``SMS_WEBHOOK_URL`` environment variable and otherwise is a safe no-op, so the
worker can be deployed before an SMS gateway is available.
"""

import json
import os
import sys
import urllib.request
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import List, Optional


@dataclass
class Reminder:
    """A single vaccination reminder ready for delivery."""

    vaccination_id: int
    animal_name: str
    owner_name: str
    animal_type: str
    vaccine_name: str
    vaccination_date: str
    next_due_date: str
    status: str
    bucket: str  # today | tomorrow | overdue
    days_until_due: Optional[int]
    message: str  # localized reminder message
    lang: str

    def log_line(self) -> str:
        return (
            f"[{self.bucket}] {self.animal_name} ({self.animal_type}) - "
            f"{self.vaccine_name}: {self.message}"
        )


class BaseProvider(ABC):
    """Interface all delivery providers must implement."""

    name: str = "base"

    @abstractmethod
    def send(self, reminder: Reminder) -> None:
        """Deliver a single reminder. May raise on failure."""

    def send_many(self, reminders: List[Reminder]) -> None:
        for reminder in reminders:
            self.send(reminder)


class ConsoleProvider(BaseProvider):
    """Prints reminders to stdout. Default provider for cron logging and demos."""

    name = "console"

    def send(self, reminder: Reminder) -> None:
        print(reminder.log_line(), flush=True)


class SmsWebhookProvider(BaseProvider):
    """POSTs reminders to a configurable webhook (e.g. an SMS gateway).

    Configuration via environment variables:
        SMS_WEBHOOK_URL   endpoint that receives the reminder JSON payload.
        REMINDER_PHONE    optional fallback recipient phone number.
    When ``SMS_WEBHOOK_URL`` is unset the provider is a safe no-op so the
    worker can run without breaking a cron schedule.
    """

    name = "sms"

    def __init__(self) -> None:
        self.webhook_url = os.getenv("SMS_WEBHOOK_URL", "").strip()
        self.recipient_phone = os.getenv("REMINDER_PHONE", "").strip()

    def send(self, reminder: Reminder) -> None:
        if not self.webhook_url:
            print(
                "[sms] SMS_WEBHOOK_URL not set; "
                f"skipping reminder for vaccination {reminder.vaccination_id}",
                file=sys.stderr,
                flush=True,
            )
            return

        payload = {
            "to": self.recipient_phone or None,
            "text": reminder.message,
            "animal_name": reminder.animal_name,
            "animal_type": reminder.animal_type,
            "vaccine_name": reminder.vaccine_name,
            "next_due_date": reminder.next_due_date,
            "bucket": reminder.bucket,
            "lang": reminder.lang,
        }
        data = json.dumps(payload).encode("utf-8")
        request = urllib.request.Request(
            self.webhook_url,
            data=data,
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        with urllib.request.urlopen(request, timeout=10) as response:
            response.read()


PROVIDERS: dict = {
    "console": ConsoleProvider,
    "sms": SmsWebhookProvider,
}


def get_provider(name: str) -> BaseProvider:
    """Return a provider instance by name (raises ValueError when unknown)."""
    if name not in PROVIDERS:
        raise ValueError(f"Unknown provider '{name}'. Available: {sorted(PROVIDERS)}")
    return PROVIDERS[name]()
