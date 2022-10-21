import React, { useEffect, useState } from "react";

import * as api from "../../api/api";
import UserPostIem from "./UserPostItem";
import BottomNavigation from "../common/navigation/BottomNavigation";

function UserPostList({ user, activeTabKey }) {
  const [userPost, setUserPost] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (activeTabKey === "2") {
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
    } else {
      return;
    }
  }, [user.id, page, activeTabKey]);

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
