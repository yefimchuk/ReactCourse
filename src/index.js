import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe} from "./Components/Redux/state";

let Rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>

            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
Rerender(state)
subscribe(Rerender)
