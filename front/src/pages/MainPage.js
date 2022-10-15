import React from "react";
import styled from "styled-components";
import MainBanner from "../components/main/MainBanner";

function MainPage() {
  const Insight = styled.div`
    height: 800px;
    background-color: #f8f8f8;
  `;

  return (
    <>
      <MainBanner />
      <Insight className="data-visualization" />
    </>
  );
}

export default MainPage;
