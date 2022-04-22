import React from "react";
import "../styles/App.css";

const Comments = (props) => {
  console.log(props.previousComments);
  return (
    <div>
      <div className="comments">
        {props.previousComments.map((comment) => {
          return (
            <div className="comment">
              <h2>{comment.name}</h2>
              <p>{comment.description}</p>
              <h3>{comment.likes}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
