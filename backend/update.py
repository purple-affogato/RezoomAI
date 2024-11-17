import os
from supabase import create_client, Client
from dotenv import load_dotenv

def supabase_update(client:Client, uid:str, name:str, ed:str, pe:str, proj:str, skill:str, contact:str):
    print(uid)
    response = (
        client.table("user")
            .update({
                "Name": name,
                "Education": ed,
                "ProfExp": pe,
                "Projects": proj,
                "Skills": skill,
                "Contact": contact})
            .eq("id", uid)
            .execute()
        )
    return {"done":"real"}
