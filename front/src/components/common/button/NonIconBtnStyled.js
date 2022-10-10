import styled from "styled-components";
import { Button } from "antd";
import { theme } from "../styles/palette";

const NonIconBlueBtnStyled = styled(Button)`
  /* Display & Box Model */

  padding: 0px 20px;
  border: 0px;
  border-radius: 8px;
`;

const NonIconGreenBtnStyled = styled(Button)`
  /* Display & Box Model */

  padding: 0px 20px;
  border: ${theme.primary} solid;
  border-radius: 8px;

  /* Color */
  background-color: ${theme.primary};
  :hover {
    background-color: ${theme.primary};
    border: ${theme.primary} solid;
  }
`;

export { NonIconBlueBtnStyled, NonIconGreenBtnStyled };
