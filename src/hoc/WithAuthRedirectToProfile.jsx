import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        authMe: state.auth.isLogin
    }
}
export let withAuthRedirectToProfile = (Component) => {

    class RedirectComponent extends React.Component {
        render() {

            if (this.props.authMe) {
                return <Navigate to={"/profile"}/>
            }
            return <Component {...this.props}/>
        }

    }

    return connect(mapStateToProps)(RedirectComponent)

}



