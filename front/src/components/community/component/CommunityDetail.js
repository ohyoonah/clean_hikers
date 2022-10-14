import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CommunityDetailAlign,
  CommunityDetailStyled,
} from "../styledComponents/CommunityDetailStyled";
import initialState from "./data";
import { EnvironmentOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { NonIconBlueBtn } from "../../common/button/NonIconBtn";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function CommunityDetail({ post, handleRemove }) {
  const [data, setData] = useState(initialState.users);
  const { no } = useParams();
  const OnRemove = () => {
    handleRemove(post.no);
  };

  useEffect(() => {
    setData(initialState.users[no]);
  }, []);

  return (
    <>
      <CommunityDetailAlign>
        <Col>
          <Button
            onClick={() => {
              OnRemove(post.no);
            }}
          >
            삭제
          </Button>
          <Button
            onClick={() => {
              OnRemove(post.no);
            }}
          >
            수정
          </Button>
        </Col>
        <Row>
          <Col span={14}>
            <div className="community-detail-main">
              <h1>{data.title}</h1>
              <b>
                {<Avatar size="small" icon={<UserOutlined />} />}
                {data.userName}
              </b>
              <p>
                {<EnvironmentOutlined />} {data.location}
              </p>
              <p className="community-detail-discription">{data.discription}</p>
            </div>
          </Col>
          <Col span={7} push={2}>
            <Row>
              <CommunityDetailStyled>
                <Card
                  style={{
                    width: 360,
                  }}
                  cover={
                    <>
                      <Map
                        center={{ lat: 37.7941467, lng: 128.5426327 }}
                        style={{
                          width: "100%",
                          height: "250px",
                          margin: "0px auto",
                        }}
                        level={8}
                      >
                        <MapMarker
                          position={{ lat: 37.7941467, lng: 128.5426327 }}
                        />
                      </Map>
                    </>
                  }
                >
                  <Meta
                    title={
                      <p>
                        {<EnvironmentOutlined />}
                        {data.location}
                      </p>
                    }
                    description={
                      <p>
                        {data.visitDate} <br />
                        {data.visitMember} 자리 남음
                      </p>
                    }
                  />
                </Card>
              </CommunityDetailStyled>
            </Row>
            <NonIconBlueBtn text={"참여신청"}></NonIconBlueBtn>
          </Col>
        </Row>
      </CommunityDetailAlign>
    </>
  );
}

export default CommunityDetail;
