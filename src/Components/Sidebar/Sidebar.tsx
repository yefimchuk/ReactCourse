import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
let Sidebar = () => {
  return (
    <nav className="side-bar">
      <div className="side-bar__items_flex">
        <div className="side-bar__item">
          <NavLink to="/profile">Profile</NavLink>
        </div>

        <div className="side-bar__item">
          <NavLink to="/message/:id">Message</NavLink>
        </div>

        <div className="side-bar__item">
          <NavLink to="/users">Users</NavLink>
        </div>

        <div className="side-bar__item">
          <NavLink to="/settings">Settings</NavLink>
        </div>
        <div className="side-bar__item">
          <Friends />
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
