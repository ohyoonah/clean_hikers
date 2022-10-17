import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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
import CommentList from "./CommentList";

function CommunityDetail({ setPosts, posts }) {
  const [datas, setData] = useState(initialState.users);
  const { no } = useParams();
  const navigate = useNavigate();

  const handleDelete = async function () {
    if (window.confirm("해당 게시물을 삭제하시겠습니까?")) {
      alert("삭제가 완료되었습니다.");
      return navigate(-1);
    }
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
              handleDelete();
            }}
          >
            삭제
          </Button>
          <Button onClick={() => {}}>수정</Button>
        </Col>
        <Row>
          <Col span={14}>
            <div className="community-detail-main">
              <h1>{datas.title}</h1>
              <b>
                {<Avatar size="small" icon={<UserOutlined />} />}
                {datas.userName}
              </b>
              <p>
                {<EnvironmentOutlined />} {datas.location}
              </p>
              <p className="community-detail-discription">
                {datas.discription}
              </p>
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
                        {datas.location}
                      </p>
                    }
                    description={
                      <p>
                        {datas.visitDate} <br />
                        {datas.visitMember} 자리 남음
                      </p>
                    }
                  />
                </Card>
              </CommunityDetailStyled>
            </Row>
            <NonIconBlueBtn text={"참여신청"}></NonIconBlueBtn>
          </Col>
        </Row>
        <CommentList />
      </CommunityDetailAlign>
    </>
  );
}

export default CommunityDetail;
