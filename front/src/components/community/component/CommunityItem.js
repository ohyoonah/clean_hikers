import { Button, Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { EnvironmentOutlined } from "@ant-design/icons";
import CommunityItemStyled from "../styledComponents/CommunityItemstyled";
import moment from "moment";

function CommunityItem({ post }) {
  console.log(post);
  const postTime = moment(post.createdAt).format("YY.MM.DD  HH:mm:ss");
  const nowTime = moment(new Date());
  const listTime = nowTime.diff(postTime, "hours"); // list 상에 보여주는 시간
  return (
    <>
      <CommunityItemStyled>
        <Link to={`/community/communityDetail/${post.post_id}`}>
          <Card hoverable>
            <Row>
              <Col span={18} push={0}>
                <Row>
                  <Button>{post.station}</Button>
                  <h3> {post.title}</h3>
                </Row>
                <p>
                  지역 : {<EnvironmentOutlined />}
                  {/* {post.location} */}
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
    </>
  );
}

export default CommunityItem;
