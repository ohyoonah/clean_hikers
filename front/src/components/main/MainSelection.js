import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Form, Select, DatePicker } from "antd";
import { NonIconBlueBtnStyled } from "../common/button/NonIconBtnStyled";
import { theme } from "../common/styles/palette";
import { ROUTES } from "../../enum/routes";

const { Option } = Select;

function MainSelection() {
  const [form] = Form.useForm();

  const navigate = useNavigate();

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

  const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const FormWrapper = styled(Form)`
    /* Display & Box Model */
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    width: 630px;
    height: 72px;
    padding: 16px;
    border-radius: 24px;
    margin: 0 auto;
    box-shadow: 0px 9.77379px 11.4028px rgba(67, 83, 138, 0.06);
    align-items: center;

    & button {
      padding: 0 32px;
    }

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
    & input,
    input::placeholder {
      color: ${theme.deepBlue};
    }
  `;

  function onFinish(values) {
    if (values["date"]) values["date"] = values["date"].format("YYYY-MM-DD");

    console.log(values);

    navigate(ROUTES.COMMUNITY.COMMUNITY_CREATE, { state: values });
  }

  return (
    <FormWrapper form={form} onFinish={onFinish}>
      <Form.Item name="region">
        <SelectWrapper bordered={false} defaultValue="지역">
          {regions.map((region) => {
            return <Option key={region}>{region}</Option>;
          })}
        </SelectWrapper>
      </Form.Item>
      <Form.Item name="date">
        <DatePickerWrapper bordered={false} placeholder="날짜" />
      </Form.Item>
      <Form.Item name="count">
        <SelectWrapper bordered={false} defaultValue="인원">
          {counts.map((cnt) => {
            return <Option key={cnt}>{cnt}명</Option>;
          })}
        </SelectWrapper>
      </Form.Item>
      <Form.Item>
        <NonIconBlueBtnStyled type="priamry" size="large" htmlType="submit">
          시작하기
        </NonIconBlueBtnStyled>
      </Form.Item>
    </FormWrapper>
  );
}

export default MainSelection;
