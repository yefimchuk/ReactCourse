import React from "react";
import logo from "../../logo.svg"
import './Header.scss'
import photo from "../../img/—Pngtree—vector avatar icon_4013749.png"
import {LoginOutlined, LogoutOutlined, setTwoToneColor} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
setTwoToneColor('#eb2f96');

type PropsT = {
    date: {
        name: string
        photos:{
            large: string
        }
    }
    UnLoginThunk: Function,
    isLogin: boolean

}
let Header = ({date, UnLoginThunk, isLogin}: PropsT) => {
    console.log("header")

    let logOut = () => {
        UnLoginThunk()
    }
    let a = date ? date.photos.large === null ? date.photos.large = photo : null : null


    return (
        <div className="Header">
            <div className="LoginHeader">
                <img src={logo} className="App-logo" alt={logo}/>

                {
                    date === null ? <div><NavLink className="nlink" to={"/login"}> Login <LoginOutlined
                        className="login"/></NavLink></div> : isLogin !== null ?
                        <div className="info">
                            <div className="name">{date.name}</div>
                            <img className="avatar" src={date.photos.large} alt="avatar"/>
                            <LogoutOutlined className="logout" onClick={logOut}/>
                        </div> : null
                }

            </div>

        </div>
    )
}
export default Header