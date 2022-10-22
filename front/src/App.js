import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/common/navigation/Navigation";
import Footer from "./components/common/navigation/Footer";
import CommunityCreatePage from "./pages/CommunityCreatePage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import CommunityPage from "./pages/CommunityPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MountainDetailPage from "./pages/MountainDetailPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import Loading from "./components/common/loading/Loading";
import CommunityEditPage from "./pages/CommunityEditPage";
import { loginReducer } from "./reducer";
import { ROUTES } from "./enum/routes";
import { HttpStatusCode } from "./enum/httpStautsCode";
import * as api from "./api/api";

import "antd/dist/antd.variable.min.css";
import "./fonts/font.css";
import { ConfigProvider } from "antd";

import { theme } from "./components/common/styles/palette";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  ConfigProvider.config({
    theme: {
      primaryColor: theme.naturalGreen,
    },
  });

  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  async function fetchCurrentUser() {
    try {
      const { data: currentUser, status } = await api.get("user/user-page");
      if (status === HttpStatusCode.Created) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: currentUser,
        });
        return console.log("로그인 상태");
      }
      throw new Error();
    } catch (e) {
      console.error(e);
      console.log("로그아웃 상태");
    } finally {
      setIsFetchCompleted(true);
    }
  }

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetchCompleted) {
    return <Loading />;
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={userState}>
        <Router>
          <Navigation />
          <Routes>
            <Route path={ROUTES.HOME} exact element={<MainPage />} />
            <Route path={ROUTES.COMMUNITY.ROOT} element={<CommunityPage />} />
            <Route
              path={ROUTES.COMMUNITY.COMMUNITY_CREATE}
              element={<CommunityCreatePage />}
            />
            <Route
              path={ROUTES.COMMUNITY.COMMUNITY_DETAIL}
              element={<CommunityDetailPage />}
            />
            <Route
              path={ROUTES.COMMUNITY.COMMUNITY_EDIT}
              element={<CommunityEditPage />}
            />
            <Route path={ROUTES.USER.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.USER.USER_PAGE} element={<UserPage />} />
            <Route
              path={ROUTES.MOUNTAIN.DETAIL}
              element={<MountainDetailPage />}
            />
          </Routes>
          <Footer />
        </Router>
      </UserStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
