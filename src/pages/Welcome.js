import React from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome backgroundimg">
      <img className="carimg" src="https://d63oxfkn1m8sf.cloudfront.net/5416/1113/7724/c4249_3_bttf2-delorean_product.jpg" />
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
