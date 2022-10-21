// 모달창으로 띄워진 산 상세페이지
import styled from "styled-components";
import React from "react";
import { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Button, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { NonIconGreenBtn } from "../common/button/NonIconBtn";
import { Level } from "../common/level/Level";
import { Link } from "react-router-dom";
import { ROUTES } from "../../enum/routes";

const Modal = styled.div`
  /* Positioning */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  z-index: 100;

  /* Display & Box Model */
  box-shadow: 2px 3px 8px 0px rgb(150, 150, 150);
  width: 500px;
  height: fit-content;
  padding: 30px;
  border: 0px solid black;
  border-radius: 20px;
  margin: 0 auto;

  /* Color */
  background-color: white;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

const Detail = styled.div`
  /* Text */
  text-align: left;
  margin-bottom: 30px;
`;

const ClosedBtn = styled(Button)`
  /* Display & Box Model */
  width: fit-content;
  height: 50px;
  padding: 0px 20px;
  border: 0;
  border-radius: 10px;

  /* Text */
  font-size: 18px;

  /* Other */
  outline: none;
`;

const H1 = styled.h1`
  /* Display & Box Model */
  margin-bottom: 10px;

  /* Text */
  font-weight: 700;
  text-align: center;
`;

function MountainDetail({ setIsModal, detail }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <ModalBackground onClick={() => setIsModal(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Detail>
          <Row justify="end">
            <ClosedBtn
              onClick={() => {
                setIsModal(false);
              }}
            >
              <CloseOutlined />
            </ClosedBtn>
          </Row>
          <H1>{detail.name}</H1>
          <b>위치</b> {detail.address}
          <br />
          <b>등산 난이도 </b> <Level difficulty={detail.difficulty} />
          <br />
          <b>연간 쓰레기 처리량 </b> {Number(detail.trash).toFixed(1)}톤
        </Detail>
        <Map
          center={{ lat: detail.latitude, lng: detail.longitude }}
          style={{ width: "100%", height: "250px", margin: "0px auto" }}
          level={8}
        >
          <MapMarker position={{ lat: detail.latitude, lng: detail.longitude }} />
        </Map>
        <Row justify="center" style={{ paddingTop: "30px" }}>
          <Link to={ROUTES.COMMUNITY.COMMUNITY_CREATE}>
            <NonIconGreenBtn text={"함께하기"} />
          </Link>
        </Row>
      </Modal>
    </ModalBackground>
  );
}
export default MountainDetail;
