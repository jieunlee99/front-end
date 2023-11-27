import React, { useState } from "react";
import styled from "styled-components";

// const MovieBody = styled.div`
//   font-family: sans-serif;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: darkslateblue;
// `;

const TvContainer = styled.div`
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
  // display: none;
`;

const DetailsText = styled.p`
  font-family: sans-serif;
  color: white;
  margin: 15px;
  padding: 15px;
  word-wrap: break-word;
`;

const TvPoster = styled.img`
  width: 300px;
  height: 400px;
`;

const TvInfo = styled.div`
  height: 80px;
`;

const TvInfoText = styled.p`
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

const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

function Tv({ tv, onClick }) {
  const poster = `https://image.tmdb.org/t/p/w1280${tv.poster_path}`;
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  // isTooltipVisible 사용하도록 밑 코드 수정 필요 (warning)

  const mouseEnter = () => {
    setTooltipVisible((prevTooltipVisible) => !prevTooltipVisible);
  };
  const mouseLeave = () => {
    setTooltipVisible((prevTooltipVisible) => !prevTooltipVisible);
  };

  return (
    <TvContainer
      className="tv"
      onClick={() => {
        onClick(tv.id);
      }}
    >
      <TvPoster
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        src={poster}
        alt={tv.name}
      />
      <TvInfo>
        <Title>
          <TitleText>{tv.name}</TitleText>
        </Title>
        <VoteAverage>
          <TvInfoText>{tv.vote_average}</TvInfoText>
        </VoteAverage>
      </TvInfo>
      {isTooltipVisible ? (
        <Details
          className="details"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <DetailsText>{tv.name}</DetailsText>
          <DetailsText>{truncate(tv.overview, 300)}</DetailsText>
        </Details>
      ) : null}
    </TvContainer>
  );
}

export default Tv;
