import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';

type MovieCardImageProps = {
    imageUrl:string,
    isLoading:boolean
}

export default function MovieCardImage(props:MovieCardImageProps){
    const getImageUrl = ()=>{
        if (props.imageUrl=="Not found" || !props.imageUrl) {
          return "https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/no_image.png"
        }
        return props.imageUrl
    }
    return (
        <div>
          {props.isLoading
           ?<Skeleton variant="rectangular" sx={{ height: 300 }} animation="wave" />
           : <CardMedia
              component="img"
              height="300"
              image={getImageUrl()}
              alt="green iguana"
            />
          }
        </div>
    )
}