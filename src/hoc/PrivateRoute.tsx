import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";

import {getAuthIsLoginSelector} from "../BLL/Auth/authSelector";

const PrivateRoute = ({children}: any) => {
let auth = useSelector(getAuthIsLoginSelector)

    return auth ? children : <Navigate to="/login"/>;
}
export default PrivateRoute;