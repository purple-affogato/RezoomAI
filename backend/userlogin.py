import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()
url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

def sign_in(email: str, pw: str) ->dict:
    dict_to_return = {}
    dict_to_return['status'] = 200
    try:
        response = supabase.auth.sign_in_with_password(
            {"email": email, "password": pw}
        )
        dict_to_return['uid'] = response.user.id
        dict_to_return['session'] = response.session.access_token
    except:
       dict_to_return['status'] = 400
    return dict_to_return
        

def sign_out():
    response = supabase.auth.sign_out()
    return response

