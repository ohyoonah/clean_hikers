import React from "react";
import styled from "styled-components";
import MainSelection from "./MainSelection";

function MainBanner() {
  const Box = styled.div`
    max-width: 100%;
    height: 800px;
    background: url("./backgroundImg.png") no-repeat bottom;
    background-size: contain;
    background-color: #e2efff;
    background-blend-mode: normal;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ContentWrapper = styled.div``;

  const Title = styled.h1`
    font-family: "Gugi";
    font-size: 5rem;
    font-weight: 400;
    line-height: 100px;
    letter-spacing: -0.6px;
  `;

  return (
    <Box>
      <ContentWrapper>
        <Title>
          다같이 줍자<br></br>#클린하이킹
        </Title>
        <div>클린 하이커스는 ~한 서비스입니다.</div>
        <MainSelection />
      </ContentWrapper>
    </Box>
  );
}

export default MainBanner;
