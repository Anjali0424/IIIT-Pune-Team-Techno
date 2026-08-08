"""AgMarket API routes."""

from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas import (
    AIInsightResponse,
    MarketPriceResponse,
    ProductCreate,
    ProductResponse,
    ProductUpdate,
)
from app.services import agmarket_service


router = APIRouter(
    prefix="/agmarket",
    tags=["AgMarket"],
)


# ============================================================================
# Product Marketplace
# ============================================================================


@router.get(
    "/products/categories",
    response_model=List[str],
    summary="List product categories",
)
def list_categories() -> List[str]:
    return agmarket_service.get_categories()


@router.get(
    "/products",
    response_model=List[ProductResponse],
    summary="List marketplace products",
    description=(
        "Returns all products. Supports filtering by category "
        "and free-text search."
    ),
)
def list_products(
    category: Optional[str] = Query(
        default=None,
        description="Filter by category, e.g. Grains",
    ),
    search: Optional[str] = Query(
        default=None,
        description="Search name, seller, village, etc.",
    ),
    db: Session = Depends(get_db),
) -> List[ProductResponse]:
    return agmarket_service.list_products(
        db,
        category=category,
        search=search,
    )


@router.get(
    "/products/{product_id}",
    response_model=ProductResponse,
    summary="Get a product by id",
)
def get_product(
    product_id: int,
    db: Session = Depends(get_db),
) -> ProductResponse:
    product = agmarket_service.get_product(
        db,
        product_id,
    )

    if product is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )

    return product


@router.post(
    "/products",
    response_model=ProductResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create a product listing",
)
def create_product(
    payload: ProductCreate,
    db: Session = Depends(get_db),
) -> ProductResponse:
    return agmarket_service.create_product(
        db,
        payload,
    )


@router.put(
    "/products/{product_id}",
    response_model=ProductResponse,
    summary="Update a product listing",
)
def update_product(
    product_id: int,
    payload: ProductUpdate,
    db: Session = Depends(get_db),
) -> ProductResponse:
    product = agmarket_service.update_product(
        db,
        product_id,
        payload,
    )

    if product is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )

    return product


@router.delete(
    "/products/{product_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete a product listing",
)
def delete_product(
    product_id: int,
    db: Session = Depends(get_db),
) -> None:
    deleted = agmarket_service.delete_product(
        db,
        product_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )


# ============================================================================
# Market Research
# ============================================================================


@router.get(
    "/prices",
    response_model=List[MarketPriceResponse],
    summary="Get mandi prices",
)
def get_market_prices(
    commodity: str = Query(
        ...,
        description="Commodity name",
    ),
    state: Optional[str] = Query(
        default=None,
        description="State name",
    ),
    district: Optional[str] = Query(
        default=None,
        description="District name",
    ),
    market: Optional[str] = Query(
        default=None,
        description="Market / mandi name",
    ),
) -> List[MarketPriceResponse]:
    """
    Search mandi prices from the local AgMarket dataset.
    """

    return agmarket_service.search_market_prices(
        commodity=commodity,
        state=state,
        district=district,
        market=market,
    )


@router.get(
    "/insight",
    response_model=AIInsightResponse,
    summary="Generate AI market insight",
)
def get_market_insight(
    commodity: str = Query(
        ...,
        description="Commodity name",
    ),
    state: Optional[str] = Query(
        default=None,
        description="State name",
    ),
    district: Optional[str] = Query(
        default=None,
        description="District name",
    ),
    market: Optional[str] = Query(
        default=None,
        description="Market / mandi name",
    ),
    language: str = Query(
        default="en",
        description="Response language: en, hi or mr",
    ),
) -> AIInsightResponse:
    """
    Generate a short farmer-friendly AI insight.

    Supported languages:
    - en = English
    - hi = Hindi
    - mr = Marathi
    """

    # Prevent unsupported language values.
    if language not in {"en", "hi", "mr"}:
        language = "en"

    prices = agmarket_service.search_market_prices(
        commodity=commodity,
        state=state,
        district=district,
        market=market,
    )

    return agmarket_service.generate_ai_insight(
        commodity=commodity,
        prices=prices,
        language=language,
    )