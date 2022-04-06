import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        authMe: state.sliceAuth.isLogin
    }
}
export const WithAuthRedirectToLogin = (Component: Function) => {

    const RedirectComponent = (props: { authMe: boolean }) => {
        return (
            props.authMe ? <Component {...props}/> : <Navigate to={"/login"}/>
        )
    }
    return connect(mapStateToProps)(RedirectComponent)
}







