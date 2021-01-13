import React from "react";
import s from "../MessageAccounts.module.css"


const MessageAccounts = (props) => {

    return (

        <div className={s.account}>
            {props.message}
        </div>
    )
}
export default MessageAccounts;