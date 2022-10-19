import styled from "styled-components";
import { Form } from "antd";

export const PageBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("./backgroundImage.png") no-repeat center;
  background-size: cover;
`;

export const FormBlock = styled(Form)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 650px;
  padding: 1rem 0 2rem 0;
  box-sizing: border-box;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 40px;
  box-shadow: 2px 3px 5px 0px;

  .ant-form-item {
    margin: 0;
    padding: 0;
  }

  .ant-form-item-explain-error {
    width: 60%;
    margin: 0 auto;
    text-align: start;
  }

  .toRegister {
    margin-bottom: 5rem;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
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
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 0.8rem;

  .ant-form-item {
    width: 70%;
    margin-bottom: 0;
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
    margin: 1rem 0 0 0;
    box-sizing: inherit;
    background: transparent;
    border-radius: 10px;
    cursor: pointer;
  }
`;
