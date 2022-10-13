import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import initialState from "./data";

function CommunityDetail({ post }) {
  const [data, setData] = useState(initialState.users);
  const { no } = useParams();

  useEffect(() => {
    setData(initialState.users[no]);
  }, []);
  return (
    <>
      <h1>{data.title}</h1>
      <p>지역 : {data.location}</p>
      <p>{data.discription}</p>
    </>
  );
}

export default CommunityDetail;
