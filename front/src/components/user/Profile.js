import React from "react";

import { ProfileBlock } from "./ProfileStyle";
import { ButtonBlock } from "../common/form/FormStyled";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Profile({ setIsEdit, user }) {
  const { nickname, image } = user;

  return (
    <ProfileBlock>
      <h2>프로필</h2>
      {image ? (
        <Avatar size={100} icon={<UserOutlined />} src={image} alt="avatar" />
      ) : (
        <Avatar size={100} src="/profilecircle.svg" />
      )}
      <div className="textBlcok">
        <label className="label">닉네임</label>
        <span>{nickname}</span>
      </div>
      <ButtonBlock className="smallButton" onClick={() => setIsEdit(true)}>
        수정
      </ButtonBlock>
    </ProfileBlock>
  );
}

export default Profile;
