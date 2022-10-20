import React, { useEffect, useState } from "react";

import * as api from "../../api/api";
import UserPostIem from "./UserPostItem";
import BottomNavigation from "../common/navigation/BottomNavigation";

function UserPostList({ user }) {
  const [userPost, setUserPost] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const id = user.id;
    async function getPostData() {
      try {
        const { data } = await api.get(
          "community/posts",
          `${id}?page=${page}&perPage=5`
        );
        setUserPost(data.allPostsList);
        setTotal(data.totalPage);
      } catch (e) {
        console.error(e);
      }
    }
    getPostData();
  }, [user.id, page]);

  return (
    <>
      {userPost &&
        userPost.map((post, i) => (
          <UserPostIem key={userPost[i].post_id} post={post} user={user} />
        ))}
      <BottomNavigation props={total * 5} onChangePage={(e) => setPage(e)} />
    </>
  );
}

export default UserPostList;
