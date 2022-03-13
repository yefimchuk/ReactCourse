import React from "react";
import logo from "../../logo.svg"
import s from "./Header.module.css"
import photo from "../../img/—Pngtree—vector avatar icon_4013749.png"

let Header = (props) => {
debugger
    if (props.date !== null) {
        if (props.date.photos.large === null) {

            props.date.photos.large = photo;
        }
    }

    return (
        <div className={s.Header}>
            <div className={s.Login}>
                <img src={logo} className="App-logo" alt={logo}/>

                {

                    props.date === null ? <a href={"https://social-network.samuraijs.com/login"}> Login</a> : props.IsLogin !== null ? <div className={s.info}>

                        <div className={s.name}>{props.date.name}</div>
                        <img className={s.avatar} src={props.date.photos.large}/>
                    </div> : null
                }

            </div>

        </div>
    )
}
export default Header