import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

import Home from './pages/home';
import MoviesOfCategory from './pages/movies-of-category';
import MovieDetail from './pages/movie-detail';
import NotFound from './pages/not-found';

function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
        <Avatar variant="square" sx={{ width: 35, height: 35 }}  alt="Remy Sharp" src="https://moviecats-devo-category-images.s3.ap-northeast-1.amazonaws.com/icon.PNG" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:5}}>
            Movie Cats
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    <div style={{paddingTop:50}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies-of-category/:id/:name" element={<MoviesOfCategory />} />
          <Route path="movie-detail" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
