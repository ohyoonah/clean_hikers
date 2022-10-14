import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../api/api";
import { ROUTES } from "../../enum/routes";
import {
  validateEmail,
  validatePassword,
  validateNickName,
} from "../../util/formValidation";

import { PageBlock, FormBlock, TitleBlock, EmailBlock } from "./FormStyle";
import { InputBlock, ButtonBlock } from "../common/form/FormStyled";

import { Form } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Register() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    nickname: "",
    password: "",
    checkPassword: "",
  });
  const [error, setError] = useState("");
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
      const res = await api.post("user/register", {
        ...formValue,
      });
      alert(`${res.data.nickname}님 환영합니다.`);
      navigate(ROUTES.USER.LOGIN);
    } catch (e) {
      console.log(e.response.data);
      // setError(e.response.data);
    }
  }

  return (
    <PageBlock>
      <FormBlock form={form} onFinish={onFinish}>
        <TitleBlock>
          <h2>Sign Up</h2>
          <span>회원가입을 위해 정보를 입력해 주세요.</span>
        </TitleBlock>
        <span className="error">{error}</span>
        <EmailBlock>
          <Form.Item name="email" rules={[{ validator: validateEmail }]}>
            <InputBlock
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              name="email"
              value={formValue.email}
              onChange={onChange}
              className="registerEmail"
            />
          </Form.Item>
          <ButtonBlock type="button">중복확인</ButtonBlock>
        </EmailBlock>
        <span className="informationText">
          비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
        </span>
        <Form.Item name="nickname" rules={[{ validator: validateNickName }]}>
          <InputBlock
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Nickname"
            name="nickname"
            value={formValue.nickname}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ validator: validatePassword }]}>
          <InputBlock
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
            type="password"
            name="password"
            value={formValue.password}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="checkPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해 주세요.",
            },
            ({ getFieldValue }) => ({
              validator: (_, value) =>
                !value || getFieldValue("password") === value
                  ? Promise.resolve()
                  : Promise.reject(new Error("비밀번호가 일치하지 않습니다.")),
            }),
          ]}
        >
          <InputBlock
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Check Password"
            type="password"
            name="checkPassword"
            value={formValue.checkPassword}
            onChange={onChange}
          />
        </Form.Item>
        <ButtonBlock htmlType="submit">회원가입</ButtonBlock>
      </FormBlock>
    </PageBlock>
  );
}

export default Register;
