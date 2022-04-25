import React, { memo } from "react";
import "./Profile.scss";
import Review from "./ProfileInfo/Review";
import PersonalInformation from "./ProfileInfo/PersonalData";

import Status from "./ProfileInfo/Status/Status";
import Post from "./Post";
import Edit from "./ProfileInfo/Status/Status";
import { useSelector } from "react-redux";
import { getProfileSelector } from "../../../BLL/ProfilePage/profileSelector";
import {useParams} from "react-router";

let Profile = ({ ReviewData, status }: any) => {
  let Profile = useSelector(getProfileSelector);
  let isOwner = useParams().userId

  let ReviewItem = [...ReviewData]
    .reverse()
    .map((review) => (
      <Review
        avatar={review.avatar}
        likes={review.likes}
        message={review.message}
        id={review.id}
        data={ReviewData}
      />
    ));

  return (
    <div>
      <img
        className="profile__image-top"
        src="https://tproger.ru/s3/uploads/2021/02/iconfinder_reactjs_javascript_library_atom_atomic_react_5362908-cover.png"
        alt={"theme"}
      />

      <PersonalInformation
        avatar={Profile.photos.large}
        name={Profile.fullName}
        job={Profile.lookingForAJobDescription}
        git={Profile.contacts.github}
        youTube={Profile.contacts.youtube}
        instagram={Profile.contacts.instagram}
      />

        {!isOwner?<Edit status={status} />: null}

      <Post />
      {ReviewItem}
    </div>
  );
};

export default memo(Profile);
