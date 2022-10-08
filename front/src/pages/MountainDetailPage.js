import React from "react";

import MountainList from "../components/mountaionDetail/MountainList.js";
import MountainSearch from "../components/mountaionDetail/MountainSearch.js";
import MountainDetail from "../components/mountaionDetail/MountainDetail.js";


function MountainDetailPage() {
  return (
    <>
      <h1>MountainDetailPage</h1>
      <MountainSearch />
      <MountainDetail />

    </>
  );
}

export default MountainDetailPage;
