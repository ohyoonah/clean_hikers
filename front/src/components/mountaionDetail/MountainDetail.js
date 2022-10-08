// 모달창으로 띄워진 산 상세페이지
/* global kakao */
import styled from "styled-components";
import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Button, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const Card = styled.div`
  border: 0px solid black;
  border-radius: 20px;
  margin: 0 auto;
  padding: 30px;
  width: 500px;
  height: fit-content;
  box-shadow: 2px 3px 8px 0px rgb(150, 150, 150);
`;
const Detail = styled.div`
  padding-bottom: 30px;
  text-align: left;
`;

const ButtonWrapper = styled(Button)`
  border: 0;
  width: fit-content;
  height: 50px;
  padding: 0px 20px;
  outline: none; /* 포커스 시 파란테두리 제거 */
  font-size: 18px;
`;

function MountainDetailPage({ mountainName }) {
  return (
    <Card>
      <Detail>
        <Row justify="end">
          <ButtonWrapper style={{ height: "fit-content", width: "20px" }}>
            <CloseOutlined />
          </ButtonWrapper>
        </Row>
        <h1 style={{ marginBottom: "0em" }}>지리산</h1>
        경상남도 하동군 화개면 대성리
        <br />
        난이도 : 하
      </Detail>
      <Map
        center={{ lat: 35.336944, lng: 127.7305555 }}
        style={{ width: "100%", height: "250px", margin: "0px auto" }}
        level={8}
      >
        <MapMarker position={{ lat: 35.336944, lng: 127.7305555 }}></MapMarker>
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
