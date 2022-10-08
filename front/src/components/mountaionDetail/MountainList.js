/* 국립공원 리스트 */
import { useState } from "react";
import styled from "styled-components";
import MountainDetail from "./MountainDetail.js";

const List = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: 40% 40% 20%;
  width: 800px;
  height: 50px;
  padding: 0px 30px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 15px;

  /* Text */
  line-height: 50px;
  text-align: start;

  /* Other */
  cursor: pointer;
  transition-property: border, box-shadow; // 호버 시 테두리색 변경을 위한 코드
  transition-duration: 0.3s; // 호버 시 테두리색 변경을 위한 코드

  :hover {
    transition-property: border; // 호버 시 테두리색 변경을 위한 코드
    transition-duration: 0.3s; // 호버 시 테두리색 변경을 위한 코드
    border: 1px solid rgb(0, 130, 30);
    box-shadow: 1px 1px 2px 0px rgba(150, 150, 150, 0.8);
  }
`;

function MountainList() {
  const MOUNTAIN = [
    {
      value: "jiri",
      name: "지리산",
      location: "경상남도 하동군",
      level: "상",
      lat: 35.336944,
      lng: 127.7305555,
    },
    {
      value: "taebaek",
      name: "태백산",
      location: "강원도 영월군",
      level: "상",
      lat: 37.0992392,
      lng: 128.9160404,
    },
    {
      value: "odae",
      name: "오대산",
      location: "강원도 강릉시",
      level: "중",
      lat: 37.7941467,
      lng: 128.5426327,
    },
    {
      value: "hanra",
      name: "한라산",
      location: "제주도",
      level: "하",
      lat: 33.3616666,
      lng: 126.5291666,
    },
  ];
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState({});

  return (
    <div>
      {MOUNTAIN.map((value, index) => {
        return (
          <div key={index}>
            <List
              onClick={() => {
                setIsModal(true);
                setValue(value);
              }}
            >
              <div>
                <b>{value.name}</b>
              </div>
              <div style={{ textAlign: "start" }}>{value.location}</div>
              <div style={{ textAlign: "end" }}>
                <b>난이도</b> {value.level}
              </div>
            </List>
          </div>
        );
      })}
      {isModal ? <MountainDetail setIsModal={setIsModal} value={value} /> : <></>}
    </div>
  );
}
export default MountainList;
