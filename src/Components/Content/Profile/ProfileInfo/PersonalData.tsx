import React from "react";
import "./PersonalData.scss"
import photo from "../../../../img/—Pngtree—vector avatar icon_4013749.png";

type PropsT = {
    avatar: string,
    job: string,
    git: string
    name: string,
    youTube: string,
    instagram: string
}
let PersonalInformation = ({avatar, job, git, name, youTube, instagram}: PropsT ) => {

    return (
        <div className="account">
            <div>
                <img className="accountAvatar"
                     src={avatar != null ? avatar : photo}/>
            </div>
            <div className="personalData">
                <div className="text1">Name: <div className="text2">{name}</div></div>
                <div className="text">Job: {job}</div>
                <div className="text">GitHub:
                    <a href={`https://` + git} className="text2"> {git}</a>
                </div>
                <div className="text">Instagram:
                    <a href={`https://` + youTube} className="text2"> {youTube}</a>
                </div>
                <div className="text">YouTube:
                    <a href={`https://` + instagram} className="text2"> {instagram}</a>
                </div>


            </div>
        </div>

    )
}

export default PersonalInformation