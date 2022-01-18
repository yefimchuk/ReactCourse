import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./Components/Redux/state";

let Rerender = (store) => {

    ReactDOM.render(
        <React.StrictMode>

            <App state={store}/>

        </React.StrictMode>,
        document.getElementById('root')
    );

}
Rerender(store.state)
store.subscribe(Rerender)
