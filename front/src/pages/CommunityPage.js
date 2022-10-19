import React, { useEffect, useState } from "react";
import CommunityList from "../components/community/component/CommunityList";
import * as api from "../api/api";
function CommunityPage() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   setPosts(initialState.users);
  // }, []);

  useEffect(() => {
    api
      .get("community/postlist")
      .then((res) => (setPosts(res.data), console.log(res)));
  }, []);

  return (
    <>
      <CommunityList posts={posts} setPosts={setPosts} />
    </>
  );
}

export default CommunityPage;
