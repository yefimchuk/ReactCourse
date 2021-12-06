import React from "react";
import s from "./Sidebar.module.css"

let Sidebar = () => {
    return (
        <div className={s.Sidebar}>

            <div className={s.header_text}>

                <div className={s.header_text1}>
                    <a className={s.text} href="/profile">Profile</a>
                </div>

                <div className={s.header_text1}>
                    <a className={s.text} href="/message">Message</a>
                </div>

                <div className={s.header_text1}>
                    <a className={s.text} href="/news">News</a>
                </div>

                <div className={s.header_text1}>
                    <a className={s.text} href="/music">Music</a>
                </div>
                <div className={s.header_text1}>
                    <a  className={s.text} href="/settings">Settings</a>
                </div>
            </div>

        </div>
    )
}
export default Sidebar