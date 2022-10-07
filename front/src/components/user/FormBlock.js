import styled from "styled-components";

export const FormBlock = styled.form`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  max-width: 750px;
  height: 700;
  padding: 2rem 0;
  width: 60%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  background: white;
  border: 1px solid black;
  .informationText {
    font-size: 0.8rem;
    text-align: start;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .error {
    color: red;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 3rem;
  span {
    font-size: 0.9rem;
  }
`;

export const InputBlock = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 1rem;
  input {
    margin-bottom: 1rem;
    height: 50px;
    border-radius: 10px;
    outline: none;
  }
  .emailBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 65%;
    }
    .emailCheckButton {
      width: 25%;
      height: 50px;
      margin-bottom: 1rem;
      border-radius: 10px;
      box-sizing: inherit;
      cursor: pointer;
    }
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 3rem;
  button {
    margin-bottom: 1rem;
    height: 50px;
    border-radius: 15px;
    cursor: pointer;
  }
  span {
    font-size: 0.9rem;
    a {
      text-decoration: none;
      margin-left: 0.5rem;
    }
  }
`;
