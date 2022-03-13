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

        return <Login login={this.props.LoginThunk}/>
    }
}

let mapStateToProps = (state ) => {


    return {}

}

export default compose(
    withAuthRedirectToProfile,
    connect(mapStateToProps, {LoginThunk}
    ),
)
(LoginAPIContainer);