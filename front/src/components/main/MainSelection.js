import React from "react";
import styled from "styled-components";
import { Select, DatePicker, Space } from "antd";
import { NonIconBlueBtn } from "../common/button/NonIconBtn";
const { Option } = Select;

function MainSelection() {
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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
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
      <NonIconBlueBtn>시작하기</NonIconBlueBtn>
    </div>
  );
}

export default MainSelection;
