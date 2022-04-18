import React, { useEffect } from "react";
import Post from "../components/Post"
import { GetRecentPosts, TestGetAllPosts } from "../services/Posts";
import { TestGetAllComments } from "../services/Comments";
import Comment from "../components/Comment"

const Feed = (props) => {

  const renderPosts = async () => {
    const posts =  await GetRecentPosts()
    props.setPosts(posts)
    console.log(posts)
    // navigate(`/profile/${user.id}`);
  };

  useEffect(() => {
    renderPosts()
  }, [])
  
  
  // const posts = GetRecentPosts()
  const comments = TestGetAllComments()


  return (
    <div className="feed">
      <div className="post">
        {props.posts.map((post) => {
          return <Post 
          name={post.postName}
          image={post.images}
          releaseDate={post.releaseDate}
          description={post.description}
          likes={post.likes}
          />
        })}
        
      </div>
      <div className="previous-comments">
        <h1>Previous Comments</h1>
        {comments.map((comment) => {
          return <Comment 
          name={comment.name}
          description={comment.description}
          likes={comment.likes}
          />
        })}
      </div>
    </div>
  );
};

export default Feed;