
import { Login } from "./Login";
import { RootStateOrAny, useSelector } from "react-redux";
import { compose } from "redux";


let LoginAPIContainer = () => {
  let captchaURL = useSelector(
    (state: RootStateOrAny) => state.sliceAuth.captchaURL
  );

  return <Login captchaURL={captchaURL} />;
};

export default compose<any>()(LoginAPIContainer);
