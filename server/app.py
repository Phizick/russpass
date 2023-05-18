from flask import Flask
from flask_pymongo import PyMongo
from config import SECRET_KEY, MONGO_URI
from flask import Blueprint, request, jsonify
from models.user import User


app = Flask(__name__)
app.secret_key = SECRET_KEY

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')


@auth_bp.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    if username and password:
        existing_user = mongo.db.users.find_one({'username': username})
        if existing_user and User(existing_user['username'], existing_user['password_hash']).check_password(password):
            return jsonify({'message': 'Login successful.'}), 200
        else:
            return jsonify({'error': 'Invalid credentials.'}), 400
    else:
        return jsonify({'error': 'Invalid input.'}), 400


index_bp = Blueprint('index', __name__, url_prefix='/api')


@index_bp.route('/data', methods=['GET'])
def get_data():
    data = mongo.db.data.find({})
    response = []
    for document in data:
        response.append({'id': str(document['_id']), 'name': document['name'], 'value': document['value']})
    return jsonify(response), 200


@index_bp.route('/data', methods=['POST'])
def post_data():
    name = request.json['name']
    value = request.json['value']

    if name and value:
        mongo.db.data.insert_one({'name': name, 'value': value})
        return jsonify({'message': 'Data saved.'}), 200
    else:
        return jsonify({'error': 'Invalid input.'}), 400


app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

app.register_blueprint(auth_bp)
app.register_blueprint(index_bp)

if __name__ == '__main__':
    app.run()
