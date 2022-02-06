import React from "react";
import s from "./Users.module.css"

let Users = (props) => {

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.User}>
                    <div>
                        <img className={s.avatar} src={u.avatar}/>
                        <div>{
                            u.followed ? <div className={s.followed} onClick={() => {props.unfollow(u.id)}}>Unfollow</div> :
                                <div  className={s.unfollowed} onClick={() => {props.follow(u.id)}}>Follow</div>
                        }</div>
                    </div>
                    <div className={s.UserInfo}>
                        <div className={s.left}>
                            <div className={s.nick}>{u.nickname}</div>
                            <div className={s.status}>{u.status}</div>
                        </div>
                        <div className={s.right}>
                            <div className={s.city}>{u.city}</div>
                            <div className={s.country}>{u.country}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }

    </div>
}
export default Users;
