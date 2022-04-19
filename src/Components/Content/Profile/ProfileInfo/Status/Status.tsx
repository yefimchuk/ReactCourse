import React, {useEffect, useState} from "react";
import "./status.scss";
import {useFormik} from "formik";
import {UpdateStatusThunk} from "../../../../../BLL/ProfilePage/profilePage";
import {useDispatch} from "react-redux";

let Edit = ({status}: { status: any }) => {
  let dispatch = useDispatch();
  let [editMode, setEditMode] = useState(false);
  let [UseStatus, setNewStatus] = useState("");
  let activatedEditMode = () => {
    setNewStatus(status);
    setEditMode(true);
  };
  let deactivatedEditMode = () => {
    setEditMode(false);
    dispatch(UpdateStatusThunk(formik.values.status));
  };

  const formik = useFormik({
    initialValues: {
      status: status,
    },
    onSubmit: (values) => {
    },
  });
  useEffect(() => {
    setNewStatus(formik.values.status);
  }, [formik.values.status]);

  return (
      <div className="profile__status">
        {editMode ? (
            <div className="profile__edit_activated">
              <span className="profile__status-text">Name</span>
              <input
                  className="profile__status-input"

              />
              <span className="profile__status-text">status</span>
              <input
                  className="profile__status-input"
                  id="status"
                  name="status"
                  onChange={formik.handleChange}
                  value={UseStatus}
                  autoFocus={true}

              />
              <span className="profile__status-text">job</span>
              <input
                  className="profile__status-input"

              />
              <span className="profile__status-text">gitHub</span>
              <input
                  className="profile__status-input"

              />
              <span className="profile__status-text">instagram</span>
              <input
                  className="profile__status-input"

              />
              <span className="profile__status-text">youTube</span>

            <button onClick={deactivatedEditMode}>save</button>
            </div>
        ) : (
            /* lookingForAJob: required(boolean)
                    lookingForAJobDescription: required(string)
                    fullName: required(string)
                    contacts: required(object)
                    github: required(string)
                    vk: required(string)
                    facebook: required(string)
                    instagram: required(string)
                    twitter: required(string)
                    website: required(string)
                    youtube: required(string)
                    mainLink: required(string)*/
            <div className="profile__status-text" onClick={activatedEditMode}>
              Edit mode
            </div>
        )}
      </div>
  );
};
export default Edit;
