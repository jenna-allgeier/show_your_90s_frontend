import React from "react";
import LoginForm from "../components/LoginForm"
import Register from "../components/Register"

const Login = (props) => {
  return (
    
    <div className="login-register-title loginimage">
      
      <div className="login-register-format">
        <div className="register">
        <Register />
        </div>
        <h1 className= "letsbe">  Let's be... </h1> 
        <div className="login">
        <LoginForm 
          setUser={props.setUser}
          toggleAuthenticated={props.toggleAuthenticated}/>

        </div>
      </div>
    </div>
  );
};

export default Login;