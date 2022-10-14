import React from "react";
import {
  FooterWrapper,
  LogoWrapper,
  LogoWhite,
  Title,
  Text,
  Col,
} from "./FooterStyled";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../enum/routes";

function Footer() {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <Col span={12}>
        <LogoWrapper>
          <LogoWhite src="/Logo.png" />
        </LogoWrapper>
        <Text>Copyright © 2022 10점 만점에 10점. All rights reserved</Text>
      </Col>
      <Col span={6}>
        <Title>Site Map</Title>
        <Text onClick={() => navigate(ROUTES.HOME)}>홈</Text>
        <Text onClick={() => navigate(ROUTES.MOUNTAIN.DETAIL)}>산찾기</Text>
        <Text onClick={() => navigate(ROUTES.COMMUNITY.ROOT)}>커뮤니티</Text>
      </Col>
      <Col span={6}>
        <Title>Share</Title>
        <Text>공유하기 버튼</Text>
      </Col>
    </FooterWrapper>
  );
}

export default Footer;
