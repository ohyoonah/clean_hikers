import { Card, Col, Row } from "antd";
import React, { useState } from "react";
import {
  CommunityNavStyled,
  CommunityNavCol,
} from "../styledComponents/CommunityNavStyled";
import CommunityItem from "./CommunityItem";
import initialState from "./data";

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

function CommunityNav({ setPosts, posts, setViewPost }) {
  const [activeTabKey1, setActiveTabKey1] = useState("allPost");
  const [tabs, setTabs] = useState(initialState.inputs.state);

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
            setViewPost={setViewPost}
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
          >
            {contentList[activeTabKey1]}
          </CommunityNavStyled>
        </CommunityNavCol>
      </Row>
    </>
  );
}

export default CommunityNav;
