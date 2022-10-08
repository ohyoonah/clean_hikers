import React from "react";
import { Tabs } from "antd";
import Profile from "./Profile";
import UserPostList from "./UserPostList";

function Users() {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="프로필" key="1">
        <Profile />
      </Tabs.TabPane>
      <Tabs.TabPane tab="작성글" key="2">
        <UserPostList />
      </Tabs.TabPane>
    </Tabs>
  );
}

export default Users;
