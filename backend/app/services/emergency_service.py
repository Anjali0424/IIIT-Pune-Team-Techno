"""Business logic for the Emergency Contacts module.

Contacts are stored in the static JSON knowledge base
(knowledge/emergency_contacts.json). New contacts registered through the API
are appended to that file.
"""

import re
from typing import List, Optional

from app.schemas import EmergencyContact, EmergencyContactCreate
from app.utils.json_loader import load_json, save_json

_CONTACTS_FILE = "emergency_contacts.json"


def _all_contacts() -> List[EmergencyContact]:
    """Load all contacts from the knowledge base."""
    raw = load_json(_CONTACTS_FILE)
    return [EmergencyContact.model_validate(item) for item in raw]


def get_all_contacts() -> List[EmergencyContact]:
    """Return every emergency contact."""
    return list(_all_contacts())


def get_contact(contact_id: str) -> Optional[EmergencyContact]:
    """Return a single contact by id, or None when it does not exist."""
    for contact in _all_contacts():
        if contact.id == contact_id:
            return contact
    return None


def filter_contacts(
    district: Optional[str] = None,
    category: Optional[str] = None,
    search: Optional[str] = None,
) -> List[EmergencyContact]:
    """Filter contacts by district, category (type) and/or search text."""
    contacts = list(_all_contacts())

    if district:
        needle = district.strip().lower()
        contacts = [c for c in contacts if c.district.strip().lower() == needle]

    if category:
        needle = category.strip().lower()
        contacts = [c for c in contacts if c.type.strip().lower() == needle]

    if search:
        needle = search.strip().lower()
        if needle:
            contacts = [
                c
                for c in contacts
                if needle
                in f"{c.name} {c.district} {c.type} {c.phone}".lower()
            ]

    return contacts


def get_categories() -> List[str]:
    """Return the sorted list of contact categories (types)."""
    return sorted({c.type for c in _all_contacts()})


def get_districts() -> List[str]:
    """Return the sorted list of districts present in the knowledge base."""
    return sorted({c.district for c in _all_contacts()})


def add_contact(data: EmergencyContactCreate) -> EmergencyContact:
    """Append a new contact to the knowledge base and persist it."""
    contacts = _all_contacts()

    base_id = _slugify(data.name)
    district_part = _slugify(data.district)
    contact_id = f"{base_id}-{district_part}" if district_part else base_id

    existing_ids = {c.id for c in contacts}
    candidate, counter = contact_id, 1
    while candidate in existing_ids:
        counter += 1
        candidate = f"{contact_id}-{counter}"

    contact = EmergencyContact(
        id=candidate,
        district=data.district,
        name=data.name,
        phone=data.phone,
        type=data.type,
    )

    contacts.append(contact)
    save_json(_CONTACTS_FILE, [c.model_dump() for c in contacts])
    return contact


def _slugify(text: str) -> str:
    """Convert a name into a url-safe id fragment."""
    text = re.sub(r"[^a-zA-Z0-9\s-]", "", text).strip().lower()
    text = re.sub(r"[\s_-]+", "-", text)
    return text.strip("-")
