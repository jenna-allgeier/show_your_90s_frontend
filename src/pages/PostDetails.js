import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DeletePost, GetPostByPk } from "../services/Posts";
import { GetCommentsByPostPk } from "../services/Comments";
import Comments from "../components/Comments";
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

  const updatePost = (post) => {
    props.setSelectPost(post)
    navigate("update-post")
  }

  return (
    <div className=" profileimg post-details">
      <div className="header" />
      <div className="post">
        <div className="detail-container">
          <h1>{props.post.postName}</h1>
          <img className = "image" src={props.post.images}></img>
          <h4>{props.post.releaseDate}</h4>
          <p>{props.post.description}</p>
          <p>{props.post.likes}</p>
        </div>
      </div>
      <div >
          <button className="button" onClick={() => navToUpdate(postId)}>Update</button>
      </div>
      <div >
        <Link to="feed">
          <button className="button" onClick={() => deletePost(postId)}>Delete</button>
        </Link>
      </div>
      <div className="add-comment">
        <h3 className="leaveComment">Leave a Comment!</h3>
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
        <h2>Comments</h2>
        <Comments
          name={props.previousComments.name}
          description={props.previousComments.description}
          likes={props.previousComments.likes}
          previousComments={props.previousComments}
          setPreviousCommentsHandler={props.setPreviousCommentsHandler}
        />
      </div>
      <div className="footer" />
    </div>
  );
};

export default PostDetails;
