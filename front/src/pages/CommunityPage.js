import React, { useEffect, useState } from "react";
import CommunityList from "../components/community/component/CommunityList";
import * as api from "../api/api";
function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [currentUserData, setCurrentUserData] = useState("");

  useEffect(() => {
    async function getUserData() {
      try {
        const { data: currentUser } = await api.get("user/user-page");
        setCurrentUserData(currentUser);
        console.log("현재유저 : ", currentUserData.nickname);
      } catch (e) {
        console.error(e);
      }
    }
    getUserData();
  }, []);

  useEffect(() => {
    api
      .get("community/postlist")
      .then((res) => (setPosts(res.data), console.log(res)));
  }, []);

  return (
    <>
      <CommunityList
        posts={posts}
        setPosts={setPosts}
        currentUserData={currentUserData}
      />
    </>
  );
}

export default CommunityPage;
