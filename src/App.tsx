import React, {useEffect} from "react";
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import News from "./Components/Content/News/News";
import Music from "./Components/Content/Music/Music";
import Settings from "./Components/Content/Settings/Settings";
import MessageContainer from "./Components/Content/Message/messageContainer";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Header/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Loading from "./common/Loading/Loading";
import {initializingThunk} from "./Components/Redux/app-reduce";


let App = (props: any) => {

    useEffect(() => {
            props.initializingThunk()
        }
    )

    if (!props.initialized) {
        return <Loading/>
    }
    return (

        <div className='App'>


            <HeaderContainer/>
            <Sidebar friendsData={props.friendsData}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path="/message/:id" element={<MessageContainer/>}/>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route path='/profile' element={<ProfileContainer/>}/>
                    <Route path="/news" element={<News key={props.initialized}/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/" element={<ProfileContainer/>}>

                    </Route>
                </Routes>
            </div>
        </div>


    );

}

let mapStateToProps = (state: any) => {
    return {
        authMe: state.auth.isLogin,
        initialized: state.app.initialized,
        friendsData: state.sideBar.friendsData
    }
}
export default compose(connect(mapStateToProps, {initializingThunk}))(App);
