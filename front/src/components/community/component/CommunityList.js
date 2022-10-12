import { Pagination } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { RecruitBlueBtn } from "../../common/button/IconBtn";
import {
  RecruitBlueBtnAlign,
  CommunityPagenationStyled,
  CommunityListAlign,
} from "../styledComponents/CommunityListStyled";
import CommunityNav from "./CommunityNav";

function CommunityItem({ posts, post, setPosts }) {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.location}</p>
    </>
  );
}

function CommunityList({ posts, setPosts }) {
  return (
    <div>
      <RecruitBlueBtnAlign>
        <Link to="communityCreate">
          <RecruitBlueBtn />
        </Link>
      </RecruitBlueBtnAlign>
      <CommunityNav />
      <CommunityListAlign>
        {posts.map((post) => (
          <CommunityItem
            key={post.id}
            posts={posts}
            post={post}
            setPosts={setPosts}
          />
        ))}

        <CommunityPagenationStyled>
          <Pagination size="small" total={50} />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </div>
  );
}

export default CommunityList;
