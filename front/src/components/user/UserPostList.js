import React, { useEffect, useState } from "react";

import * as api from "../../api/api";
import UserPostIem from "./UserPostItem";
import BottomNavigation from "../common/navigation/BottomNavigation";

function UserPostList({ user }) {
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    const id = user.id;
    async function getPostData() {
      try {
        const { data } = await api.get("community/posts", `${id}`);
        setUserPost(data);
      } catch (e) {
        console.error(e);
      }
    }
    getPostData();
  }, [user.id]);

  return (
    <>
      {userPost &&
        userPost.map((post, i) => (
          <UserPostIem key={userPost[i].post_id} post={post} user={user} />
        ))}
      <BottomNavigation props={userPost.length} />
    </>
  );
}

export default UserPostList;
