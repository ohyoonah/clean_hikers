import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import initialState from "./data";

function CommunityDetail({ handleRemove, post, match, location, history }) {
  const [data, setData] = useState({});
  const { no } = useParams();

  useEffect(() => {
    setData(initialState.users(no));
  }, []);
  return (
    <>
      <h1>{data.title}</h1>
    </>
  );
}

export default CommunityDetail;
