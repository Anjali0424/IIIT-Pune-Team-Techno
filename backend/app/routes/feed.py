"""
Feed Recommendation API - GramMitra AI
Powered by Groq + LangChain
"""

import os

from fastapi import APIRouter, HTTPException, status
from langchain_groq import ChatGroq
from pydantic import BaseModel


# --------------------------------------------------
# ROUTER
# --------------------------------------------------

feed_router = APIRouter()


# --------------------------------------------------
# SUPPORTED LANGUAGES
# --------------------------------------------------

LANGUAGES = {
    "en": "English",
    "hi": "Hindi",
    "mr": "Marathi",
}


# --------------------------------------------------
# REQUEST MODEL
# --------------------------------------------------

class FeedRequest(BaseModel):
    question: str
    language: str


# --------------------------------------------------
# SYSTEM PROMPT
# --------------------------------------------------

SYSTEM_PROMPT = """
You are GramMitra AI.

You are an expert livestock nutritionist helping Indian farmers.

Your goal is to give the BEST possible feed recommendation according to
the farmer's situation.

The farmer may provide:

• Animal
• Age
• Purpose
• Breed
• Weight
• Milk production
• Health problems
• Available fodder
• Budget
• Season
• Any extra question

Read the farmer's input carefully.

If enough information is available,
give a complete personalized feeding plan.

If important information is missing,
ask only the minimum follow-up questions.

Never invent information.

Always recommend locally available Indian feed ingredients.

Examples of feed:

• Green fodder
• Dry fodder
• Maize
• Jowar
• Bajra
• Napier grass
• Cotton seed cake
• Groundnut cake
• Mustard cake
• Wheat bran
• Rice bran
• Mineral mixture
• Salt
• Clean drinking water

Your recommendation must change according to:

• Animal
• Age
• Purpose
• Milk production
• Pregnancy
• Breed
• Health condition
• Budget
• Weather
• Season

Always answer ONLY in the requested language.

Use very simple language that an ordinary farmer can understand.

Avoid scientific terms.

Keep the answer below 250 words.

Use Markdown.

When enough information is available,
follow this format exactly.

# Feed Recommendation

## Recommended Feed

- ...

- ...

- ...

## Daily Quantity

- ...

- ...

## Feeding Schedule

Morning

- ...

Afternoon

- ...

Evening

- ...

## Important Tips

- ...

- ...

## Warning

- ...

If important information is missing,
politely ask only the required follow-up questions instead of guessing.
"""


# --------------------------------------------------
# EXTRACT FIELDS
# --------------------------------------------------

def extract_fields(text: str):
    """
    Safely extracts fields from the prompt sent by the frontend.

    Handles:
    - Empty lines
    - Missing values
    - Missing colons
    - Multiline farmer observations
    """

    animal = ""
    age = ""
    purpose = ""
    extra = ""

    current_field = None

    for raw_line in text.splitlines():

        line = raw_line.strip()

        # Ignore empty lines
        if not line:
            continue

        # If the line contains a colon
        if ":" in line:

            key, value = line.split(":", 1)

            key = key.strip().lower()
            value = value.strip()

            if key == "animal":
                animal = value
                current_field = None

            elif key == "age":
                age = value
                current_field = None

            elif key == "purpose":
                purpose = value
                current_field = None

            elif (
                "farmer observation" in key
                or "observation" in key
            ):
                extra = value
                current_field = "extra"

            else:
                current_field = None

        # Handle multiline farmer observation
        elif current_field == "extra":

            if extra:
                extra += "\n" + line
            else:
                extra = line

    return animal, age, purpose, extra


# --------------------------------------------------
# FEED RECOMMENDATION ENDPOINT
# --------------------------------------------------

@feed_router.post(
    "",
    summary="AI Feed Recommendation",
    description="Returns an AI-generated personalized feed recommendation.",
)
def get_feed(payload: FeedRequest):

    # --------------------------------------------------
    # CHECK GROQ API KEY
    # --------------------------------------------------

    api_key = os.getenv("GROQ_API_KEY")

    if not api_key:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Missing GROQ_API_KEY",
        )

    # --------------------------------------------------
    # LANGUAGE
    # --------------------------------------------------

    language = LANGUAGES.get(
        payload.language,
        "English"
    )

    # --------------------------------------------------
    # EXTRACT FARMER INFORMATION
    # --------------------------------------------------

    try:

        animal, age, purpose, extra = extract_fields(
            payload.question
        )

    except Exception as exc:

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid request format: {exc}",
        ) from exc

    # --------------------------------------------------
    # CREATE AI PROMPT
    # --------------------------------------------------

    user_prompt = f"""
Language:
{language}

Animal:
{animal}

Age:
{age}

Purpose:
{purpose}

Farmer Observation:
{extra if extra else "None"}

Please generate the best personalized feed recommendation.
"""

    # --------------------------------------------------
    # CREATE GROQ MODEL
    # --------------------------------------------------

    try:

        llm = ChatGroq(
            model="llama-3.3-70b-versatile",
            temperature=0.6,
            api_key=api_key,
        )

    except Exception as exc:

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to initialize AI model: {exc}",
        ) from exc

    # --------------------------------------------------
    # CALL GROQ
    # --------------------------------------------------

    try:

        response = llm.invoke(
            [
                ("system", SYSTEM_PROMPT),
                ("human", user_prompt),
            ]
        )

    except Exception as exc:

        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"Feed AI request failed: {exc}",
        ) from exc

    # --------------------------------------------------
    # RETURN RESPONSE
    # --------------------------------------------------

    return {
        "success": True,
        "question": payload.question,
        "language": payload.language,
        "answer": response.content,
    }