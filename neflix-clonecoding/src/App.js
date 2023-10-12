import React from "react";
import "./App.js";
import Movie from "./Components/Movie.jsx";
import {movies} from './movieDummy.js'

function App() {
  const movieList = movies.results;

  return (
    <div className="app-container">
      {
        movieList.map((movie) => (
          <Movie key={movie.id} movie={movie} title={movie.title} poster={movie.title} grade={movie.grade}/>
        ))
      }
    </div>
  );
}

export default App;
