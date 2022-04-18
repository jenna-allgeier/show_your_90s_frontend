import React from "react";
import Post from "../components/Post"
import { TestGetAllPosts } from "../services/Posts";

const Feed = () => {
  const posts = TestGetAllPosts()
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
    </div>
  );
};

export default Feed;