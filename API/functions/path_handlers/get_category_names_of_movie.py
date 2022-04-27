from unicodedata import category
from util.model.api_response import ApiResponse
from util.dao.movies_to_categories_table import MoviesToCategoriesTable
from util.dao.categories_table import CategoriesTable
from util.model.errors import ClientRequestError
import json

def get_category_names_of_movie_handler(event_body):
    response = ApiResponse()
    try:
        #check event_body
        if 'movieId' not in event_body.keys():
            raise ClientRequestError(__name__, "movieId does not exist in the client request body.")
        movie_id = event_body['movieId']
    except ClientRequestError as e:
        response.add_error(e)
        return response.to_json()

    try:
        movies_to_categories_table = MoviesToCategoriesTable()
        categories_arr = movies_to_categories_table.query_categories_of_movie(movie_id)
        category_ids = [x["categoryId"] for x in categories_arr]
        category_names = get_category_names(category_ids)
        response_body = {
            "categoryNames":list(category_names)
        }
        response.add_body(response_body)
    except Exception as e:
        response.add_error(e)
    
    return response.to_json()

def get_category_names(category_ids:str)->set:
    categories_table = CategoriesTable()
    category_names = set()
    for category_id in category_ids:
        category_name = categories_table.get_category_name(category_id)
        if category_name and category_name != "(no genres listed)":
            category_names.add(category_name)
    return category_names
    

