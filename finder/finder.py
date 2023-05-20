import json

from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)


@app.route('/search', methods=['GET'])
def search_data():
    search_string = request.args.get('search_string')

    city_result = search_city_json(search_string)
    event_result = search_event_json(search_string)

    response = {'cities': city_result, 'events': event_result}

    return jsonify(response)


def search_city_json(search_string):
    cities_path = '/data/cities.json'
    cmd = ['type', cities_path, '|', 'jq', f'.[] | select(.dictionary_data | tostring | contains("{search_string}"))']

    try:
        result = subprocess.check_output(cmd, shell=True)
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        return []

    json_result = json.loads(result.decode('utf-8'))

    return json_result


def search_event_json(search_string):
    events_path = '/data/events.json'
    cmd = ['type', events_path, '|', 'jq', f'.[] | select(.dictionary_data | tostring | contains("{search_string}"))']

    try:
        result = subprocess.check_output(cmd, shell=True)
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        return []

    json_result = json.loads(result.decode('utf-8'))

    return json_result
