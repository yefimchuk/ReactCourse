import React from "react";
import "./MessageAccounts.scss";
import { NavLink } from "react-router-dom";

interface IProps {
  [index: string]: string;
}
const MessageAccounts = (props: IProps) => {
  return (
    <div className="message__account">
      <img className="message__avatar" src={props.avatar} />

      <NavLink to={"/message/" + props.address} className="message__user">
        {props.nickname}{" "}
      </NavLink>
    </div>
  );
};
export default MessageAccounts;
