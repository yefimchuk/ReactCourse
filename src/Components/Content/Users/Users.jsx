import React from "react";
import s from "./Users.module.css"
let Users = (props) => {

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.User}>
                    <div >
                        <img />
                        <div>follow</div>
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
