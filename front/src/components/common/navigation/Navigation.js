import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { ROUTES } from "../../../enum/routes";
import { UserStateContext, DispatchContext } from "../../../App";
import {
  HeaderLight,
  LogoWrapper,
  LogoImage,
  NavMenu,
  ProfileIcon,
} from "./NavigationStyled";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  const isLogin = !!userState.user;

  const items = [
    {
      label: "홈",
      key: ROUTES.HOME,
    },
    {
      label: "산찾기",
      key: ROUTES.MOUNTAIN.DETAIL,
    },
    {
      label: "커뮤니티",
      key: ROUTES.COMMUNITY.ROOT,
    },
    !isLogin && {
      label: "로그인",
      key: ROUTES.USER.LOGIN,
    },
    isLogin && {
      label: <ProfileIcon src="/profilecircle.svg" width="45px" />,
      key: "sub menu",
      children: [
        {
          label: "마이페이지",
          key: ROUTES.USER.USER_PAGE,
        },
        { type: "divider" },
        {
          label: "로그아웃",
          key: "logout",
        },
      ],
    },
  ];

  async function onClick(e) {
    if (e.key == "logout") {
      sessionStorage.removeItem("userToken");
      await dispatch({ type: "LOGOUT" });
      navigate(ROUTES.HOME);
    } else if (e.key != "sub menu") {
      navigate(e.key);
    }
  }

  return (
    <Layout>
      <HeaderLight>
        <LogoWrapper onClick={() => navigate(ROUTES.HOME)}>
          <LogoImage src="/Logo.png" />
        </LogoWrapper>
        <NavMenu
          mode="horizontal"
          selectedKeys={location.pathname}
          items={items}
          onClick={onClick}
          triggerSubMenuAction="click"
        ></NavMenu>
      </HeaderLight>
    </Layout>
  );
}

export default Navigation;
