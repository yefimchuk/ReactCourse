import React from "react";
import {addNewMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/message-reducer";
import Message from "./Message";

let MessageContainer = (props) => {

let state = props.store.getState()
    let UpdateMessage = (text) => {
        const action = updateMessageTextActionCreator(text)
        props.store.dispatch(action)

    }
    let AddNewMessage = () => {
        const action = addNewMessageActionCreator()
        props.store.dispatch(action)


    }

    return <Message AddNewMessage={AddNewMessage} UpdateMessage={UpdateMessage}
                    messageData={state.messagePage.messageData}
                    dialogsData={state.messagePage.dialogsData}
                    NewMessageText={state.messagePage.NewMessageText}
    />
}
export default MessageContainer