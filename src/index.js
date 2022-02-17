import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Components/Redux/store-redux.ts";
import {Provider} from "react-redux";

let Rerender = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

Rerender(store.getState())


