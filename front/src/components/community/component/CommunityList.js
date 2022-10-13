import { Button, Card, Pagination } from "antd";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RecruitBlueBtn } from "../../common/button/IconBtn";
import {
  RecruitBlueBtnAlign,
  CommunityPagenationStyled,
  CommunityListAlign,
} from "../styledComponents/CommunityListStyled";
import CommunityDetail from "./CommunityDetail";
import CommunityNav from "./CommunityNav";

function CommunityItem({ post, handleRemove, findItem }) {
  const OnRemove = () => {
    handleRemove(post.id);
  };
  return (
    <>
      <Card>
        <Link to={`/CommunityDetail/${post.no}`}>
          <h3>
            <Button>{post.station}</Button>
            {post.title}
          </h3>
          <p>{post.location}</p>
          <p>{post.discription}</p>
        </Link>
      </Card>
    </>
  );
}

function CommunityList({ posts, handleRemove }) {
  const [viewPost, setViewPost] = useState(false);
  return (
    <div>
      <RecruitBlueBtnAlign>
        <Link to="/communityCreate">
          <RecruitBlueBtn />
        </Link>
      </RecruitBlueBtnAlign>
      {viewPost ? (
        <CommunityDetail posts={posts} />
      ) : (
        <CommunityNav
          posts={posts}
          handleRemove={handleRemove}
          viewPost={viewPost}
          setViewPost={setViewPost}
        />
      )}
      <CommunityListAlign>
        <CommunityPagenationStyled>
          <Pagination size="small" total={50} />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </div>
  );
}

export { CommunityList, CommunityItem };
