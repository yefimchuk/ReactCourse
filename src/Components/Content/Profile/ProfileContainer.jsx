import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {compose} from "redux";

import MyLoader from "../../../common/Loading/Skeleton";
import {WithAuthRedirectToLogin} from "../../../hoc/WithAuthRedirectToLogin";
import {GetNewProfile, GetStatusThunk} from "../../../BLL/ProfilePage/profilePage";

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
    let props2 = useSelector(state => state.sliceProfile)
    const params = useParams();
    let dispatch = useDispatch()
    let [state, SetState] = useState(props2)

    useEffect(() => {

        let userId = params.userId;
        if (!userId) {
            userId = props2.id
        }

        dispatch(GetNewProfile(userId))
        dispatch(GetStatusThunk(userId))


    }, [])

    useEffect(() => {

        let userId = params.userId;
        if (!userId) {
            userId = props2.id
        }

        dispatch(GetNewProfile(userId))
        dispatch(GetStatusThunk(userId))

    }, [props2.id])

    if (!props2.Profile || props2.Profile.Status === null) {
        return <MyLoader/>
    }

    if (props2 === state) {
        return <MyLoader/>
    }

    return <Profile {...props2}/>

}

/*
let mapStateToProps = (state) => {

    return {

        UserId: GetAuthMeId(state),
        ReviewData: GetReviewData(state),
        Profile: GetProfile(state),
        Status: GetStatus(state)
    }

}*/
export default compose(
    withRouter,
    WithAuthRedirectToLogin,
    /*    connect(mapStateToProps, {
            addReview,
            like,
            AuthMeThunk,
            isLogin,
            UpdateStatusThunk,
            GetStatusThunk,
            GetNewProfile
        }),*/
)
(ProfileAPIContainer);
