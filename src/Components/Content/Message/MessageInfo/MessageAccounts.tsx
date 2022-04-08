import React from "react";
import "./MessageAccounts.scss"
import {NavLink} from "react-router-dom";

const MessageAccounts = (props: any) => {
    return (

        <div className="account">
            <img className="avatar" src={props.avatar}/>

            <NavLink to={"/message/" + props.address} className="user">{props.nickname}    </NavLink>
        </div>
    )
}
export default MessageAccounts;