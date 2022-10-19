import React from "react";
import { useState } from "react";
import MountainSearch from "../components/mountainDetail/MountainSearch.js";
import MountainList from "../components/mountainDetail/MountainList.js";
import MountainCard from "../components/mountainDetail/MountainCard.js";
import styled from "styled-components";

const Box = styled.div`
  margin-bottom: 30px;
`;

function MountainDetailPage() {
  const [isModal, setIsModal] = useState(false);
  const [detail, setDetail] = useState({});
  const [location, setLocation] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [search, setSearch] = useState("");
  const [mountainList, setMountainList] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  return (
    <Box>
      <MountainCard
        isModal={isModal}
        setIsModal={setIsModal}
        detail={detail}
        setDetail={setDetail}
      />
      <MountainSearch
        location={location}
        setLocation={setLocation}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        search={search}
        setSearch={setSearch}
        setMountainList={setMountainList}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
      <MountainList
        isModal={isModal}
        setIsModal={setIsModal}
        detail={detail}
        setDetail={setDetail}
        location={location}
        difficulty={difficulty}
        search={search}
        pageNum={pageNum}
        setPageNum={setPageNum}
        mountainList={mountainList}
        setMountainList={setMountainList}
      />
    </Box>
  );
}

export default MountainDetailPage;
