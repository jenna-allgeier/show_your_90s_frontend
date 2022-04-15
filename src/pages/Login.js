import React from "react";
import LoginForm from "../components/LoginForm"
import Register from "../components/Register"

const Login = () => {
  return (
    <div className="login">
      <div className="title">
        <h1>Make Your Account</h1>
        <h2>Yay!</h2>
        <LoginForm />
        <Register />
      </div>
    </div>
  );
};

export default Login;