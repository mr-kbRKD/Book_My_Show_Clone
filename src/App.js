  import './App.css';
  import cors from 'cors';
  import axios from 'axios';
// React slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Routing  
import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlaysPage from './pages/Plays.page';

// Default url
// axios.defaults.baseURL = "http://api.themoviedb.org/3"
axios.defaults.baseURL = "https://api.themoviedb.org/3/account/20604162/"
axios.defaults.params = {};
axios.defaults.params['api_key'] =  process.env.REACT_APP_API_KEY;

// using cors to avoid axios network error
cors();

function App() {
  return (
    <Routes>
    <Route path='/' element= {<HomePage/>} /> 
    <Route path='/movie/:id' element= {<MoviePage/>} />
    <Route path='/plays' element= {<PlaysPage/>} />
    
    </Routes>
  );
}

export default App;
