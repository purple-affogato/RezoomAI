from flask import Flask, request, jsonify
from flask_cors import CORS
from userlogin import sign_in, sign_out


app = Flask(__name__)
CORS(app)

uid = ""
session = ""

@app.route("/")
def home():
    return "eee"


@app.route("/user_login", methods=["POST"])
def user_login():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    data = request.form
    login_info = sign_in(email=data.get("email"), pw=data.get("password"))
    if login_info['status'] == 400:
        return jsonify({"Error":"Login failed"}), 400
    uid = login_info['uid']
    session = login_info['sessions']
    return jsonify(login_info), 200

@app.route("/user_logout", methods=["POST"])
def user_logout():
    return sign_out()

@app.route("/generate_resume", methods=["POST"])
def generate_resume():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    
if __name__ == "__main__":
   app.run(host="0.0.0.0", port=5000, debug=True)
