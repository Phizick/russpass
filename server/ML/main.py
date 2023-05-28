import json
import pandas as pd


def get_hotel_recommendations(chosen_hotel_id, n_recommendations=5):

    with open('./data/hotels.json', 'r', encoding='utf-8') as f:
        data = json.load(f)


    df = pd.json_normalize(data, record_path='dictionary_data')
    df['_id'] = df['_id'].apply(lambda x: x["$oid"])


    recommended_features = ['price', 'breakfast_included', 'food_rating']


    chosen_hotel = df.loc[df["_id"].apply(lambda x: x["$oid"]) == chosen_hotel_id].iloc[0]
    chosen_hotel_features = chosen_hotel[recommended_features].values
    chosen_hotel_id = chosen_hotel["_id"]["$oid"]


    df['distance'] = df[recommended_features].sub(chosen_hotel_features).abs().sum(axis=1)


    sorted_df = df.sort_values(by='distance')


    sorted_df = sorted_df[sorted_df['_id'] != chosen_hotel_id]


    recommended_hotels = sorted_df.iloc[:n_recommendations]

    return recommended_hotels

chosen_hotel_id = '62a20003b076bd79ea7e4e73'
recommended_hotels = get_hotel_recommendations(chosen_hotel_id, n_recommendations=5)

print(recommended_hotels)
