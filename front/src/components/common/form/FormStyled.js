import styled from "styled-components";
import { theme } from "../styles/palette";
import { Input, Button } from "antd";

export const InputBlock = styled(Input)`
  width: 60%;
  height: 50px;
  border-radius: 10px;
  background: inherit;
  outline: none;
  margin-top: 1rem;
  input {
    background: transparent;
  }
`;

export const ButtonBlock = styled(Button)`
  width: 60%;
  height: 50px;
  display: block;
  border: 1px solid ${theme.primary};
  border-radius: 15px;
  background: transparent;
  margin: 1rem auto;
  color: ${theme.primary};
  &:hover {
    background: ${theme.primary};
    color: white;
    border: none;
  }
  &.smallButton {
    width: 300px;
  }
`;
