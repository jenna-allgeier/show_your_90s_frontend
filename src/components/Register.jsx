import React, { useState } from "react";
import "../styles/App.css";
import { useParams, useNavigate } from "react-router-dom";

const Register = (props) => {
  let navigate = useNavigate();
  let { id } = useParams()

  const [registerValues, setRegisterValues] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    about: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value })
  }

  const submitData = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    // navigate(`/profile/${id}`);
  };

  return (
    <div>
      <h2 className="login-register">Register</h2>
      <form className="form" onSubmit={submitData}>
        <input
          className="formInput"
          type="text-area"
        //   value={Register.firstName}
          onChange={handleChange}
          name={"firstName"}
          placeholder={"first name"}
        />
        <input
          className="formInput"
          type="text-area"
        //   value={Register.lastName}
          onChange={handleChange}
          name={"lastName"}
          placeholder={"last name"}
        />
        <input
          className="formInput"
          type="text-area"
        //   value={Register.userName}
          onChange={handleChange}
          name={"userName"}
          placeholder={"username"}
        />
        <input
          className="about-you formInput"
          type="text-area"
        //   value={Register.about}
          onChange={handleChange}
          name={"about"}
          placeholder={"about you!"}
        />
        <input
          className="formInput"
          type="text-area"
        //   value={Register.email}
          onChange={handleChange}
          name={"email"}
          placeholder={"your email"}
        />
        <input
          className="formInput"
          type="text-area"
        //   value={Register.password}
          onChange={handleChange}
          name={"password"}
          placeholder={"your password"}
        />
        <input
          className="formInput"
          type="text-area"
        //   value={Register.password}
          onChange={handleChange}
          name={"confirmPassword"}
          placeholder={"confirm your password"}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default Register;