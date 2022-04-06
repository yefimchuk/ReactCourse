import React from 'react';
import "./Login.scss"
import {LoginForm} from "./LoginForm";


export const Login = ({captchaURL}: { captchaURL: string }) => {
    return (
        <div className="Login">
            <div className="TextLogin">Login in to Social Network</div>
            <LoginForm captchaURL={captchaURL}/>
        </div>
    );
};

