import React from "react";
import logo from "../../logo.svg"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

let Header = (props) => {

    return (
        <div className={s.Header}>
            <div className={s.Login}>
                <img src={logo} className="App-logo" alt={logo}/>
                <NavLink to={"login"}> Login</NavLink>
            </div>

        </div>
    )
}
export default Header