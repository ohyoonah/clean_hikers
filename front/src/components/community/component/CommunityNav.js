import { Menu, Card } from "antd";
import React, { useState } from "react";
import { CommunityNavStyled } from "../styledComponents/CommunityListStyled";

const tabList = [
  {
    key: "전체",
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
const contentList = {
  전체: <p></p>,
  클린후기: <p>content2</p>,
  모집중: <p>content1</p>,
  모집완료: <p>content2</p>,
};

function CommunityNav() {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  return (
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
  );
}

export default CommunityNav;
