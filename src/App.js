import React from "react";
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;
