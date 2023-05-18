import os

SECRET_KEY = os.environ.get('SECRET_KEY') or 'my_secret_key'

MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/db'
