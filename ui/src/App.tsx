import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';

import Home from './pages/home';
import MoviesOfCategory from './pages/movies-of-category';
import MovieDetail from './pages/movie-detail';
import NotFound from './pages/not-found';

function App() {
  return (
    <div>
      <Header></Header>
    <div style={{paddingTop:50}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies-of-category/:id/:name" element={<MoviesOfCategory />} />
          <Route path="movie-detail/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
