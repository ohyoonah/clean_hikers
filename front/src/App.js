import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/common/navigation/Navigation";
import CommunityCreatePage from "./pages/CommunityCreatePage";
import CommunityPage from "./pages/CommunityPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MountainDetailPage from "./pages/MountainDetailPage";
import MountainSearchPage from "./pages/MountainSearchPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import "./App.css";
import "./fonts/font.css";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);
export const modeContext = createContext(null);

function App() {
  return (
    <DispatchContext.Provider>
      <UserStateContext.Provider>
        <modeContext.Provider>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" exact element={<MainPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route
                path="community/communityCreate"
                element={<CommunityCreatePage />}
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/users/:userId" element={<UserPage />} />
              <Route path="/detail" element={<MountainDetailPage />} />
              <Route path="/search" element={<MountainSearchPage />} />
            </Routes>
          </Router>
        </modeContext.Provider>
      </UserStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
