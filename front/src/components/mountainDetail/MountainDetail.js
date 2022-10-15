// 모달창으로 띄워진 산 상세페이지
// /* global kakao */
import styled from "styled-components";
import React from "react";
import { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Button, Row, Tabs } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { NonIconGreenBtn } from "../common/button/NonIconBtn";
import { LowLevel, MiddelLevel, HighLevel } from "../common/level/Level";

const Modal = styled.div`
  /* Positioning */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;

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
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  /* backdrop-filter: blur(1px); */
`;

const Detail = styled.div`
  /* Text */
  text-align: left;
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

function MountainDetailPage({ mountainName, setIsModal, value }) {
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

  function PrintLevel() {
    let result;
    if (value.level === "하") {
      result = <LowLevel />;
    } else if (value.level === "중") {
      result = <MiddelLevel />;
    } else if (value.level === "상") {
      result = <HighLevel />;
    }
    return result;
  }

  return (
    <ModalBackground>
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
          <H1>{value.name}</H1>
          <b>위치</b> {value.location}
          <br />
          <b>난이도 </b>
          <PrintLevel />
        </Detail>

        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="위치" key="1">
            <Map
              center={{ lat: value.lat, lng: value.lng }}
              style={{ width: "100%", height: "250px", margin: "0px auto" }}
              level={8}
            >
              <MapMarker position={{ lat: value.lat, lng: value.lng }} />
            </Map>
          </Tabs.TabPane>
          <Tabs.TabPane tab="등산로" key="2">
            <Map
              center={{ lat: value.lat, lng: value.lng }}
              style={{ width: "100%", height: "250px", margin: "0px auto" }}
              level={7}
            >
              <MapMarker position={{ lat: value.lat, lng: value.lng }} />
            </Map>
          </Tabs.TabPane>
        </Tabs>

        <Row justify="center" style={{ paddingTop: "30px" }}>
          <NonIconGreenBtn text={"함께하기"} />
        </Row>
      </Modal>
    </ModalBackground>
  );
}
export default MountainDetailPage;
