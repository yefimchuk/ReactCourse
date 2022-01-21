import React from "react";
import MessageAccounts from "./MessageInfo/MessageAccounts";
import s from "./MessageInfo/Message.module.css"
import Dialogs from "./MessageInfo/Dialogs/Dialogs";
import {updateMessageTextActionCreator, updateReviewTextActionCreator} from "../../Redux/state";

let Message = (props) => {

    let newReviewElement = React.createRef()
    let UpdateMessage = () => {

        let text = newReviewElement.current.value;

        const action = updateMessageTextActionCreator(text);
        props.dispatch(action)
    }

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
                    <textarea onChange={UpdateMessage} ref={newReviewElement} value={props.NewMessageText}> </textarea>
                </div>

            </div>
        </div>


    )
}
export default Message