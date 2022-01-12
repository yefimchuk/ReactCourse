import React from "react";
import {addNewReviewActionCreator, updateReviewTextActionCreator} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
let mapDispatchToProps = (dispatch) => {
    return {
        addReview: (text) => {
            const action = addNewReviewActionCreator(text);
            dispatch(action)
        },
        newTextReview: (text) => {
            const action = updateReviewTextActionCreator(text);
            dispatch(action)
        },

    }
}

let mapStateToProps = (state) => {
    return {
        ReviewData: state.profilePage.ReviewData,
        name: state.profilePage.PersonalData.name,
        avatar: state.profilePage.PersonalData.avatar,
        born: state.profilePage.PersonalData.born,
        education: state.profilePage.PersonalData.education,
        city: state.profilePage.PersonalData.city,
        site: state.profilePage.PersonalData.site,
        }
    }
    let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

    export default ProfileContainer;