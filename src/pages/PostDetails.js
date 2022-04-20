import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DeletePost, GetPostByPk } from "../services/Posts";
import { GetCommentsByPostPk } from "../services/Comments";
import Comment from "../components/Comments";
import AddComment from "../components/AddComment";

const PostDetails = (props) => {
  
  let { postId } = useParams();
  postId = parseInt(postId);
  let navigate = useNavigate()

  const navToUpdate = (postId) => {
    navigate(`update-post/${postId}`)
  }
  
  const renderPost = async () => {
    const currentPost = await GetPostByPk(postId);
    props.selectedPostHandler(currentPost);
  };

  const renderComments = async () => {
    const currentComments = await GetCommentsByPostPk(postId);
    props.setPreviousCommentsHandler(currentComments);
  };

  const deletePost = async (postId) => {
    await DeletePost(postId)
    navigate("/feed")
  }

  useEffect(() => {
    renderPost();
    renderComments();
  }, []);

  return (
    <div className="post-details">
      <div className="header" />
      <div className="post">
        <div className="detail-container">
          <h1>{props.post.postName}</h1>
          <img src={props.post.images}></img>
          <h4>{props.post.releaseDate}</h4>
          <p>{props.post.description}</p>
          <p>{props.post.likes}</p>
        </div>
      </div>
      <div className="button">
          <button onClick={() => navToUpdate(postId)}>Update</button>
      </div>
      <div className="button">
        <Link to="feed">
          <button onClick={() => deletePost(postId)}>Delete</button>
        </Link>
      </div>
      <div className="add-comment">
        <h2>Leave a Comment!</h2>
        <AddComment
          post={props.post}
          selectedPost={props.selectedPost}
          selectedPostHandler={props.selectedPostHandler}
          user={props.user}
          setUser={props.setUser}
          setUserHandler={props.setUserHandler}
          toggleAuthenticated={props.toggleAuthenticated}
        />
      </div>
      <div className="previous-comments">
        <h2>Previous Comments</h2>
        <Comment
          name={props.previousComments.name}
          description={props.previousComments.description}
          likes={props.previousComments.likes}
        />
      </div>
      <div className="footer" />
    </div>
  );
};

export default PostDetails;
