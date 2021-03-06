import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import Header from './components/header';
import Footer from './components/footer';
import SavedMoviesStore from './store/saved-movies-store';

import Categories from './pages/categories';
import MoviesOfCategory from './pages/movies-of-category';
import MovieDetail from './pages/movie-detail';
import SavedMovies from './pages/saved-movies';
import NotFound from './pages/not-found';
import Home from './pages/home';

const App = observer((props:{store:SavedMoviesStore}) => {  
  return (
    <div>
      <BrowserRouter>
       <Header/>
        <div style={{paddingTop:50, paddingBottom:50}}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="movies-of-category/:id/:name" element={<MoviesOfCategory store={props.store}/>} />
          <Route path="movie-detail/:id" element={<MovieDetail store={props.store}/>} />
          <Route path="saved-movies" element={<SavedMovies store={props.store}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
})

export default App