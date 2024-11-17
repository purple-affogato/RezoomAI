from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from flask_cors import CORS
from userlogin import sign_in, sign_out, create_client, Client
from update import supabase_update

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

@app.route("/data_input", methods=["POST"])
def data_input():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    data = request.form
    return jsonify(supabase_update(uid=GLOBALVARIABLEHERE, name=data.get("name"), ed=data.get("education"), pe=data.get("professional experience"), proj=data.get("projects"), skill=data.get("skills"), contact=data.get("contacts")))


@app.route("/user_logout", methods=["POST"])
def user_logout():
    sign_out()

@app.route("/generate_resume", methods=["POST"])
def generate_resume():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)


#Name Education ProfExp Projects Skills Contact 
