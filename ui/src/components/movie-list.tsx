import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Rating } from '@mui/material';
import { Movie } from '../models/type';
import IsLoading from './is-loading';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { observer } from 'mobx-react-lite';
import SaveMoviesStore from '../store/saved-movies-store';

type MovieListProps = {
    movies:Movie[],
    isLoading:boolean,
    onItemClicked:(movieId:string)=>void,
    store:SaveMoviesStore
}

export default observer(function MovieList(props:MovieListProps){
    const movies = props.movies
    return (
        <div>
        {props.isLoading
            ? <IsLoading marginTop={150}/>
            :<List sx={{ width: '100%', bgcolor: 'background.paper',mt:0 }}>
             {movies.map((movie)=>(
                <div  key={movie.movieId}>
                <ListItem alignItems="flex-start" onClick={()=>props.onItemClicked(movie.movieId)}>
                <ListItemAvatar>
                    <Avatar variant="square" sx={{ width: 45, height: 70 }}  alt="Remy Sharp" src={movie.imageUrl} />
                </ListItemAvatar>
                <ListItemText
                    primary={movie.title}
                    primaryTypographyProps={{ 
                        variant: 'subtitle2', 
                        style: {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }
                    }}
                    secondary={
                    <React.Fragment>
                        <Rating name="read-only" value={movie.averageRatingOfMovie} precision={0.1}  readOnly style={{marginTop:5}} size="small"/>
                        {props.store.checkMovieExists(movie.movieId) && 
                            <BookmarkAddedIcon style={{marginBottom:-1}} fontSize="small" color='secondary'/>}
                        <br />
                        {movie.description}
                    </React.Fragment>
                    }
                    secondaryTypographyProps={{ 
                        variant: 'subtitle2', 
                        style: {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }
                    }}
                />
                </ListItem>
                <Divider variant="inset" component="li" />
                </div>
        ))}
        </List>
        }
        </div>
      );
})