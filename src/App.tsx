import React from "react";
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
import Loading from "./common/Loading/loading";
import {initializingThunk} from "./Components/Redux/app-reduce";
import {withAuthRedirect} from "./hoc/WithAuthRedirect";


class App extends React.Component<any> {
    componentDidMount() {
        this.props.initializingThunk()
    }

    render() {

        if (!this.props.initialized) {
            return <Loading/>
        }

        return (

                <div className='App'>
                    <HeaderContainer/>
                    <Sidebar friendsData={this.props.state.sideBar.friendsData}/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/message/:id" element={<MessageContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginContainer/>}/>

                        </Routes>
                    </div>
                </div>


        );
    }
}

let mapStateToProps = (state: any) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose(connect(mapStateToProps, {initializingThunk}))(App);
