import React, {useState} from "react";
import "./status.scss";
import {useFormik} from "formik";
import {UpdateProfile} from "../../../../../BLL/ProfilePage/profilePage";
import {useDispatch, useSelector} from "react-redux";
import {GithubOutlined, InstagramOutlined, UserOutlined, YoutubeOutlined} from "@ant-design/icons";
import {getProfileSelector} from "../../../../../BLL/ProfilePage/profileSelector";

let Edit = React.memo(({}: any) => {
    let dispatch = useDispatch();
    let formData = useSelector(getProfileSelector)
    console.log(formData)
    let [editMode, setEditMode] = useState(false);
    // states for edit
    let [UseStatus, setNewStatus] = useState("");
    let upload = (e: any) => {
        return e.target.files[0];
    }
    let activatedEditMode = () => {
        setEditMode(true);
    };
    const save = () => {
        setEditMode(false);
        /*     dispatch(UpdateStatusThunk(formik.values.status));*/
    };
    let cancel = () => {
        setEditMode(false);

    };

    const formik = useFormik({
        initialValues: {
            userId: formData.userId,
            lookingForAJobDescription: formData.lookingForAJobDescription,
            fullName: formData.fullName,
            contacts: {
                github: formData.contacts.github,
                instagram: formData.contacts.instagram,
                youtube: formData.contacts.youtube
            },
            aboutMe: formData.aboutMe
        },
        onSubmit: (values) => {
            setEditMode(false);
            dispatch(UpdateProfile(values))

        },
    });


    return (
        <div className="profile__edit">
            {editMode ? (
                <form onSubmit={formik.handleSubmit} className="profile__edit_activated">

                    <input type="file" name="photo" id="upload-photo" onChange={upload}/>

                    <span className="profile__status-text">Name</span>
                    <input
                        className="profile__edit-input"
                        placeholder="Name"
                        id="fullName"
                        name="fullName"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}

                    />


                    <span className="profile__status-text">Status</span>
                    <textarea
                        className="profile__edit-input"
                        placeholder="status"
                        id="aboutMe"
                        name="aboutMe"
                        onChange={formik.handleChange}
                        value={formik.values.aboutMe}

                    />

                    <div className="profile__edit_link" >
                        <UserOutlined style={{fontSize: '25px', color: '#bbbaba'}}/>
                        <input
                            className="profile__edit-input"
                            placeholder="Job"
                            id="lookingForAJobDescription"
                            name="lookingForAJobDescription"
                            onChange={formik.handleChange}
                            value={formik.values.lookingForAJobDescription}

                        />
                    </div>
                    <div className="profile__edit_link">
                        <GithubOutlined style={{fontSize: '25px', color: '#bbbaba'}}/>
                        <input
                            className="profile__edit-input"
                            placeholder="GitHub"
                            id="gitHub"
                            name="contacts.github"
                            onChange={formik.handleChange}
                            value={formik.values.contacts.github}
                        />
                    </div>
                    <div className="profile__edit_link">
                        <InstagramOutlined style={{fontSize: '25px', color: '#bbbaba'}}/>
                        <input
                            className="profile__edit-input"
                            placeholder="Instagram"
                            id="instagram"
                            name="contacts.instagram"
                            onChange={formik.handleChange}
                            value={formik.values.contacts.instagram}
                        />
                    </div>
                    <div className="profile__edit_link">
                        <YoutubeOutlined style={{fontSize: '25px', color: '#bbbaba'}}/>
                        <input
                            className="profile__edit-input"
                            placeholder="YouTube"
                            id="youTube"
                            name="contacts.youtube"
                            onChange={formik.handleChange}
                            value={formik.values.contacts.youtube}

                        />
                    </div>
                    <div className="profile__edit_link">
                        <div className="profile__edit__buttons">
                            <button className="profile__edit__buttons_save" type="submit">Save</button>
                            <button className="profile__edit__buttons_cancel" onClick={cancel}>Cancel</button>
                        </div>
                    </div>
                </form>
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
});
export default Edit;
