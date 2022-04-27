import React from "react";
import {useSelector} from "react-redux";
import {getErrorMessageSelector} from "../../../../../BLL/ProfilePage/profileSelector";

const EditErrorMessage = () => {
    const errors = useSelector(getErrorMessageSelector);
    if (errors) {
        let error = errors.map((reviews: any) => (
            <div className="profile__edit_error">{reviews}</div>
        ));
        return (
            <div className="profile__edit_error-message">
                <div className="profile__edit_error">Error list: </div>
                {error}
            </div>
        )
    }
    else {
        return <></>
    }
}


export default EditErrorMessage;
