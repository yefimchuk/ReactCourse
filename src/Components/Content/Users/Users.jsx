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
                            u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                                <button  onClick={() => {props.follow(u.id)}}>Follow</button>
                        }</div>
                    </div>
                    <div className={s.UserInfo}>
                        <div>
                            <div>name</div>
                            <div>status</div>
                        </div>
                        <div>
                            <div>city</div>
                            <div>country</div>
                        </div>
                    </div>
                </div>
            </div>)
        }

    </div>
}
export default Users;
