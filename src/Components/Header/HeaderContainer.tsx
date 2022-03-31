import React from "react";
import Header from "./Header"
import {connect} from "react-redux";
import {UnLoginThunk} from "../Redux/auth-reducer";
import {Navigate} from "react-router-dom";

interface IRecipeProps {
    HeaderLoginThunk?: any
    isLogin?: any
}


let HeaderContainerAPI = (props: any) => {

    if (!props.isLogin) {
        <Navigate to={"/login"}/>
    }
    return (
        <Header {...props}/>
    )
}

let mapStateToProps = (state: any) => {

    return {
        id: state.auth.id,
        isLogin: state.auth.isLogin,
        date: state.auth.date
    }
}
let HeaderContainer = connect(mapStateToProps, {UnLoginThunk})(HeaderContainerAPI);

export default HeaderContainer