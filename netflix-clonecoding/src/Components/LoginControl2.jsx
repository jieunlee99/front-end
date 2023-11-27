// import React, { Component } from "react";
// import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginButton = styled.button`
  border-radius: ${(props) => props.radius || "0px"};
  border: none;
  width: 80px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  display: inline;
  background: white;
  font-size: 17px;
`;

function LoginControl2() {
  const navigate = useNavigate();
  // const [login, setLogin] = useState(false);

  const handleToggleClick = () => {
    // setLogin((prevLogin) => !prevLogin); // on->off or off->on
    navigate("/Login");
  };

  return (
    <div>
      <LoginButton radius="40px" onClick={handleToggleClick}>
        로그인
        {/* {login ? "로그아웃" : "로그인"} */}
      </LoginButton>
    </div>
  );
}

// 5주차 내용이라 주석 처리

// class LoginControl extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Login: false, // 초기값: 로그아웃
//     };
//   }

//   handleToggleClick = () => {
//     this.setState((prevState) => ({
//       Login: !prevState.Login, // 로그인 표시를 토글로
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <LoginButton radius="40px" onClick={this.handleToggleClick}>
//           {this.state.Login ? "로그아웃" : "로그인"}
//         </LoginButton>
//         <LogintText>
//           {this.state.Login ? "환영합니다!" : "로그인 해주세요!"}
//         </LogintText>
//       </div>
//     );
//   }
// }

export default LoginControl2;
