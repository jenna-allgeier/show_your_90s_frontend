import React from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome backgroundimg">
      <img className="carimg" src="https://image.pngaaa.com/657/4096657-middle.png" />
    
      {/* <div className="welcome-text">
        <h1 className="show-your-90s"></h1>
        <h1 className="welcomeMessage"></h1>
      </div> */}
      <Link to='/login'>
      <button className="welcome-btns" type="submit">Login</button>
      <button className="register-btn" type="submit">Register</button>
      </Link>
     
    </div>
  );
};

export default Welcome 
