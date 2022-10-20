/* 상단 쓰레기가 많은 산 출력부*/
import { useState, useEffect } from "react";
import styled from "styled-components";
import * as api from "../../api/api";
import { theme } from "../common/styles/palette";

const Main = styled.div`
  /* Display & Box Model */
  width: 1130px;
  max-width: 80%;
  height: fit-content;
  padding-bottom: 30px;
  border: 0px solid black;
  margin: 50px auto;
  text-align: center;
`;

const Img = styled.img`
  /* Display & Box Model */
  display: block;
  width: 180px;
  height: 180px;
  border-radius: 20px;
`;

const Card = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  width: 180px;
  height: 180px;

  /* Other */
  cursor: pointer;

  transition: 0.5s;

  :hover {
    transform: scale(1.3);
    transition: 0.5s;
  }

  :hover .mountainName {
    transition: 0.5s;
    display: block;
  }
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

const MountainName = styled.h3`
  /* Positioning */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Display & Box Model */
  display: none;
  width: 180px;
  height: 180px;
  border-radius: 20px;
  padding: 10px 0px;

  /* Color */
  color: rgba(255, 255, 255, 0.9);

  /* Text */
  font-weight: 700;
  font-size: 14px;
  text-align: center;

  /* Other */
  transition: 0.5s;

  :hover {
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

function MountainCard({ setIsModal, setDetail }) {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    async function getMountainData() {
      try {
        await api.get("mountain/most-garbage").then((res) => setCardList(res.data));
      } catch (e) {
        console.log(e);
      }
    }
    getMountainData();
  }, []);

  const ShowCardList = cardList.map((detail, index) => (
    <Card
      key={index}
      className="container"
      onClick={() => {
        setIsModal(true);
        setDetail(detail);
      }}
    >
      <Img src={detail.image} />
      <MountainName className="mountainName">
        {detail.name}
        <br />
        연간 쓰레기 처리량 {Number(detail.trash).toFixed(1)}톤
      </MountainName>
    </Card>
  ));

  return (
    <Main>
      <H1>가장 쓰레기가 많은 산들이에요</H1>
      <Display>{ShowCardList}</Display>
    </Main>
  );
}
export default MountainCard;
