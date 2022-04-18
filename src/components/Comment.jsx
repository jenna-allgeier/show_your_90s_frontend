import React from "react";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";

const Comment = (props) => {
  
  return
  <div>
    <div className="previous-comment">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>{props.likes}</h3>


    </div>

  </div>
};

export default Comment;