"""Helpers to read and write the static JSON knowledge base."""

import json
from pathlib import Path
from typing import Any

KNOWLEDGE_DIR = Path(__file__).resolve().parent.parent / "knowledge"


def load_json(filename: str) -> Any:
    """Read a JSON file from the knowledge base directory."""
    path = KNOWLEDGE_DIR / filename
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def save_json(filename: str, data: Any) -> None:
    """Write a JSON file into the knowledge base directory."""
    path = KNOWLEDGE_DIR / filename
    with path.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, ensure_ascii=False, indent=2)
