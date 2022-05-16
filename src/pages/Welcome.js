import React from "react";
import { Link } from 'react-router-dom';
import backToTheFuture from '../assets/back-to-the-future-img.png'

const Welcome = () => {
  return (
    <div className="welcome backgroundimg">
      <img className="carimg" src={backToTheFuture}/>
      <Link to='/login'>
      <button className="welcome-btns" type="submit">Login</button>
      <button className="register-btn" type="submit">Register</button>
      </Link>
    </div>
  );
};

export default Welcome 
