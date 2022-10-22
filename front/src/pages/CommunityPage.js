import React, { useEffect, useState } from "react";
import CommunityList from "../components/community/component/CommunityList";
import * as api from "../api/api";
function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [currentUserData, setCurrentUserData] = useState("");
  const [pageNum, setPageNum] = useState(1);

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
    async function getCommunityData() {
      try {
        await api
          .get(`community/postlist`, `?page=${pageNum}&perPage=${5}`)
          .then((res) => (setPosts(res.data), console.log(res)));
      } catch (e) {
        console.log(e);
      }
    }
    getCommunityData();
  }, [pageNum]);

  return (
    <>
      <CommunityList
        posts={posts}
        setPosts={setPosts}
        setPageNum={setPageNum}
        pageNum={pageNum}
        currentUserData={currentUserData}
      />
    </>
  );
}

export default CommunityPage;
