import React from "react";

import { CommunityItem } from "../community/component/CommunityList";
import {
  CommunityListAlign,
  CommunityPagenationStyled,
} from "../community/styledComponents/CommunityListStyled";
import initialState from "../community/component/data";

import { Pagination } from "antd";

function UserPostList() {
  return (
    <>
      <p>
        {initialState.users.map((post) => (
          <CommunityItem key={post.no} post={post} />
        ))}
      </p>
      <CommunityListAlign>
        <CommunityPagenationStyled>
          <Pagination size="small" total={50} />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </>
  );
}

export default UserPostList;
