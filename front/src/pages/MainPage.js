import React, { useEffect, useState } from "react";
import MainBanner from "../components/main/MainBanner";
import DataBanner from "../components/main/DataBanner";
import PromoBanner from "../components/main/PromoBanner";
import Loading from "../components/common/loading/Loading";

import * as api from "../api/api";

function MainPage() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const res = await api.get("main/data");
    setData(res.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <MainBanner mountains={data} />
      <DataBanner data={data} />
      <PromoBanner />
    </div>
  );
}

export default MainPage;
