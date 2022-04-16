import React, { memo } from "react";
import "./Profile.scss";
import Review from "./ProfileInfo/Review";
import PersonalInformation from "./ProfileInfo/PersonalData";

import StatusHook from "./ProfileInfo/Status/statusHook";
import Post from "./Post";

let Profile = ({ ReviewData, status, Profile }: any) => {
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
        git={Profile.contacts.mainLink}
        youTube={Profile.contacts.youtube}
        instagram={Profile.contacts.instagram}
      />
      <StatusHook status={status} />
      <Post />
      {ReviewItem}
    </div>
  );
};

export default memo(Profile);
