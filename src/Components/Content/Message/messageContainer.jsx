import {AddNewMessage, UpdateMessage} from "../../Redux/message-reducer";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";


const mapStateToProps = (state) => {


    return {

        messageData: state.messagePage.messageData,
        dialogsData: state.messagePage.dialogsData,
        NewReviewText: state.messagePage.NewMessageText,

    }
}
let AuthRedirectComponent = withAuthRedirect(Message)
let MessageContainer = connect(mapStateToProps,
    {
        AddNewMessage,
        UpdateMessage,
    })(AuthRedirectComponent);

export default MessageContainer