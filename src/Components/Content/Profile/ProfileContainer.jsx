import React from "react";
import {addNewReviewActionCreator, updateReviewTextActionCreator} from "../../Redux/profile-reducer";
import Store from "../../../context-react";
import Profile from "./Profile";

let ProfileContainer = (props) => {

    return <Store.Consumer>
        {(store) => {
            let state = store.getState()

            let addReview = (text) => {

                const action = addNewReviewActionCreator(text);
                store.dispatch(action)

            }
            let newTextReview = (text) => {

                const action = updateReviewTextActionCreator(text);
                store.dispatch(action)
            }
            return <Profile addReview={addReview} newTextReview={newTextReview}
                            ReviewData={state.profilePage.ReviewData}
                            name={state.profilePage.PersonalData.name}
                            avatar={state.profilePage.PersonalData.avatar}
                            born={state.profilePage.PersonalData.born}
                            education={state.profilePage.PersonalData.education}
                            city={state.profilePage.PersonalData.city}
                            site={state.profilePage.PersonalData.site}
                            dispatch={store.dispatch}
                            NewReviewText={state.profilePage.NewReviewText}
            />
        }
    }
    </Store.Consumer>
}
        export default ProfileContainer;