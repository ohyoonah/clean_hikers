import React from "react";
import Register from "../components/user/Register";
import styled from "styled-components";

const RegisterPageBlock = styled.div`
  width: 100%;
  height: 100vh;
  background: url("./backgroundImage.png") no-repeat center;
  background-size: cover;
`;

function RegisterPage() {
  return (
    <RegisterPageBlock>
      <Register />
    </RegisterPageBlock>
  );
}

export default RegisterPage;
