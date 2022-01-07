import React from "react";
import {addNewMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/message-reducer";
import Message from "./Message";
import Store from "../../../context-react";

let MessageContainer = (props) => {
return <Store.Consumer>
    {
        (store) => {
            let state = store.getState()
            let UpdateMessage = (text) => {
                const action = updateMessageTextActionCreator(text)
                store.dispatch(action)

            }
            let AddNewMessage = () => {
                const action = addNewMessageActionCreator()
                store.dispatch(action)


            }

            return <Message AddNewMessage={AddNewMessage} UpdateMessage={UpdateMessage}
                            messageData={state.messagePage.messageData}
                            dialogsData={state.messagePage.dialogsData}
                            NewMessageText={state.messagePage.NewMessageText}
            />
        }
    }
</Store.Consumer>

}
export default MessageContainer