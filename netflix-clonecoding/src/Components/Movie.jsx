import React, { useState } from "react";
import styled from "styled-components";

// const MovieBody = styled.div`
//   font-family: sans-serif;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: darkslateblue;
// `;

const MovieContainer = styled.div`
  position: relative;
  display: inline-block;
  background-color: darkslateblue;
  color: white;
  margin: 15px;
  &:hover .details {
    display: block;
  }
`;

const Details = styled.div`
  width: 300px;
  height: 485px;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
`;

const DetailsText = styled.p`
  font-family: sans-serif;
  color: white;
  margin: 15px;
  padding: 15px;
  word-wrap: break-word;
`;

const MoviePoster = styled.img`
  width: 300px;
  height: 400px;
`;

const MovieInfo = styled.div`
  height: 80px;
`;

const MovieInfoText = styled.p`
  padding: 5px;
  display: inline-block;
  font-size: medium;
`;

const Title = styled.div`
  width: 170px;
  float: left;
  text-align: left;
`;

const TitleText = styled.p`
  margin-left: 15px;
  font-family: sans-serif;
  word-wrap: break-word;
`;

const VoteAverage = styled.div`
  margin-right: 15px;
  font-family: sans-serif;
  width: 30px;
  float: right;
  text-align: right;
`;

function Movie({ movie, onClick }) {
  const poster = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  // isTooltipVisible 사용하도록 밑 코드 수정 필요 (warning)

  const mouseEnter = () => {
    setTooltipVisible((prevTooltipVisible) => !prevTooltipVisible);
  };
  const mouseLeave = () => {
    setTooltipVisible((prevTooltipVisible) => !prevTooltipVisible);
  };

  return (
    <MovieContainer
      className="movie"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={() => {
        onClick(movie.id);
      }}
    >
      <MoviePoster src={poster} alt={movie.title} />
      <MovieInfo>
        <Title>
          <TitleText>{movie.title}</TitleText>
        </Title>
        <VoteAverage>
          <MovieInfoText>{movie.vote_average}</MovieInfoText>
        </VoteAverage>
      </MovieInfo>
      <Details
        className="details"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <DetailsText>{movie.title}</DetailsText>
        <DetailsText>{movie.overview}</DetailsText>
      </Details>
    </MovieContainer>
  );
}

export default Movie;
