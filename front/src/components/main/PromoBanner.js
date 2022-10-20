import React, { useEffect } from "react";
import { BannerWrapper } from "./PromoBannerStyled";
import AOS from "aos";
import "aos/dist/aos.css";

function PromoBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <BannerWrapper>
      <span data-aos="fade-up">
        지구를 살리는 클린하이킹, <br></br>여러 사람들과 함께해보세요.
      </span>
    </BannerWrapper>
  );
}

export default PromoBanner;
