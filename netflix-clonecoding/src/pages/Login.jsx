import React, { useState } from "react";
import styled from "styled-components";

export default function Login() {
  const LoginForm = styled.form`
    margin-top: 5%;
    margin-left: 30%;
    margin-right: 30%;
  `;

  const LoginInput = styled.input`
    border-radius: ${(props) => props.radius || "0px"};
    width: 100%;
    height: 30px;
    padding: 5px;
    font-size: large;
  `;

  const WrongEmail = styled.p`
    color: red;
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  `;

  const LoginButton = styled.button`
    border-radius: ${(props) => props.radius || "0px"};
    margin-top: 20px;
    width: 100%;
    height: 50px;
    font-size: large;
    color: white;
    background: ${(props) => (props.disabled ? "#999" : "#032541")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  `;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const emailCheck = (userEmail) => {
    return emailRegEx.test(userEmail);
  };

  const handleIsEmailValid = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(emailCheck(newEmail));
  };

  const handleIsPasswordValid = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(newPassword.length > 0);
  };

  const handleLogin = () => {
    // 로그인 로직 추가
    if (isEmailValid && isPasswordValid) {
      // 유효한 아이디와 비밀번호이면 로그인 로직을 실행
      console.log("로그인 성공!");
    }
  };

  return (
    <LoginForm>
      <h1>이메일과 비밀번호를 입력해주세요</h1>
      <p>이메일 주소</p>
      <LoginInput
        className="input"
        onChange={handleIsEmailValid}
        radius="10px"
        type="email"
        value={email}
        name="emailInput"
        id="emailInput"
      />
      <WrongEmail visible={!isEmailValid.toString()}>
        올바른 이메일을 입력해주세요.
      </WrongEmail>
      <p>비밀번호</p>
      <LoginInput
        onChange={handleIsPasswordValid}
        radius="10px"
        type="password"
        value={password}
        name="passwordInput"
        id="passwordInput"
      />
      <LoginButton
        radius="40px"
        onClick={handleLogin}
        disabled={!isEmailValid || !isPasswordValid}
      >
        확인
      </LoginButton>
    </LoginForm>
  );
}
