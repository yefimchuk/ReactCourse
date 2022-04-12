import React from "react";
import s from "./Friends.module.css";
import FriendAccount from "./FriendAccount";

let Friends = (props) => {
  let messageDataBLL = props.friendsData.map((review, index) => {
    if (index < 3) {
      return <FriendAccount avatar={review.avatar} />;
    }
  });
  return (
    <div>
      <div className={s.text}>Friends</div>
      <div className={s.friendAvatars}>{messageDataBLL}</div>
    </div>
  );
};
export default Friends;
