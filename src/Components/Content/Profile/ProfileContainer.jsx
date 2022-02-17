import {addReview, like, newTextReview, setNewProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Profile from "./Profile";

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(a => {
this.props.setNewProfile(a.data)

        })
    }


    render() {
if (!this.props.Profile){

}
        return <Profile {...this.props}/>
    }
}
let mapStateToProps = (state) => {

    return {
        id: state.profilePage.id,
        ReviewData: state.profilePage.ReviewData,
        name: state.profilePage.PersonalData.name,
        avatar: state.profilePage.PersonalData.avatar,
        born: state.profilePage.PersonalData.born,
        education: state.profilePage.PersonalData.education,
        city: state.profilePage.PersonalData.city,
        site: state.profilePage.PersonalData.site,
        NewReviewText: state.profilePage.NewReviewText,
        Profile: state.profilePage.Profile
    }
}
let ProfileContainer = connect(mapStateToProps, {
    addReview,
    newTextReview,
    like,
    setNewProfile
})(ProfileAPIContainer);

export default ProfileContainer;