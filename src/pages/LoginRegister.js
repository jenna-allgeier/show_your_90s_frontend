import React from "react";
import LoginForm from "../components/LoginForm"
import Register from "../components/Register"

const Login = (props) => {
  return (
    <div className="login-register-title">
      <div className="login-register-format">
        <div className="register">
        <h1>New to Show Your 90s?</h1>
        <Register />
        </div>
        <div className="login">
        <h1>Already have an account?</h1>
        <LoginForm setUserHandler={props.setUserHandler}/>
        </div>
      </div>
    </div>
  );
};

export default Login;