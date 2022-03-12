import React from "react";

import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {followThunk, getUsersThunk, isLogin, onChangeUsersThunk, unfollowThunk} from "../../Redux/userspage-reducer";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {
    addReview,
    AuthMeThunk, GetNewProfile,
    GetStatusThunk,
    like,
    newTextReview,
    UpdateStatusThunk
} from "../../Redux/profile-reducer";
import {withAuthRedirectToProfile} from "../../../hoc/WithAuthRedirectToProfile";

class LoginAPIContainer extends React.Component {

    componentDidMount() {


    }

    componentWillUnmount() {

    }

    render() {

        return <Login/>
    }
}

let mapStateToProps = (state:any ) => {


    return {}

}

export default compose(
    withAuthRedirectToProfile,
    connect(mapStateToProps, {
    }),
)
(LoginAPIContainer);