export function validateEmail(_, value) {
  if (!value) {
    return Promise.reject(new Error("이메일을 입력해 주세요."));
  }
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.match(regExp)) {
    return Promise.reject(new Error("이메일 형식이 올바르지 않습니다."));
  }
  return Promise.resolve();
}

export function validateEmailCheck(email) {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function validateNickName(_, value) {
  if (!value) {
    return Promise.reject(new Error("닉네임을 입력해 주세요."));
  }
  if (/\s/.test(value)) {
    return Promise.reject(new Error("닉네임은 공백을 포함 할 수 없습니다."));
  }
  const regExp = /^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/;
  if (!regExp.test(value)) {
    return Promise.reject(
      new Error("닉네임은 두 자 이상 열 자 이하로 입력해 주세요.")
    );
  }
  return Promise.resolve();
}

export function validatePassword(_, value) {
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
}
