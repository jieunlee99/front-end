import React, { Component } from "react";
import styled from "styled-components";

const LoginButton = styled.button`
  border-radius: ${(props) => props.radius || "0px"};
  width: 80px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  display: inline;
`;

const LogintText = styled.p`
  font-family: Sans-serif;
  display: inline;
`;

class LoginControl extends Component {
  constructor() {
    super();
    this.state = {
      Login: false, // 초기값: 로그아웃
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      Login: !prevState.Login, // 로그인 표시를 토글로
    }));
  };

  render() {
    return (
      <div>
        <LoginButton radius="40px" onClick={this.handleToggleClick}>
          {this.state.Login ? "로그아웃" : "로그인"}
        </LoginButton>
        <LogintText>
          {this.state.Login ? "환영합니다!" : "로그인 해주세요!"}
        </LogintText>
      </div>
    );
  }
}

export default LoginControl;
