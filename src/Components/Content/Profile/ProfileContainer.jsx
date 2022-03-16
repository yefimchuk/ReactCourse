import {
    addReview,
    AuthMeThunk,
    GetNewProfile,
    GetStatusThunk,
    isLogin,
    like,
    UpdateStatusThunk
} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {Navigate, useParams} from "react-router-dom";
import {compose} from "redux";
import Loading from "../../../common/Loading/loading";

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
        if (!userId) {

            userId = this.props.UserId


        }
        this.props.GetNewProfile(userId)
        this.props.GetStatusThunk(userId)

    }

    componentWillUnmount() {

    }

    render() {

        if (!this.props.params.userId && !this.props.UserId) {
            return <Navigate to={"/login"}/>
        }

        if (!this.props.Profile) {

            return <Loading/>
        }
        return <Profile {...this.props} Status={this.props.status} updateStatus={this.props.UpdateStatusThunk}/>
    }
}
let mapStateToProps = (state) => {


    return {

        UserId: state.auth.id,
        id: state.profilePage.id,
        ReviewData: state.profilePage.ReviewData,
        Profile: state.profilePage.Profile,
        status: state.profilePage.status
    }

}
export default compose(
    withRouter,
    connect(mapStateToProps, {
        addReview,
        like,
        AuthMeThunk,
        isLogin,
        UpdateStatusThunk,
        GetStatusThunk,
        GetNewProfile
    }),
)
(ProfileAPIContainer);
