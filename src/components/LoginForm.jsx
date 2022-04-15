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
      <div className="leaveALoginForm">Login</div>
      <form className="form" onSubmit={submitData}>
        <input
          className="formLoginForm formInput"
          type="text-area"
        //   value={props.LoginForm.username}
          onChange={props.handleChange}
          name={"username"}
          placeholder={"username"}
        />
        <input
          className="formLoginForm formInput"
          type="text-area"
        //   value={props.LoginForm.password}
          onChange={props.handleChange}
          name={"password"}
          placeholder={"password"}
        />
        <button className="formButton">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;