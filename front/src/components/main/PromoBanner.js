import React, { useEffect } from "react";
import { theme } from "../common/styles/palette";
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: theme.deepBlue,
        fontWeight: 700,
        fontSize: "36px",
        width: "100%",
        height: "400px",
      }}
    >
      <span data-aos="fade-up">
        지구를 살리는 클린하이킹, <br></br>여러 사람들과 함께해보세요.
      </span>
    </div>
  );
}

export default PromoBanner;
