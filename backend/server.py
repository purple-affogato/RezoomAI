from flask import Flask, request, jsonify
from flask_cors import CORS
from userlogin import sign_in, sign_out


app = Flask(__name__)
CORS(app)

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
    
    
if __name__ == "__main__":
   app.run(port=5000, debug=True)
