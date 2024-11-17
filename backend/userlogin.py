import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()
url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

def sign_in(email: str, pw: str):
    response = supabase.auth.sign_in_with_password(
        {"email": "izhuang@scu.edu", "password": "izhuang123"}
    )
    return response.user.id

def sign_out():
    response = supabase.auth.sign_out()
    return response

