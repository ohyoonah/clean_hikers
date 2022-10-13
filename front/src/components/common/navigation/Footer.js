import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  const FooterWrapper = styled(Row)`
    padding: 50px 65px;
    width: 100%;
    background-color: #1d242b;
  `;

  const LogoWrapper = styled(Row)`
    width: 120px;
  `;

  const LogoWhite = styled.img`
    filter: grayscale(100%) brightness(1.3);
    height: 100%;
    width: 100%;
    object-fit: contain;
    padding: 4px 10px 8px 0;
  `;

  const Title = styled(Row)`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 30px;
    color: #fff;
  `;

  const Text = styled(Row)`
    color: #d9dbe1;
  `;

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
        <Link to="/">
          <Text>홈</Text>
        </Link>
        <Link to="/detail">
          <Text>산찾기</Text>
        </Link>
        <Link to="/community">
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
