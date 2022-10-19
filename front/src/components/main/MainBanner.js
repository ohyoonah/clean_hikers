import React from "react";
import MainSelection from "./MainSelection";
import { Box, Title, Description } from "./MainBannerStyled";

function MainBanner({ mountains }) {
  return (
    <Box>
      <div>
        <Title>
          다같이 줍자<br></br>#클린하이킹
        </Title>
        <Description>클린 하이커스는 ~한 서비스입니다.</Description>
        <MainSelection mountains={mountains} />
      </div>
    </Box>
  );
}

export default MainBanner;
