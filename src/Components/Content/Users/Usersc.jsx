import React from "react";
import s from "./Users.module.css"
import photo from "../../../img/—Pngtree—vector avatar icon_4013749.png"
import Pagination from "../../../common/pagination";
import {NavLink} from "react-router-dom";
import {UsersAPI} from "../../../API/API";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>

        {
            props.users.map(u => <div key={u.id}>

                <div className={s.User}>

                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img className={s.avatar}
                                     src={u.photos.small != null ? u.photos.small : u.photos.small = photo}/>
                            </NavLink>
                            <div>{
                                u.followed ? <button disabled={props.WaitingFollow.some(id => id === u.id)}
                                                     className={s.followed} onClick={() => {
                                        props.ToggleWaitingFollow(true, u.id)
                                        UsersAPI.Unfollow(u.id).then(data => {

                                            if (data.resultCode === 0)
                                                props.unfollow(u.id)
                                            props.ToggleWaitingFollow(false)
                                        })


                                    }}>Unfollow</button> :

                                    <button disabled={props.WaitingFollow.some(id => id === u.id)}
                                            className={s.unfollowed} onClick={() => {
                                        props.ToggleWaitingFollow(true)
                                        UsersAPI.Follow(u.id).then(data => {

                                            if (data.resultCode === 0)
                                                props.follow(u.id)
                                            props.ToggleWaitingFollow(false)
                                        })


                                    }}>Follow</button>
                            }</div>
                        </div>
                    <NavLink className={s.UserInfo} to={"/profile/" + u.id}>

                        <div className={s.left}>
                            <div className={s.nick}>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                        </div>
                        <div className={s.right}>
                            <div className={s.city}>{u.city}</div>
    
                        </div>

                    </NavLink>

                    </div>

            </div>)
        }
        <div>

<Pagination currentPage={props.currentPage} onPageChanged={props.onPageChanged} total={props.totalUserCount} pageCount={pageCount}/>
        </div>
    </div>


}

export default Users