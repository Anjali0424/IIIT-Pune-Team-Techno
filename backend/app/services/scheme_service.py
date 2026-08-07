"""Business logic for the Government Schemes module.

All scheme data comes from the static JSON knowledge base
(knowledge/schemes.json); no database is involved.
"""

from typing import List, Optional

from app.schemas import Scheme
from app.utils.json_loader import load_json

_SCHEMES_FILE = "schemes.json"

_cached_schemes: Optional[List[Scheme]] = None


def _all_schemes() -> List[Scheme]:
    """Load schemes from the knowledge base once and cache them in memory."""
    global _cached_schemes
    if _cached_schemes is None:
        raw = load_json(_SCHEMES_FILE)
        _cached_schemes = [Scheme.model_validate(item) for item in raw]
    return _cached_schemes


def _flatten(value) -> str:
    """Flatten a LangText dict or string into a single searchable string."""
    if isinstance(value, dict):
        return " ".join(str(v) for v in value.values())
    return str(value or "")


def get_all_schemes() -> List[Scheme]:
    """Return every scheme in the knowledge base."""
    return list(_all_schemes())


def get_scheme(scheme_id: str) -> Optional[Scheme]:
    """Return a single scheme by id, or None when it does not exist."""
    for scheme in _all_schemes():
        if scheme.id == scheme_id:
            return scheme
    return None


def filter_schemes(
    category: Optional[str] = None,
    state: Optional[str] = None,
    popular: Optional[bool] = None,
    eligibility: Optional[str] = None,
    search: Optional[str] = None,
) -> List[Scheme]:
    """Filter schemes by category, state, popularity, eligibility and search text.

    `search` is matched (case-insensitive) against multilingual names,
    descriptions, benefits, category, states and keywords so it works with
    voice-transcribed queries too.
    """
    result = list(_all_schemes())

    if category:
        needle = category.strip().lower()
        result = [s for s in result if s.category.lower() == needle]

    if state:
        needle = state.strip().lower()
        result = [s for s in result if any(si.strip().lower() == needle for si in s.state)]

    if popular is not None:
        result = [s for s in result if s.popular is popular]

    if eligibility:
        needle = eligibility.strip().lower()
        result = [s for s in result if needle in _flatten(s.eligibility).lower()]

    if search:
        needle = search.strip().lower()
        if needle:
            matched: List[Scheme] = []
            for scheme in result:
                haystack = " ".join(
                    [
                        _flatten(scheme.name),
                        _flatten(scheme.description),
                        _flatten(scheme.benefits),
                        _flatten(scheme.eligibility),
                        scheme.category,
                        " ".join(scheme.state),
                        " ".join(scheme.keywords),
                    ]
                ).lower()
                if needle in haystack:
                    matched.append(scheme)
            result = matched

    return result


def get_categories() -> List[str]:
    """Return the sorted list of available scheme categories."""
    return sorted({s.category for s in _all_schemes()})


def get_states() -> List[str]:
    """Return the sorted list of states covered by the knowledge base."""
    states = {state for s in _all_schemes() for state in s.state}
    return sorted(states)
