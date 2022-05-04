import React, { memo, useEffect, useState } from "react";
import "./Profile.scss";
import Review from "./ProfileInfo/Review";
import PersonalInformation from "./ProfileInfo/PersonalData";

import Post from "./Post";
import Edit from "./ProfileInfo/Status/Status";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileSelector,
  getSliceProfileSelector,
} from "../../../BLL/ProfilePage/profileSelector";
import { useParams } from "react-router";
import { GetNewProfile } from "../../../BLL/ProfilePage/profilePage";
import MyLoader from "../../../common/Loading/Skeleton";

let Profile = () => {
  let dispatch = useDispatch();
  let profile = useSelector(getProfileSelector);
  let isOwner = useParams().userId;
  let profileData = useSelector(getSliceProfileSelector);
  const params = useParams();
  let [state] = useState(profileData);

  useEffect(() => {
    let userId = params.userId;
    if (!userId) {
      userId = profileData.id;
    }
    dispatch(GetNewProfile(userId));
  }, []);

  if (profileData === state || !profileData.Profile.fullName) {
    return <MyLoader />;
  }

  let ReviewItem = [...profileData.ReviewData]
    .reverse()
    .map((review) => (
      <Review
        avatar={review.avatar}
        likes={review.likes}
        message={review.message}
        id={review.id}
        data={profileData.ReviewData}
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
        avatar={profile.photos.large}
        name={profile.fullName}
        job={profile.lookingForAJobDescription}
        git={profile.contacts.github}
        youTube={profile.contacts.youtube}
        instagram={profile.contacts.instagram}
        status={profile.aboutMe}
      />

      {!isOwner ? <Edit /> : null}

      <Post />
      {ReviewItem}
    </div>
  );
};

export default memo(Profile);
