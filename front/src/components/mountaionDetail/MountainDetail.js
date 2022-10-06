// 모달창으로 띄워진 산 상세페이지
/* global kakao */
import styled from "styled-components";
import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Card = styled.div`
  border: 2px solid black;
  margin: 0 auto;
  width: 800px;
  height: 800px;
`;
const Detail = styled.div`
  padding: 10px;
  text-align: left;
`;
function MountainDetailPage({ mountainName }) {
  return (
    <Card>
      <Detail>
        <button>X</button>
        <h1>지리산</h1>
        경상남도 하동군 화개면 대성리
        <br />
        난이도 : 하<br />
      </Detail>
      <Map
        center={{ lat: 35.336944, lng: 127.7305555 }}
        style={{ width: "80%", height: "360px", margin: "0 auto", marginTop: "50px" }}
      >
        <MapMarker position={{ lat: 35.336944, lng: 127.7305555 }}></MapMarker>
      </Map>
      <button>함께하기</button>
    </Card>
  );
}
export default MountainDetailPage;
