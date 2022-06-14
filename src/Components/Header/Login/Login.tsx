import React from "react";
import "./Login.scss";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div className="login">
      <div className="login__text">Login in to Social Network</div>
      <LoginForm />
    </div>
  );
};
