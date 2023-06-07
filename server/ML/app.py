from flask import Flask
from flask_pymongo import PyMongo
from config import SECRET_KEY, MONGO_URI
from flask import Blueprint, request, jsonify
from models.user import User
import json


app = Flask(__name__)
app.secret_key = SECRET_KEY

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

mongo = PyMongo(app)

@index_bp.route('/data', methods=['POST'])
def post_data():
    city = request.json['city']
    stars = request.json['stars']

    json_files = ['.//data/hotels.json']
    objects = []

    for file_name in json_files:
        with open(file_name, 'r', encoding='utf-8') as f:
            objects += json.load(f)

    def filter_objects_by_criteria(object_list, object_criteria):
        object_filtered = []
        for obj in object_list:
            if obj.get('dictionary_data', {}).get('city') == object_criteria.get('city') and \
                    obj.get('dictionary_data', {}).get('stars') == object_criteria.get('stars'):
                object_filtered.append(obj)
        return object_filtered

    criteria = {'city': city, 'stars': stars}
    filtered_objects = filter_objects_by_criteria(objects, criteria)

    def calculate_ratings(object_list):
        object_ratings = {}
        for obj in object_list:
            obj_rating = obj.get('dictionary_data', {}).get('stars', 0)

            if obj['dictionary_data']['title'] not in object_ratings:
                object_ratings[obj['dictionary_data']['title']] = obj_rating
        return object_ratings

    ratings = calculate_ratings(filtered_objects)

    def get_sorted_objects(object_list, object_ratings, n):
        sorted_objects = sorted(object_list, key=lambda obj: object_ratings.get(obj['dictionary_data']['title'], 0),
                                reverse=True)
        return sorted_objects[:n]

    recommendations = get_sorted_objects(filtered_objects, ratings, 5)

    return jsonify(recommendations), 200

app.config["MONGO_URI"] = MONGO_URI

app.register_blueprint(auth_bp)
app.register_blueprint(index_bp)

if __name__ == '__main__':
    app.run()