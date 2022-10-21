import { Row, Col } from "antd";
import styled from "styled-components";

export const FooterWrapper = styled(Row)`
  position: relative;
  padding: 50px 65px;
  width: 100%;
  background-color: #1d242b;
`;

export const LogoWrapper = styled(Row)`
  width: 120px;
`;

export const LogoWhite = styled.img`
  filter: grayscale(100%) brightness(1.3);
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 4px 10px 8px 0;
`;

export const Title = styled(Row)`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 30px;
  color: #fff;
`;

export const Text = styled(Row)`
  z-index: 0;
  color: #d9dbe1;

  & > a {
    color: #d9dbe1;
  }
`;

export { Col };
