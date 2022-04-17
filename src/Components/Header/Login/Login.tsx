import React from "react";
import "./Login.scss";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div className="Login">
      <div className="TextLogin">Login in to Social Network</div>
      <LoginForm />
    </div>
  );
};
