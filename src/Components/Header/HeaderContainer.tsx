import React from "react";
import Header from "./Header"
import {connect} from "react-redux";
import {SetUserData} from "../Redux/auth-reducer";

interface IRecipeProps {
        SetUserData?: any;
}


class HeaderContainerAPI extends React.Component <IRecipeProps> {

    componentDidMount() {

        let axios = require('axios').default;
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then((a: any) => {

            if (a.data.resultCode === 0) {
                let {id, email, login} = a.data.data
                debugger
                this.props.SetUserData(id, email, login)

            }
            console.log(a)
        })
    }


    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state: any) => {

    return {
        id: state.auth.id
    }
}
let HeaderContainer = connect(mapStateToProps, {SetUserData})(HeaderContainerAPI);

export default HeaderContainer