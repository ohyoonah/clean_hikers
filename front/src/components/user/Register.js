import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../api/api";
import { ROUTES } from "../../enum/routes";

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
      alert(`${res.data.nickname}님 환영합니다`);
      navigate(ROUTES.USER.LOGIN);
    } catch (e) {
      console.log(e);
    }
  }

  const validateEmail = useCallback((_, value) => {
    if (!value) {
      return Promise.reject(new Error("이메일을 입력해 주세요."));
    }
    const regExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.match(regExp)) {
      return Promise.reject(new Error("이메일 형식이 올바르지 않습니다."));
    }
    return Promise.resolve();
  }, []);

  const validateNickName = useCallback((_, value) => {
    if (!value) {
      return Promise.reject(new Error("닉네임을 입력해 주세요."));
    }
    if (/\s/.test(value)) {
      return Promise.reject(new Error("닉네임은 공백을 포함 할 수 없습니다."));
    }
    const regExp = /^[A-Za-z0-9]{2,}$/;
    if (!regExp.test(value)) {
      return Promise.reject(
        new Error("닉네임은 두 자 이상 열 자 이하로 입력해 주세요.")
      );
    }
    return Promise.resolve();
  }, []);

  const validatePassword = useCallback((_, value) => {
    if (!value) {
      return Promise.reject(new Error("비밀번호를 입력해 주세요."));
    }
    const regExp =
      /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,16}$/;
    if (!regExp.test(value)) {
      return Promise.reject(
        new Error(
          "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."
        )
      );
    }
    return Promise.resolve();
  }, []);

  return (
    <PageBlock>
      <FormBlock form={form} onFinish={onFinish}>
        <TitleBlock>
          <h2>Sign Up</h2>
          <span>회원가입을 위해 정보를 입력해 주세요.</span>
        </TitleBlock>
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
