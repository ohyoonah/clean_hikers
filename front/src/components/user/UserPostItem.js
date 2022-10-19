import React from "react";
import { Link } from "react-router-dom";

import {
  CommunityItemStyled,
  StateButton,
} from "../community/styledComponents/CommunityItemstyled";

import { Card, Col, Row } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

import moment from "moment";

function UserPostItem({ post }) {
  const postTime = moment(post.createdAt).fromNow();

  return (
    <CommunityItemStyled>
      <Link to={`/community/communityDetail/${post.post_id}`}>
        <Card hoverable>
          <Row>
            <Col span={18} push={0}>
              <Row>
                <StateButton>{post.station}</StateButton>
                <h3> {post.title}</h3>
              </Row>
              <p>
                지역 : {<EnvironmentOutlined />}
                {post.location.name} | {post.location.address}
              </p>
              <p>{post.description}</p>
            </Col>
            <Col span={2} push={4}>
              <p>{postTime}</p>
            </Col>
            <p className="writer-user-name">{post.nickname}</p>
          </Row>
        </Card>
      </Link>
    </CommunityItemStyled>
  );
}

export default UserPostItem;
