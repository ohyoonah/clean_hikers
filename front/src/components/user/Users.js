import React, { useEffect, useState } from "react";

import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import UserPostList from "./UserPostList";
import * as api from "../../api/api";

import { TabBlock } from "./TabStyle";

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        await api.get("user/user-page").then((res) =>
          setUser({
            nickname: res.data.nickname,
            password: res.data.password,
            checkPassword: res.data.password,
            image: "",
          })
        );
      } catch (e) {
        console.log(e);
      }
    }
    getUserData();
  }, []);

  const [isEdit, setIsEdit] = useState(false);
  const items = [
    { label: "프로필", key: "1", children: ChangeProfile() },
    { label: "작성글", key: "2", children: <UserPostList /> },
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
