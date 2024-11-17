from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)
uri = "mongodb+srv://<db_username>:<db_password>@rezoomai.etakz.mongodb.net/?retryWrites=true&w=majority&appName=rezoomai"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

