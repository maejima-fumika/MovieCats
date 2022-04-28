import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Movie } from '../models/type';
import MovieList from '../components/movie-list';

export default function MoviesOfCategory(){
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] =useState<Movie[]>([])
    const params = useParams();
    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true)
          const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/get-most-popular-movies-of-category"
          const response = await axios.post(url,{"categoryId":params.id})
          setMovies(response.data.movies)
          setIsLoading(false)
        };
        fetchData();
      }, []);
    return (
        <MovieList movies={movies} isLoading={isLoading}/>
      );
}