import React, { useState } from "react";

import { ProfileBlock, UploadBlock } from "./ProfileStyle";
import { ButtonBlock } from "../common/form/FormStyled";

import { message, Form, Input } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function ProfileEdit({ setIsEdit, user, setUser }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.image);
  const [form] = Form.useForm();

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("JPG/PNG 파일만 업로드 가능합니다!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      message.error("2MB 이하의 파일만 업로드 가능합니다!");
    }
    return isJpgOrPng && isLt2M;
  }

  function onChangeImage(info) {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
        setUser({ ...user, image: url });
        console.log(user);
      });
    }
  }

  function onDelete() {
    setImageUrl(null);
    setUser({ ...user, image: null });
  }

  function onFinish() {
    setIsEdit(false);
  }

  return (
    <ProfileBlock>
      <h2>프로필 수정</h2>
      <Form form={form} initialValues={user} onFinish={onFinish}>
        <UploadBlock
          name="image"
          listType="picture-card"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={onChangeImage}
        >
          {imageUrl ? (
            <>
              <img src={imageUrl} alt="profile_image" />
            </>
          ) : (
            <>{loading ? <LoadingOutlined /> : <PlusOutlined />}</>
          )}
        </UploadBlock>
        {imageUrl && (
          <button type="button" className="delete" onClick={onDelete}>
            기본이미지로 변경
          </button>
        )}
        <Form.Item
          className="label"
          colon={false}
          label="닉네임"
          name="nickname"
          rules={[
            {
              min: 2,
              message: "이름은 두 글자 이상 입력해 주세요.",
            },
            { whitespace: true, message: "이름은 공백 없이 입력해 주세요." },
          ]}
        >
          <Input
            value={user.nickname}
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, nickname: e.target.value };
              });
            }}
          />
        </Form.Item>
        <Form.Item
          className="label"
          colon={false}
          label="비밀번호"
          name="password"
          rules={[
            {
              pattern:
                /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,16}$/,
              message:
                "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.",
            },
          ]}
        >
          <Input.Password
            value={user.password}
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
          />
        </Form.Item>
        <Form.Item
          className="label"
          colon={false}
          label="비밀번호 확인"
          name="checkPassword"
          dependencies={["password"]}
          rules={[
            ({ getFieldValue }) => ({
              validator: (_, value) =>
                !value || getFieldValue("password") === value
                  ? Promise.resolve()
                  : Promise.reject(new Error("비밀번호가 일치하지 않습니다.")),
            }),
          ]}
        >
          <Input.Password
            value={user.checkPassword}
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, checkPassword: e.target.value };
              });
            }}
          />
        </Form.Item>
        <ButtonBlock className="smallButton" htmlType="submit">
          저장
        </ButtonBlock>
      </Form>
    </ProfileBlock>
  );
}

export default ProfileEdit;
