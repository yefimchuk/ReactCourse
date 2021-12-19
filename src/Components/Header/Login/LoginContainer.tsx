import React from "react";
import {Login} from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {LoginThunk} from "../../Redux/auth-reducer";
import {WithAuthRedirectToProfile} from "../../../hoc/WithAuthRedirectToProfile";


let LoginAPIContainer = (props: { LoginThunk: Function, captchaURL: string }) => {

    return <Login {...props}/>
}

let mapStateToProps = (state: { auth: { captchaURL: string } }) => {
    return {
        captchaURL: state.auth.captchaURL
    }
}

export default compose <any>(
    WithAuthRedirectToProfile,
    connect(mapStateToProps, {LoginThunk})
)(LoginAPIContainer);