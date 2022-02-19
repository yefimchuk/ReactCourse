import {addReview, like, newTextReview, setNewProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {useLocation, useMatch} from "react-router";


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
        if (!userId){
            userId = 2
        }


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(a => {
this.props.setNewProfile(a.data)

        })
    }


    render() {

        return <Profile {...this.props}/>
    }
}
let UrlDataContainerComponent = withRouter(ProfileAPIContainer);

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
})(UrlDataContainerComponent);

export default ProfileContainer;