import { FormBlock, TitleBlock, InputBlock, ButtonBlock } from "./FormBlock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  async function onSubmit(e) {
    e.preventDefault();
    try {
      if (formConfirm) {
        alert("회원가입 성공!");
        setForm({ email: "", username: "", password: "", checkPassword: "" });
        navigate("/login");
      } else {
        if (!emailConfirm) alert("이메일");
        else if (!usernameConfirm) alert("이름");
        else if (!passwordConfirm) alert("비밀번호");
        else if (!checkPasswordConfirm) alert("체크");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <FormBlock onSubmit={onSubmit}>
      <TitleBlock>
        <h2>Sign Up</h2>
        <span>회원가입을 위해 정보를 입력해 주세요.</span>
      </TitleBlock>
      <InputBlock>
        <div className="emailBlock">
          <input
            name="email"
            value={form.email}
            type="text"
            placeholder="Email"
            onChange={onChange}
          />
          <button
            type="button"
            className="emailCheckButton"
            onClick={sameEmailCheck}
          >
            중복확인
          </button>
        </div>
        <span className="informationText">
          비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
        </span>
        <input
          name="username"
          value={form.username}
          type="text"
          placeholder="Username"
          onChange={onChange}
        />
        <input
          name="password"
          value={form.password}
          type="password"
          placeholder="Password"
          onChange={onChange}
        />
        <input
          name="checkPassword"
          value={form.checkPassword}
          type="password"
          placeholder="Check Password"
          onChange={onChange}
        />
        {!checkPasswordConfirm && (
          <span className="error">비밀번호가 일치하지 않습니다.</span>
        )}
      </InputBlock>
      <ButtonBlock>
        <button type="submit">회원가입</button>
      </ButtonBlock>
    </FormBlock>
  );
}

export default Register;
