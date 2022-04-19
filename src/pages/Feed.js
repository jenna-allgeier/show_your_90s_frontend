import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Post from "../components/Post"
import { GetRecentPosts} from "../services/Posts";
import Comment from "../components/Comments"

const Feed = (props) => {

  const renderPosts = async () => {
    const posts =  await GetRecentPosts()
    props.setAllPostsHandler(posts)
    // navigate(`/profile/${user.id}`);
  };

  useEffect(() => {
    renderPosts()
  }, [])

  let navigate = useNavigate();
    const linkToPostDetails = (post) => {
        navigate(`post/${ post.id }`)
    }  

  return (
    <div className="feed">
      <div className="header"/>
      <div className="post">
        {props.posts.map((post) => {
          return (
          <div className="post" key={post._id} onClick={() => linkToPostDetails(post)}>
          <Post
          post={post.id}
          name={post.postName}
          image={post.images}
          releaseDate={post.releaseDate}
          description={post.description}
          likes={post.likes}
          />
          </div>
          )
        })}
        
      </div>
      {/* <div className="previous-comments">
        <h1>Previous Comments</h1>
        {comments.map((comment) => {
          return <Comment 
          name={comment.name}
          description={comment.description}
          likes={comment.likes}
          />
        })}
      </div> */}
    </div>
  );
};

export default Feed;