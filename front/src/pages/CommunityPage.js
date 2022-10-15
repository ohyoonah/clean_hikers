import React, { useEffect, useState } from "react";
import { CommunityList } from "../components/community/component/CommunityList";
import initialState from "../components/community/component/data";

function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [tap, setTap] = useState("모집중");

  useEffect(() => {
    setPosts(initialState.users);
  }, []);

  const handleRemove = (id) => {
    setPosts((info) => info.filter((item) => item.id !== id));
  };

  return (
    <>
      <CommunityList
        posts={posts}
        setPosts={setPosts}
        handleRemove={handleRemove}
        tap={tap}
        setTap={setTap}
      />
    </>
  );
}

export default CommunityPage;
