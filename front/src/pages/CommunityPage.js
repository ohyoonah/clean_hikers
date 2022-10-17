import React, { useEffect, useState } from "react";
import CommunityList from "../components/community/component/CommunityList";
import initialState from "../components/community/component/data";

function CommunityPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(initialState.users);
  }, []);

  return (
    <>
      <CommunityList posts={posts} setPosts={setPosts} />
    </>
  );
}

export default CommunityPage;
