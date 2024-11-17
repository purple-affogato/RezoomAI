import os
from supabase import create_client, Client
from dotenv import load_dotenv

def sign_in(client:Client, email: str, pw: str) ->dict:
    dict_to_return = {}
    dict_to_return['status'] = 200
    try:
        response = client.auth.sign_in_with_password(
            {"email": email, "password": pw}
        )
        dict_to_return['uid'] = response.user.id
    except:
       dict_to_return['status'] = 400
    return dict_to_return
        

def sign_out(client:Client):
    response = client.auth.sign_out()
    return response

