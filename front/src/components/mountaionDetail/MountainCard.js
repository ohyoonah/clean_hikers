/* 상단 쓰레기가 많은 산 출력부*/
import styled from "styled-components";

const Main = styled.div`
  /* Display & Box Model */
  width: 800px;
  height: fit-content;
  padding-bottom: 70px;
  border: 0px solid black;
  margin: 0 auto;
  text-align: center;
`;

const Img = styled.img`
  /* Display & Box Model */
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;

const Display = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const H1 = styled.h1`
  /* Display & Box Model */
  margin: 30px 0px;
  /* Text */
  font-weight: 700;
`;

const H3 = styled.h3`
  /* Display & Box Model */
  margin-bottom: 0em;
  /* Text */
  font-weight: 700;
`;

function MountainCard() {
  const MOUNTAIN = [
    {
      value: "jiri",
      name: "지리산",
      location: "경상남도 하동군",
      level: "하",
      lat: 35.336944,
      lng: 127.7305555,
      src: "https://upload.wikimedia.org/wikipedia/commons/b/be/%EA%B3%A0%EA%B0%9C%EA%B3%A0%EA%B0%9C%EB%84%88%EB%A8%B8%EB%84%88%EB%A8%B8.jpg",
    },
    {
      value: "taebaek",
      name: "태백산",
      location: "강원도 영월군",
      level: "상",
      lat: 37.0992392,
      lng: 128.9160404,
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Taebaeksan_2016_12_30_winter.jpg",
    },
    {
      value: "odae",
      name: "오대산",
      location: "강원도 강릉시",
      level: "상",
      lat: 37.7941467,
      lng: 128.5426327,
      src: "https://www.knps.or.kr/upload/contest/19/20201005070532865.jpg",
    },
    {
      value: "hanra",
      name: "한라산",
      location: "제주도",
      level: "중",
      lat: 33.3616666,
      lng: 126.5291666,
      src: "https://api.cdn.visitjeju.net/photomng/imgpath/201911/29/48bdb99e-20ba-4fb6-82f2-6ea79ceefb0d.jpg",
    },
  ];

  const CardList = MOUNTAIN.map((value, index) => (
    <div key={index}>
      <Img src={value.src} />
      <H3>{value.name}</H3>
      <div>{value.location}</div>
    </div>
  ));

  return (
    <Main>
      <H1>가장 쓰레기가 많은 산들이에요</H1>
      <Display>{CardList}</Display>
    </Main>
  );
}
export default MountainCard;
