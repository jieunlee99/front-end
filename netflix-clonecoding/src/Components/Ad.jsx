import React from "react";
import HomeImg from "../home.svg";
import styled from "styled-components";

const AdImg = styled.img`
  width: 100%;
`;

export default function Ad(props) {
  if (props.showAd) {
    return <AdImg src={HomeImg} alt="home.svg" />;
  } else {
    return null;
  }
}
