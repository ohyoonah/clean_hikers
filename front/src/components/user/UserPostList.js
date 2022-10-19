import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as api from "../../api/api";
import BottomNavigation from "../common/navigation/BottomNavigation";

import CommunityItemStyled from "../community/styledComponents/CommunityItemstyled";

import { Button, Card, Col, Row } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

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
        <CommunityItemStyled key={userPost[i].post_id}>
          <Link to={`/community/communityDetail/${userPost.post_id}`}>
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
      ))}
      <BottomNavigation props={userPost.length} />
    </>
  );
}

export default UserPostList;
