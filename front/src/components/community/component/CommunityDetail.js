import "moment/locale/ko";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CommunityDetailAlign,
  DetailCol,
} from "../styledComponents/CommunityDetailStyled";

import { EnvironmentOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import { NonIconBlueBtn } from "../../common/button/NonIconBtn";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import CommentList from "./CommentList";
import * as api from "../../../api/api";
import moment from "moment";

function CommunityDetail() {
  const [datas, setDatas] = useState("");
  const [location, setLocation] = useState({});
  const [currentUserData, setCurrentUserData] = useState("");
  const { no } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      try {
        const { data: currentUser } = await api.get("user/user-page");
        setCurrentUserData(currentUser);
        console.log("현재유저 : ", currentUserData.nickname);
      } catch (e) {
        console.error(e);
      }
    }
    getUserData();
  }, []);

  const handleDelete = async function () {
    if (window.confirm("해당 게시물을 삭제하시겠습니까?")) {
      await api.delete(`community/posts/${no}`);
      alert("삭제가 완료되었습니다.");
      return navigate(-1);
    }
  };
  const postTime = moment(datas.createdAt).fromNow(); // post 작성 시간
  console.log(no);
  // useEffect(() => {
  //   setData(initialState.users[no]);
  // }, []);

  useEffect(() => {
    async function getCommunityDetailDdata() {
      try {
        await api
          .get(`community/postsDetail/${no}`)
          .then(
            (res) => (
              setDatas(res.data[0]),
              console.log(res.data[0]),
              setLocation(res.data[0].location)
            )
          );
      } catch (res) {
        console.log(res);
      }
    }
    getCommunityDetailDdata();
  }, [no]);
  return (
    <>
      <Row justify="center">
        <DetailCol>
          {currentUserData.id === datas.user_id && (
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
          )}

          <Row>
            <Col span={10}>
              <div className="community-detail-main">
                <h1>{datas.title}</h1>
                <p>{postTime}</p>
                <b>
                  {<Avatar size="small" icon={<UserOutlined />} />}
                  {datas.nickname}
                </b>
                <p>
                  {<EnvironmentOutlined />} {location.name} | {location.address}
                </p>
                <p className="community-detail-discription">
                  {datas.description}
                </p>
              </div>
            </Col>
            <Col span={14} push={2}>
              <Row>
                <Card
                  style={{
                    width: 360,
                  }}
                  cover={
                    <>
                      {console.log(location.latitude)}
                      <Map
                        center={{
                          lat: 36.342114,
                          lng: 127.205563,
                        }}
                        style={{
                          width: "100%",
                          height: "250px",
                          margin: "0px auto",
                        }}
                        level={8}
                      >
                        <MapMarker
                          position={{
                            lat: 36.342114,
                            lng: 127.205563,
                          }}
                        />
                      </Map>
                    </>
                  }
                >
                  <Meta
                    title={
                      <p>
                        {<EnvironmentOutlined />}
                        {location.name} | {location.address}
                      </p>
                    }
                    description={
                      <p>
                        {datas.visitDate} <br />
                        {datas.personnel} 명 모집됨
                      </p>
                    }
                  />
                </Card>
              </Row>
              <NonIconBlueBtn text={"참여신청"}></NonIconBlueBtn>
            </Col>
          </Row>
          <CommentList currentUserData={currentUserData} datas={datas} />
        </DetailCol>
      </Row>
    </>
  );
}

export default CommunityDetail;
