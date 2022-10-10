import { useState } from "react";

import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import UserPostList from "./UserPostList";

import { TabBlock } from "./TabStyle";

function Users() {
  const [isEdit, setIsEdit] = useState(false);
  const items = [
    { label: "프로필", key: "1", children: ChangeProfile() },
    { label: "작성글", key: "2", children: <UserPostList /> },
  ];

  function ChangeProfile() {
    return isEdit ? (
      <ProfileEdit setIsEdit={setIsEdit} />
    ) : (
      <Profile setIsEdit={setIsEdit} />
    );
  }

  return (
    <>
      <TabBlock items={items} />
    </>
  );
}

export default Users;
