import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import {
  FormBlock,
  ButtonBlock,
  InputBlock,
  TitleBlock,
  EmailBlock,
} from "./FormStyle";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    sameEmail: false,
    username: "",
    password: "",
    checkPassword: "",
    error: "",
  });

  function emailCheck(email) {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  function sameEmailCheck() {}

  function passwordCheck(password) {
    return password.toLowerCase().match(/^[a-zA-z0-9]{8,16}$/);
  }

  const emailConfirm = emailCheck(form.email);
  const usernameConfirm = form.username.length >= 2;
  const passwordConfirm = passwordCheck(form.password);
  const checkPasswordConfirm = form.checkPassword === form.password;
  const formConfirm =
    emailConfirm && usernameConfirm && passwordConfirm && checkPasswordConfirm;

  function onChange(e) {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function onFinish(values) {
    try {
      console.log(form.email, form.password, values);
      alert("회원가입 성공!");
      setForm({
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
    <FormBlock
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
        <Form.Item name="email">
          <InputBlock
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            className="registerEmail"
          />
        </Form.Item>
        <button type="button" onClick={sameEmailCheck}>
          중복확인
        </button>
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
            validator: usernameConfirm,
            message: "이름이 너무 짧아요",
          },
        ]}
      >
        <InputBlock
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          value={form.username}
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
          value={form.password}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item
        name="checkPassword"
        rules={[
          {
            required: true,
            message: "비밀번호를 확인해 주세요!",
          },
        ]}
      >
        <InputBlock
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Check Password"
          value={form.checkPassword}
          onChange={onChange}
        />
      </Form.Item>
      {!checkPasswordConfirm && (
        <span className="error">비밀번호가 일치하지 않습니다.</span>
      )}
      <ButtonBlock htmlType="submit">회원가입</ButtonBlock>
    </FormBlock>
  );
}

export default Register;
