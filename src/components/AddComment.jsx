import React, { useState } from "react";
import "../styles/App.css";
import { useParams } from "react-router-dom";
import { CreateComment } from "../services/Comments";

const AddComment = (props) => {
  const [formValues, setFormValues] = useState({
    description: "",
    name: "",
  });

  let { postId } = useParams();
  postId = parseInt(postId);
  let userId = parseInt(props.post.userId);
  const handleComment = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitData = async () => {
    await CreateComment(userId, postId, {
      description: formValues.description,
      name: formValues.name,
    });
  };

  return (
    <div className="add-comments">
      <form className="form" onSubmit={submitData}>
        <textarea
          className="commentInputDescription"
          type="text"
          value={formValues.description}
          onChange={handleComment}
          name="description"
          placeholder="description"
          required
        />
        <textarea
          className="commentInput"
          type="text"
          value={formValues.name}
          onChange={handleComment}
          name="name"
          placeholder="name"
          required
        />
        <button className="button">add comment</button>
      </form>
    </div>
  );
};

export default AddComment;
