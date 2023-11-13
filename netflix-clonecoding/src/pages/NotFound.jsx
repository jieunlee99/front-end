import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  height: 100vh; /* 화면 전체 높이를 기준으로 중앙에 정렬 */
`;

const NotFoundH1 = styled.h1`
  display: block;
  font-family: sans-serif;
  text-align: left; /* 왼쪽 정렬 */
`;

const NotFoundDiv = styled.div`
  display: block;
  font-family: sans-serif;
  text-align: left; /* 왼쪽 정렬 */
`;

const NotFoundHome = styled.button`
  margin-top: 10px;
  color: orange;
  font-family: sans-serif;
  border: none;
  background: none;
  cursor: pointer;
  font-size: large;
`;

export default function NotFound() {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <NotFoundH1>해당 페이지를 찾지 못했습니다.</NotFoundH1>
      <NotFoundDiv>
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </NotFoundDiv>
      <NotFoundHome onClick={onClickHome}>메인 페이지로 이동</NotFoundHome>
    </NotFoundContainer>
  );
}
