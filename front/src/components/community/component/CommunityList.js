import { Pagination } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RecruitBlueBtn } from "../../common/button/IconBtn";
import BottomNavigation from "../../common/navigation/BottomNavigation";

import {
  CommunityListCol,
  CommunityListRow,
  RecruitBlueBtnAlign,
} from "../styledComponents/CommunityListStyled";

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
function CommunityList({
  posts,
  setPosts,
  currentUserData,
  setPageNum,
  pageNum,
}) {
  return (
    <div>
      <CommunityListCol>
        {currentUserData.id && (
          <RecruitBlueBtnAlign>
            <Link to="communityCreate">
              <RecruitBlueBtn />
            </Link>
          </RecruitBlueBtnAlign>
        )}
        <CommunityNav posts={posts} setPosts={setPosts} pageNum={pageNum} />
        <PaginationWrapper
          defaultCurrent={1}
          total={18}
          defaultPageSize={5}
          size="small"
          showSizeChanger={false}
          onChange={(e) => setPageNum(e)}
        />
        {console.log(pageNum)}
      </CommunityListCol>
    </div>
  );
}

export default CommunityList;
