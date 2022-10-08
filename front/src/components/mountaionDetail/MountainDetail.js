// 모달창으로 띄워진 산 상세페이지
// /* global kakao */
import styled from "styled-components";
import React from "react";
import { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Button, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const Card = styled.div`
  /* Positioning */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

const Detail = styled.div`
  /* Display & Box Model */
  padding-bottom: 30px;

  /* Text */
  text-align: left;
`;

const ButtonWrapper = styled(Button)`
  /* Display & Box Model */
  width: fit-content;
  height: 50px;
  padding: 0px 20px;
  border: 0;

  /* Text */
  font-size: 18px;

  /* Other */
  outline: none;
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
  return (
    <Card>
      <Detail>
        <Row justify="end">
          <ButtonWrapper
            onClick={() => {
              setIsModal(false);
            }}
          >
            <CloseOutlined />
          </ButtonWrapper>
        </Row>
        <h1 style={{ marginBottom: "0em" }}>{value.name}</h1>
        위치 {value.location}
        <br />
        난이도 {value.level}
      </Detail>
      <Map
        center={{ lat: value.lat, lng: value.lng }}
        style={{ width: "100%", height: "250px", margin: "0px auto" }}
        level={8}
      >
        <MapMarker position={{ lat: value.lat, lng: value.lng }} />
      </Map>
      <Row justify="center" style={{ paddingTop: "30px" }}>
        <ButtonWrapper type="primary" justify="center">
          함께하기
        </ButtonWrapper>
      </Row>
    </Card>
  );
}
export default MountainDetailPage;
