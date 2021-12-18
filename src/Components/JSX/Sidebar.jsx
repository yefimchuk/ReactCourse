import React from "react";
import s from "../CSS/Sidebar.module.css"
let Sidebar = () => {
    return(
        <div className={s.Sidebar}>

            <div className={s.header_text}>
                <div className={s.header_text1}>Home</div>
                <div className={s.header_text1}>About us</div>
                <div className={s.header_text1}>Contact</div>
                <div className={s.header_text1}>Setting</div>
            </div>

        </div>
    )
}
export default Sidebar