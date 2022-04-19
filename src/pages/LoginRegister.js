import React from "react";
import LoginForm from "../components/LoginForm"
import Register from "../components/Register"

const Login = (props) => {
  return (
    
    <div className="login-register-title loginimage">
      
      <div className="login-register-format">
      <h1 className= "letsbe">  Let's be... </h1> 
      <div className="forms">
        <div className="register">
        <Register />
        </div>
        <div className="login">
        <h1>Already have an account?</h1>
        <LoginForm 
          setUser={props.setUser}
          toggleAuthenticated={props.toggleAuthenticated}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;