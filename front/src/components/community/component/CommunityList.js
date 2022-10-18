import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecruitBlueBtn } from "../../common/button/IconBtn";
import BottomNavigation from "../../common/navigation/BottomNavigation";

import { RecruitBlueBtnAlign } from "../styledComponents/CommunityListStyled";

import CommunityNav from "./CommunityNav";

function CommunityList({ posts, setPosts }) {
  const [viewPost, setViewPost] = useState(false);
  return (
    <div>
      <RecruitBlueBtnAlign>
        <Link to="communityCreate">
          <RecruitBlueBtn />
        </Link>
      </RecruitBlueBtnAlign>
      <CommunityNav
        posts={posts}
        viewPost={viewPost}
        setPosts={setPosts}
        setViewPost={setViewPost}
      />
      <BottomNavigation />
    </div>
  );
}

export default CommunityList;
