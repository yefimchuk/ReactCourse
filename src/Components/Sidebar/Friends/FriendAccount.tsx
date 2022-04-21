import React from "react";
import "./Friends.scss";

const FriendAccount = ({avatar}: { avatar: string }) => {
    return (
        <div className="side-bar__friend-avatar-flex">
            <img className="side-bar__friend-avatar" src={avatar}  alt={"side-bar__avatar"}/>
        </div>
    );
};
export default FriendAccount;
