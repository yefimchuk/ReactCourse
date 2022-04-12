import React from "react";
import "./MessageAccounts.scss";
import { NavLink } from "react-router-dom";

const MessageAccounts = (props: any) => {
  return (
    <div className="accountMessage ">
      <img className="avatarMessage" src={props.avatar} />

      <NavLink to={"/message/" + props.address} className="userMessage ">
        {props.nickname}{" "}
      </NavLink>
    </div>
  );
};
export default MessageAccounts;
