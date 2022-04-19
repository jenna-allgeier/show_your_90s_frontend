import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Post from "../components/Post";
import { GetPostByPk } from "../services/Posts";
import { GetCommentsByPostPk } from "../services/Comments";
import Comment from "../components/Comment";

const PostDetails = (props) => {
  let { postId } = useParams();

  postId = parseInt(postId);

  const renderPost = async () => {
    const currentPost = await GetPostByPk(postId);
    props.selectedPostHandler(currentPost);
    console.log(currentPost);
    // navigate(`/profile/${user.id}`);
  };

  const renderComments = async () => {
    const currentComments = await GetCommentsByPostPk(postId);
    props.setPreviousCommentsHandler(currentComments);
    console.log(typeof currentComments);
  };

  useEffect(() => {
    renderPost();
    renderComments();
  }, []);

  const submitData = (e) => {
      e.preventDefault()
      
  }

  return (
    <div className="post-details">
      <div className="post">
        <div className="postDet">
          <h1>{props.post.postName}</h1>
          <img src={props.post.images}></img>
          <h4>{props.post.releaseDate}</h4>
          <p>{props.post.description}</p>
          <p>{props.post.likes}</p>
        </div>

        <div className="postDet">
          <h2> Update your post</h2>
          <form className="updateForm">
            <input
              className="formInput"
              type="text"
              //   value={props.updateAWorkout.type}
              //   onChange={props.handleUpdate}
              name={"postName"}
              placeholder={"Change name"}
            />
            <input
              className="formInput"
              type="text"
              //   value={props.updateAWorkout.duration}
              //   onChange={props.handleUpdate}
              name={"images"}
              placeholder={"Change image"}
            />
            <input
              className="formInput"
              type="text"
              //   value={props.updateAWorkout.description}
              //   onChange={props.handleUpdate}
              name={"releaseDate"}
              placeholder={"Fix release date"}
            />
            <input
              className="formInput"
              type="text"
              //   value={props.updateAWorkout.description}
              //   onChange={props.handleUpdate}
              name={"description"}
              placeholder={"Change the description "}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="previous-comments">
        <h1>Previous Comments</h1>
        {/* console.log(props.previousComment) */}
        <Comment
          name={props.previousComments.name}
          description={props.previousComments.description}
          likes={props.previousComments.likes}
        />
      </div>
    </div>
  );
};

export default PostDetails;
