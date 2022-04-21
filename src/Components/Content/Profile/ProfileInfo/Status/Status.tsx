import React, {useState} from "react";
import "./status.scss";
import {useFormik} from "formik";
import {UpdateStatusThunk} from "../../../../../BLL/ProfilePage/profilePage";
import {useDispatch} from "react-redux";
import {GithubOutlined, InstagramOutlined, UserOutlined, YoutubeOutlined} from "@ant-design/icons";

let Edit = ({
                name,
                status,
                job,
                gitHub,
                instagram,
                youTube,
            }: any) => {
    let dispatch = useDispatch();

    let [editMode, setEditMode] = useState(false);
    // states for edit
    let [UseStatus, setNewStatus] = useState("");
    let upload = (e: any) => {

        console.log("hello")
      return   e.target.files[0];
    }
    let activatedEditMode = () => {
        setEditMode(true);
    };
    const save = () => {
        setEditMode(false);
        dispatch(UpdateStatusThunk(formik.values.status));
    };
    let cancel = () => {
        setEditMode(false);
        dispatch(UpdateStatusThunk(formik.values.status));
    };


    const formik = useFormik({
        initialValues: {
            name: name,
            status: status,
            job: job,
            gitHub: gitHub,
            instagram: instagram,
            youTube: youTube,
        },
        onSubmit: (values) => {
        },
    });


    return (
        <div className="profile__edit">
            {editMode ? (
                <div className="profile__edit_activated">

                    <input type="file" name="photo" id="upload-photo" onChange={upload}/>

                    <span className="profile__status-text">Name</span>
                    <input
                        className="profile__edit-input"
                        placeholder="Name"
                        id="names"
                        name="names"
                        onChange={formik.handleChange}
                        value={formik.values.name}

                    />


                    <span className="profile__status-text">Status</span>
                    <textarea
                        className="profile__edit-input"
                        placeholder="Status"
                        id="status"
                        name="status"
                        onChange={formik.handleChange}
                        value={formik.values.status}

                    />

                    <div className="profile__edit_link" >
                        <UserOutlined style={{fontSize: '25px', color: '#bbbaba'}}/>
                        <input
                            className="profile__edit-input"
                            placeholder="Job"
                            id="job"
                            name="job"
                            onChange={formik.handleChange}
                            value={formik.values.job}

                        />
                    </div>
                    <div className="profile__edit_link">
                        <GithubOutlined style={{fontSize: '25px', color: '#bbbaba'}}/>
                        <input
                            className="profile__edit-input"
                            placeholder="GitHub"
                            id="gitHub"
                            name="gitHub"
                            onChange={formik.handleChange}
                            value={formik.values.gitHub}
                        />
                    </div>
                    <div className="profile__edit_link">
                        <InstagramOutlined style={{fontSize: '25px', color: '#bbbaba'}}/>
                        <input
                            className="profile__edit-input"
                            placeholder="Instagram"
                            id="instagram"
                            name="instagram"
                            onChange={formik.handleChange}
                            value={formik.values.instagram}
                        />
                    </div>
                    <div className="profile__edit_link">
                        <YoutubeOutlined style={{fontSize: '25px', color: '#bbbaba'}}/>
                        <input
                            className="profile__edit-input"
                            placeholder="YouTube"
                            id="youTube"
                            name="youTube"
                            onChange={formik.handleChange}
                            value={formik.values.youTube}

                        />
                    </div>
                    <div className="profile__edit_link">
                        <div className="profile__edit__buttons">
                            <button className="profile__edit__buttons_save" onClick={save}>Save</button>
                            <button className="profile__edit__buttons_cancel" onClick={cancel}>Cancel</button>
                        </div>
                    </div>
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
                <div className="profile__edit-button" onClick={activatedEditMode}>
                    Edit mode
                </div>
            )}
      </div>
  );
};
export default Edit;
