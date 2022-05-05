import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";

import {getAuthIsLoginSelector} from "../BLL/Auth/authSelector";

const PublicRoute = ({children}: any) => {
let auth = useSelector(getAuthIsLoginSelector)

    return !auth ? children : <Navigate to="/profile"/>;
}
export default PublicRoute;