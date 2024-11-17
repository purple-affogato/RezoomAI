from flask import Flask, request, jsonify
import os
from supabase import create_client, Client
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)

url:str = os.getenv("SUPABASE_URL")
key:str = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

@app.route("/")
def home():
    return ("eee")

@app.route("/user_login", methods=["POST"])
def user_login():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    data = request.form
    supabase_sign_in(email=data.get("email"), pw=data.get("password"))
    return jsonify({'message':'u r so cool'}), 200

def supabase_sign_in(email: str, pw: str):
    try:
        response = supabase.auth.sign_in_with_password({
            "email":email,
            "password": pw
        })
    if response.get("error"):
        return {'error': response["error"]["message"]}, 401
    else:
        session_data = response["data"]
        return {'message': 'Login successful', 'session':session_data}, 200

@app.route("/data_input", methods=["POST"])
def data_input():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    data = request.form
    supabase_update(name=data.get("name"), ed=data.get("education"), pe=data.get("professional experience"), proj=data.get("projects"), skill=data.get("skills"), contact=data.get("contacts"))
    return jsonify({'message':'yipppeeeee'}), 401

def supabase_update(uid:str, name:str, ed:str, pe:str, proj:str, skill:str, contact:str):
    response = (
        supabase.table("public.user")
        .update({{"Name": name}, {"Education": ed}, {"ProfExp": pe}, {"Projects": proj}, {"Skills": skill}, {"Contact": contact}})
        .eq("id", uid)
        .execute()
        )
    

if __name__ == "__main__":
    app.run(port=5000, debug=True)


#Name Education ProfExp Projects Skills Contact 
