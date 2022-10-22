import React, { useContext, useEffect } from "react";
import { UserStateContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { BannerWrapper, NonIconBlueBtn } from "./PromoBannerStyled";
import AOS from "aos";
import "aos/dist/aos.css";
import { Row, Col } from "antd";
import { ROUTES } from "../../enum/routes";

function PromoBanner() {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);

  const isLogin = !!userState.user;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  function handleClick() {
    if (isLogin) navigate(ROUTES.COMMUNITY.ROOT);
    else navigate(ROUTES.USER.LOGIN);
  }

  return (
    <BannerWrapper>
      <Col span={24} data-aos="fade-up">
        <span>
          지구를 살리는 클린하이킹, <br></br>여러 사람들과 함께해보세요.
        </span>
      </Col>
      <Col span={24} data-aos="fade-up">
        <NonIconBlueBtn
          type="priamry"
          size="large"
          htmlType="submit"
          onClick={handleClick}
        >
          시작하기
        </NonIconBlueBtn>
      </Col>
    </BannerWrapper>
  );
}

export default PromoBanner;
