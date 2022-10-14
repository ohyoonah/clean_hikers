import React, { useEffect, useState } from "react";
import CommunityDetail from "../components/community/component/CommunityDetail";
import initialState from "../components/community/component/data";

function CommunityDetailPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(initialState.users);
  }, []);

  const handleRemove = async function () {};

  return (
    <div>
      <CommunityDetail
        handleRemove={handleRemove}
        setPosts={setPosts}
        posts={posts}
      />
    </div>
  );
}

export default CommunityDetailPage;
