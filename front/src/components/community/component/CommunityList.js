import { Pagination } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RecruitBlueBtn } from "../../common/button/IconBtn";
import BottomNavigation from "../../common/navigation/BottomNavigation";

import { RecruitBlueBtnAlign } from "../styledComponents/CommunityListStyled";

import CommunityNav from "./CommunityNav";
const PaginationWrapper = styled(Pagination)`
  /* Display & Box Model */
  display: block;
  text-align: center;
  padding-top: 15px;

  .ant-pagination-item-active a {
    color: #89a550;
    border: none;
  }
  .ant-pagination-item-active {
    border: none;
    text-decoration: underline 2px;
  }
`;
function CommunityList({ posts, setPosts }) {
  const [viewPost, setViewPost] = useState(false);
  const [pageNum, setPageNum] = useState(1);

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
      <PaginationWrapper
        defaultCurrent={1}
        total={18}
        defaultPageSize={5}
        size="small"
        showSizeChanger={false}
        onChange={(e) => setPageNum(e)}
      />
    </div>
  );
}

export default CommunityList;
