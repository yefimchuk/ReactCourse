import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// @ts-ignore
import store from "./Components/Redux/store-redux.ts";
import {Provider} from "react-redux";
import {BrowserRouter, Navigate} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>

        <Provider store={store}>
            <BrowserRouter>

                <App store={store}/>
            </BrowserRouter>
        </Provider>

    </React.StrictMode>,

        document.getElementById('root')
    );




