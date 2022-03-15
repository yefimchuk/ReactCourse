import {AddNewMessage} from "../../Redux/message-reducer";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {


    return {

        messageData: state.messagePage.messageData,
        dialogsData: state.messagePage.dialogsData,

    }
}
export default compose(
    connect(mapStateToProps, {
        AddNewMessage,
    }),
    withAuthRedirect,
)
(Message);