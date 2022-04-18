import React, { useState } from "react";
import "../styles/App.css";
import { useParams, useNavigate } from "react-router-dom";
import { TestGetAllUsers } from "../services/Users";

const LoginForm = (props) => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const submitData = (e) => {
    e.preventDefault();
    const username = e.target[0].value
    const user = TestGetAllUsers().find( (user) => {return user.userName === username})
    props.setUserHandler(user)
    navigate(`/profile/${user.id}`);
  };

  return (
    <div>
      <h2 className="login-register">Login</h2>
      <form className="form" onSubmit={submitData}>
        <input
          className="formInput"
          type="text-area"
        //   value={props.LoginForm.username}
          onChange={handleChange}
          name={"username"}
          placeholder={"username"}
        />
        <input
          className="formInput"
          type="text-area"
        //   value={props.LoginForm.password}
          onChange={handleChange}
          name={"password"}
          placeholder={"password"}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;