import React, { useEffect, useState } from "react";

import { errorMessage } from "../common/form/Message";
import * as api from "../../api/api";

import { ProfileBlock, UploadBlock } from "./ProfileStyle";
import { ButtonBlock } from "../common/form/FormStyled";

import { message, Form, Input, Button } from "antd";
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
    if (user.nickname.length < 2 || user.nickname.length >= 10) {
      errorMessage("닉네임은 두 자 이상 열 자 이하로 입력해 주세요");
    } else if (/\s/.test(user.nickname)) {
      errorMessage("닉네임은 공백을 포함 할 수 없습니다");
    } else {
      try {
        await api.put("user/nickname", {
          nickname: user.nickname,
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  function onFinish() {
    setIsEdit(false);
  }

  async function changePassword() {
    const regExp =
      /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,16}$/;
    if (!regExp.test(user.password)) {
      errorMessage(
        "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요"
      );
    } else {
      try {
        await api.put("user/password", {
          password: user.password,
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <ProfileBlock>
      <h2>프로필 수정</h2>
      <Form form={form} initialValues={user}>
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

        <Form.Item colon={false} label="닉네임" name="nickname">
          <Input.Group>
            <Input
              name="nickname"
              value={user.nickname}
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, nickname: e.target.value };
                });
              }}
            />
            <Button
              className="submitButton"
              type="primary"
              htmlType="button"
              onClick={changeNickname}
            >
              저장
            </Button>
          </Input.Group>
        </Form.Item>
        <Form.Item colon={false} label="비밀번호" name="password">
          <Input.Group>
            <Input.Password
              value={user.password}
              onChange={(e) => {
                setUser((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
            />
            <Button
              className="submitButton"
              type="primary"
              onClick={changePassword}
            >
              저장
            </Button>
          </Input.Group>
        </Form.Item>
        <ButtonBlock className="smallButton" onClick={onFinish}>
          확인
        </ButtonBlock>
      </Form>
    </ProfileBlock>
  );
}

export default ProfileEdit;
