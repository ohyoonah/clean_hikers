import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DispatchContext } from "../../App";
import * as api from "../../api/api";
import { ROUTES } from "../../enum/routes";

import { PageBlock, FormBlock, TitleBlock } from "./FormStyle";
import { InputBlock, ButtonBlock } from "../common/form/FormStyled";

import { Form } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [form] = Form.useForm();

  function onChange(e) {
    const { name, value } = e.currentTarget;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function onFinish() {
    try {
      const res = await api.post("user/login", {
        ...formValue,
      });
      const user = res.data;
      const jwtToken = user.jwt;
      sessionStorage.setItem("userToken", jwtToken);
      dispatch({
        type: "LOGGIN_SUCCESS",
        payload: user,
      });
      navigate(ROUTES.HOME);
    } catch (e) {
      console.log("로그인 실패", e);
    }
  }

  return (
    <PageBlock>
      <FormBlock form={form} onFinish={onFinish}>
        <TitleBlock>
          <h2>Sign In</h2>
          <span>로그인을 위해 이메일과 비밀번호를 입력해 주세요</span>
        </TitleBlock>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "이메일 형식이 올바르지 않습니다!",
            },
            {
              required: true,
              message: "이메일을 입력해 주세요!",
            },
          ]}
        >
          <InputBlock
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            name="email"
            value={formValue.email}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해 주세요!",
            },
            {
              pattern:
                /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,16}$/,
              message:
                "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.",
            },
          ]}
        >
          <InputBlock
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            name="password"
            value={formValue.password}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item>
          <ButtonBlock htmlType="submit" className="login-form-button">
            로그인
          </ButtonBlock>
          <div className="toRegister">
            아직 회원이 아니신가요?
            <Link to={ROUTES.USER.REGISTER}>회원가입</Link>
          </div>
        </Form.Item>
      </FormBlock>
    </PageBlock>
  );
}

export default Login;
