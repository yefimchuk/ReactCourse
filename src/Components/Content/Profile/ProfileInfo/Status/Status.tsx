import React, {useState} from "react";
import "./status.scss";
import {Formik} from "formik";
import {UpdateProfile} from "../../../../../BLL/ProfilePage/profilePage";
import {useDispatch, useSelector} from "react-redux";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 705aba3 (create error list for edit mode)
import {
    getErrorMessageSelector,
    getIsLoginSelector,
    getProfileSelector
} from "../../../../../BLL/ProfilePage/profileSelector";
<<<<<<< HEAD
=======
import {getErrorMessageSelector, getProfileSelector} from "../../../../../BLL/ProfilePage/profileSelector";
>>>>>>> 141441d (create error message)
=======
>>>>>>> 705aba3 (create error list for edit mode)
import {GithubOutlined, InstagramOutlined, UserOutlined, YoutubeOutlined,} from "@ant-design/icons";
import EditErrorMessage from "./ErrorMessage";
import LoaderFollow from "../../../../../common/Loading/LoaderFollow";

let Edit = React.memo(({}: any) => {
    let dispatch = useDispatch();
    let formData = useSelector(getProfileSelector);
<<<<<<< HEAD
<<<<<<< HEAD
    let errors = useSelector(getErrorMessageSelector);
    console.log(errors)
    const isLogin = useSelector(getIsLoginSelector);
=======
    const errors = useSelector(getErrorMessageSelector);
>>>>>>> 141441d (create error message)
=======
    let errors = useSelector(getErrorMessageSelector);
    console.log(errors)
    const isLogin = useSelector(getIsLoginSelector);
>>>>>>> 705aba3 (create error list for edit mode)
    console.log(formData);
    let [editMode, setEditMode] = useState(false);
    // states for edit
    let [UseStatus, setNewStatus] = useState("");
    let upload = (e: any) => {
        return e.target.files[0];
    };
    let activatedEditMode = () => {
        setEditMode(true);
    };
    const save = () => {
<<<<<<< HEAD
<<<<<<< HEAD
        debugger
        return errors
=======
        setEditMode(false);
>>>>>>> 141441d (create error message)
=======
        debugger
        return errors
>>>>>>> 705aba3 (create error list for edit mode)
    };
    let cancel = () => {
        setEditMode(false);
    };

    function validateEmail(values: any) {
        const errors: any = {};
        if (!values.fullName) {
            errors.fullName = "Required";
        } else if (values.fullName.length > 15) {
            errors.fullName = "Must be 15 characters or less";
        }
        if (formData.errorMessage) {

            errors.error = formData.errorMessage;
        }


        return errors;
    }

    return (
        <div>

            <Formik
                initialValues={{
                    userId: formData.userId,
                    lookingForAJobDescription: formData.lookingForAJobDescription,
                    fullName: formData.fullName,
                    contacts: {
                        github: formData.contacts.github,
                        instagram: formData.contacts.instagram,
                        youtube: formData.contacts.youtube,
                    },
                    aboutMe: formData.aboutMe,

                }}
                validate={validateEmail}
<<<<<<< HEAD
<<<<<<< HEAD
                onSubmit={async (values) => {

                    let response = await dispatch(UpdateProfile(values));
debugger
                    if (!response.payload) {
=======
                onSubmit={(values) => {

                    dispatch(UpdateProfile(values));
                    debugger
                    if (!errors){
>>>>>>> 141441d (create error message)
=======
                onSubmit={async (values) => {

                    let response = await dispatch(UpdateProfile(values));
debugger
                    if (!response.payload) {
>>>>>>> 705aba3 (create error list for edit mode)
                        setEditMode(false);
                    }
                }}
            >
                {({errors, values, touched, handleSubmit, handleChange}) => (
                    <div className="profile__edit">
                        {editMode ? (
                            <div className="profile__edit-form">
                                <form onSubmit={handleSubmit} className="profile__edit_activated">
                                    <input
                                        type="file"
                                        name="photo"
                                        id="upload-photo"
                                        onChange={upload}
                                    />

                                    <span className={`profile__status-text `}>Name</span>
                                    <input
                                        className={`profile__edit-input ${
                                            touched && errors.fullName && "is-invalid"
                                        }`}
                                        placeholder="Name"
                                        id="fullName"
                                        name="fullName"
                                        onChange={handleChange}
                                        value={values.fullName}
                                    />

                                    {errors.fullName ? (
                                        <div className="error">{errors.fullName}</div>
                                    ) : null}

                                    <span className="profile__status-text">Status</span>
                                    <textarea
                                        className="profile__edit-input"
                                        placeholder="status"
                                        id="aboutMe"
                                        name="aboutMe"
                                        onChange={handleChange}
                                        value={values.aboutMe}
                                    />
                                    <div className="profile__edit_link">
                                        <UserOutlined
                                            style={{fontSize: "25px", color: "#bbbaba"}}
                                        />
                                        <input
                                            className={`profile__edit-input`}
                                            placeholder="Job"
                                            id="lookingForAJobDescription"
                                            name="lookingForAJobDescription"
                                            onChange={handleChange}
                                            value={values.lookingForAJobDescription}
                                        />
                                    </div>
                                    {errors ? (
                                        <div className="error">{errors.fullName}</div>
                                    ) : null}

                                    <div className="profile__edit_link">
                                        <GithubOutlined
                                            style={{fontSize: "25px", color: "#bbbaba"}}
                                        />
                                        <input
                                            className="profile__edit-input"
                                            placeholder="GitHub"
                                            id="gitHub"
                                            name="contacts.github"
                                            onChange={handleChange}
                                            value={values.contacts.github}
                                        />
                                    </div>
                                    <div className="profile__edit_link">
                                        <InstagramOutlined
                                            style={{fontSize: "25px", color: "#bbbaba"}}
                                        />
                                        <input
                                            className="profile__edit-input"
                                            placeholder="Instagram"
                                            id="instagram"
                                            name="contacts.instagram"
                                            onChange={handleChange}
                                            value={values.contacts.instagram}
                                        />
                                    </div>
                                    <div className="profile__edit_link">
                                        <YoutubeOutlined
                                            style={{fontSize: "25px", color: "#bbbaba"}}
                                        />
                                        <input
                                            className="profile__edit-input"
                                            placeholder="YouTube"
                                            id="youTube"
                                            name="contacts.youtube"
                                            onChange={handleChange}
                                            value={values.contacts.youtube}
                                        />
                                    </div>
                                    <div className="profile__edit_link">
                                        <div className="profile__edit__buttons">

                                            <button
                                                className="profile__edit__buttons_save"
                                                type="submit"
                                            >
                                                {isLogin ? <LoaderFollow/> : "Save"}
                                            </button>
                                            <button
                                                className="profile__edit__buttons_cancel"
                                                onClick={cancel}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>

                                </form>
                                <EditErrorMessage/>
                            </div>

                        ) : (
                            <div className="profile__edit-button" onClick={activatedEditMode}>
                                Edit mode
                            </div>
                        )}
                    </div>
                )}
            </Formik>
        </div>
    );
});
export default Edit;
