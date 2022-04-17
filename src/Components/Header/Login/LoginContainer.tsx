import React from "react";
import { Login } from "./Login";
import { RootStateOrAny, useSelector } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirectToProfile } from "../../../hoc/WithAuthRedirectToProfile";

let LoginAPIContainer = (props: {
  LoginThunk: Function;
  captchaURL: string;
}) => {
  let captchaURL = useSelector(
    (state: RootStateOrAny) => state.sliceAuth.captchaURL
  );
  return <Login captchaURL={captchaURL} />;
};

export default compose<any>()(LoginAPIContainer);
