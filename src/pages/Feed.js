import React from "react";
import Post from "../components/Post"
import { TestGetAllPosts } from "../services/Posts";
import { TestGetAllComments } from "../services/Comments";
import Comment from "../components/Comment"

const Feed = () => {
  const posts = TestGetAllPosts()
  
  const comments = TestGetAllComments()


  console.log(posts)
  return (
    <div className="feed">
      <div className="post">
        {posts.map((post) => {
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