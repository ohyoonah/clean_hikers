import styled from "styled-components";
import { Row } from "antd";
import { theme } from "../common/styles/palette";
import { NonIconBlueBtnStyled } from "../common/button/NonIconBtnStyled";

export const BannerWrapper = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.deepBlue};
  font-weight: 700;
  font-size: 36px;
  width: 100%;
  padding: 100px 0;
`;

export const NonIconBlueBtn = styled(NonIconBlueBtnStyled)`
  width: 200px;
  margin-top: 30px;
  height: 45px;

  :hover {
    color: #fff;
  }
`;
