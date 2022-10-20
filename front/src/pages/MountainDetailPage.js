import React from "react";
import { useState, useEffect } from "react";
import MountainList from "../components/mountainDetail/MountainList.js";
import MountainCard from "../components/mountainDetail/MountainCard.js";
import MountainMap from "../components/mountainDetail/MountainMap.js";
import MountainDetail from "../components/mountainDetail/MountainDetail.js";
import styled from "styled-components";
import * as api from "../api/api";

const Box = styled.div`
  margin-bottom: 80px;
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
  const [mountainList, setMountainList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    async function getMountainData() {
      try {
        await api
          .get(
            `mountain/detail`,
            `?location=${location}&level=${difficulty}&currentPage=${pageNum}&mountain=${search}`
          )
          .then(
            (res) => (setMountainList(res.data.mountain), setMaxPage(res.data.maxPage))
          );
      } catch (e) {
        console.log(e);
      }
    }
    getMountainData();
  }, [pageNum]);

  return (
    <Box>
      <MountainCard setIsModal={setIsModal} setDetail={setDetail} />
      <H1>궁금하신 산을 검색해보세요</H1>
      <Bottom>
        <MountainList
          isModal={isModal}
          setIsModal={setIsModal}
          detail={detail}
          setDetail={setDetail}
          mountainList={mountainList}
          setMountainList={setMountainList}
          maxPage={maxPage}
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
      {isModal ? (
        <MountainDetail isModal={isModal} setIsModal={setIsModal} detail={detail} />
      ) : (
        <></>
      )}
    </Box>
  );
}

export default MountainDetailPage;
