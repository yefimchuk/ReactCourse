import React from "react";
import Header from "./Header"
import {connect} from "react-redux";
import {HeaderLoginThunk} from "../Redux/auth-reducer";

interface IRecipeProps {
    HeaderLoginThunk?: any
}


class HeaderContainerAPI extends React.Component <IRecipeProps> {


    componentDidMount() {
        let axios = require('axios').default;
        this.props.HeaderLoginThunk();

    }

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state: any) => {

    return {
        id: state.auth.id,
        isLogin: state.auth.isLogin,
        date: state.auth.date
    }
}
let HeaderContainer = connect(mapStateToProps, {HeaderLoginThunk})(HeaderContainerAPI);

export default HeaderContainer