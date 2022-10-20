import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import * as api from "../../api/api";
import BottomNavigation from "../common/navigation/BottomNavigation";

import {
  CommunityItemStyled,
  StateButton,
} from "../community/styledComponents/CommunityItemStyled";

import { Card, Col, Row } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

function UserPostList({ user }) {
  const [userPost, setUserPost] = useState([]);
  const postTime = moment(userPost.createdAt).fromNow();

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
      {userPost &&
        userPost.map((post, i) => (
          <CommunityItemStyled key={userPost[i].post_id}>
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
                  <p className="writer-user-name">{user.nickname}</p>
                </Row>
              </Card>
            </Link>
          </CommunityItemStyled>
        ))}
      <BottomNavigation props={userPost.length} />
    </>
  );
}

export default UserPostList;
