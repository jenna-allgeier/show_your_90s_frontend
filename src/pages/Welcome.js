import React from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome backgroundimg">
      <img className="carimg" src="https://image.pngaaa.com/657/4096657-middle.png" />
      <Link to='/login'>
      <button className="welcome-btns" type="submit">Login</button>
      <button className="register-btn" type="submit">Register</button>
      </Link>
    </div>
  );
};

export default Welcome 
