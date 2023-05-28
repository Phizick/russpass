import asyncio
import json
import os
import numpy as np
from flask import Flask, request, jsonify
from flask_caching import Cache
from pymongo import MongoClient

app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

client = MongoClient(
    "mongodb://rwuser:Aade2474!@192.168.0.239:8640,192.168.0.24:8640,192.168.0.136:8640,37.230.195.101:8640/Russpass?authSource=admin")
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


tours_data = {}


def load_tours_data(folder_path, file_name):
    file_path = os.path.join(folder_path, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data


async def filter_tours_by_tags_async(tours, tag_list, tag_type, limit=3):
    loop = asyncio.get_running_loop()
    filtered_tours = []
    for tour in tours:
        dict_data = tour.get("dictionary_data", {})
        tour_tags = dict_data.get("tags", [])

        is_matching_tags = await loop.run_in_executor(None, np.all,
                                                      [[f"{tag_type}-" in tag for tag in tour_tags if
                                                        tag_type in tag_list]])

        if is_matching_tags:
            filtered_tours.append(tour)

        if len(filtered_tours) == limit:
            break

    return tag_type, filtered_tours


@app.before_request
def load_data():
    global tours_data
    folder_path = './data'
    tours_data = {}
    for tag_type in ['events', 'excursions', 'places', 'restaurants', 'routes', 'tours', 'tracks']:
        file_name = f"{tag_type}.json"
        tours_data[tag_type] = load_tours_data(folder_path, file_name)


@app.route('/recommendations', methods=['POST'])
@cache.cached(timeout=50)
async def recommendations():
    tasks = []
    for tag_type, tag_list in request.json.items():
        task = asyncio.ensure_future(filter_tours_by_tags_async(tours_data[tag_type], tag_list, tag_type))
        tasks.append(task)

    results = await asyncio.gather(*tasks)

    response = {}
    for tag_type, filtered_tours in results:
        response[tag_type] = filtered_tours

    return jsonify(response)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8010, debug=True)
