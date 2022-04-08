import React from "react";
import "../MessageAccounts.scss"


const MessageAccounts = (props: any) => {

    return (

        <div className="account">
            {props.message}

        </div>
    )
}
export default MessageAccounts;