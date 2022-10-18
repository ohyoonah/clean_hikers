import React, { useEffect, useState } from "react";
import CommunityDetail from "../components/community/component/CommunityDetail";
import * as api from "../api/api";

function CommunityDetailPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("community/postlist")
      .then((res) => (setPosts(res.data), console.log(res)));
  }, []);

  return (
    <div>
      <CommunityDetail posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default CommunityDetailPage;
