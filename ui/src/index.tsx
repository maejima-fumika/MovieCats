import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SaveMoviesStore from './store/saved-movies-store';
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0,0,0)",
    },
    secondary:{
      main: "#4caf50"
    }
  },
});

const savedMovieStore = new SaveMoviesStore()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App store={savedMovieStore}/>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
