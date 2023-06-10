from pymongo import MongoClient

def recommend_interests(user_id):
    client = MongoClient("mongodb://rwuser:Aade2474!@192.168.0.239:8640,192.168.0.24:8640,192.168.0.136:8640,37.230.195.101:8640/Russpass?authSource=admin")
    db = client['Russpass']
    user = db.Users.find_one({'_id': user_id})

    user_interests = set([i for interest_type in user['interests'] for i in interest_type.values()])

    other_interests = []
    for u in db.users.find():
        if u['_id'] != user_id:
            other_interests.extend([i for interest_type in u['interests'] for i in interest_type.values()])

    def jaccard_similarity(a, b):
        a = set(a)
        b = set(b)
        return len(a & b) / len(a | b)

    similarities = [(i, jaccard_similarity(user_interests, i)) for i in other_interests]

    recommended_interests = [(i, s) for (i, s) in similarities if (i not in user_interests)]

    recommended_interests.sort(key=lambda x: x[1], reverse=True)

    recommended_interests = [i[0] for i in recommended_interests[:5]]
    return recommended_interests

    #usage
    #example user_id: "6484205804cefa70ccdb6671"
    recommended_interests = recommend_interests('user_id')
    print(recommended_interests)