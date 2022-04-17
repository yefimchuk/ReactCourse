import Message from "./Message";

import { compose } from "redux";
import { WithAuthRedirectToLogin } from "../../../hoc/WithAuthRedirectToLogin";
import {
  dialogsDataSelector,
  messageDataSelector,
} from "../../../BLL/Message/messageSelector";
import { useSelector } from "react-redux";

let MessageContainerAPI = () => {
  let messageData = useSelector(messageDataSelector);
  let dialogsData = useSelector(dialogsDataSelector);

  return <Message dialogsData={dialogsData} messageData={messageData} />;
};

export default compose()(MessageContainerAPI);
