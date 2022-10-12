import React, { useState } from "react";
import CommunityList from "../components/community/component/CommunityList";

const initialState = {
  inputs: {
    title: "",
    location: "",
    visitDate: "",
    member: "",
    station: "모집중",
  },
  users: [
    {
      id: 1,
      title: "지리산 가실 분",
      location: "지리산 | 경상남도 하동군",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      member: 2,
      station: "모집중",
    },
    {
      id: 2,
      title: "북한산 가실 분",
      location: "북한산 | 서울특별시",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      member: 2,
      station: "모집완료",
    },
    {
      id: 3,
      title: "북한산 다녀오면서 이만큼 주웠어요",
      location: "북한산 | 서울특별시",
      station: "클린후기",
    },
  ],
};

function CommunityPage() {
  const [posts, setPosts] = useState(initialState.users);
  return (
    <>
      <CommunityList posts={posts} setPosts={setPosts} />
    </>
  );
}

export default CommunityPage;
