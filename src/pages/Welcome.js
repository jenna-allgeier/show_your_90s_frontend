import React from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="title">
        <h1>Show Your 90's!</h1>
        <h2>Finally! A place to share your favorite 90s memorabilia!</h2>
      </div>
      <Link to='/login'>
      <button className="button" type="submit">Login</button>
      <button className="button" type="submit">Register</button>
      </Link>
    </div>
  );
};

export default Welcome;
