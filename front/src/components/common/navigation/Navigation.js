import React from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { theme } from "../styles/palette";
import { ROUTES } from "../../../enum/routes";

function Navigation() {
  const { Header } = Layout;

  const location = useLocation();

  const HeaderLight = styled(Header)`
    background-color: white;
    border-bottom: 1px solid #f0f0f0;
  `;

  const NavMenu = styled(Menu)`
    display: flex;
    justify-content: end;
    font-size: 16px;

    & > .ant-menu-item-selected a,
    & > .ant-menu-item a:hover {
      color: ${theme.naturalGreen};
      font-weight: 700;
    }

    & .ant-menu-item::after,
    .ant-menu-submenu::after {
      border: none !important;
    }
  `;

  const LogoWrapper = styled.div`
    float: left;
    width: 180px;
    height: 44px;
    cursor: pointer;
  `;

  const LogoImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    padding: 4px 10px 8px 0;
  `;

  return (
    <Layout>
      <HeaderLight>
        <Link to={ROUTES.HOME}>
          <LogoWrapper>
            <LogoImage src="/Logo.png" />
          </LogoWrapper>
        </Link>
        <NavMenu mode="horizontal" selectedKeys={location.pathname}>
          <Menu.Item key={ROUTES.HOME}>
            <Link to={ROUTES.HOME}>
              <span>홈</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={ROUTES.MOUNTAIN.DETAIL}>
            <Link to={ROUTES.MOUNTAIN.DETAIL}>
              <span>산찾기</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={ROUTES.COMMUNITY.ROOT}>
            <Link to={ROUTES.COMMUNITY.ROOT}>
              <span>커뮤니티</span>
            </Link>
          </Menu.Item>
          {/* {isLogin ? ( */}
          <Menu.Item key={ROUTES.USER.USER_PAGE}>
            <Link to={ROUTES.USER.USER_PAGE}>MYPAGE ICON</Link>
          </Menu.Item>
          {/* ) : ( */}
          <Menu.Item key={ROUTES.USER.LOGIN}>
            <Link to={ROUTES.USER.LOGIN}>로그인</Link>
          </Menu.Item>
          {/* )} */}
        </NavMenu>
      </HeaderLight>
    </Layout>
  );
}

export default Navigation;
