import styled from "styled-components";
import { Row, Col } from "antd";
import { theme } from "../common/styles/palette";

export const TextWrapper = styled(Row)`
  padding: 20px 10%;
  align-items: center;
  justify-content: center;
`;

export const Head = styled(Row)`
  font-size: 45px;
`;

export const Description = styled(Row)`
  font-size: 25px;
`;

export const Highlight = styled.span`
  color: ${theme.primary};
  font-weight: 700;
`;
