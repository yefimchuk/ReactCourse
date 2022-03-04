import React from "react";

import Login from "./Login";
import {connect} from "react-redux";

class LoginAPIContainer extends React.Component {

    componentDidMount() {


    }

    componentWillUnmount() {

    }

    render() {

        return <Login/>
    }
}

let mapStateToProps = (state) => {


    return {}

}

let LoginContainer = connect(mapStateToProps, {})(LoginAPIContainer);

export default LoginContainer;
