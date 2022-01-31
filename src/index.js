import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./Components/Redux/store-redux.ts";
import Store from "./context-react";

let Rerender = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <Store.Provider value={store}>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Store.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

Rerender(store.getState())
store.subscribe(() => {

    let state = store.getState()
    Rerender(state)
})

