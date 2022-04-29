import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';
import { Movie } from '../models/type';
import MovieCardImage from './movie-card-image'
import { observer } from 'mobx-react-lite';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import SavedMoviesStore from '../store/saved-movies-store';
import { IconButton } from '@mui/material';



const OriginalListItem = styled('li')(({ theme }) => ({
    marginRight: theme.spacing(1),
  }));

type MovieCardProps = {
    movie:Movie,
    categoryNames:string[],
    movieDataLoading:boolean,
    store:SavedMoviesStore
}

export default observer(function MovieCard(props:MovieCardProps){
    const movie = props.movie
    
    const saveBottonClicked = ()=>{
      props.store.appendMovieToSavedMovies(movie.movieId)
    }

    const removeBottonClicked = ()=>{
      props.store.removeMovieFromSavedMovies(movie.movieId)
    }

    return (
        <div>
        <Card style={{ marginRight:10, marginLeft:10, marginTop:15 }}>
          <MovieCardImage imageUrl={movie.imageUrl} isLoading={props.movieDataLoading}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {movie.title}
            </Typography>
            <Rating value={movie.averageRatingOfMovie} precision={0.1}  style={{marginBottom:10}}/>
            {props.store.checkMovieExists(movie.movieId) 
              ?<IconButton color="secondary" style={{marginTop:-13}} onClick={removeBottonClicked}>
                <BookmarkAddedIcon/>
               </IconButton>
              :<IconButton color="default" style={{marginTop:-13}} onClick={saveBottonClicked}>
                <BookmarkAddOutlinedIcon/>
               </IconButton>}
            <Paper component="ul" elevation={0} sx={{
                display: 'flex',
                listStyle: 'none',
                p: 0,
                m: 0,
            }}>
            { props.categoryNames.map((name,index)=>
                <OriginalListItem key={index}>
                <Chip label={name}/>
              </OriginalListItem>
            )}
            </Paper>
            <Typography variant="body2" color="text.secondary" style={{marginTop:10}}>
              {movie.description}
            </Typography>
          </CardContent>
        </Card>
        </div>
      );
})