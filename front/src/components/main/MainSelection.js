import React, { useContext } from "react";
import { UserStateContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../enum/routes";

import { Form } from "antd";
import {
  FormWrapper,
  SelectWrapper,
  DatePickerWrapper,
} from "./MainBannerStyled";
import { NonIconBlueBtnStyled } from "../common/button/NonIconBtnStyled";

const { Option } = SelectWrapper;

const COUNT_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function MainSelection({ mountains }) {
  console.log(mountains);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);

  const isLogin = !!userState.user;

  function onFinish(values) {
    if (isLogin) {
      if (values["date"]) {
        values["date"] = values["date"].format("YYYY-MM-DD");
      }
      navigate(ROUTES.COMMUNITY.COMMUNITY_CREATE, { state: values });
    } else {
      navigate(ROUTES.USER.LOGIN);
    }
  }

  return (
    <FormWrapper form={form} onFinish={onFinish}>
      <Form.Item name="mountain">
        <SelectWrapper bordered={false} placeholder="산">
          {mountains.map((mountain) => {
            return <Option key={mountain.name}>{mountain.name}</Option>;
          })}
        </SelectWrapper>
      </Form.Item>
      <Form.Item name="date">
        <DatePickerWrapper bordered={false} placeholder="날짜" />
      </Form.Item>
      <Form.Item name="count">
        <SelectWrapper bordered={false} placeholder="인원">
          {COUNT_ARR.map((count) => {
            return <Option key={count}>{count}명</Option>;
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
