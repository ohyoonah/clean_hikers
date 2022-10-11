import React from "react";
import styled from "styled-components";
import { Select, DatePicker, Space } from "antd";
import { NonIconBlueBtn } from "../common/button/NonIconBtn";
import { theme } from "../common/styles/palette";
const { Option } = Select;

function MainSelection() {
  const Container = styled.div`
    /* Display & Box Model */
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    width: 630px;
    height: 72px;
    padding: 15px;
    border-radius: 24px;
    margin: 0 auto;
    box-shadow: 0px 9.77379px 11.4028px rgba(67, 83, 138, 0.06);
    align-items: center;

    /* Color */
    background-color: white;
  `;

  const SelectWrapper = styled(Select)`
    /* Display & Box Model */
    text-align: start;

    /* Text */
    & .ant-select-selection-item {
      font-weight: 600;
      font-size: 16px;
    }

    /* Color */
    color: ${theme.deepBlue};
  `;

  const DatePickerWrapper = styled(DatePicker)`
    /* Display & Box Model */
    background-color: transparent;
    text-align: start;

    /* Text */
    & input {
      font-weight: 600;
      font-size: 16px;
    }

    /* Color */
    & input {
      color: ${theme.deepBlue};
    }
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

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <Container>
      <SelectWrapper
        bordered={false}
        defaultValue="지역"
        onChange={handleChange}
      >
        {regions.map((region, idx) => {
          return (
            <Option key={idx} value={region}>
              {region}
            </Option>
          );
        })}
      </SelectWrapper>
      <Space direction="vertical">
        <DatePickerWrapper
          bordered={false}
          placeholder="날짜"
          onChange={onChange}
        />
      </Space>
      <SelectWrapper
        bordered={false}
        defaultValue="인원"
        onChange={handleChange}
      ></SelectWrapper>
      <NonIconBlueBtn text="시작하기" />
    </Container>
  );
}

export default MainSelection;
