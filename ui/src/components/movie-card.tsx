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


const OriginalListItem = styled('li')(({ theme }) => ({
    marginRight: theme.spacing(1),
  }));

type MovieCardProps = {
    movie:Movie,
    categoryNames:string[],
    movieDataLoading:boolean
}

export default function MovieCard(props:MovieCardProps){
    const movie = props.movie
    return (
        <div>
        <Card style={{ marginRight:10, marginLeft:10, marginTop:15 }}>
          <MovieCardImage imageUrl={movie.imageUrl} isLoading={props.movieDataLoading}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {movie.title}
            </Typography>
            <Rating value={movie.averageRatingOfMovie} precision={0.1}  style={{marginBottom:10}}/>
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
}