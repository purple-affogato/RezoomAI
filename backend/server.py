from flask import Flask, request, jsonify
#add cors

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

@app.route("/data_input", methods=["POST"])
def data_input():
    if request.method != "POST":
        return jsonify({'error':'Wrong HTTPS method'}), 400
    data = request.form
    supabase_input(name=data.get("name"), ed=data.get("education"), pe=data.get("professional experience"), proj=data.get("projects"), skill=data.get("skills"), contact=data.get("contacts"))
    return jsonify({'message':'yipppeeeee'}), 401

def supabase_input(name:str, ed:str, pe:str, proj:str, skill:str, contact:str):
    response = (
        supabase.table("public.user")
        .update({
        

if __name__ == "__main__":
   app.run(port=5000, debug=True)
