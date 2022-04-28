from util.model.api_response import ApiResponse
from util.dao.movies_to_categories_table import MoviesToCategoriesTable
from util.dao.movies_table import MoviesTable
from util.model.encoders import DecimalToFloatEncoder
from util.web.image_url_and_description import ImageUrlAndDescription
from util.model.errors import ClientRequestError

def get_most_popular_movies_of_category_handler(event_body):
    response = ApiResponse()
    try:
        #check event_body
        if 'categoryId' not in event_body.keys():
            raise ClientRequestError(__name__, "categoryId does not exist in the client request body.")
        category_id = event_body['categoryId']
    except ClientRequestError as e:
        response.add_error(e)
        return response.to_json()

    try:
        movies_to_categories_table = MoviesToCategoriesTable()
        most_popular_movies \
            = movies_to_categories_table.query_movies_of_category_based_on_average_ratings(category_id)
        most_popular_movies = add_image_url_and_description_to_movies(most_popular_movies)
        response_body = {
            "movies":most_popular_movies
        }
        response.add_body(response_body)
    except Exception as e:
        response.add_error(e)
    
    return response.to_json(DecimalToFloatEncoder)

def add_image_url_and_description_to_movies(movies:list):
    new_movies = []
    movies_table = MoviesTable()
    for movie in movies:
        if "movieId" not in movie.keys():
            continue
        movie_id = movie["movieId"]
        detailed_movie = movies_table.get_movie_by_movie_id(movie_id)
        imdb_id = detailed_movie.get("imdbId",None)
        tmdb_id = detailed_movie.get("tmdbId",None)
        if "imageUrl" not in detailed_movie.keys():
            image_url_and_description = ImageUrlAndDescription(imdb_id,tmdb_id)
            image_url, description = image_url_and_description.get_data()
            movies_table.add_image_url_to_movie(movie_id, image_url)
            movies_table.add_description_to_movie(movie_id, description)
        else:
            image_url = detailed_movie.get("imageUrl","")
            description = detailed_movie.get("description","")
        new_movie = dict({
            "imageUrl":image_url, 
            "description":description,
            "title":detailed_movie.get("title", "")
            }, **movie)
        new_movies.append(new_movie)
    return new_movies
            





