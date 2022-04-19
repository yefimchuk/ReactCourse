import React, {lazy, Suspense, useEffect} from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import News from "./Components/Content/News/News";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Header/Login/LoginContainer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./common/Loading/Loading";
import { initializingThunk } from "./BLL/App/appSlice";
import {
  getFriendSelector,
  getInitializedSelector,
} from "./BLL/App/appSelector";
import PrivateRoute from "./hoc/PrivateRoute";
const ProfileContainer = lazy(() => import("./Components/Content/Profile/ProfileContainer"));
const UsersContainer = lazy(() => import("./Components/Content/Users/UsersContainer"));
const MessageContainer = lazy(() => import("./Components/Content/Message/messageContainer"));

let App: any = () => {
  let dispatch = useDispatch();
  let initialized = useSelector(getInitializedSelector);
  let friendsData = useSelector(getFriendSelector);
  useEffect(() => {
    dispatch(initializingThunk({}));
  }, [dispatch]);

  if (!initialized) {
    return <Loading />;
  }
  return (
    <div className="App">
      <HeaderContainer />
      <Sidebar />

      <div className="app-wrapper-content">
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route
              path="/message/:id"
              element={
                <PrivateRoute>
                  <MessageContainer />
                </PrivateRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileContainer />
                </PrivateRoute>
              }
            />      <Route
              path="/"
              element={
                <PrivateRoute>
                  <ProfileContainer />
                </PrivateRoute>
              }
            />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/users" element={<UsersContainer />} />

          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
export default App;
