import React from "react";
import MessageAccounts from "./MessageInfo/MessageAccounts";
import s from "./MessageInfo/Message.module.css"
import Dialogs from "./MessageInfo/Dialogs/Dialogs";
import {addNewMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/message-reducer";


let Message = (props) => {

    let newReviewElement = React.createRef()
    let UpdateMessage = () => {
        let text = newReviewElement.current.value;
let arr = [1,1,5,6];
console.log(arr)
        const action = updateMessageTextActionCreator(text)

        props.dispatch(action)

    }
    let AddNewMessage = () => {
        let text = props.NewMessageText
        const action = addNewMessageActionCreator()
        if (text !== "") {
            props.dispatch(action)
        }

    }
    let messageDataBLL = props.messageData.map((review) => <MessageAccounts nickname={review.nickname}
                                                                          address={review.address}
                                                                          avatar={review.avatar}/>
    )
    let dialogsDataBll = props.dialogsData.map((reviews) => <Dialogs message={reviews.message}/>
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
                <div className={s.postFlex}>
                    <textarea onChange={UpdateMessage} ref={newReviewElement} value={props.NewMessageText}> </textarea>
                    <div onClick={AddNewMessage} className={s.submit}>Send
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Message