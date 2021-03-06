import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Movie } from '../models/type';
import MovieList from '../components/movie-list';
import SavedMoviesStore from '../store/saved-movies-store';

export default function SavedMovies(props:{store:SavedMoviesStore}){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [movies, setMovies] = useState<Movie[]>([])
    const [moviesNotFound, setMoviesNotFound] = useState<boolean>(false)
    const navigate = useNavigate();

    const goToNextMoviePage = (movieId:string)=>{
      navigate(`/movie-detail/${movieId}`)
    }

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true)
          try{
          const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/get-movies-by-movie-ids"
          const response = await axios.post(url,{"movieIds":props.store.savedMovies})
          setMovies(response.data.movies)
          }catch{
            setMoviesNotFound(true)
          }
          setIsLoading(false)
        };
        fetchData();
      }, []);

    return (
        <div>
        {moviesNotFound || (!isLoading && movies.length===0)
          ?<div style={{textAlign:"center",marginTop:100}}><h2>Movies were not found.</h2></div>
          :<div>
            <MovieList 
              movies={movies} 
              isLoading={isLoading}
              onItemClicked={goToNextMoviePage}
              store={props.store}
            />
          </div>
        }
        </div>
      )
}