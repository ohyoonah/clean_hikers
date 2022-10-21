import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DispatchContext } from "../../App";
import { ROUTES } from "../../enum/routes";
import { validateEmail, validatePassword } from "../../util/formValidation";
import { errorMessage, notificationMessage } from "../common/message/Message";
import * as api from "../../api/api";

import Loading from "../common/loading/Loading";

import { PageBlock, FormBlock, TitleBlock } from "./FormStyle";
import { InputBlock, ButtonBlock } from "../common/form/FormStyled";

import { Form } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

function Login() {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const JWT_EXPIRY_TIME = 30 * 60 * 1000;

  function onChange(e) {
    const { name, value } = e.currentTarget;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function onFinish() {
    try {
      const { data } = await api.post("user/login", {
        ...formValue,
      });
      const jwtToken = data.jwt;
      sessionStorage.setItem("userToken", jwtToken);
      setIsLoading(true);

      const userInfo = await api.get("user/user-page");

      await dispatch({
        type: "LOGIN_SUCCESS",
        payload: userInfo.data,
      });

      navigate(ROUTES.HOME);
      setIsLoading(false);

      setTimeout(function () {
        notificationMessage("top");
        setTimeout(function () {
          dispatch({ type: "LOGOUT" });
          sessionStorage.removeItem("userToken");
        }, 5 * 60 * 1000);
      }, JWT_EXPIRY_TIME - 5 * 60 * 1000);
    } catch (e) {
      console.log("로그인 실패", e.response.data);
      errorMessage(e.response.data);
    }
  }

  return isLoading ? (
    <Loading />
  ) : (
    <PageBlock>
      <FormBlock form={form} onFinish={onFinish}>
        <TitleBlock>
          <h2>Sign In</h2>
          <span>로그인을 위해 이메일과 비밀번호를 입력해 주세요</span>
        </TitleBlock>
        <Form.Item name="email" rules={[{ validator: validateEmail }]}>
          <InputBlock
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            name="email"
            value={formValue.email}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ validator: validatePassword }]}>
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
            <Link to={ROUTES.USER.REGISTER} className="registerLink">
              회원가입
            </Link>
          </div>
        </Form.Item>
      </FormBlock>
    </PageBlock>
  );
}

export default Login;
