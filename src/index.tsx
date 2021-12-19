import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// @ts-ignore
import store from "./Components/Redux/store-redux.ts";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";


ReactDOM.render<any>(
    <React.StrictMode>

        <Provider store={store}>
            <HashRouter>

                <App store={store}/>
            </HashRouter>
        </Provider>

    </React.StrictMode>,

        document.getElementById('root')
    );




