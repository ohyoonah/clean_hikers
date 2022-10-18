import styled from "styled-components";
import { theme } from "../styles/palette";

const LowLevelStyled = styled.div`
  /* Display & Box Model */
  display: inline;
  padding: 1px 2px;
  border-radius: 2px;

  /* Text */
  font-size: small;
  font-weight: 700;

  /* Color */
  background-color: ${theme.naturalGreen};
  color: white;
`;

const MiddleLevelStyled = styled.div`
  /* Display & Box Model */
  display: inline;
  padding: 1px 2px;
  border-radius: 2px;

  /* Text */
  font-size: small;
  font-weight: 700;

  /* Color */
  background-color: #fcb565;
  color: white;
`;

const HighLevelStyled = styled.div`
  /* Display & Box Model */
  display: inline;
  padding: 1px 2px;
  border-radius: 2px;

  /* Text */
  font-size: small;
  font-weight: 700;

  /* Color */
  background-color: red;
  color: white;
`;

const UnknownLevelStyled = styled.div`
  /* Display & Box Model */
  display: inline;
  padding: 1px 2px;
  border-radius: 2px;

  /* Text */
  font-size: small;
  font-weight: 700;

  /* Color */
  background-color: gray;
  color: white;
`;

export { LowLevelStyled, MiddleLevelStyled, HighLevelStyled, UnknownLevelStyled };
