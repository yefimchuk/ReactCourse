import React from "react";
import s from "../ProfileInfo/PersonalData.module.css"
import photo from "../../../../img/—Pngtree—vector avatar icon_4013749.png";

let PersonalInformation = (props) => {
    debugger
    return (
        <div className={s.account}>
            <div>
                <img className={s.accountAvatar}
                     src={props.avatar != null ? props.avatar : photo}/>
            </div>
            <div className={s.personalData}>
                <div className={s.text1}>Name: <div className={s.text2}>{props.name}</div></div>
                <div className={s.text}>Job: {props.job}</div>
                <div className={s.text}>GitHub:
                    <a href={`https://` + props.git} className={s.text2}> {props.git}</a>
                </div>
                <div className={s.text}>Instagram:
                    <a href={`https://` + props.youTube} className={s.text2}> {props.youTube}</a>
                </div>
                <div className={s.text}>YouTube:
                    <a href={`https://` + props.instagram} className={s.text2}> {props.instagram}</a>
                </div>


            </div>
        </div>

    )
}

export default PersonalInformation