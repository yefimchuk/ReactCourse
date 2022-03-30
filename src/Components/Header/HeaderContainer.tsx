import React from "react";
import Header from "./Header"
import {connect} from "react-redux";
import {UnLoginThunk} from "../Redux/auth-reducer";
import {Navigate} from "react-router-dom";

interface IRecipeProps {
    HeaderLoginThunk?: any
    isLogin?: any
}


class HeaderContainerAPI extends React.Component <IRecipeProps> {


    componentDidMount() {

    }

    render() {

        if (!this.props.isLogin){
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
let HeaderContainer = connect(mapStateToProps, {UnLoginThunk})(HeaderContainerAPI);

export default HeaderContainer