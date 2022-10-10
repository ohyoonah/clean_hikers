import React, { useState } from "react";

import { ProfileBlock, UploadBlock } from "./ProfileStyle";
import { ButtonBlock } from "../common/form/FormStyled";

import { message, Form, Input } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function ProfileEdit({ setIsEdit, user, setUser }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

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
      });
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div>Upload</div>
    </div>
  );

  return (
    <ProfileBlock>
      <h2>프로필 수정</h2>
      <UploadBlock
        name="avatar"
        listType="picture-card"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={onChangeImage}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </UploadBlock>
      <Form initialValues={user}>
        <Form.Item
          className="label"
          colon={false}
          label="닉네임"
          name="username"
        >
          <Input
            value={user.username}
            onChange={(e) => {
              setUser((prev) => {
                return { ...prev, username: e.target.value };
              });
            }}
          />
        </Form.Item>
        <Form.Item
          className="label"
          colon={false}
          label="비밀번호"
          name="password"
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
      </Form>
      <ButtonBlock className="smallButton" onClick={() => setIsEdit(false)}>
        저장
      </ButtonBlock>
    </ProfileBlock>
  );
}

export default ProfileEdit;
