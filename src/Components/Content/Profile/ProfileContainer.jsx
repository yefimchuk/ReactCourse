import {
    addReview,
    AuthMeThunk,
    GetNewProfile,
    GetStatusThunk,
    isLogin,
    like,
    newTextReview,
    UpdateStatusThunk
} from "../../Redux/profile-reducer";
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

    componentDidMount() {

            let userId = this.props.params.userId;
            this.props.GetNewProfile(userId)
            this.props.GetStatusThunk(userId)

    }

    componentWillUnmount() {

    }

    render() {

        return <Profile {...this.props} Status={this.props.status} updateStatus={this.props.UpdateStatusThunk}
                        IDD={this.props.id}/>
    }
}
let mapStateToProps = (state) => {


    return {
        UserId: state.auth.id,
        id: state.profilePage.id,
        ReviewData: state.profilePage.ReviewData,
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
        UpdateStatusThunk,
        GetStatusThunk,
        GetNewProfile
    }),
)
(ProfileAPIContainer);
