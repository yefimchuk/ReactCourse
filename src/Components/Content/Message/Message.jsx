import React from "react";
import MessageAccounts from "./MessageInfo/MessageAccounts";
import s from "./MessageInfo/Message.module.css"


let Message = (props) => {



    let messageDataBLL = props.messageData.map(review => <MessageAccounts nickname={review.nickname}
                                                                    address={review.address}
                                                                    avatar={review.avatar}/>)

    return (
        <div className={s.account}>
            <div>
                {messageDataBLL}

            </div>

        </div>

    )
}
export default Message