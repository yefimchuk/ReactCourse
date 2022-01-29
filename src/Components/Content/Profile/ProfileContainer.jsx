import React from "react";
import {addNewReviewActionCreator, updateReviewTextActionCreator} from "../../Redux/profile-reducer";
import Profile from "./Profile";

let ProfileContainer = (props) => {

    let state = props.store.getState()

    let addReview = (text) => {

        const action = addNewReviewActionCreator(text);
            props.store.dispatch(action)

    }
    let newTextReview = (text) => {

        const action = updateReviewTextActionCreator(text);
        props.store.dispatch(action)
    }
    return (<Profile addReview={addReview} newTextReview={newTextReview} ReviewData={state.profilePage.ReviewData}
                     name={state.profilePage.PersonalData.name}
                     avatar={state.profilePage.PersonalData.avatar}
                     born={state.profilePage.PersonalData.born}
                     education={state.profilePage.PersonalData.education}
                     city={state.profilePage.PersonalData.city}
                     site={state.profilePage.PersonalData.site}
                     dispatch={props.store.dispatch}
                     NewReviewText={state.profilePage.NewReviewText}
    />)

}
export default ProfileContainer