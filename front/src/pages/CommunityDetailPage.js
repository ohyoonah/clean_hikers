import React, { useEffect } from "react";
import CommunityDetail from "../components/community/component/CommunityDetail";
import * as api from "../api/api";
import { useParams } from "react-router-dom";

function CommunityDetailPage() {
  return (
    <>
      <CommunityDetail />
    </>
  );
}

export default CommunityDetailPage;
