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
import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {GetAuthMeId, GetProfile, GetReviewData, GetStatus} from "../../Redux/users-selector";
import MyLoader from "../../../common/Loading/Skeleton";
import {WithAuthRedirectToLogin} from "../../../hoc/WithAuthRedirectToLogin";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}

        />
    );
}

let ProfileAPIContainer = (props) => {


    let [state, SetState] = useState(props)

    useEffect(() => {

        let userId = props.params.userId;
        if (!userId) {
            userId = props.UserId
        }
        props.GetNewProfile(userId)
        props.GetStatusThunk(userId)


    }, [])
    useEffect(() => {

        let userId = props.params.userId;
        if (!userId) {
            userId = props.UserId
        }
        props.GetNewProfile(userId)
        props.GetStatusThunk(userId)


    }, [props.UserId])

    if (!props.Profile || props.Status === null) {
        return <MyLoader/>
    }

    if (props === state) {
        return <MyLoader/>
    }
    return <Profile {...props} Status={props.Status} updateStatus={props.UpdateStatusThunk}/>

}


let mapStateToProps = (state) => {

    return {

        UserId: GetAuthMeId(state),
        ReviewData: GetReviewData(state),
        Profile: GetProfile(state),
        Status: GetStatus(state)
    }

}
export default compose(
    withRouter,
    WithAuthRedirectToLogin,
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
