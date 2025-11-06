def calculate_score(price, distance, availability):
    w1, w2, w3 = 0.5, 0.3, 0.2
    price_score = 1 / price if price else 0
    distance_score = 1 / (distance + 1)
    availability_score = 1 if availability else 0
    return (w1 * price_score) + (w2 * distance_score) + (w3 * availability_score)
