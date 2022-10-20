import React, { useEffect } from "react";
import CommunityDetail from "../components/community/component/CommunityDetail";
import * as api from "../api/api";
import { useParams } from "react-router-dom";

function CommunityDetailPage() {
  const { no } = useParams();

  return (
    <>
      <CommunityDetail no={no} />
    </>
  );
}

export default CommunityDetailPage;
