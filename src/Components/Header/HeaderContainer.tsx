import React from "react";
import Header from "./Header"
import {connect} from "react-redux";
import {HeaderLoginThunk, UnLoginThunk} from "../Redux/auth-reducer";
import {Navigate} from "react-router-dom";

interface IRecipeProps {
    HeaderLoginThunk?: any
    isLogin?: any
}


class HeaderContainerAPI extends React.Component <IRecipeProps> {


    componentDidMount() {
        let axios = require('axios').default;
        this.props.HeaderLoginThunk();

    }

    render() {

        if (!this.props.isLogin){
            debugger
            <Navigate to={"/login"}/>
        }
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
let HeaderContainer = connect(mapStateToProps, {HeaderLoginThunk,UnLoginThunk})(HeaderContainerAPI);

export default HeaderContainer