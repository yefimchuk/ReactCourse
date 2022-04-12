import React from "react";
import Header from "./Header";

import { compose } from "redux";
import { WithAuthRedirectToProfile } from "../../hoc/WithAuthRedirectToProfile";
import {
  getAuthDateSelector,
  getAuthIsLoginSelector,
} from "../../BLL/Auth/authSelector";
import { useSelector } from "react-redux";

let HeaderContainerAPI = () => {
  let date = useSelector((state) => getAuthDateSelector(state));
  let isLogin = useSelector((state) => getAuthIsLoginSelector(state));

  return <Header date={date} isLogin={isLogin} />;
};

let mapStateToProps = (state: any) => {
  return {};
};

export default compose<any>()(HeaderContainerAPI);
