import React from "react";
import {
    addNewReviewActionCreator,
    sendLikesActionCreator,
    updateReviewTextActionCreator
} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import Review from "./ProfileInfo/Review";

let mapDispatchToProps = (dispatch: any) => {
    return {
        addReview: (text: string) => {
            const action = addNewReviewActionCreator();
            dispatch(action)
        },
        newTextReview: (text: string) => {
            const action = updateReviewTextActionCreator(text);
            dispatch(action)
        },
        like: (props: any)  => {

            let action = sendLikesActionCreator(props)
            dispatch(action)
        }

    }
}

let mapStateToProps = (state: any) => {

    return {
        ReviewData: state.profilePage.ReviewData,
        name: state.profilePage.PersonalData.name,
        avatar: state.profilePage.PersonalData.avatar,
        born: state.profilePage.PersonalData.born,
        education: state.profilePage.PersonalData.education,
        city: state.profilePage.PersonalData.city,
        site: state.profilePage.PersonalData.site,
        NewReviewText: state.profilePage.NewReviewText
    }
}
let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;