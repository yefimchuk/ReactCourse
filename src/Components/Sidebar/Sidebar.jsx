import React from "react";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import {useSelector} from "react-redux";
import {getFriendsSelector} from "../../BLL/SideBar/sidebarSelector";

let Sidebar = (props) => {
  const friendsData = useSelector(getFriendsSelector)
  return (
    <nav className={s.Sidebar}>
      <div className={s.ItemFlex}>
        <div className={s.item}>
          <NavLink activeClassName="active" to="/profile">
            Profile
          </NavLink>
        </div>

        <div className={s.item}>
          <NavLink to="/message/:id">Message</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users">Users</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news">News</NavLink>
        </div>

        <div className={s.item}>
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings">Settings</NavLink>
        </div>
        <div className={s.item}>
          <Friends friendsData={friendsData} />
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
