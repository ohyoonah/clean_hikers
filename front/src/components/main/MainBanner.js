import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSelection from "./MainSelection";
import { Box, Title, Description } from "./MainBannerStyled";

function MainBanner({ mountains }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
    });
  });
  return (
    <Box>
      <div data-aos="fade">
        <Title>
          다같이 줍자<br></br>#클린하이킹
        </Title>
        <Description>나와 지구를 살리는 등산 커뮤니티</Description>
        <MainSelection mountains={mountains} />
      </div>
    </Box>
  );
}

export default MainBanner;
