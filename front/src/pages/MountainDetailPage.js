import React from "react";
import MountainSearch from "../components/mountaionDetail/MountainSearch.js";
import MountainList from "../components/mountaionDetail/MountainList.js";
import MountainCard from "../components/mountaionDetail/MountainCard.js";

function MountainDetailPage() {
  return (
    <>
      <MountainCard />
      <MountainSearch />
      <MountainList />
    </>
  );
}

export default MountainDetailPage;
