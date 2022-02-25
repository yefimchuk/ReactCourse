import {addReview, like, newTextReview, setId, setNewProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {AuthMe, SetMyId, UsersAPI} from "../../../API/API";


const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}

        />
    );
}

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        UsersAPI.AuthMe().then((a) => {
            this.props.setId(a)
            if (!userId) {

                userId = this.props.id

            }

            UsersAPI.SetMyId(userId).then(a => {

                this.props.setNewProfile(a.data)

            })
        })

    }


    render() {

        return <Profile {...this.props} IDD={this.props.id}/>
    }
}
let UrlDataContainerComponent = withRouter(ProfileAPIContainer);

let mapStateToProps = (state) => {


    return {
        UserId: state.auth.id,
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
    setNewProfile,
    setId
})(UrlDataContainerComponent);

export default ProfileContainer;
