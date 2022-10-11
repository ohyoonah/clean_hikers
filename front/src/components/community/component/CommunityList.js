import { Pagination } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { RecruitBlueBtn } from "../../common/button/IconBtn";
import {
  RecruitBlueBtnAlign,
  CommunityNavStyled,
  CommunutyPaginationStyled,
  CommunityPagenationStyled,
  CommunityListAlign,
} from "../styledComponents/CommunityListStyled";
import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";

function CommunityNav() {
  return (
    <CommunityNavStyled>
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        <Menu.Item key="mail" className="community-navigate">
          전체
        </Menu.Item>
        <Menu.Item key="clean" className="community-navigate">
          클린후기
        </Menu.Item>
        <Menu.Item key="recruit" className="community-navigate">
          모집중
        </Menu.Item>
        <Menu.Item key="finRecruit" className="community-navigate">
          모집완료
        </Menu.Item>
      </Menu>
    </CommunityNavStyled>
  );
}

function CommunityItem() {
  return (
    <>
      <h3>ㅇㅇㅇ</h3>
    </>
  );
}

function CommunityList() {
  return (
    <div>
      <RecruitBlueBtnAlign>
        <Link to="communityCreate">
          <RecruitBlueBtn />
        </Link>
      </RecruitBlueBtnAlign>
      <CommunityListAlign>
        <CommunityNav />
        <CommunityItem />
        <CommunityPagenationStyled>
          <Pagination size="small" total={50} />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </div>
  );
}

export default CommunityList;
