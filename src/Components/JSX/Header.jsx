import React from "react";
import logo from "../../logo.svg"
import s from "../CSS/Header.module.css"
let Header = () => {
    return (
        <div className={s.Header}>
    <img src={logo} className="App-logo" alt={logo}/>

        </div>
    )
}
export default Header