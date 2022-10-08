import React from "react";
import MountainSearch from "../components/mountaionDetail/MountainSearch.js";
import MountainList from "../components/mountaionDetail/MountainList.js";
import MountainCard from "../components/mountaionDetail/MountainCard.js";
import styled from "styled-components";

const Main = styled.div``;

function MountainDetailPage() {
  return (
    <Main>
      <MountainCard />
      <MountainSearch />
      <MountainList />
    </Main>
  );
}

export default MountainDetailPage;
