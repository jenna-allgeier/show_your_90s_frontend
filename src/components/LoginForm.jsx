import React, { useState } from "react";
import "../styles/App.css";
import { useParams, useNavigate } from "react-router-dom";
import { SignInUser } from "../services/Auth";

const LoginForm = (props) => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ email: "", password: "" });
    props.setUser(payload);
    props.toggleAuthenticated(true);
    navigate("/feed");
  };

  return (
    <div>
      <h2 className="login-register">Login</h2>
      <form className="form" onSubmit={submitData}>
        <input
          className="formInput"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          name="email"
          placeholder="example@example.com"
          required
        />
        <input
          className="formInput"
          type="text-area"
          value={formValues.password}
          onChange={handleChange}
          name={"password"}
          placeholder={"password"}
          required
        />
        <button
          className="button"
          disabled={!formValues.email || !formValues.password}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
