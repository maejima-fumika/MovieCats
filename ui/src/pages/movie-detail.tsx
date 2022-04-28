import React from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';
import Typography from '@mui/material/Typography';
import MovieCard from '../components/movie-card';
import axios from 'axios';
import { Movie } from '../models/type';
import MovieList from '../components/movie-list';

const emptyMovie:Movie = {
    movieId: "",
    title: "",
    averageRatingOfMovie: 0,
    imageUrl: "",
    description: ""
}

export default function MovieDetail(){
    const [movie, setMovie] = useState<Movie>(emptyMovie)
    const [movieDataLoading, setMovieDataLoading] = useState<boolean>(false)
    const [categoryNames, setCategoryNames] = useState<string[]>([])
    const [nearestMovies, setNearestMovies] = useState<Movie[]>([])
    const [nearestMovieLoading,setNearestMovieLoading] = useState<boolean>(false)
    const params = useParams();
    const navigate = useNavigate()
    useEffect(() => {
            getMovieData()
            getMovieCategoryNames()
            getNearestMovies()
    }, []);

    const getMovieData = async() =>{
        setMovieDataLoading(true)
        const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/get-movie"
        const response = await axios.post(url,{"movieId":params.id})
        setMovie(response.data.movie)
        setMovieDataLoading(false)
    }

    const getMovieCategoryNames = async()=>{
        const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/get-category-names-of-movie"
        const response = await axios.post(url,{"movieId":params.id})
        setCategoryNames(response.data.categoryNames)
    }

    const getNearestMovies = async()=>{
        setNearestMovieLoading(true)
        const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/get-nearest-movies"
        const response = await axios.post(url,{"movieId":params.id})
        setNearestMovies(response.data.movies)
        setNearestMovieLoading(false)
    }

    const goToNextMoviePage = (movieId:string)=>{
        navigate(`/redirect-to-movie-detail/${movieId}`)
    }

    return (
        <div>
        <MovieCard 
            movie={movie} 
            categoryNames={categoryNames}
            movieDataLoading={movieDataLoading}
        ></MovieCard>
        <Typography variant="h6" component="div" style={{marginTop:20, marginLeft:15,marginBottom:0}}>
            Recommended movies
        </Typography>
        <MovieList 
            movies={nearestMovies} 
            isLoading={nearestMovieLoading}
            onItemClicked={goToNextMoviePage}
        />
        </div>
      );
}