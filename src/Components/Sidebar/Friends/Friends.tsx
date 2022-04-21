import React from "react";
import "./Friends.scss";
import FriendAccount from "./FriendAccount";
import { useSelector } from "react-redux";
import { getFriendsSelector } from "../../../BLL/SideBar/sidebarSelector";

let Friends = () => {
  const friendsData = useSelector(getFriendsSelector);
  let messageDataBLL = friendsData.map(
    (review: { avatar: string }, index: number) => {
      if (index < 3) {
        return <FriendAccount avatar={review.avatar} />;
      }
    }
  );
  return (
    <div>
      <div className="side-bar__friend-text">Friends</div>
      <div className="side-bar__friend-avatar-flex">{messageDataBLL}</div>
    </div>
  );
};
export default Friends;
