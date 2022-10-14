import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import {
  FormWrapper,
  SelectWrapper,
  DatePickerWrapper,
} from "./MainBannerStyled";
import { NonIconBlueBtnStyled } from "../common/button/NonIconBtnStyled";
import { ROUTES } from "../../enum/routes";

const { Option } = SelectWrapper;

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

  function onFinish(values) {
    if (values["date"]) {
      values["date"] = values["date"].format("YYYY-MM-DD");
    }
    navigate(ROUTES.COMMUNITY.COMMUNITY_CREATE, { state: values });
  }

  return (
    <FormWrapper form={form} onFinish={onFinish}>
      <Form.Item name="region">
        <SelectWrapper bordered={false} placeholder="지역">
          {regions.map((region) => {
            return <Option key={region}>{region}</Option>;
          })}
        </SelectWrapper>
      </Form.Item>
      <Form.Item name="date">
        <DatePickerWrapper bordered={false} placeholder="날짜" />
      </Form.Item>
      <Form.Item name="count">
        <SelectWrapper bordered={false} placeholder="인원">
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
