import styled from "styled-components";
import { Form, Select, DatePicker } from "antd";
import { theme } from "../common/styles/palette";

// Main Banner Style
export const Box = styled.div`
  max-width: 100%;
  height: 100vh;
  padding-top: 200px;
  background: url("/backgroundImage.png") no-repeat bottom;
  background-size: contain;
  background-color: #e2efff;
  background-blend-mode: normal;
  background-position: bottom;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "Gugi";
  font-size: 5rem;
  font-weight: 400;
  line-height: 100px;
  letter-spacing: -0.6px;
  margin-bottom: 0px;
`;

export const Description = styled.div`
  margin: 10px 0 30px 0;
  font-size: 16px;
  animation: fadeInUp 1s;
`;

// Selection Box Style
export const FormWrapper = styled(Form)`
  /* Display & Box Model */
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  width: 630px;
  height: 72px;
  padding: 16px;
  border-radius: 24px;
  margin: 0 auto;
  box-shadow: 0px 9.77379px 11.4028px rgba(67, 83, 138, 0.06);
  align-items: center;

  & button {
    padding: 0 32px;
  }

  /* Color */
  background-color: white;
`;

export const SelectWrapper = styled(Select)`
  /* Display & Box Model */
  text-align: start;

  /* Text */
  & .ant-select-selection-item,
  .ant-select-selection-placeholder {
    font-weight: 600;
    font-size: 16px;
    color: ${theme.deepBlue};
  }
`;

export const DatePickerWrapper = styled(DatePicker)`
  /* Display & Box Model */
  background-color: transparent;
  text-align: start;

  /* Text */
  & input {
    font-weight: 600;
    font-size: 16px;
  }

  /* Color */
  & input,
  input::placeholder {
    color: ${theme.deepBlue};
  }
`;
