import { Menu, Card } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommunityNavStyled from "../styledComponents/CommunityNav";
import { CommunityItem } from "./CommunityList";

const tabList = [
  {
    key: "allPost",
    tab: "전체",
  },
  {
    key: "cleanReview",
    tab: "클린후기",
  },
  {
    key: "recruting",
    tab: "모집중",
  },
  {
    key: "recruted",
    tab: "모집완료",
  },
];

function CommunityNav({ posts, handleRemove, setViewPost }) {
  const [activeTabKey1, setActiveTabKey1] = useState("allPost");

  const contentList = {
    allPost: (
      <p>
        {posts.map((post) => (
          <CommunityItem
            key={post.id}
            posts={posts}
            post={post}
            setViewPost={setViewPost}
          />
        ))}
      </p>
    ),
    cleanReview: (
      <p>
        {posts.map((post) => (
          <CommunityItem
            key={post.id}
            post={post}
            handleRemove={handleRemove}
          />
        ))}
      </p>
    ),
    recruting: <p>content1</p>,
    recruted: <p>content2</p>,
  };

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  return (
    <CommunityNavStyled>
      <Card
        style={{
          width: "100%",
        }}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
    </CommunityNavStyled>
  );
}

export default CommunityNav;
