import React from "react";
import "../Profile.scss";
import { sendLike } from "../../../../BLL/ProfilePage/profilePage";
import { useDispatch } from "react-redux";

let Review = (props: any) => {
  let dispatch = useDispatch();
  let Like = () => {
    dispatch(sendLike(props));
  };

  return (
    <div className="profile__review">
      <img src={props.avatar} className="profile__review-avatar" />
      <div className="profile__review-info">
        <div className="profile__review-text">{props.message}</div>
        <div onClick={Like} className="profile__like">
          <img
            className="profile__like-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png"
          />
          {props.likes}
        </div>
      </div>
    </div>
  );
};
export default React.memo(Review);
