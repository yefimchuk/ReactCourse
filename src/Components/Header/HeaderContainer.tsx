import React from "react";
import Header from "./Header"
import {connect} from "react-redux";
import {UnLoginThunk} from "../Redux/auth-reducer";

type IRecipeProps = {
    isLogin: boolean,
    id: number,
    date: {
        name: string
        photos: {
            large: string
        }
    }
    UnLoginThunk: Function
}


let HeaderContainerAPI = (props: IRecipeProps) => {

    return <Header {...props}/>
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