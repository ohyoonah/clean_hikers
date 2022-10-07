import { Link } from "react-router-dom";
import { FormBlock, TitleBlock, InputBlock, ButtonBlock } from "./FormBlock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function onChange(e) {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(form.email, form.password);
    setForm({ email: "", password: "" });
    navigate("/");
  }

  return (
    <FormBlock onSubmit={onSubmit}>
      <TitleBlock>
        <h2>Sign In</h2>
        <span>로그인을 위해 이메일과 비밀번호를 입력해 주세요</span>
      </TitleBlock>
      <InputBlock>
        <input
          name="email"
          value={form.email}
          type="text"
          placeholder="Email"
          onChange={onChange}
        />
        <input
          name="password"
          value={form.password}
          type="password"
          placeholder="Password"
          onChange={onChange}
        />
      </InputBlock>
      <ButtonBlock>
        <button type="submit">로그인</button>
        <span>
          아직 회원이 아니신가요?
          <Link to="/register">회원가입</Link>
        </span>
      </ButtonBlock>
    </FormBlock>
  );
}

export default Login;
