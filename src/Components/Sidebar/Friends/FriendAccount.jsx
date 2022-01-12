import React from "react";
import s from "./Friends.module.css"

const FriendAccount = (props) => {
    return (

        <div className={s.friendAvatars}>

            <img className={s.avatars} src={props.avatar}/>


        </div>
    )
}
export default FriendAccount;