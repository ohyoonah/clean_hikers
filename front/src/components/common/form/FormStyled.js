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
  margin-top: 1.5rem;
  color: ${theme.primary};
  &:hover {
    background: ${theme.primary};
    color: white;
    box-shadow: 0px 0px 6px ${theme.primary};
    border: none;
    transform: translateY(-3px);
  }
  &.smallButton {
    width: 300px;
  }
`;
