import React, { useEffect, useState } from "react";

import * as api from "../../api/api";

import {
  CommunityListAlign,
  CommunityPagenationStyled,
} from "../community/styledComponents/CommunityListStyled";

import { Pagination } from "antd";
import CommunityItem from "../community/component/CommunityItem";

function UserPostList({ user }) {
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    const id = user.id;
    async function getPostData() {
      try {
        const { data } = await api.get("community/posts", `${id}`);
        setUserPost(data);
      } catch (e) {
        console.error(e);
      }
    }
    getPostData();
  }, [user.id]);

  return (
    <>
      {userPost.map((post, i) => (
        <CommunityItem key={userPost[i].post_id} post={post} />
      ))}
      <CommunityListAlign>
        <CommunityPagenationStyled>
          <Pagination
            size="small"
            defaultPageSize={5}
            total={userPost.length}
          />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </>
  );
}

export default UserPostList;
