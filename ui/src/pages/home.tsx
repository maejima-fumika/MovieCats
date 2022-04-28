import { useState, useEffect } from 'react';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Category } from '../models/type';
import axios from 'axios';


export default function Home(){
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        const fetchData = async () => {
          const url = "https://4dyci0sd2g.execute-api.ap-northeast-1.amazonaws.com/Devo/movie-cats-ui/list-categories"
          const response = await axios.post(url,{})
          setCategories(response.data.categories)
        };
        fetchData();
      }, []);

    return (
        <ImageList>
          {categories.map((category) => (
            <ImageListItem key={category.categoryId} cols={1} rows={2}>
              <img
                src={`${category.imageUrl}?w=248&fit=crop&auto=format`}
                alt={category.categoryName}
                loading="lazy"
              />
              <ImageListItemBar
                title={category.categoryName}
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
}