import React from "react";
import Movie from "../Components/Movie.jsx";
import { movies } from "../movieDummy.js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieListContainer = styled.div`
  /* 스타일 내용 */
`;

function Movies() {
  const movieList = movies.results;
  const navigate = useNavigate();

  const onClickMovie = (movieId) => {
    navigate(`/Movies/${movieId}`, {
      state: {
        movie: movieList.find((movie) => movie.id === movieId),
      },
    });
  };

  return (
    <MovieListContainer className="app-container">
      {movieList.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          title={movie.title}
          poster={movie.poster_path}
          grade={movie.grade}
          onClick={() => onClickMovie(movie.id)}
        />
      ))}
    </MovieListContainer>
  );
}

export default Movies;
