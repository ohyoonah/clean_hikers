import { Button, Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { EnvironmentOutlined } from "@ant-design/icons";
import CommunityItemStyled from "../styledComponents/CommunityItemstyled";

function CommunityItem({ post }) {
  console.log(post);
  return (
    <>
      <CommunityItemStyled>
        <Link to={`/community/communityDetail/${post.no}`}>
          <Card hoverable>
            <Row>
              <Col span={18} push={0}>
                <Row>
                  <Button>{post.station}</Button>
                  <h3> {post.title}</h3>
                </Row>
                <p>
                  지역 : {<EnvironmentOutlined />}
                  {post.location}
                </p>
                <p>{post.description}</p>
              </Col>
              <Col span={2} push={4}>
                <p className="writer-user-name">{post.nickname}</p>
              </Col>
            </Row>
          </Card>
        </Link>
      </CommunityItemStyled>
    </>
  );
}

export default CommunityItem;
