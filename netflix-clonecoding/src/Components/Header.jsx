import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import LoginControl from "./LoginControl";
import LoginControl2 from "./LoginControl2";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #032541;
  color: white;
`;

const Logo = styled.img`
  width: 154px;
  height: 20px;
  margin-right: 20px;
`;

const NavList = styled.ul`
  font-family: sans-serif;
  display: flex;
  gap: 25px;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: white;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <Logo
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
          />
        </Link>
        <NavList>
          <NavItem>
            <Link to="/Movies">영화</Link>
          </NavItem>
          <NavItem>
            <Link to="/TVs">TV 프로그램</Link>
          </NavItem>
          <NavItem>
            <Link to="/Celebrity">인물</Link>
          </NavItem>
        </NavList>
        {/* <LoginControl /> */}
        <LoginControl2 />
      </div>
    </HeaderContainer>
  );
}
