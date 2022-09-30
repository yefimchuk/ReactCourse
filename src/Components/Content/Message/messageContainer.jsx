
import {addNewMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/message-reducer";
import Message from "./Message";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewMessage: () => {
            const action = addNewMessageActionCreator()
            dispatch(action)
        },
        UpdateMessage: (text) => {
            const action = updateMessageTextActionCreator(text)
            dispatch(action)

        }
    }
}
const mapStateToProps = (state) => {


    return {

        messageData: state.messagePage.messageData,
        dialogsData: state.messagePage.dialogsData,
        NewReviewText: state.messagePage.NewMessageText,

    }
}

let MessageContainer = connect(mapStateToProps,mapDispatchToProps)(Message);

export default MessageContainer