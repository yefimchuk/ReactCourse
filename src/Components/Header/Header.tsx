import React from "react";
import logo from "../../logo.svg"
import './Header.scss'
import {LoginOutlined, LogoutOutlined, setTwoToneColor} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import photo from "../../img/—Pngtree—vector avatar icon_4013749.png"
import {useDispatch} from "react-redux";
import {UnLogin} from "../../BLL/Auth/authSlice";

setTwoToneColor('#eb2f96');

type PropsT = {
    date: {
        name: string
        photos: {
            large: string
        }
    }

    isLogin: boolean

}
let Header = ({date, isLogin}: PropsT) => {
    const dispatch = useDispatch();


    return (
        <div className="Header">
            <div className="LoginHeader">
                <img src={logo} className="App-logo" alt={logo}/>

                {
                    date === null ? <div><NavLink className="nlink" to={"/login"}> Login <LoginOutlined
                        className="login"/></NavLink></div> : isLogin !== null ?
                        <div className="info">
                            <div className="name">{date.name}</div>
                            <img className="avatar" src={date.photos.large === null ? photo : date.photos.large}
                                 alt="avatar"/>
                            <LogoutOutlined className="logout" onClick={() => {
                                dispatch(UnLogin({date}))
                            }}/>
                        </div> : null
                }

            </div>

        </div>
    )
}
export default Header