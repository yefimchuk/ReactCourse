import React from "react";

import s from "../ProfileInfo/PersonalData.module.css"

let PersonalInformation = (props) => {

    return (
        <div className={s.account}>
            <div>
                <img className={s.accountAvatar}
                     src={props.avatar}/>
            </div>
            <div className={s.personalData}>
                <div className={s.text1}>Name: <div className={s.text2}>{props.name}</div></div>
                <div className={s.text}>Job: {props.job}</div>
                <div className={s.text}>Web Site: <a href={props.site} className={s.text2}> GitHub</a>
                </div>

            </div>
        </div>

    )
}

export default PersonalInformation