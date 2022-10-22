import React, { useState, useEffect } from "react";
import { Col } from "antd";
import {
  Highlight,
  BannerWrapper,
  GrayBannerWrapper,
  Head,
  Description,
  Center,
  TreeWrapper,
  SmallText,
} from "./DataBannerStyled";
import MapChart from "./MapChart";
import AOS from "aos";
import "aos/dist/aos.css";

function DataBanner({ data }) {
  const [current, setCurrent] = useState(3);

  const number = {
    trash: data[current]["trash"],
    CO2: (data[current]["trash"] * 0.778).toFixed(2),
    tree: ((data[current]["trash"] * 0.778 * 1000) / 6).toFixed(0),
  };

  const treeCounts = Array.from({ length: 120 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  function Trees() {
    return (
      <TreeWrapper data-aos="fade" data-aos-delay={1000}>
        {treeCounts.map((_, num) => {
          if (num + 1 < number.tree / 100)
            return <img src="/tree-green.png" width={"5%"} />;
          else return <img src="/tree-grey.png" width={"5%"} />;
        })}
      </TreeWrapper>
    );
  }

  return (
    <>
      <BannerWrapper gutter={60}>
        <Col data-aos="fade-up">
          <MapChart data={data} setCurrent={setCurrent} />
        </Col>
        <Col>
          <Head data-aos="fade-up">
            <Highlight>{data[current]["name"]}</Highlight>의 연간 쓰레기
            처리량은
          </Head>
          <Head data-aos="fade-up">
            <Highlight>{number.trash}</Highlight>톤 입니다.
          </Head>
        </Col>
      </BannerWrapper>
      <GrayBannerWrapper>
        <Center>
          <Description span={24} data-aos="fade-up">
            <Highlight>{number.trash}</Highlight>톤의 쓰레기를 처리하기 위해서는
          </Description>
          <Description span={24} data-aos="fade-up">
            <Highlight>{number.tree}</Highlight>그루의 어린 소나무를 심어야
            해요.
          </Description>
          <Trees />
          <img data-aos="fade" src="/tree-green.png" width={"40px"} />
          <SmallText data-aos="fade">= 100그루</SmallText>
        </Center>
      </GrayBannerWrapper>
    </>
  );
}

export default DataBanner;
