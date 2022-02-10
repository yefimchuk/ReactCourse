import s from "./Users.module.css";
import photo from "../../../img/user.png";
import React from "react";
import * as axios from "axios"
class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(a => {
            this.props.setUsers(a.data.items)
        })
    }


render()
{
    return <div>
        {
            this.props.users.map(u => <div key={u.id}>
                <div className={s.User}>
                    <div>
                        <img className={s.avatar}
                             src={u.photos.small != null ? u.photos.small : u.photos.small = photo}/>
                        <div>{
                            u.followed ? <div className={s.followed} onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</div> :
                                <div className={s.unfollowed} onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</div>
                        }</div>
                    </div>
                    <div className={s.UserInfo}>
                        <div className={s.left}>
                            <div className={s.nick}>{u.name}</div>
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


}

export default Users