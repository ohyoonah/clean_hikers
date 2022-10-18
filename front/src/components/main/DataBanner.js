import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Highlight, TextWrapper, Head, Description } from "./DataBannerStyled";
import MapChart from "./MapChart";
import * as api from "../../api/api";
import Loading from "../common/loading/Loading";

function DataBanner() {
  const [current, setCurrent] = useState(3);

  const [data, setData] = useState([]);

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
    <TextWrapper gutter={60}>
      <Col>
        <MapChart data={data} current={current} setCurrent={setCurrent} />
      </Col>
      <Col>
        <Head>
          <Highlight>{data[current]["name"]}</Highlight>의 연간 쓰레기 처리량은
        </Head>
        <Head>
          <Highlight>{data[current]["trash"]}</Highlight>톤 입니다.
        </Head>
        <Description>
          {(data[current]["trash"] * 1).toFixed(2)}톤의 쓰레기에서는...
        </Description>
        <Description>
          {(data[current]["trash"] * 0.778).toFixed(2)}
          톤의 온실가스가 발생해요.
        </Description>
        <Description>
          {`30년생 소나무 ${(
            (data[current]["trash"] * 0.778 * 1000) /
            6
          ).toFixed(0)}그루가 1년동안 일해야 해요.`}
        </Description>
      </Col>
    </TextWrapper>
  );
}

export default DataBanner;
