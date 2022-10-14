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
        <Link to={ROUTES.HOME}>
          <Text>홈</Text>
        </Link>
        <Link to={ROUTES.MOUNTAIN.DETAIL}>
          <Text>산찾기</Text>
        </Link>
        <Link to={ROUTES.COMMUNITY.ROOT}>
          <Text>커뮤니티</Text>
        </Link>
      </Col>
      <Col span={6}>
        <Title>Share</Title>
        <Text>공유하기 버튼</Text>
      </Col>
    </FooterWrapper>
  );
}

export default Footer;
