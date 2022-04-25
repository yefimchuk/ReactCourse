import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import MyLoader from "../../../common/Loading/Skeleton";
import { GetNewProfile } from "../../../BLL/ProfilePage/profilePage";
import { getSliceProfileSelector } from "../../../BLL/ProfilePage/profileSelector";

let ProfileAPIContainer = () => {
  let props = useSelector(getSliceProfileSelector);
  const params = useParams();
  let dispatch = useDispatch();
  let [state] = useState(props);

  useEffect(() => {
    let userId = params.userId;
    if (!userId) {
      userId = props.id;
    }
    dispatch(GetNewProfile(userId));
  }, []);

  if (props === state || !props.Profile.fullName) {
    return <MyLoader />;
  }

  return <Profile {...props}  />;
};
export default compose()(ProfileAPIContainer);
