import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Post from "../components/Post";
import { GetPostByPk } from "../services/Posts";
import { GetCommentsByPostPk } from "../services/Comments";
import Comment from "../components/Comments";
import AddComment from "../components/AddComment";

const PostDetails = (props) => {
  let { postId } = useParams();
  let navigate = useNavigate()

  postId = parseInt(postId);
  let userId = parseInt(props.post.userId);
  console.log(props.user);
  
  const renderPost = async () => {
    const currentPost = await GetPostByPk(postId);
    props.selectedPostHandler(currentPost);
    // console.log(currentPost);
    // navigate(`/profile/${user.id}`);
  };
  // console.log(props.newComment);
  const renderComments = async () => {
    const currentComments = await GetCommentsByPostPk(postId);
    props.setPreviousCommentsHandler(currentComments);
    // console.log(typeof currentComments);
  };

  useEffect(() => {
    renderPost();
    renderComments();
  }, []);
  // const renderPost = async () => {
  //     const currentPost =  await GetPostByPk(postId)
  //     props.selectedPostHandler(currentPost)
  // };

  // const renderComments = async () => {
  //     const currentComments = await GetCommentsByPostPk(postId)
  //     props.setPreviousCommentsHandler(currentComments)
  // }

  const submitData = (e) => {
    e.preventDefault();
  };

  const updatePost = (post) => {
    props.setSelectPost(post)
    navigate("update-post")
  }

  return (
    <div className="post-details">
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
      <div className="button">
        
          <button onClick = {() => updatePost()}>Update</button>
        
      </div>
      <div className="button">
        <Link to="feed">
          <button>Delete</button>
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

//       </div>
//       <div className="previous-comments">
//         <h1>Previous Comments</h1>
//         {/* console.log(props.previousComment) */}
//         <Comment
//           name={props.previousComments.name}
//           description={props.previousComments.description}
//           likes={props.previousComments.likes}
//         />
//       </div>
//     </div>
//   );
// };

export default PostDetails;
