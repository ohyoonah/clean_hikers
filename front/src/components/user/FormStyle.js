import styled from "styled-components";
import { Form } from "antd";

export const PageBlock = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("./backgroundImage.png") no-repeat center;
  background-size: cover;
`;

export const FormBlock = styled(Form)`
  width: 60%;
  max-width: 650px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 3px 5px 0px;
  padding: 1rem 0 2rem 0;
  .ant-form-item {
    margin: 0;
    padding: 0;
  }
  .ant-form-item-explain-error {
    width: 60%;
    text-align: start;
    margin: 0 auto;
  }
  .toRegister {
    margin-bottom: 5rem;
  }
  .error {
    color: red;
  }
`;

export const TitleBlock = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  margin-bottom: 3rem;
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
  span {
    font-size: 0.8rem;
  }
`;

export const EmailBlock = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 0.8rem;
  .ant-form-item {
    margin-bottom: 0;
    width: 70%;
    .registerEmail {
      width: 100%;
    }
  }
  .ant-form-item-explain-error {
    width: 100%;
  }
  button {
    width: 25%;
    height: 50px;
    box-sizing: inherit;
    border-radius: 10px;
    background: transparent;
    margin: 1rem 0 0 0;
    cursor: pointer;
  }
`;
