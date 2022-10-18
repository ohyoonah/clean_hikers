import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as api from "../api/api";
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

  return (
    <Box>
      <MountainCard
        isModal={isModal}
        setIsModal={setIsModal}
        setDetail={setDetail}
        detail={detail}
      />
      <MountainSearch />
      <MountainList
        isModal={isModal}
        setIsModal={setIsModal}
        setDetail={setDetail}
        detail={detail}
      />
    </Box>
  );
}

export default MountainDetailPage;
