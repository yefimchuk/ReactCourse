import React from "react";

import s from "../ProfileInfo/PersonalData.module.css"

let PersonalData = (props) => {
    return (
        <div className={s.account}>
            <div>
                <img className={s.accountAvatar}
                     src={props.avatar}/>
            </div>
            <div className={s.personalData}>

                <div className={s.text1}>{props.name}</div>
                <div className={s.text}>Date of birth: {props.born}</div>
                <div className={s.text}>City: {props.city}</div>
                <div className={s.text}>Education: {props.education}</div>
                <div className={s.text}>Web Site: <a href={props.site}> GitHub</a></div>
            </div>
        </div>

    )
}

export default PersonalData