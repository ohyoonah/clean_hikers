import styled from "styled-components";
import { Button } from "antd";
import { theme } from "../styles/palette";

const NonIconBlueBtnStyled = styled(Button)`
  /* Display & Box Model */
  padding: 0px 20px;
  border: 0px;
  border-radius: 8px;

  /* Color */
  background-color: ${theme.mainBlue};
  color: #fff;

  :hover {
    background-color: ${theme.mainBlue};
  }

  :focus {
    background-color: ${theme.mainBlue};
  }
`;

const NonIconGreenBtnStyled = styled(Button)`
  /* Display & Box Model */
  padding: 0px 20px;
  border: ${theme.primary} solid;
  border-radius: 8px;

  /* Color */
  background-color: ${theme.naturalGreen};

  :hover {
    background-color: ${theme.naturalGreen};
  }
`;

export { NonIconBlueBtnStyled, NonIconGreenBtnStyled };
