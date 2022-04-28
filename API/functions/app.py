import json
import path_handlers

def lambda_handler(event, context):
    event_body = json.loads(event["body"])
    print(event["path"])

    if event["path"] == "/movie-cats-ui/list-categories":
        return path_handlers.list_categories_handler()

    if event["path"] == "/movie-cats-ui/get-most-popular-movies-of-category":
        return path_handlers.get_most_popular_movies_of_category_handler(event_body)

    if event["path"] == "/movie-cats-ui/get-nearest-movies":
        return path_handlers.get_nearest_movies_handler(event_body)

    if event["path"] == "/movie-cats-ui/get-movie":
        return path_handlers.get_movie_handler(event_body)

    if event["path"] == "/movie-cats-ui/get_category_names_of_movie":
        return path_handlers.get_category_names_of_movie_handler(event_body)

    else:
        return path_handlers.wrong_path_handler()

