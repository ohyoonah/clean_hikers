import React, { useEffect, useState } from "react";

import * as api from "../../api/api";

import { ProfileBlock, UploadBlock } from "./ProfileStyle";
import { ButtonBlock } from "../common/form/FormStyled";

import { message, Form, Input } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function ProfileEdit({ setIsEdit, user, setUser }) {
  const [loading, setLoading] = useState(false);
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
        setUser((user) => ({ ...user, image: url }));
      });
    }
  }

  async function changeImage() {
    try {
      await api.put("user/picture", {
        image: user.image,
      });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    changeImage();
  }, [onChangeImage]);

  async function deleteImage() {
    try {
      setUser((user) => ({ ...user, image: null }));
      await api.put("user/picture", {
        image: null,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async function changeNickname() {
    try {
      await api.put("user/nickname", {
        nickname: user.nickname,
      });
    } catch (e) {
      console.error(e);
    }
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
          {user.image ? (
            <>
              <img src={user.image} alt="profile_image" />
            </>
          ) : (
            <>{loading ? <LoadingOutlined /> : <PlusOutlined />}</>
          )}
        </UploadBlock>
        {user.image && (
          <button type="button" className="delete" onClick={deleteImage}>
            기본이미지로 변경
          </button>
        )}
        <Form.Item
          className="label"
          colon={false}
          label="닉네임"
          name="nickname"
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
        <button onClick={changeNickname} type="button">
          저장
        </button>
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
        <Form.Item
          className="label"
          colon={false}
          label="비밀번호 확인"
          name="checkPassword"
          dependencies={["password"]}
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
          확인
        </ButtonBlock>
      </Form>
    </ProfileBlock>
  );
}

export default ProfileEdit;
