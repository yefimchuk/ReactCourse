import React from "react";
import s from "./Users.module.css"
import photo from "../../../img/—Pngtree—vector avatar icon_4013749.png"
import Pagination from "../../../common/pagination";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}

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
                                u.followed ? <div className={s.followed} onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "40c673c9-7c95-4006-810b-f4926e37ac22",
                                            }
                                        }).then(a => {

                                            if (a.data.resultCode)
                                                props.unfollow(u.id)
                                        })


                                    }}>Unfollow</div> :
                                    <div className={s.unfollowed} onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "40c673c9-7c95-4006-810b-f4926e37ac22",
                                            }
                                        }).then(a => {

                                            if (a.data.resultCode === 0)
                                                props.follow(u.id)

                                        })


                                    }}>Follow</div>
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