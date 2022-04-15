import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Comment = (props) => {
  let navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();
    props.addComment(e);
    navigate("/feed");
  };

  return (
    <div id="newDiv">
      <div className="leaveAComment">Leave a Comment</div>
      <form className="form" onSubmit={submitData}>
        <input
          className="formName formInput"
          type="text"
          value={props.Comment.name}
          onChange={props.handleChange}
          name={"name"}
          placeholder={"your name"}
        />
        <input
          className="formComment formInput"
          type="text-area"
          value={props.Comment.comment}
          onChange={props.handleChange}
          name={"comment"}
          placeholder={"your comment"}
        />
        <button className="formButton">Submit</button>
      </form>
    </div>
  );
};

export default Comment;