import React from "react";
import s from "./Sidebar.module.css"

let Sidebar = () => {
    return (
        <div className={s.Sidebar}>

            <div className={s.header_text}>

                <div className={s.header_text1}>
                    <a href="/profile">Profile</a>
                </div>

                <div className={s.header_text1}>
                    <a href="/message">Message</a>
                </div>

                <div className={s.header_text1}>
                    <a href="/news">News</a>
                </div>

                <div className={s.header_text1}>
                    <a href="/music">Music</a>
                </div>
                <div className={s.header_text1}>
                    <a href="/settings">Settings</a>
                </div>
            </div>

        </div>
    )
}
export default Sidebar