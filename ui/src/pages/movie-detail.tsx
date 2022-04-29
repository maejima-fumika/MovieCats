import React from 'react';
import { useParams,useNavigate,useLocation } from "react-router-dom";
import { useEffect,useState } from 'react';
import Typography from '@mui/material/Typography';
import MovieCard from '../components/movie-card';
import axios from 'axios';
import { Movie } from '../models/type';
import MovieList from '../components/movie-list';
import SavedMoviesStore from '../store/saved-movies-store';

const emptyMovie:Movie = {
    movieId: "",
    title: "",
    averageRatingOfMovie: 0,
    imageUrl: "",
    description: ""
}

export default function MovieDetail(props:{store:SavedMoviesStore}){
    const [movie, setMovie] = useState<Movie>(emptyMovie)
    const [movieDataLoading, setMovieDataLoading] = useState<boolean>(false)
    const [categoryNames, setCategoryNames] = useState<string[]>([])
    const [nearestMovies, setNearestMovies] = useState<Movie[]>([])
    const [nearestMovieLoading,setNearestMovieLoading] = useState<boolean>(false)
    const params = useParams();
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
            getMovieData()
            getMovieCategoryNames()
            getNearestMovies()
    }, [location.key]);

    const getMovieData = async() =>{
        setMovieDataLoading(true)
        try{
        const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/get-movie"
        const response = await axios.post(url,{"movieId":params.id})
        setMovie(response.data.movie)
        }catch{
            setMovie(emptyMovie)
        }
        setMovieDataLoading(false)
    }

    const getMovieCategoryNames = async()=>{
        const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/get-category-names-of-movie"
        const response = await axios.post(url,{"movieId":params.id})
        setCategoryNames(response.data.categoryNames)
    }

    const getNearestMovies = async()=>{
        setNearestMovieLoading(true)
        try{
        const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/get-nearest-movies"
        const response = await axios.post(url,{"movieId":params.id})
        setNearestMovies(response.data.movies)
        }catch{
            setNearestMovies([])
        }
        setNearestMovieLoading(false)
    }

    const goToNextMoviePage = (movieId:string)=>{
        navigate(`/movie-detail/${movieId}`)
    }

    return (
        <div>
        <MovieCard 
            movie={movie} 
            categoryNames={categoryNames}
            movieDataLoading={movieDataLoading}
            store={props.store}
        ></MovieCard>
        <Typography variant="h6" component="div" style={{marginTop:20, marginLeft:15,marginBottom:0}}>
            Recommended movies
        </Typography>
        <MovieList 
            movies={nearestMovies} 
            isLoading={nearestMovieLoading}
            onItemClicked={goToNextMoviePage}
            store={props.store}
        />
        </div>
      );
}