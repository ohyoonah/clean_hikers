import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
// import { UserStateContext, DispatchContext } from "../App";

function Navigation() {
  const { Header, Footer, Sider, Content } = Layout;
  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   const userState = useContext(UserStateContext);
  //   const dispatch = useContext(DispatchContext);

  //   const isLogin = !!userState.user;
  const isLogin = false;

  const navs = [
    { label: "홈", key: "home" },
    { label: "산찾기", key: "search" },
    { label: "커뮤니티", key: "community" },
    { label: "로그인", key: "login" },
  ];

  return (
    <div>header</div>
    // <Layout>
    //   <Header>
    //     <div className="logo">LOGO</div>
    //     <Menu
    //       mode="horizontal"
    //       defaultSelectedKeys={["1"]}
    //       items={navs.map((nav) => {
    //         return { key: nav.key, label: nav.label };
    //       })}
    //     />
    //     {isLogin ? (
    //       <div
    //       //   onClick={() => navigate("/users/:userId")}
    //       >
    //         MYPAGE ICON
    //       </div>
    //     ) : (
    //       <div
    //       //    onClick={() => navigate("/login")}
    //       >
    //         로그인
    //       </div>
    //     )}
    //   </Header>
    // </Layout>
  );
}

export default Navigation;
