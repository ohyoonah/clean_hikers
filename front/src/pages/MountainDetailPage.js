import React from "react";
import { useState } from "react";
import MountainSearch from "../components/mountaionDetail/MountainSearch.js";
import MountainList from "../components/mountaionDetail/MountainList.js";
import MountainCard from "../components/mountaionDetail/MountainCard.js";

function MountainDetailPage() {
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState({});
  const MOUNTAIN = [
    {
      value: "0",
      name: "지리산",
      location: "경상남도 하동군",
      level: "하",
      lat: 35.336944,
      lng: 127.7305555,
      img: "https://upload.wikimedia.org/wikipedia/commons/b/be/%EA%B3%A0%EA%B0%9C%EA%B3%A0%EA%B0%9C%EB%84%88%EB%A8%B8%EB%84%88%EB%A8%B8.jpg",
    },
    {
      value: "1",
      name: "태백산",
      location: "강원도 영월군",
      level: "상",
      lat: 37.0992392,
      lng: 128.9160404,
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Taebaeksan_2016_12_30_winter.jpg",
    },
    {
      value: "2",
      name: "오대산",
      location: "강원도 강릉시",
      level: "상",
      lat: 37.7941467,
      lng: 128.5426327,
      img: "https://www.knps.or.kr/upload/contest/19/20201005070532865.jpg",
    },
    {
      value: "3",
      name: "한라산",
      location: "제주도",
      level: "중",
      lat: 33.3616666,
      lng: 126.5291666,
      img: "https://api.cdn.visitjeju.net/photomng/imgpath/201911/29/48bdb99e-20ba-4fb6-82f2-6ea79ceefb0d.jpg",
    },
  ];
  return (
    <div>
      <MountainCard
        MOUNTAIN={MOUNTAIN}
        isModal={isModal}
        setIsModal={setIsModal}
        setValue={setValue}
        value={value}
      />
      <MountainSearch />
      <MountainList
        MOUNTAIN={MOUNTAIN}
        isModal={isModal}
        setIsModal={setIsModal}
        setValue={setValue}
        value={value}
      />
    </div>
  );
}

export default MountainDetailPage;
