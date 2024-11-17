from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/user_login", methods=["POST"])
def user_login():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    data = request.form
    supabase_sign_in(email=data.get("email"), pw=data.get("password"))
    return jsonify({'message':'u r so cool'}), 200

def supabase_sign_in(email: str, pw: str):
    print(email, pw)

@app.route("/user_signup", methods=["POST"])
def user_signup():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    data = request.form

    supabase_signup(email=data.get("email"), pw=data.get("password"))
    return jsonify({'message':'good boy:3'}), 201

def supabase_signup(email:str, pw:str):
    
    print(email, pw)
    
if __name__ == "__main__":
   app.run(port=5000, debug=True)
