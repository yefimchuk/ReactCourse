import React, { Suspense, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";

import HeaderContainer from "./Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./common/Loading/Loading";
import { initializingThunk } from "./BLL/App/appSlice";
import { getInitializedSelector } from "./BLL/App/appSelector";
import PrivateRoute from "./hoc/PrivateRoute";
import MessageContainer from "./Components/Content/Message/Message";
import ProfileContainer from "./Components/Content/Profile/Profile";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import LoginContainer from "./Components/Header/Login/LoginContainer";
import PublicRoute from "./hoc/PublicRoute";

let App: any = () => {
  let dispatch = useDispatch();
  let initialized = useSelector(getInitializedSelector);
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
        <Suspense fallback={<Loading />}>
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
            />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <ProfileContainer />
                </PrivateRoute>
              }
            />

            <Route path="/users" element={<UsersContainer />} />

            <Route path="/profile/:userId" element={<ProfileContainer />} />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginContainer />
                </PublicRoute>
              }
            />

          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
export default App;
