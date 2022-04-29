import string
from util.model.api_response import ApiResponse
from util.dao.movies_table import MoviesTable
from util.web.image_url_and_description import ImageUrlAndDescription
from util.model.errors import ClientRequestError
from util.model.encoders import DecimalToFloatEncoder

import json

def get_movies_by_movie_ids_handler(event_body):
    response = ApiResponse()
    try:
        #check event_body
        if 'movieIds' not in event_body.keys() or type(event_body["movieIds"]) != list:
            raise ClientRequestError(__name__, "client request is not collect.")
        movie_ids = event_body['movieIds']
    except ClientRequestError as e:
        response.add_error(e)
        return response.to_json()

    try:
        movies_table = MoviesTable()
        movies = [get_movie_data(id,movies_table) for id in movie_ids]
        response_body = {
            "movies":movies
        }
        response.add_body(response_body)
    except Exception as e:
        response.add_error(e)
    
    return response.to_json(DecimalToFloatEncoder)

def get_movie_data(movie_id:string, movies_table:MoviesTable):
    movie = movies_table.get_movie_by_movie_id(movie_id)
    if movie == {}:
        raise ClientRequestError(__name__, "The requested Movie Does not exist.")
    imdb_id = movie.get("imdbId",None)
    tmdb_id = movie.get("tmdbId",None)
    if "imageUrl" not in movie.keys():
        image_url_and_description = ImageUrlAndDescription(imdb_id,tmdb_id)
        image_url, description = image_url_and_description.get_data()
        movies_table.add_image_url_to_movie(movie_id, image_url)
        movies_table.add_description_to_movie(movie_id, description)
    else:
        image_url = movie.get("imageUrl","Not found")
        description = movie.get("description","Not found")
    return {
        "movieId":movie_id,
        "title":movie.get("title", "Not found"),
        "averageRatingOfMovie": movie.get("averageRating", 0),
        "imageUrl": image_url,
        "description": description
    }

