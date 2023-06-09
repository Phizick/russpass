import os
import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors

def get_nearest_neighbors(filename, lat, lon, tags):

    file_path = os.path.join('data', filename)

    data = pd.read_json(file_path)

    X = data['geo_data.coordinates'].apply(pd.Series)
    X.columns = ['latitude', 'longitude']
    X['tags'] = data['tags']

    knn = NearestNeighbors(n_neighbors=5, metric='haversine')
    knn.fit(X[['latitude', 'longitude']].values)

    point = np.array([[lat, lon]])

    _, indexes = knn.kneighbors(point, return_distance=True)

    filtered_indexes = []
    for index in indexes[0]:
        if X.iloc[index]['tags'] in tags:
            filtered_indexes.append(index)

    return data.iloc[filtered_indexes]