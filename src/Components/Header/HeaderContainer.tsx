import React from "react";
import Header from "./Header"
import {connect} from "react-redux";
import {SetAuthUserData, SetUserData} from "../Redux/auth-reducer";

interface IRecipeProps {
        SetUserData?: any;
    SetAuthUserData?: any
}


class HeaderContainerAPI extends React.Component <IRecipeProps> {


    componentDidMount() {
        let axios = require('axios').default;

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then((a: any) => {
            if (a.data.resultCode === 0) {
                let {id, email, login} = a.data.data
                this.props.SetAuthUserData(id, email, login)

                axios.get(`https://social-network.samuraijs.com/api/1.0/users?term=${login}`).then((b: any) => {

                    b.data.items.filter((u: any) => {
                        if (id === u.id) {
                            this.props.SetUserData(u)

                        }
                    })

                })
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
        id: state.auth.id,
        isLogin: state.auth.isLogin,
        date: state.auth.date
    }
}
let HeaderContainer = connect(mapStateToProps, {SetAuthUserData, SetUserData})(HeaderContainerAPI);

export default HeaderContainer