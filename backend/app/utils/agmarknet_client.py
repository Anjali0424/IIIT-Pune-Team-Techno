"""
Agmarknet API Client

Handles all communication with the data.gov.in Agmarknet API.
"""

import os
from typing import Any, Dict, List, Optional

import requests


class AgmarknetClient:
    BASE_URL = "https://api.data.gov.in/resource"

    def __init__(self):
        self.api_key = os.getenv("DATA_GOV_API_KEY")
        self.resource_id = os.getenv("AGMARKNET_RESOURCE_ID")

        if not self.api_key:
            raise ValueError("DATA_GOV_API_KEY not found in environment.")

        if not self.resource_id:
            raise ValueError("AGMARKNET_RESOURCE_ID not found in environment.")

    def search_prices(
        self,
        commodity: Optional[str] = None,
        state: Optional[str] = None,
        district: Optional[str] = None,
        market: Optional[str] = None,
        limit: int = 20,
    ) -> List[Dict[str, Any]]:
        """
        Fetch mandi prices from Agmarknet.
        """

        params = {
            "api-key": self.api_key,
            "format": "json",
            "limit": limit,
        }

        if commodity:
            params["filters[commodity]"] = commodity

        if state:
            params["filters[state]"] = state

        if district:
            params["filters[district]"] = district

        if market:
            params["filters[market]"] = market

        response = requests.get(
            f"{self.BASE_URL}/{self.resource_id}",
            params=params,
            timeout=20,
        )

        response.raise_for_status()

        data = response.json()

        return data.get("records", [])


agmarknet_client = AgmarknetClient()