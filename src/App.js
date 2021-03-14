import './App.css';
import './normalize.min.css'

import Header from './components/Header';
import Search from './components/Search';
import MoviesList from './components/MoviesList';
import Subtitle from './components/Subtitle';
import { useEffect, useReducer } from 'react';
import { movieAPI } from './api/api';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Reducer, { initialState } from './Reducer';

function App() {

  const [state, dispatch] = useReducer(Reducer, initialState)
  const { movies, loading, errorMessage } = state;

  useEffect(() => {
    movieAPI.getMovie('man')
      .then(data => {
        dispatch({
          type: "SEARCH_MOVIE_SUCCESS",
          movies: data.Search
        })
      })
  }, [])

  const searchMovie = (movieName) => {
    dispatch({type: 'SEARCH_MOVIE_FETCH'})

    movieAPI.getMovie(movieName)
      .then(data => {
        if (data.Response === "True"){
          dispatch({type: "SEARCH_MOVIE_SUCCESS", movies: data.Search})
        }
        else {
          dispatch({type: 'SEARCH_MOVIE_ERROR', errorMessage: data.Error})
        }
      })
  }

  return (
  <>
    <Header title="Movies" />
    <main className="main">
      <Search search={searchMovie}/>
      <Subtitle text="Sharing a few of our favourite movies" />
      <div className="movies">
        { loading  && !errorMessage 
          ? <Loader /> 
          : errorMessage ? <ErrorMessage text={errorMessage} /> : <MoviesList movies={movies}/>   
        }
        
      </div>
    </main>
  </>
  )
}

export default App;
