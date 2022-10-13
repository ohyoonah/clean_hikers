import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/common/navigation/Navigation";
import Footer from "./components/common/navigation/Footer";
import CommunityCreatePage from "./pages/CommunityCreatePage";
import CommunityPage from "./pages/CommunityPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MountainDetailPage from "./pages/MountainDetailPage";
import MountainSearchPage from "./pages/MountainSearchPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import { loginReducer } from "./reducer";
import { ROUTES } from "./enum/routes";

import "./App.css";
import "./fonts/font.css";

import * as api from "./api/api";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);
export const modeContext = createContext(null);

function App() {
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  async function fetchCurrentUser() {
    try {
      const res = await api.get("user");
      const currentUser = res.data;
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });
      console.log("로그인 상태");
    } catch {
      console.log("로그아웃 상태");
    }
    setIsFetchCompleted(true);
  }

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetchCompleted) {
    return "Loading..";
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={userState}>
        <modeContext.Provider>
          <Router>
            <Navigation />
            <Routes>
              <Route path={ROUTES.HOME} exact element={<MainPage />} />
              <Route path={ROUTES.COMMUNITY.ROOT} element={<CommunityPage />} />
              <Route
                path={ROUTES.COMMUNITY.COMMUNITY_CREATE}
                element={<CommunityCreatePage />}
              />
              <Route path={ROUTES.USER.LOGIN} element={<LoginPage />} />
              <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
              <Route path={ROUTES.USER.USER_PAGE} element={<UserPage />} />
              <Route
                path={ROUTES.MOUNTAIN.DETAIL}
                element={<MountainDetailPage />}
              />
              <Route
                path={ROUTES.MOUNTAIN.SEARCH}
                element={<MountainSearchPage />}
              />
            </Routes>
            <Footer />
          </Router>
        </modeContext.Provider>
      </UserStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
