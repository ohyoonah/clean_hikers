import "moment/locale/ko";
import { Button, Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { EnvironmentOutlined } from "@ant-design/icons";
import {
  CommunityItemStyled,
  StateButton,
  ItemCol,
} from "../styledComponents/CommunityItemStyled";
import moment from "moment";

function CommunityItem({ post }) {
  const postTime = moment(post.createdAt).fromNow(); // post 작성 시간
  return (
    <>
      <CommunityItemStyled>
        <Link to={`/community/communityDetail/${post.post_id}`}>
          <Card hoverable>
            <Row>
              <Col span={21}>
                <Row>
                  <StateButton station={post.station}>
                    {post.station}
                  </StateButton>
                  <h3> {post.title}</h3>
                </Row>
                <p>
                  지역 : {<EnvironmentOutlined />}
                  {post.location.name} | {post.location.address}
                </p>
              </Col>
              <ItemCol>
                <p>{postTime}</p>
                <p className="writer-user-name">{post.nickname}</p>
              </ItemCol>
            </Row>
          </Card>
        </Link>
      </CommunityItemStyled>
    </>
  );
}

export default CommunityItem;
