from flask import Flask, request, jsonify
from flask_cors import CORS
from userlogin import sign_in, sign_out
from update import supabase_update
import os
from supabase import create_client, Client
from dotenv import load_dotenv
from bedrock import bedrock_backup


app = Flask(__name__)
CORS(app)
load_dotenv()
url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

uid = ""

@app.route("/")
def home():
    return "eee"


@app.route("/user_login", methods=["POST"])
def user_login():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    data = request.form
    login_info = sign_in(supabase, email=data.get("email"), pw=data.get("password"))
    if login_info['status'] == 400:
        return jsonify({"Error":"Login failed"}), 400
    global uid
    uid = login_info['uid']
    return jsonify(login_info), 200

@app.route("/user_logout", methods=["POST"])
def user_logout():
    global uid
    uid = ""
    return sign_out(supabase)

@app.route("/check_login", methods=["GET"])
def check_login():
    response = supabase.auth.get_user()
    if response is None:
        return jsonify({"id":"not logged in"}), 200
    return jsonify({"id":response.user.id}), 200

@app.route("/data_input", methods=["POST"])
def data_input():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    if len(uid) == 0:
        return jsonify({'error': 'Not logged in.'})
    data = request.form
    return jsonify(supabase_update(supabase, uid=uid, name=data.get("name"), ed=data.get("education"), pe=data.get("professional experience"), proj=data.get("projects"), skill=data.get("skills"), contact=data.get("contacts")))


@app.route("/generate_resume_backup", methods=["POST"])
def generate_resume_backup():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    data = request.form
    return jsonify(bedrock_backup(supabase, data.get("data"), data.get("jobd")))
    
if __name__ == "__main__":
   app.run(host="0.0.0.0", port=3000, debug=True)
