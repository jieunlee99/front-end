import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const TvContainer = styled.div`
  display: flex;
  // justify-content: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 2%;
  align-items: top;
  height: 100vh; /* 화면 전체 높이를 기준으로 중앙에 정렬 */
`;

const TvPoster = styled.img`
  width: 300px;
  height: 400px;
  margin-top: 5px;
  display: inline;
`;

const TvDiv = styled.div`
  margin-top: 5px;
  display: inline;
`;

const TvTitle = styled.h3`
  margin-left: 20px;
  font-family: sans-serif;
  display: inline;
`;

const TvDetail = () => {
  const location = useLocation();
  const { state } = location;
  const tv = state?.tv || null;

  if (!tv) {
    return <p>No movie selected</p>;
  }

  const poster = `https://image.tmdb.org/t/p/w1280${tv.poster_path}`;

  return (
    <TvContainer>
      <TvPoster src={poster} alt={tv.name} />
      <TvDiv>
        <TvTitle>{tv.name}</TvTitle>
      </TvDiv>
    </TvContainer>
  );
};

export default TvDetail;
