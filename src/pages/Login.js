import React from "react";
import LoginForm from "../components/LoginForm"
import Register from "../components/Register"

const Login = (props) => {
  return (
    <div className="login">
      <div className="title">
        <h1>Join the fun!</h1>
        <LoginForm setUserHandler={props.setUserHandler}/>
        <Register />
      </div>
    </div>
  );
};

export default Login;