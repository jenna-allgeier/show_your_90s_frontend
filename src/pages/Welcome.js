import React from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-text">
        <h1 className="show-your-90s">Show Your 90's!</h1>
        <h2 className="welcomeMessage">Finally! A place to share your favorite 90s memorabilia!</h2>
      </div>
      <Link to='/login'>
      <button className="welcome-btns" type="submit">Login</button>
      <button className="welcome-btns" type="submit">Register</button>
      </Link>
    </div>
  );
};

export default Welcome;
