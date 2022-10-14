/* 상단 쓰레기가 많은 산 출력부*/
import MountainDetail from "./MountainDetail.js";
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

function MountainCard({ MOUNTAIN, isModal, setIsModal, value, setValue }) {
  const CardList = MOUNTAIN.map((v, index) => (
    <Card
      key={index}
      onClick={() => {
        setIsModal(true);
        setValue(v);
      }}
    >
      <Img src={v.src} />
      <H3>{v.name}</H3>
      <div>{v.location}</div>
    </Card>
  ));

  return (
    <Main>
      <H1>가장 쓰레기가 많은 산들이에요</H1>
      <Display>{CardList}</Display>
      {isModal ? <MountainDetail setIsModal={setIsModal} value={value} /> : <></>}
    </Main>
  );
}
export default MountainCard;
