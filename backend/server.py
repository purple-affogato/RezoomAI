from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import aws_controller

app = Flask(__name__)

@app.route('/')
def index():
    return "home"

@app.route('/get-items')
def get_items():
    return jsonify(aws_controller.get_items())

if __name__ == '__main__':
    app.run()


