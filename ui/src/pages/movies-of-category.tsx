import * as React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Movie } from '../models/type';
import MovieList from '../components/movie-list';
import { Typography } from '@mui/material';

export default function MoviesOfCategory(){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [movies, setMovies] = useState<Movie[]>([])
    const [moviesNotFound, setMoviesNotFound] = useState<boolean>(false)
    const params = useParams();
    const navigate = useNavigate();

    const goToNextMoviePage = (movieId:string)=>{
      navigate(`/movie-detail/${movieId}`)
    }

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true)
          try{
          const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/get-most-popular-movies-of-category"
          const response = await axios.post(url,{"categoryId":params.id})
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
          <Typography color="text.secondary" component="div" style={{marginTop:20, marginLeft:15, fontSize:15}}>
            {params.name}
          </Typography>
          <MovieList 
            movies={movies} 
            isLoading={isLoading}
            onItemClicked={goToNextMoviePage}
          />
        </div>
      }
      </div>
      );
}
