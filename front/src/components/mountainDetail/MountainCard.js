/* 상단 쓰레기가 많은 산 출력부*/
import { useState, useEffect } from "react";
import styled from "styled-components";
import * as api from "../../api/api";

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

const Flip = styled.div`
  width: 180px;
  height: 180px;
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
  /*부모의 자식 요소가 3차원의 애니메이션 효과를 가질때, 300px의 거리에서 보는 원근감을 줌*/
  perspective: 300px;

  /* Display & Box Model */
  width: 180px;
  height: 180px;

  /* Other */
  cursor: pointer;

  .item {
    width: 180px;
    height: 180px;
    border: none;
    /*카드의 뒷면을 안보이게 처리-카드가 뒤집히면 뒷면이 안보임*/
    backface-visibility: hidden;
    transition: 1s;
  }

  .item.front {
    /* 앞면 카드가 부유하게 되어, 뒷면 카드가 아래에서 위로 올라감 -> 요소 두개가 겹치게 됨*/
    position: absolute;
    /* 명시적으로 기본값 설정, 없어도 됨*/
    transform: rotateY(0deg);
  }

  :hover .item.front {
    transform: rotateY(180deg);
  }

  .item.back {
    /*y축을 중심으로 -180도 회전*/
    transform: rotateY(-180deg);
    border-radius: 20px;
    background-color: gray;
  }

  :hover .item.back {
    transform: rotateY(0deg);
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

const H3 = styled.h3`
  /* Positioning */
  position: absolute;
  bottom: -13px;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Display & Box Model */
  width: 180px;
  margin-bottom: 0em;
  border-radius: 0px 0px 20px 20px;

  /* Color */
  background-color: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.9);

  /* Text */
  font-weight: 700;
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
      <Flip className="item front">
        <Img src={detail.image} />
        <H3>{detail.name}</H3>
      </Flip>
      <Flip className="item back">연간 쓰레기 처리량{detail.trash}</Flip>
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
