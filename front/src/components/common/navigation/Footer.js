import React from "react";
import {
  FooterWrapper,
  LogoWrapper,
  LogoWhite,
  Title,
  Text,
  Col,
} from "./FooterStyled";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../enum/routes";
import KakaoShare from "./share/KakaoShare";

function Footer() {
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
        <Text>
          <Link to={ROUTES.HOME}>홈 </Link>
        </Text>
        <Text>
          <Link to={ROUTES.MOUNTAIN.DETAIL}>산찾기 </Link>
        </Text>
        <Text>
          <Link to={ROUTES.COMMUNITY.ROOT}>커뮤니티 </Link>
        </Text>
      </Col>
      <Col span={6}>
        <Title>Share</Title>
        <KakaoShare />
      </Col>
    </FooterWrapper>
  );
}

export default Footer;
