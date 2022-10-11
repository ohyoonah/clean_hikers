import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageBlock, FormBlock, TitleBlock, EmailBlock } from "./FormStyle";
import { InputBlock, ButtonBlock } from "../common/form/FormStyled";

import { Form } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Register() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    username: "",
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

  async function onFinish(values) {
    try {
      setFormValue({
        email: "",
        username: "",
        password: "",
        checkPassword: "",
      });
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <PageBlock>
      <FormBlock
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <TitleBlock>
          <h2>Sign Up</h2>
          <span>회원가입을 위해 정보를 입력해 주세요.</span>
        </TitleBlock>
        <EmailBlock>
          <Form.Item
            name="email"
            rules={[
              {
                reqired: true,
                message: "이메일을 입력해 주세요!",
              },
              {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "이메일 형식이 올바르지 않습니다!",
              },
            ]}
          >
            <InputBlock
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              value={formValue.email}
              onChange={onChange}
              className="registerEmail"
            />
          </Form.Item>
          <button type="button">중복확인</button>
        </EmailBlock>
        <span className="informationText">
          비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
        </span>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "이름을 입력해 주세요!",
            },
            {
              min: 2,
              message: "이름은 두 글자 이상 입력해 주세요!",
            },
            { whitespace: true, message: "이름은 공백 없이 입력해 주세요!" },
          ]}
        >
          <InputBlock
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={formValue.username}
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
            placeholder="Password"
            type="password"
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
              message: "비밀번호를 입력해 주세요!",
            },
            ({ getFieldValue }) => ({
              validator: (_, value) =>
                !value || getFieldValue("password") === value
                  ? Promise.resolve()
                  : Promise.reject(new Error("비밀번호가 일치하지 않습니다!")),
            }),
          ]}
        >
          <InputBlock
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Check Password"
            type="password"
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
