import React from "react";
import s from "./Users.module.css"
import photo from "../../../img/—Pngtree—vector avatar icon_4013749.png"
import Pagination from "../../../common/pagination";
import {NavLink} from "react-router-dom";

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
                                        props.unfollow(u.id)
                                    }}>Unfollow</div> :
                                    <div className={s.unfollowed} onClick={() => {
                                        props.follow(u.id)
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
                            <div className={s.country}>{u.country}</div>
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