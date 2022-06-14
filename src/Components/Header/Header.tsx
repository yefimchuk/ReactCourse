import logo from "../../logo.svg";
import "./Header.scss";
import {
  LoginOutlined,
  LogoutOutlined,
  setTwoToneColor,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import photo from "../../img/—Pngtree—vector avatar icon_4013749.png";
import { useDispatch, useSelector } from "react-redux";
import { UnLogin } from "../../BLL/Auth/authSlice";
import {
  getAuthDateSelector,
  getAuthIsLoginSelector,
} from "../../BLL/Auth/authSelector";
import { getProfileSelector } from "../../BLL/ProfilePage/profileSelector";

setTwoToneColor("#eb2f96");

let Header = () => {
  let date = useSelector((state) => getAuthDateSelector(state));
  let profile = useSelector(getProfileSelector);
  let isLogin = useSelector((state) => getAuthIsLoginSelector(state));
  const dispatch = useDispatch();
  console.log(date);

  return (
    <div className="Header">
      <div className="LoginHeader">
        <img src={logo} className="App-logo" alt={logo} />

        {!isLogin ? (
          <div>
            <NavLink className="nlink" to={"/login"}>
              {" "}
              <div>Login</div>
               <LoginOutlined className="login" />
            </NavLink>
          </div>
        ) : isLogin ? (
          <div className="info">
            <div className="name">{date.name}</div>
            <img
              className="avatar"
              src={profile.photos.large === null ? photo : profile.photos.large}
              alt="avatar"
            />
            <LogoutOutlined
              className="logout"
              onClick={() => {
                dispatch(UnLogin({ date }));
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Header;
