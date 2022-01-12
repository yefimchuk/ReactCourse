import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import {BrowserRouter, Route, Router, Routes, } from "react-router-dom";
import Message from "./Components/Content/Message/Message";
import Profile from "./Components/Content/Profile/Profile";
import News from "./Components/Content/News/News";
import Music from "./Components/Content/Music/Music";
import Settings from "./Components/Content/Settings/Settings";

const App = (props) => {

    return (
<BrowserRouter>

            <div className='App'>
                <Header />
                <Sidebar friendsData={props.state.sideBar.friendsData} />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/message/:id" element={<Message messageData={props.state.messagePage.messageData}/>}/>
                        <Route path="/profile" element={<Profile PersonalData={props.state.profilePage.PersonalData} ReviewData={props.state.profilePage.ReviewData} />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
</BrowserRouter>

    );
}

export default App;
