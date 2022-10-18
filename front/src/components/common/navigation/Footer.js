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
import KakaoShare from "./share/KakaoShare";
import LinkShare from "./share/LinkShare";
import { ROUTES } from "../../../enum/routes";
import FacebookShare from "./share/FacebookShare";

function Footer() {
  return (
    <FooterWrapper>
      <Col span={12}>
        <LogoWrapper>
          <LogoWhite src="/Logo.png" />
        </LogoWrapper>
        <Text>Copyright © 2022 10점 만점에 10점. All rights reserved.</Text>
      </Col>
      <Col span={6}>
        <Title>사이트맵</Title>
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
        <Title>공유하기</Title>
        <KakaoShare />
        <FacebookShare />
        <LinkShare />
      </Col>
    </FooterWrapper>
  );
}

export default Footer;
