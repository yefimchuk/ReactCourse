import React from "react";
import s from "../MessageInfo/MessageAccounts.module.css"
import {NavLink} from "react-router-dom";

const MessageAccounts = (props) => {
    return (

        <div className={s.account}>
            <img className={s.avatar} src={props.avatar}/>

            <NavLink to={"/message/" + props.address} className={s.user}>{props.nickname}    </NavLink>
        </div>
    )
}
export default MessageAccounts;