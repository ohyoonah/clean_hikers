import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { PageBlock, FormBlock, TitleBlock } from "./FormStyle";
import { InputBlock, ButtonBlock } from "../common/form/FormStyled";

import { Form } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const user = {
  email: "test@test.com",
  password: 1234,
};

const REGISTER = "/register";

function Login() {
  const navigate = useNavigate();
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
      if (formValue.email !== user.email)
        console.log("회원가입된 이메일이 아닙니다");
      if (formValue.password.toString() !== user.password.toString())
        console.log("비밀번호가 맞지 않습니다.");
      if (
        formValue.email === user.email &&
        formValue.password.toString() === user.password.toString()
      ) {
        console.log("로그인 성공");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
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
            <Link to={REGISTER}>회원가입</Link>
          </div>
        </Form.Item>
      </FormBlock>
    </PageBlock>
  );
}

export default Login;
