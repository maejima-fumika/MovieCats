from util.model.api_response import ApiResponse
from util.dao.movies_table import MoviesTable
from util.web.image_url_and_description import ImageUrlAndDescription
from util.model.errors import ClientRequestError
from util.model.encoders import DecimalToFloatEncoder

import json

def get_movie_handler(event_body):
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
        movies_table = MoviesTable()
        movie = movies_table.get_movie_by_movie_id(movie_id)
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
        movie = {
            "movieId":movie_id,
            "title":movie.get("title", "Not found"),
            "averageRatingOfMovie": movie.get("averageRating", 0),
            "imageUrl": image_url,
            "description": description
        }
        response_body = {
            "movie":movie
        }
        response.add_body(response_body)
    except Exception as e:
        response.add_error(e)
    
    return response.to_json(DecimalToFloatEncoder)

