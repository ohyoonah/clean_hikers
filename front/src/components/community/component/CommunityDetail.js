import "moment/locale/ko";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ButtonRow,
  CommunityDetailAlign,
  CreateRow,
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
import { ROUTES } from "../../../enum/routes";

function CommunityDetail({}) {
  const mapRef = useRef();
  const navigate = useNavigate();
  const [datas, setDatas] = useState("");
  const [location, setLocation] = useState({});
  const [currentUserData, setCurrentUserData] = useState("");
  const [textState, setTextState] = useState("참여신청");

  const { no } = useParams();

  const [style, setStyle] = useState({
    width: "100%",
    height: "250px",
    margin: "0px auto",
  });

  const [latitude, setLatitude] = useState(35.86125);
  const [longitude, setLongitude] = useState(127.746131);
  const [personnel, setPersonnel] = useState(0);

  const cardDecription = () => {
    let visitDate = moment(datas.visitDate);
    visitDate = visitDate.format("YYYY년 MM월 DD일");

    return datas.station == "클린후기" ? (
      <p>
        {visitDate} <br />
        {datas.personnel}명과 함께했어요!
      </p>
    ) : (
      <p>
        {visitDate} <br />
        모집인원 : {datas.personnel} <br />
        신청인원 : {personnel}
      </p>
    );
  };

  useEffect(() => {
    const map = mapRef.current;
    if (map) map.relayout();
  }, [style]);

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

  //게시글(모임)에 참석하기
  const handleApply = async function () {
    if (window.confirm(`${textState} 하시겠습니까?`)) {
      console.log("현재유저데이터 : ", currentUserData);
      try {
        await api
          .post(`community/posts/${no}/user`, {
            post_id: no,
            email: currentUserData.email,
          })
          .then(
            (res) => (
              setPersonnel(res.data.count),
              console.log("전달받은 데이터 : ", res.data.count)
            )
          );
        alert(`${textState} 완료되었습니다.`);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const postTime = moment(datas.createdAt).fromNow(); // post 작성 시간

  useEffect(() => {
    async function getCommunityDetaildata() {
      try {
        await api
          .get(`community/postsDetail/${no}`)
          .then((res) => (setDatas(res.data), setLocation(res.data.location)));
      } catch (res) {
        console.log(res);
      }
    }
    getCommunityDetaildata();
  }, [no]);

  useEffect(() => {
    setLatitude(location.latitude);
    setLongitude(location.longitude);
  }, [location]);

  //인원수 불러오기
  useEffect(() => {
    async function getPersonnelData() {
      try {
        await api
          .get(`community/posts/${no}/people`)
          .then(
            (res) => (
              setPersonnel(res.data.length),
              console.log("확인", res.data.length)
            )
          );
      } catch (e) {
        console.error("error", e);
      }
    }
    getPersonnelData();
  }, [no]);

  return (
    <>
      <CreateRow justify="center">
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
              <Link to={`/community/communityDetail/communityEdit/${no}`}>
                <Button>수정</Button>
              </Link>
            </Col>
          )}
          {console.log(datas)}
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
              <Row justify="end">
                <Card
                  style={{
                    width: 360,
                  }}
                  cover={
                    <>
                      <Map
                        center={{
                          lat: latitude,
                          lng: longitude,
                        }}
                        style={style}
                        level={8}
                        ref={mapRef}
                      >
                        <MapMarker
                          position={{
                            lat: latitude,
                            lng: longitude,
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
                    description={cardDecription()}
                  />
                </Card>
              </Row>
              <ButtonRow justify="end">
                {currentUserData == "" ? (
                  <NonIconBlueBtn
                    text="참여하려면 로그인하세요."
                    onClick={() => navigate(ROUTES.USER.LOGIN)}
                  />
                ) : (
                  currentUserData.id != datas.user_id &&
                  datas.station != "클린후기" &&
                  (textState === "참여신청" ? (
                    <NonIconBlueBtn
                      onClick={() => (handleApply(), setTextState("참여취소"))}
                      text={textState}
                    ></NonIconBlueBtn>
                  ) : personnel == datas.personnel ? (
                    <Button disabled>모집 완료</Button>
                  ) : (
                    <NonIconBlueBtn
                      onClick={() => (handleApply(), setTextState("참여신청"))}
                      text={textState}
                    ></NonIconBlueBtn>
                  ))
                )}
              </ButtonRow>
            </Col>
          </Row>
          <CommentList currentUserData={currentUserData} datas={datas} />
        </DetailCol>
      </CreateRow>
    </>
  );
}

export default CommunityDetail;
