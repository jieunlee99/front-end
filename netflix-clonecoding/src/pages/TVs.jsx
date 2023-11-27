import React from "react";
import Tv from "../Components/Tv.jsx";
import { tvs } from "../tvDummy.js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TvListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  // gap: 10px; /* Adjust the value for the desired horizontal spacing */
  // padding: 0 20px; /* Adjust the value for the desired padding on both sides */
`;

function Tvs() {
  const tvList = tvs.results;
  const navigate = useNavigate();

  const onClickMovie = (tvId) => {
    navigate(`/tvs/${tvId}`, {
      state: {
        tv: tvList.find((tv) => tv.id === tvId),
      },
    });
  };

  return (
    <TvListContainer className="app-container">
      {tvList.map((tv) => (
        <Tv
          key={tv.id}
          tv={tv}
          title={tv.title}
          poster={tv.poster_path}
          grade={tv.grade}
          onClick={() => onClickMovie(tv.id)}
        />
      ))}
    </TvListContainer>
  );
}

export default Tvs;
