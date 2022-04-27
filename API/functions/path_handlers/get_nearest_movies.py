from util.model.api_response import ApiResponse
from util.dao.movies_table import MoviesTable
from util.web.image_url_and_description import ImageUrlAndDescription
import json

def get_nearest_movies_handler(event_body):
    response = ApiResponse()
    try:
        #check event_body
        movie_id = event_body['movieId']
    except KeyError as e:
        response.add_error(e)
        return response.to_json()

    try:
        movies_table = MoviesTable()
        movie = movies_table.get_movie_by_movie_id(movie_id)
        nearest_movie_ids = json.loads(movie["nearestMovieIds"],parse_int=str)
        nearest_movies = get_movies_data(nearest_movie_ids)
        response_body = {
            "movies":nearest_movies
        }
        response.add_body(response_body)
    except Exception as e:
        response.add_error(e)
    
    return response.to_json()

def get_movies_data(movie_ids):
    movies = []
    movies_table = MoviesTable()
    for movie_id in movie_ids:
        detailed_movie = movies_table.get_movie_by_movie_id(movie_id)
        imdb_id = detailed_movie.get("imdbId",None)
        tmdb_id = detailed_movie.get("tmdbId",None)
        if "imageUrl" not in detailed_movie.keys():
            image_url_and_description = ImageUrlAndDescription(imdb_id,tmdb_id)
            image_url, description = image_url_and_description.get_data()
            movies_table.add_image_url_to_movie(movie_id, image_url)
            movies_table.add_description_to_movie(movie_id, description)
        else:
            image_url = detailed_movie.get("imageUrl","Not found")
            description = detailed_movie.get("description","Not found")
        movie = {
            "movieId":movie_id,
            "title":detailed_movie.get("title", "Not found"),
            "averageRating": detailed_movie.get("title", 0),
            "imageUrl": image_url,
            "description": description
        }
        movies.append(movie)
    return movies
    