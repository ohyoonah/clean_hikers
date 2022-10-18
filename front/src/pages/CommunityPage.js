import React, { useEffect, useState } from "react";
import CommunityList from "../components/community/component/CommunityList";
import initialState from "../components/community/component/data";
import * as api from "../api/api";
function CommunityPage() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   setPosts(initialState.users);
  // }, []);

  useEffect(() => {
    api.get("community/postlist").then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <CommunityList posts={posts} setPosts={setPosts} />
    </>
  );
}

export default CommunityPage;
