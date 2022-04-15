import React, { useState } from "react";
import "../styles/App.css";
import { useParams, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  let navigate = useNavigate();
  let { id } = useParams()
  const [ selectedLoginForm, setLoginForm ] = useState({})

  const submitData = (e) => {
    e.preventDefault();
    props.addLoginForm(e);
    navigate(`/profile/${id}`);
  };

  return (
    <div id="newDiv">
      <div className="leaveALoginForm">Register</div>
      <form className="form" onSubmit={submitData}>
        <input
          className="formLoginForm formInput"
          type="text-area"
        //   value={props.LoginForm.firstName}
          onChange={props.handleChange}
          name={"firstName"}
          placeholder={"first name"}
        />
        <input
          className="formLoginForm formInput"
          type="text-area"
        //   value={props.LoginForm.lastName}
          onChange={props.handleChange}
          name={"lastName"}
          placeholder={"last name"}
        />
        <input
          className="formLoginForm formInput"
          type="text-area"
        //   value={props.LoginForm.userName}
          onChange={props.handleChange}
          name={"userName"}
          placeholder={"username"}
        />
        <input
          className="formLoginForm formInput"
          type="text-area"
        //   value={props.LoginForm.about}
          onChange={props.handleChange}
          name={"about"}
          placeholder={"About you!"}
        />
        <input
          className="formLoginForm formInput"
          type="text-area"
        //   value={props.LoginForm.email}
          onChange={props.handleChange}
          name={"email"}
          placeholder={"your email"}
        />
        <input
          className="formLoginForm formInput"
          type="text-area"
        //   value={props.LoginForm.password}
          onChange={props.handleChange}
          name={"password"}
          placeholder={"your password"}
        />
        <button className="formButton">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;