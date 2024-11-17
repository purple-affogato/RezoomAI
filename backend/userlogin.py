import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

response = supabase.auth.sign_in_with_password(
    {"email": "izhuang@scu.edu", "password": "izhuang123"}
)

print(response.user.id)

response = supabase.auth.sign_out()

