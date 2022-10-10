import { useState } from "react";

import { ProfileBlock, UploadBlock } from "./ProfileStyle";
import { ButtonBlock } from "../common/form/FormStyled";

import { message, Form, Input } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

function ProfileEdit({ setIsEdit }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("JPG/PNG 파일만 업로드 가능합니다!");
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      message.error("2MB 이하의 파일만 업로드 가능합니다!");
    }

    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
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
  };

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
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </UploadBlock>
      <Form>
        <Form.Item className="label" label="닉네임" name="username">
          <Input />
        </Form.Item>
        <Form.Item className="label" label="비밀번호" name="password">
          <Input.Password />
        </Form.Item>
      </Form>
      <ButtonBlock className="smallButton" onClick={() => setIsEdit(false)}>
        저장
      </ButtonBlock>
    </ProfileBlock>
  );
}

export default ProfileEdit;
