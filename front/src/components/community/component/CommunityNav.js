import { Card, Col, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import {
  CommunityNavStyled,
  CommunityNavCol,
  SelectStyled,
} from "../styledComponents/CommunityNavStyled";
import CommunityItem from "./CommunityItem";
import initialState from "./data";
import * as api from "../../../api/api";

const { Option } = Select;
const tabList = [
  {
    key: "allPost",
    tab: "전체",
  },
  {
    key: "클린후기",
    tab: "클린후기",
  },
  {
    key: "모집중",
    tab: "모집중",
  },
  {
    key: "모집완료",
    tab: "모집완료",
  },
];

function CommunityNav({ setPosts, posts }) {
  const [activeTabKey1, setActiveTabKey1] = useState("allPost");
  const [tabs, setTabs] = useState(initialState.inputs.state);
  const [stateNum, setStateNum] = useState(1);
  const [station, setStation] = useState();

  // 데이터 어떻게 받아오실지 몰라서 일단 요렇게 남겨놓아요!
  const mountainData = [
    { name: "덕유산", id: "1" },
    { name: "지리산", id: "2" },
  ];

  const filterItem = posts
    .filter((post) => post.station === tabs)
    .map((post) => <CommunityItem key={post.no} post={post} />);

  const contentList = {
    allPost: (
      <p>
        {posts.map((post) => (
          <CommunityItem
            key={post.no}
            posts={posts}
            setPosts={setPosts}
            post={post}
          />
        ))}
      </p>
    ),
    클린후기: <div>{filterItem}</div>,
    모집중: <div>{filterItem}</div>,
    모집완료: <p>{filterItem}</p>,
  };

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  return (
    <>
      <Row justify="center">
        <CommunityNavCol>
          <CommunityNavStyled
            style={{
              width: "100%",
            }}
            tabList={tabList}
            activeTabKey={activeTabKey1}
            onTabChange={(key) => {
              onTab1Change(key);
              setTabs(key);
            }}
            tabBarExtraContent={
              <SelectStyled bordered={false} placeholder="산 전체">
                {mountainData.map((mountain) => {
                  return <Option key={mountain.name}>{mountain.name}</Option>;
                })}
              </SelectStyled>
            }
          >
            {contentList[activeTabKey1]}
          </CommunityNavStyled>
        </CommunityNavCol>
      </Row>
    </>
  );
}

export default CommunityNav;
