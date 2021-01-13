import React from "react";
import MessageAccounts from "./MessageInfo/MessageAccounts";
import s from "./MessageInfo/Message.module.css"
import Dialogs from "./MessageInfo/Dialogs/Dialogs";


let Message = (props) => {

    let messageDataBLL = props.messageData.map(review => <MessageAccounts nickname={review.nickname}
                                                                          address={review.address}
                                                                          avatar={review.avatar}/>
    )
    let dialogsDataBll = props.dialogsData.map(reviews => <Dialogs message={reviews.message}/>
    )

    return (
        <div className={s.message}>
            <div className={s.account}>
                <div>
                    {messageDataBLL}

                </div>
                
            </div>

            <div className={s.dialogs}>
                <div>
                    {dialogsDataBll}

                </div>

            </div>
        </div>


    )
}
export default Message