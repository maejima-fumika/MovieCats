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

type MovieListProps = {
    movies:Movie[],
    isLoading:boolean
}

export default function MovieList(props:MovieListProps){
    const movies = props.movies
    return (
        <div>
        {props.isLoading
            ? <IsLoading marginTop={150}/>
            :<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
             {movies.map((movie)=>(
                <div  key={movie.movieId}>
                <ListItem alignItems="flex-start">
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
                        <Rating name="read-only" value={movie.averageRatingOfMovie} precision={0.5}  readOnly style={{marginTop:5}} size="small"/>
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
}