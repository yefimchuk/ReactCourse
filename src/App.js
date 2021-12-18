import React from "react";
import './App.css';
import Header from "./Components/JSX/Header";
import Sidebar from "./Components/JSX/Sidebar";
import Content from "./Components/JSX/Content";

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
