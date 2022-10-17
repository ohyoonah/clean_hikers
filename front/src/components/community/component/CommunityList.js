import { Pagination, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecruitBlueBtn } from "../../common/button/IconBtn";

import {
  RecruitBlueBtnAlign,
  CommunityPagenationStyled,
  CommunityListAlign,
} from "../styledComponents/CommunityListStyled";

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
      <CommunityListAlign>
        <CommunityPagenationStyled>
          <Pagination size="small" total={50} />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </div>
  );
}

export default CommunityList;
