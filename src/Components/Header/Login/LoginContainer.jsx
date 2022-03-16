import React from "react";

import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirectToProfile} from "../../../hoc/WithAuthRedirectToProfile";
import {LoginThunk} from "../../Redux/auth-reducer";


class LoginAPIContainer extends React.Component {

    componentDidMount() {


    }

    componentWillUnmount() {

    }

    render() {

        return <Login login={this.props.LoginThunk} captchaURL={this.props.captchaURL}/>
    }
}

let mapStateToProps = (state ) => {
    return {
        captchaURL: state.auth.captchaURL
    }

}

export default compose(
    withAuthRedirectToProfile,
    connect(mapStateToProps, {LoginThunk}
    ),
)
(LoginAPIContainer);