import { Button, Card, Col, Pagination, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecruitBlueBtn } from "../../common/button/IconBtn";
import { EnvironmentOutlined } from "@ant-design/icons";
import {
  RecruitBlueBtnAlign,
  CommunityPagenationStyled,
  CommunityListAlign,
  CommunityItemStyled,
} from "../styledComponents/CommunityListStyled";

import CommunityNav from "./CommunityNav";

function CommunityItem({ post }) {
  return (
    <>
      <CommunityItemStyled>
        <Link to={`/community/communityDetail/${post.no}`}>
          <Card hoverable>
            <Row>
              <Col span={18} push={0}>
                <Row>
                  <Button>{post.state}</Button>
                  <h3> {post.title}</h3>
                </Row>
                <p>
                  지역 : {<EnvironmentOutlined />}
                  {post.location}
                </p>
                <p>{post.discription}</p>
              </Col>
              <Col span={2} push={4}>
                <p className="writer-user-name">{post.userName}</p>
              </Col>
            </Row>
          </Card>
        </Link>
      </CommunityItemStyled>
    </>
  );
}

function CommunityList({ posts, handleRemove, tap, setTap }) {
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
        handleRemove={handleRemove}
        viewPost={viewPost}
        setViewPost={setViewPost}
        tap={tap}
        setTap={setTap}
      />
      <CommunityListAlign>
        <CommunityPagenationStyled>
          <Pagination size="small" total={50} />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </div>
  );
}

export { CommunityList, CommunityItem };
