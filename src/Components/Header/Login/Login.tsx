import React from 'react';
import "./Login.scss"
import {LoginForm} from "./LoginForm";


export const Login = (props: any) => {
    return (
        <div className="Login">
            <div className="TextLogin">Login in to Social Network</div>
            <LoginForm {...props}/>
        </div>
    );
};


