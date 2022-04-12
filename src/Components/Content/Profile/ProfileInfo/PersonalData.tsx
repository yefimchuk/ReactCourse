import React from "react";
import "./PersonalData.scss";
import photo from "../../../../img/—Pngtree—vector avatar icon_4013749.png";
import { useDispatch } from "react-redux";
import { UpdatePhoto } from "../../../../BLL/ProfilePage/profilePage";

type PropsT = {
  avatar: string;
  job: string;
  git: string;
  name: string;
  youTube: string;
  instagram: string;
  status: string;
};
let PersonalInformation = ({
  avatar,
  job,
  git,
  name,
  youTube,
  instagram,
  status,
}: PropsT) => {
  console.log(git);
  let dispatch = useDispatch();
  const updatePhoto = (e: any) => {
    dispatch(UpdatePhoto(e.target.files[0]));
  };
  debugger;
  return (
    <div>
      <div className="profile__account">
        <label htmlFor="upload-photo" className="profile__status-text">
          <input
            type="file"
            name="photo"
            id="upload-photo"
            onChange={updatePhoto}
          />
          <img
            className="profile__account-avatar"
            src={avatar != null ? avatar : photo}
          />
        </label>

        <div className="profile__personal-data-form">
          <div className="profile__personal-data-name">
            Name: <div className="profile__personal-data_text-name">{name}</div>
          </div>
          <div className="profile__personal-data_text">Job: {job}</div>
          <div className="profile__personal-data_text">
            GitHub:
            <a
              href={`https://` + git}
              className="profile__personal-data_text-name"
            >
              {" "}
              {git}
            </a>
          </div>
          <div className="profile__personal-data_text">
            Instagram:
            <a
              href={`https://` + instagram}
              className="profile__personal-data_text-name"
            >
              {" "}
              {instagram}
            </a>
          </div>
          <div className="profile__personal-data_text">
            YouTube:
            <a
              href={`https://` + youTube}
              className="profile__personal-data_text-name"
            >
              {" "}
              {youTube}
            </a>
          </div>
        </div>


      </div>
      <div className="profile__account-status">{status}</div>
    </div>
  );
};

export default PersonalInformation;
