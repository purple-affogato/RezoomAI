from flask import Flask, request, jsonify
from flask_cors import CORS
from userlogin import sign_in, sign_out
import os
from dotenv import load_dotenv
from supabase import create_client, Client


app = Flask(__name__)
CORS(app)

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
    return jsonify(sign_in(email=data.get("email"), pw=data.get("password")))

@app.route("/user_logout", method=["POST"])
def user_logout():
    sign_out()

@app.route("/generate_resume", methods=["POST"])
def generate_resume():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400

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
