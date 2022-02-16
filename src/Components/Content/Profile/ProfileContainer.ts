import {addReview, like, newTextReview} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";

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
let ProfileContainer = connect(mapStateToProps, {
    addReview,
    newTextReview,
    like,
})(Profile);

export default ProfileContainer;