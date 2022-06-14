import React from "react";

// @ts-ignore
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// @ts-ignore
import store from "./BLL/store.ts";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import axios from "axios";

axios.interceptors.request.use((config) => {
  config.baseURL = "https://social-network.samuraijs.com/api/1.0";
  config.headers = {
    "API-KEY": "d6c95276-5014-4760-bbd2-f4380dffa641",
  };
  config.withCredentials = true;
  return config;
});

ReactDOM.render<any>(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App store={store} />
      </HashRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
