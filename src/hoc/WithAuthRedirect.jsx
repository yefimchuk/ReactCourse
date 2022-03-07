import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        authMe: state.auth.isLogin
    }
}
export let withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {

            if (!this.props.authMe) {
                return <Navigate to={"/login"}/>
            }
            return <Component {...this.props}/>
        }

    }

    return connect(mapStateToProps)(RedirectComponent)

}



