import styled from "styled-components";

const Main = styled.div`
  border: 0px solid black;
  margin: 0 auto;
  padding-bottom: 30px;
  width: 800px;
  height: fit-content;
`;

const Img = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 20px;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Card = styled.div``;

function MountainCard() {
  const MOUNTAIN = [
    {
      value: "jiri",
      name: "지리산",
      location: "경상남도 하동군",
      level: "하",
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
      level: "상",
      lat: 37.7941467,
      lng: 128.5426327,
    },
    {
      value: "hanra",
      name: "한라산",
      location: "제주도",
      level: "중",
      lat: 33.3616666,
      lng: 126.5291666,
    },
  ];

  const CardList = MOUNTAIN.map((value) => (
    <Card>
      <Img src="https://upload.wikimedia.org/wikipedia/commons/b/be/%EA%B3%A0%EA%B0%9C%EA%B3%A0%EA%B0%9C%EB%84%88%EB%A8%B8%EB%84%88%EB%A8%B8.jpg" />
      <div style={{ textAlign: "center" }}>
        <b>{value.name}</b>
      </div>
      <div style={{ textAlign: "center" }}>{value.location}</div>
    </Card>
  ));

  return (
    <Main>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        <b>가장 쓰레기가 많은 산들이에요</b>
      </h1>
      <Display>{CardList}</Display>
    </Main>
  );
}
export default MountainCard;
