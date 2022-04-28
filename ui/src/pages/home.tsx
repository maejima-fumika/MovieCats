import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Home(){
    return (
        <ImageList>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={1} rows={2}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
}

const itemData = [
    {
      img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/action_movie_img.jpeg',
      title: 'Action',
    },
    {
      img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/adventure_movie_img.jpg',
      title: 'Adventure',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/animation_movie_img.jpeg',
        title: 'Animation',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/comedy_movie_img.jpg',
        title: 'Comedy',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/crime_movie_img.jpg',
        title: 'Crime',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/documentary_movie_img.jpg',
        title: "Documentaly",
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/drama_movie_img.jpeg',
        title: 'Drama',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/fantasy_movie_img.jpeg',
        title: 'Fantacy',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/film-noir_movie_img.jpg',
      title: 'Film-Noir',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/horror_movie_img.jpg',
      title: 'Horror',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/musical_movie_img.jpeg',
      title: 'Musical',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/mystery_movie_img.jpeg',
      title: 'Mystery',
    },
    {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/romance_movie_img.jpg',
        title: 'Romance',
      },
      {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/sf_movie_img.jpeg',
        title: 'Sci-Fi',
      },
      {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/thriller_movie_img.jpeg',
        title: 'Thriller',
      },
      {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/war_movie_img.jpeg',
        title: 'War',
      },
      {
        img: 'https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/western_movie_img.jpg',
        title: 'Western',
      },
  ];