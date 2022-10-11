import styled from "styled-components";
import { Select, DatePicker, Space } from "antd";
import React from "react";
import { palette } from "../components/common/styles/palette";
import Btn from "../components/common/button/BtnStyled";
const { primary, naturalGreen, mainBlue, deepBlue } = palette;
const { Option } = Select;

function MainPage() {
  const Main = styled.div`
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

  const Insight = styled.div`
    height: 800px;
    background-color: #f8f8f8;
  `;

  const regions = [
    "서울",
    "경기",
    "인천",
    "강원",
    "충북",
    "충남",
    "경북",
    "경남",
    "전북",
    "전남",
    "부산",
    "제주",
  ];

  const Title = styled.h1`
    font-family: "Gugi";
    font-size: 5rem;
    font-weight: 400;
    line-height: 100px;
    letter-spacing: -0.6px;
  `;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Main>
        <ContentWrapper>
          <Title>
            다같이 줍자<br></br>#클린하이킹
          </Title>
          <div>클린 하이커스는 ~한 서비스입니다.</div>
          <div>
            <Select defaultValue="지역" onChange={handleChange}>
              {regions.map((region) => {
                return <Option value={region}>{region}</Option>;
              })}
            </Select>
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space>
            <Select defaultValue="인원" onChange={handleChange}></Select>
            <Btn bgColor={mainBlue}>시작하기</Btn>
          </div>
        </ContentWrapper>
      </Main>
      <Insight className="data-visualization" />
    </>
  );
}

export default MainPage;
