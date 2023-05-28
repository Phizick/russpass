from flask import Flask, request, jsonify
from pymongo import MongoClient
import json
import os
from flask_caching import Cache
from bson.objectid import ObjectId

from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

client = MongoClient("mongodb://rwuser:Aade2474!@192.168.0.239:8640,192.168.0.24:8640,192.168.0.136:8640,37.230.195.101:8640/Russpass?authSource=admin")
db = client['Russpass']
collection = db['Users']


@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username', '')
    password = request.json.get('password', '')

    user = collection.find_one({"username": username, "password": password})

    if user:
        return jsonify({'message': 'Успешный вход'}), 200
    else:
        return jsonify({'message': 'Неправильное имя пользователя или пароль'}), 401


@app.route('/user', methods=['POST'])
def create_user():
    username = request.json.get('username', '')
    password = request.json.get('password', '')
    interests = request.json.get('interests', {'$set': {'events': [], 'excursions': [], 'places': [],
                                                        'restaurants': [], 'routes': [], 'tours': [], 'tracks': []}})

    user_id = collection.insert_one({'username': username, 'password': password, 'interests': interests}).inserted_id

    return jsonify({'message': 'User created', 'user_id': str(user_id)}), 200


@app.route('/user/<string:user_id>', methods=['GET'])
def get_user(user_id):
    user_data = collection.find_one({'_id': ObjectId(user_id)})
    user_data['_id'] = str(user_data['_id'])
    if user_data:

        del user_data['password']
        return jsonify(user_data), 200
    else:
        return jsonify({'message': 'User not found'}), 404


def load_tours_data(folder_path, file_name):
    file_path = os.path.join(folder_path, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data


def filter_tours_by_tags(tours, tag_list, tag_type, limit=40):
    filtered_tours = []
    for tour in tours:
        dict_data = tour.get("dictionary_data", {})
        tour_tags = dict_data.get("tags", [])

        is_matching_tags = all(f"{tag_type}-" in tag for tag in tour_tags if tag_type in tag_list)

        if is_matching_tags:
            filtered_tours.append(tour)

        if len(filtered_tours) == limit:
            break

    return filtered_tours


@app.route('/recommendations', methods=['POST'])
def recommendations():
    tags = request.json

    folder_path = './data'

    response = {}
    for tag_type, tag_list in tags.items():
        file_name = f"{tag_type}.json"
        tours_data = load_tours_data(folder_path, file_name)
        filtered_tours = filter_tours_by_tags(tours_data, tag_list, tag_type, limit=40)
        response[tag_type] = filtered_tours

    return jsonify(response)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8010, debug=True)
