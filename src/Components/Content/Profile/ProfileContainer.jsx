import {addReview, AuthMeThunk, isLogin, like, newTextReview, SetStatusThunk} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

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
    debugger
    componentDidMount() {

        let userId = this.props.params.userId;
        this.props.AuthMeThunk(userId)

    }

    componentWillUnmount() {

    }

    render() {

        return <Profile {...this.props} IDD={this.props.id}/>
    }
}
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
        Profile: state.profilePage.Profile,
        status: state.profilePage.status
    }

}
export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {
        addReview,
        newTextReview,
        like,
        AuthMeThunk,
        isLogin,
        SetStatusThunk,
    }),
)
(ProfileAPIContainer);
