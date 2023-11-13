import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  // justify-content: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 5%;
  align-items: top;
  height: 100vh; /* 화면 전체 높이를 기준으로 중앙에 정렬 */
`;

const MoviePoster = styled.img`
  width: 300px;
  height: 400px;
  margin-top: 5px;
  display: inline;
`;

const MovieDiv = styled.div`
  margin-top: 5px;
  display: inline;
`;

const MovieTitle = styled.h3`
  margin-left: 20px;
  font-family: sans-serif;
  display: inline;
`;

const MovieDetail = () => {
  const location = useLocation();
  const { state } = location;
  const movie = state?.movie || null;

  if (!movie) {
    return <p>No movie selected</p>;
  }

  const poster = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;

  return (
    <MovieContainer>
      <MoviePoster src={poster} alt={movie.title} />
      <MovieDiv>
        <MovieTitle>{movie.title}</MovieTitle>
      </MovieDiv>
    </MovieContainer>
  );
};

export default MovieDetail;
