import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./Components/Redux/store-redux.ts";

let Rerender = (state) => {

    ReactDOM.render(
        <React.StrictMode>

            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>

        </React.StrictMode>,
        document.getElementById('root')
    );

}

Rerender(store.getState())
store.subscribe(() => {

    let state = store.getState()
    Rerender(state)
})

