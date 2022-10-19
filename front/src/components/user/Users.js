import React, { useEffect, useState } from "react";

import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import UserPostList from "./UserPostList";
import { HttpStatusCode } from "../../enum/httpStautsCode";
import * as api from "../../api/api";

import { TabBlock } from "./TabStyle";

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const { data: currentUser, status } = await api.get("user/user-page");
        if (status === HttpStatusCode.Created) {
          const { id, nickname, defaultImage } = currentUser;
          setUser({
            id,
            nickname,
            password: "",
            image: defaultImage,
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
    getUserData();
  }, []);

  const [isEdit, setIsEdit] = useState(false);
  const items = [
    { label: "프로필", key: "1", children: ChangeProfile() },
    {
      label: "작성글",
      key: "2",
      children: (
        <UserPostList user={user} setUser={setUser} setIsEdit={setIsEdit} />
      ),
    },
  ];

  function ChangeProfile() {
    return isEdit ? (
      <ProfileEdit user={user} setUser={setUser} setIsEdit={setIsEdit} />
    ) : (
      <Profile user={user} setUser={setUser} setIsEdit={setIsEdit} />
    );
  }

  return <TabBlock items={items} />;
}

export default Users;
