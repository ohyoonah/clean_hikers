import React from "react";
import { useState } from "react";
import MountainList from "../components/mountainDetail/MountainList.js";
import MountainCard from "../components/mountainDetail/MountainCard.js";
import MountainMap from "../components/mountainDetail/MountainMap.js";
import MountainDetail from "../components/mountainDetail/MountainDetail.js";
import styled from "styled-components";

const Box = styled.div`
  margin-bottom: 80px;
  height: 100%;
`;

const H1 = styled.h1`
  /* Text */
  font-weight: 700;
  text-align: center;
`;

const Bottom = styled.div`
  /* Display */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 30px;
  width: 1130px;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 30px;
`;

function MountainDetailPage() {
  const [isModal, setIsModal] = useState(false);
  const [detail, setDetail] = useState({});
  const [location, setLocation] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [search, setSearch] = useState("");
  const [pageNum, setPageNum] = useState(1);

  return (
    <Box>
      <MountainCard setIsModal={setIsModal} setDetail={setDetail} />
      <H1>궁금한 산을 검색해보세요</H1>
      <Bottom>
        <MountainList
          setIsModal={setIsModal}
          setDetail={setDetail}
          pageNum={pageNum}
          setPageNum={setPageNum}
          location={location}
          setLocation={setLocation}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          search={search}
          setSearch={setSearch}
        />
        <MountainMap setIsModal={setIsModal} setDetail={setDetail} />
      </Bottom>
      {isModal ? <MountainDetail setIsModal={setIsModal} detail={detail} /> : <></>}
    </Box>
  );
}

export default MountainDetailPage;
