import React from "react";
import LoginForm from "../components/LoginForm"
import Register from "../components/Register"

const Login = (props) => {
  return (
    <div className="login-register-title">
      <div className="login-register-format">
        <h1>New to Show Your 90s?</h1>
        <Register />
        <h1>Already have an account?</h1>
        <LoginForm setUserHandler={props.setUserHandler}/>
      </div>
    </div>
  );
};

export default Login;