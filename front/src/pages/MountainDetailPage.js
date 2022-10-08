import React from "react";
import MountainSearch from "../components/mountaionDetail/MountainSearch.js";
import MountainDetail from "../components/mountaionDetail/MountainDetail.js";
import MountainList from "../components/mountaionDetail/MountainList.js";

function MountainDetailPage() {
  return (
    <>
      <h1>MountainDetailPage</h1>
      <MountainSearch />
      {/* <MountainList /> */}
      <MountainDetail />
    </>
  );
}

export default MountainDetailPage;
