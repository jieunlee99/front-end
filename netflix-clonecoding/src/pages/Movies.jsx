import React from "react";
import Movie from "../Components/Movie.jsx";
import { movies } from "../movieDummy.js";
import styled from "styled-components";

const MovieListContainer = styled.div`
  /* 스타일 내용 */
`;

function Movies() {
  const movieList = movies.results;

  return (
    <MovieListContainer className="app-container">
      {movieList.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          title={movie.title}
          poster={movie.poster_path}
          grade={movie.grade}
        />
      ))}
    </MovieListContainer>
  );
}

export default Movies;
