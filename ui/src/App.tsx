import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import SaveMoviesStore from './store/saved-movies-store';
import Categories from './pages/categories';
import MoviesOfCategory from './pages/movies-of-category';
import MovieDetail from './pages/movie-detail';
import NotFound from './pages/not-found';
import Home from './pages/home';

const savedMovieStore = new SaveMoviesStore()

function App() {
  return (
    <div>
      <BrowserRouter>
       <Header/>
        <div style={{paddingTop:50}}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="movies-of-category/:id/:name" element={<MoviesOfCategory />} />
          <Route path="movie-detail/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
