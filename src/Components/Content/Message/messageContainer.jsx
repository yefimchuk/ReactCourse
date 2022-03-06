import {AddNewMessage, UpdateMessage} from "../../Redux/message-reducer";
import Message from "./Message";
import {connect} from "react-redux";


const mapStateToProps = (state) => {


    return {

        messageData: state.messagePage.messageData,
        dialogsData: state.messagePage.dialogsData,
        NewReviewText: state.messagePage.NewMessageText,
        IsLogin: state.auth.isLogin
    }
}

let MessageContainer = connect(mapStateToProps,
    {
        AddNewMessage,
        UpdateMessage,
    })(Message);

export default MessageContainer