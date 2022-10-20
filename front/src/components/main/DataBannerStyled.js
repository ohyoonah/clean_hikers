import styled from "styled-components";
import { Row, Col } from "antd";
import { theme } from "../common/styles/palette";

export const BannerWrapper = styled(Row)`
  padding: 20x 10%;
  padding-bottom: 100px;
  align-items: center;
  justify-content: center;
`;

export const GrayBannerWrapper = styled(BannerWrapper)`
  padding: 100px 10%;
  background-color: #f9fafb;
`;

export const Head = styled(Col)`
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -1px;
`;

export const Center = styled.div`
  width: 100%;
  font-size: 48px;
  font-weight: 500;
`;

export const Description = styled(Row)`
  justify-content: center;
  font-size: 36px;
  font-weight: 500;
`;

export const TreeWrapper = styled.div`
  margin: 50px 30px 0 30px;
  text-align: center;
`;

export const Highlight = styled.span`
  color: ${theme.primary};
  font-weight: 700;
`;

export const SmallText = styled.span`
  font-size: 16px;
`;
