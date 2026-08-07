"""Dedupe state for the vaccination reminder worker.

Tracks which (vaccination_id, next_due_date, status) combinations have already
been notified, so the worker never sends the same reminder twice. Stored as a
JSON file in the data directory, matching the existing JSON knowledge-base
pattern, so no database/ORM changes are needed.
"""

import json
import threading
from datetime import datetime
from typing import Any, Dict, List

from app.database.database import DATA_DIR

_STATE_FILE = DATA_DIR / "notifications.json"
_LOCK = threading.Lock()
_MAX_ENTRIES = 500


def reminder_key(vaccination_id: int, next_due_date: Optional[str], status: str) -> str:
    """Stable identity for one reminder (changes when due date or status changes)."""
    return f"{vaccination_id}:{next_due_date or 'none'}:{status}"


def _load() -> Dict[str, Any]:
    if not _STATE_FILE.exists():
        return {"sent": []}
    try:
        with _STATE_FILE.open("r", encoding="utf-8") as handle:
            return json.load(handle)
    except (json.JSONDecodeError, OSError):
        return {"sent": []}


def _save(state: Dict[str, Any]) -> None:
    _STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp = _STATE_FILE.with_suffix(".json.tmp")
    with tmp.open("w", encoding="utf-8") as handle:
        json.dump(state, handle, ensure_ascii=False, indent=2)
    tmp.replace(_STATE_FILE)


def is_sent(key: str) -> bool:
    """Return True when the reminder identified by ``key`` was already sent."""
    return any(entry.get("key") == key for entry in _load().get("sent", []))


def mark_sent(
    key: str,
    vaccination_id: int,
    next_due_date: Optional[str],
    status: str,
    lang: str,
) -> None:
    """Record that a reminder was sent. Appends when the key is not present."""
    with _LOCK:
        state = _load()
        sent = state.setdefault("sent", [])
        if any(entry.get("key") == key for entry in sent):
            return
        sent.append(
            {
                "key": key,
                "vaccination_id": vaccination_id,
                "next_due_date": next_due_date,
                "status": status,
                "lang": lang,
                "notified_at": datetime.now().isoformat(timespec="seconds"),
            }
        )
        _save(state)


def prune(max_entries: int = _MAX_ENTRIES) -> int:
    """Trim the log to the most recent ``max_entries``. Returns entries removed."""
    with _LOCK:
        state = _load()
        sent: List[Dict[str, Any]] = state.get("sent", [])
        if len(sent) <= max_entries:
            return 0
        removed = len(sent) - max_entries
        state["sent"] = sent[removed:]
        _save(state)
        return removed
