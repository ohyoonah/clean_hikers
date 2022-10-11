import React from "react";
import styled from "styled-components";
import MainSelection from "./MainSelection";

function MainBanner() {
  const Box = styled.div`
    max-width: 100%;
    height: 860px;
    padding-top: 196px;
    background: url("/backgroundImage.png") no-repeat bottom;
    background-size: contain;
    background-color: #e2efff;
    background-blend-mode: normal;
    background-position: bottom;
    text-align: center;
    display: flex;
    justify-content: center;
  `;

  const ContentWrapper = styled.div``;

  const Title = styled.h1`
    font-family: "Gugi";
    font-size: 5rem;
    font-weight: 400;
    line-height: 100px;
    letter-spacing: -0.6px;
    margin-bottom: 0px;
  `;

  const Description = styled.div`
    margin: 10px 0 30px 0;
    font-size: 16px;

    animation: fadeInUp 1s;
  `;

  return (
    <Box>
      <ContentWrapper>
        <Title>
          다같이 줍자<br></br>#클린하이킹
        </Title>
        <Description>클린 하이커스는 ~한 서비스입니다.</Description>
        <MainSelection />
      </ContentWrapper>
    </Box>
  );
}

export default MainBanner;
