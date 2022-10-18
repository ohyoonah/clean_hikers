/* 상단 쓰레기가 많은 산 출력부*/
import { useState, useEffect } from "react";
import MountainDetail from "./MountainDetail.js";
import styled from "styled-components";
import * as api from "../../api/api";

const Main = styled.div`
  /* Display & Box Model */
  width: 1130px;
  max-width: 80%;
  height: fit-content;
  padding-bottom: 30px;
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

const Card = styled.div`
  /* Other */
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
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

function MountainCard({ isModal, setIsModal, detail, setDetail }) {
  const [Mountains, setMountains] = useState([]);

  useEffect(() => {
    async function getMountainData() {
      try {
        await api.get("mountain/most-garbage").then((res) => setMountains(res.data));
      } catch (e) {
        console.log(e);
      }
    }
    getMountainData();
  }, []);

  const CardList = Mountains.map((detail, index) => (
    <Card
      key={index}
      onClick={() => {
        setIsModal(true);
        setDetail(detail);
      }}
    >
      <Img src={detail.img} />
      <H3>{detail.name}</H3>
      <div>{detail.location}</div>
    </Card>
  ));

  return (
    <Main>
      <H1>가장 쓰레기가 많은 산들이에요</H1>
      <Display>{CardList}</Display>
      {isModal ? <MountainDetail setIsModal={setIsModal} detail={detail} /> : <></>}
    </Main>
  );
}
export default MountainCard;
