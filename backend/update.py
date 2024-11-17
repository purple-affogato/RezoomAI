from flask import Flask, request, jsonify
import os

def supabase_update(uid:str, name:str, ed:str, pe:str, proj:str, skill:str, contact:str):
    response = (
        supabase.table("public.user")
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
    return response

