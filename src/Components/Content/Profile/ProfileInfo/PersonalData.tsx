import React from "react";
import "./PersonalData.scss";
import photo from "../../../../img/—Pngtree—vector avatar icon_4013749.png";

type PropsT = {
  avatar: string;
  job: string;
  git: string;
  name: string;
  youTube: string;
  instagram: string;
};
let PersonalInformation = ({
  avatar,
  job,
  git,
  name,
  youTube,
  instagram,
}: PropsT) => {
  return (
    <div className="profile__account">
      <div>
        <img className="profile__account-avatar" src={avatar != null ? avatar : photo} />
      </div>
      <div className="profile__personal-data-form">
        <div className="profile__personal-data-name">
          Name: <div className="profile__personal-data_text-name">{name}</div>
        </div>
        <div className="profile__personal-data_text">Job: {job}</div>
        <div className="profile__personal-data_text">
          GitHub:
          <a href={`https://` + git} className="profile__personal-data_text-name">
            {" "}
            {git}
          </a>
        </div>
        <div className="profile__personal-data_text">
          Instagram:
          <a href={`https://` + youTube} className="profile__personal-data_text-name">
            {" "}
            {youTube}
          </a>
        </div>
        <div className="profile__personal-data_text">
          YouTube:
          <a href={`https://` + instagram} className="profile__personal-data_text-name">
            {" "}
            {instagram}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
