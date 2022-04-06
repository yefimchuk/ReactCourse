import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        authMe: state.sliceAuth.isLogin
    }
}
export const WithAuthRedirectToProfile = (Component: Function) => {
    const RedirectComponent = (props: { authMe: boolean }) => {

        if (props.authMe) {
            return  <Navigate to={"/profile"}/>
        }
        return <Component {...props}/>

    }
    return connect(mapStateToProps)(RedirectComponent)
}







