import React from "react";
import Login from "../components/user/Login";
import styled from "styled-components";

const LoginPageBlock = styled.div`
  width: 100%;
  height: 100vh;
  background: url("./backgroundImage.png") no-repeat center;
  background-size: cover;
`;

function LoginPage() {
  return (
    <LoginPageBlock>
      <Login />
    </LoginPageBlock>
  );
}

export default LoginPage;
