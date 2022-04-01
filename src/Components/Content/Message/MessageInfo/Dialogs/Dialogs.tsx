import React from "react";
import "../MessageAccounts.scss";

const MessageAccounts = (props: any) => {
  return <div className="message__account-message">{props.message}</div>;
};
export default MessageAccounts;
