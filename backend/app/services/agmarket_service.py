"""Business logic for the AgMarket module."""

import json
from pathlib import Path
from typing import Any, List, Optional

from sqlalchemy.orm import Session

from app.database import crud
from app.database.models import Product
from app.schemas import (
    AIInsightResponse,
    MarketPriceResponse,
    PRODUCT_CATEGORIES,
    ProductCreate,
    ProductResponse,
    ProductUpdate,
)


# ============================================================================
# Mandi Dataset
# ============================================================================

MANDI_DATA_FILE = (
    Path(__file__).resolve().parent.parent / "knowledge" / "mandis.json"
)


def _load_mandi_data() -> List[dict[str, Any]]:
    """Load mandi price data from the local JSON dataset."""

    if not MANDI_DATA_FILE.exists():
        return []

    try:
        with MANDI_DATA_FILE.open(
            "r",
            encoding="utf-8",
        ) as file:
            data = json.load(file)

        if isinstance(data, list):
            return data

        # Also support JSON wrapped inside {"data": [...]}
        if isinstance(data, dict):
            records = data.get("data", [])

            if isinstance(records, list):
                return records

    except (OSError, json.JSONDecodeError):
        return []

    return []


def _get_value(
    record: dict[str, Any],
    *keys: str,
    default: str = "",
) -> str:
    """Get the first available value from multiple possible JSON keys."""

    for key in keys:
        value = record.get(key)

        if value is not None and str(value).strip():
            return str(value).strip()

    return default


def _matches(
    value: str,
    search: Optional[str],
) -> bool:
    """Case-insensitive partial matching."""

    if not search:
        return True

    return search.lower().strip() in value.lower().strip()


# ============================================================================
# Product Marketplace
# ============================================================================


def get_categories() -> List[str]:
    """Return supported product categories."""

    return list(PRODUCT_CATEGORIES)


def list_products(
    db: Session,
    category: Optional[str] = None,
    search: Optional[str] = None,
) -> List[ProductResponse]:
    """List products with optional filters."""

    records = crud.list_products(
        db,
        category=category,
        search=search,
    )

    return [
        ProductResponse.model_validate(item)
        for item in records
    ]


def get_product(
    db: Session,
    product_id: int,
) -> Optional[ProductResponse]:
    """Return a single product."""

    record = crud.get_product(
        db,
        product_id,
    )

    if record is None:
        return None

    return ProductResponse.model_validate(record)


def create_product(
    db: Session,
    payload: ProductCreate,
) -> ProductResponse:
    """Create a new product listing."""

    record = crud.create_product(
        db,
        payload,
    )

    return ProductResponse.model_validate(record)


def update_product(
    db: Session,
    product_id: int,
    payload: ProductUpdate,
) -> Optional[ProductResponse]:
    """Update an existing product listing."""

    record = crud.update_product(
        db,
        product_id,
        payload,
    )

    if record is None:
        return None

    return ProductResponse.model_validate(record)


def delete_product(
    db: Session,
    product_id: int,
) -> bool:
    """Delete a product listing."""

    return crud.delete_product(
        db,
        product_id,
    )


# ============================================================================
# Market Research
# ============================================================================


def search_market_prices(
    commodity: str,
    state: Optional[str] = None,
    district: Optional[str] = None,
    market: Optional[str] = None,
) -> List[MarketPriceResponse]:
    """
    Search mandi prices from the local mandis.json dataset.
    """

    records = _load_mandi_data()

    results: List[MarketPriceResponse] = []

    for record in records:

        record_commodity = _get_value(
            record,
            "commodity",
            "Commodity",
            "commodity_name",
            "Commodity Name",
        )

        record_state = _get_value(
            record,
            "state",
            "State",
        )

        record_district = _get_value(
            record,
            "district",
            "District",
        )

        record_market = _get_value(
            record,
            "market",
            "Market",
            "market_name",
            "Market Name",
        )

        if not _matches(
            record_commodity,
            commodity,
        ):
            continue

        if not _matches(
            record_state,
            state,
        ):
            continue

        if not _matches(
            record_district,
            district,
        ):
            continue

        if not _matches(
            record_market,
            market,
        ):
            continue

        result = {
            "state": record_state,
            "district": record_district,
            "market": record_market,
            "commodity": record_commodity,
            "arrival_date": _get_value(
                record,
                "arrival_date",
                "Arrival Date",
                "arrivalDate",
                default="",
            ),
            "min_price": _get_value(
                record,
                "min_price",
                "Min Price",
                "min_price_per_quintal",
                "Min Price (₹/Quintal)",
                default="0",
            ),
            "max_price": _get_value(
                record,
                "max_price",
                "Max Price",
                "max_price_per_quintal",
                "Max Price (₹/Quintal)",
                default="0",
            ),
            "modal_price": _get_value(
                record,
                "modal_price",
                "Modal Price",
                "modal_price_per_quintal",
                "Modal Price (₹/Quintal)",
                default="0",
            ),
        }

        try:
            results.append(
                MarketPriceResponse.model_validate(result)
            )
        except Exception:
            # Skip malformed records instead of crashing the whole endpoint.
            continue

    return results


# ============================================================================
# AI Market Insight
# ============================================================================


def _price_to_float(value: Any) -> Optional[float]:
    """Convert a price value into a number."""

    if value is None:
        return None

    try:
        cleaned = (
            str(value)
            .replace(",", "")
            .replace("₹", "")
            .replace("Rs.", "")
            .replace("Rs", "")
            .strip()
        )

        return float(cleaned)

    except (ValueError, TypeError):
        return None


def generate_ai_insight(
    commodity: str,
    prices: List[MarketPriceResponse],
    language: str = "en",
) -> AIInsightResponse:
    """
    Generate a short farmer-friendly market insight.

    Languages:
        en = English
        hi = Hindi
        mr = Marathi
    """

    if language not in {"en", "hi", "mr"}:
        language = "en"

    # ------------------------------------------------------------------------
    # No data
    # ------------------------------------------------------------------------

    if not prices:

        messages = {
            "en": (
                f"No mandi price data is available for {commodity}. "
                "Try another commodity or market."
            ),
            "hi": (
                f"{commodity} के लिए मंडी भाव की जानकारी उपलब्ध नहीं है। "
                "कृपया दूसरी जिंस या मंडी खोजें।"
            ),
            "mr": (
                f"{commodity} साठी मंडी भावाची माहिती उपलब्ध नाही. "
                "कृपया दुसरा शेतमाल किंवा बाजार शोधा."
            ),
        }

        return AIInsightResponse(
            commodity=commodity,
            insight=messages[language],
        )

    # ------------------------------------------------------------------------
    # Calculate prices
    # ------------------------------------------------------------------------

    modal_prices: List[tuple[float, MarketPriceResponse]] = []

    for price in prices:

        numeric_price = _price_to_float(
            price.modal_price
        )

        if numeric_price is not None:
            modal_prices.append(
                (numeric_price, price)
            )

    if not modal_prices:

        messages = {
            "en": (
                f"Market prices for {commodity} are available, "
                "but a clear price comparison could not be calculated."
            ),
            "hi": (
                f"{commodity} के मंडी भाव उपलब्ध हैं, "
                "लेकिन स्पष्ट भाव तुलना नहीं की जा सकी।"
            ),
            "mr": (
                f"{commodity} चे मंडी भाव उपलब्ध आहेत, "
                "परंतु स्पष्ट भाव तुलना करता आली नाही."
            ),
        }

        return AIInsightResponse(
            commodity=commodity,
            insight=messages[language],
        )

    highest_price, highest_record = max(
        modal_prices,
        key=lambda item: item[0],
    )

    lowest_price, _ = min(
        modal_prices,
        key=lambda item: item[0],
    )

    average_price = sum(
        price for price, _ in modal_prices
    ) / len(modal_prices)

    highest_market = highest_record.market

    # ------------------------------------------------------------------------
    # English
    # ------------------------------------------------------------------------

    if language == "en":

        insight = (
            f"{commodity} has an average modal price of "
            f"₹{average_price:,.0f} per quintal. "
            f"The highest available modal price is "
            f"₹{highest_price:,.0f} at {highest_market}. "
            f"The lowest modal price is "
            f"₹{lowest_price:,.0f}. "
            "Compare nearby markets before selling."
        )

    # ------------------------------------------------------------------------
    # Hindi
    # ------------------------------------------------------------------------

    elif language == "hi":

        insight = (
            f"{commodity} का औसत मंडी भाव लगभग "
            f"₹{average_price:,.0f} प्रति क्विंटल है। "
            f"उपलब्ध जानकारी में सबसे अधिक औसत भाव "
            f"₹{highest_price:,.0f} {highest_market} में है। "
            f"सबसे कम भाव ₹{lowest_price:,.0f} है। "
            "बेचने से पहले आसपास की मंडियों के भाव की तुलना करें।"
        )

    # ------------------------------------------------------------------------
    # Marathi
    # ------------------------------------------------------------------------

    else:

        insight = (
            f"{commodity} चा सरासरी मंडी भाव सुमारे "
            f"₹{average_price:,.0f} प्रति क्विंटल आहे. "
            f"उपलब्ध माहितीनुसार सर्वाधिक सरासरी भाव "
            f"₹{highest_price:,.0f} {highest_market} बाजारात आहे. "
            f"सर्वात कमी भाव ₹{lowest_price:,.0f} आहे. "
            "विक्री करण्यापूर्वी जवळच्या बाजारातील भावांची तुलना करा."
        )

    return AIInsightResponse(
        commodity=commodity,
        insight=insight,
    )