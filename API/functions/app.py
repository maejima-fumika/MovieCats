import json
import path_handlers

def lambda_handler(event, context):
    event_body = json.loads(event["body"])

    if event["path"] == "/movie-cats-ui/list-categories":
        path_handlers.list_categories_handler(event_body)

    if event["path"] == "/movie-cats-ui/get-most-popular-movies-of-category":
        path_handlers.get_most_popular_movies_of_category_handler(event_body)

    if event["path"] == "/movie-cats-ui/get-detailed-movie-data":
        path_handlers.get_detailed_movie_data_handler(event_body)

    if event["path"] == "/movie-cats-ui/get-nearest-movies":
        path_handlers.get_nearest_movies_handler(event_body)

    else:
        return path_handlers.wrong_path_handler()

