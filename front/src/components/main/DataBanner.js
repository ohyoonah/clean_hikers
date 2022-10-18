import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Highlight } from "./DataBannerStyled";
import MapChart from "./MapChart";
import * as api from "../../api/api";
import Loading from "../common/loading/Loading";
import ReactTooltip from "react-tooltip";

function DataBanner() {
  const [current, setCurrent] = useState(0);

  const [data, setData] = useState([
    {
      id: "0",
      name: "가야산",
      langitude: "128.117935",
      latitude: "35.822119",
      trash: "23.192",
    },
    {
      id: "1",
      name: "백악산",
      langitude: "129.117935",
      latitude: "36.822119",
      trash: "17.3",
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const res = await api.get("main/data");
    console.log(res.data);
    setData(res.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Row
      style={{
        padding: "5% 10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col span={12}>
        <MapChart data={data} current={current} setCurrent={setCurrent} />
      </Col>
      <Col span={12} style={{ fontSize: "2vw" }}>
        <Highlight>{data[current]["name"]}</Highlight>의 연간 쓰레기 처리량은
        <Highlight>{(data[current]["trash"] * 1).toFixed(2)}</Highlight>톤
        입니다. <br></br>
        {(data[current]["trash"] * 1).toFixed(2)}톤의 쓰레기에서는{" "}
        {(data[current]["trash"] * 0.778).toFixed(2)}
        톤의 온실가스가 발생해요.<br></br>
        {(data[current]["trash"] * 0.778).toFixed(2)}톤의 온실가스를 상쇄하기
        위해서는
        <br></br>30년생 소나무{" "}
        <Highlight>
          {((data[current]["trash"] * 0.778 * 1000) / 6).toFixed(0)}
        </Highlight>{" "}
        그루가 1년동안 일해야 해요.
      </Col>
    </Row>
  );
}

export default DataBanner;
