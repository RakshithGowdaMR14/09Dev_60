from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client
import os
from dotenv import load_dotenv
from utils.scoring import calculate_score

load_dotenv()

app = FastAPI()

# Allow React frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Supabase connection
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.get("/api/search")
def search_medicine(medicine: str = Query(...)):
    # Fetch data from Supabase
    response = supabase.table("pharmacies").select("*").execute()
    pharmacies = response.data or []

    for pharmacy in pharmacies:
        pharmacy["score"] = calculate_score(
            pharmacy["price"],
            pharmacy["distance"],
            pharmacy["availability"]
        )

    ranked = sorted(pharmacies, key=lambda x: x["score"], reverse=True)
    return {"medicine": medicine, "results": ranked}

@app.get("/")
def root():
    return {"message": "FastAPI backend is running!"}
