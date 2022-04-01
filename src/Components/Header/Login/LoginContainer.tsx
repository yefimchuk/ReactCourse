import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {LoginThunk} from "../../Redux/auth-reducer";
import {WithAuthRedirectToProfile} from "../../../hoc/WithAuthRedirectToProfile";



let LoginAPIContainer = ({LoginThunk,captchaURL}) => {

    return <Login login={LoginThunk} captchaURL={captchaURL}/>
}

let mapStateToProps = (state ) => {
    return {
        captchaURL: state.auth.captchaURL
    }
}

export default compose(
    WithAuthRedirectToProfile,
    connect(mapStateToProps, {LoginThunk}
    ),

)
(LoginAPIContainer);