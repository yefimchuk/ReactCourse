const addnewmessage = "ADD-NEW-MESSAGE";
const updatemessagetext = "UPDATE-MESSAGE-TEXT";
export const MessageReducer = (state: any, action: any) => {
    switch (action.type) {
        case updatemessagetext:
            state.NewMessageText = action.newText
            return state
        case addnewmessage:
            let NewMessage = {
                message: state.NewMessageText
            }
            state.dialogsData.push(NewMessage)
            state.NewMessageText = '';

    }

}