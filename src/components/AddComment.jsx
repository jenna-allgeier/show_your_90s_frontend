import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { useNavigate, useParams } from "react-router-dom";
import { CreateComment } from "../services/Comments";

const AddComment = (props) => {
  const [formValues, setFormValues] = useState({
    description: "",
    name: "",
  });
  let { postId } = useParams();
  let navigate = useNavigate();
  postId = parseInt(postId);

  let userId =parseInt(props.post.userId);
  console.log(userId, 'this is userId')
  
  const handleComment = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitData = async () => {
    // e.preventDefault();
    await CreateComment(userId, postId, {
      description: formValues.description,
      name: formValues.name,
    });
    // navigate("/feed/post/{postId}");
  };

  //   useEffect(() => {
  //     props.setUser(props.user);
  //     props.toggleAuthenticated(true);
  //   }, []);
  return (
    <div>
      <form onSubmit={submitData}>
        <input
          className="commentInput"
          type="text"
          value={formValues.description}
          onChange={handleComment}
          name="description"
          placeholder="description"
          required
        />
        <input
          className="commentInput"
          type="text"
          value={formValues.name}
          onChange={handleComment}
          name="name"
          placeholder="name"
          required
        />
        <button>add comment</button>
      </form>
    </div>
  );
};

export default AddComment;
