import React from "react";
import MessageAccounts from "./MessageInfo/MessageAccounts";
import s from "./MessageInfo/Message.module.css"
import Dialogs from "./MessageInfo/Dialogs/Dialogs";
import {Navigate} from "react-router-dom";

let Message = (props) => {

    let newReviewElement = React.createRef()
    let onUpdateMessage = () => {

        let text = newReviewElement.current.value;
        props.UpdateMessage(text)
    }
    let onAddNewMessage = () => {

        let text = props.NewReviewText
        if (text !== "") {
            props.AddNewMessage()
        }

    }
    let messageDataBLL = props.messageData.map((review) => <MessageAccounts nickname={review.nickname}
                                                                            address={review.address}
                                                                            avatar={review.avatar}/>
    )

    let dialogsDataBll = props.dialogsData.map((reviews) => <Dialogs message={reviews.message}/>
    )

    if (!props.IsLogin) {
        return <Navigate to={"/login"}/>
    }
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
                <div className={s.postFlex}>
                    <textarea onChange={onUpdateMessage} ref={newReviewElement} value={props.NewReviewText}> </textarea>
                    <div onClick={onAddNewMessage} className={s.submit}>Send
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Message