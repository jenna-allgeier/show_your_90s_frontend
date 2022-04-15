import React from "react";
import Post from "../components/Post"

const Feed = () => {
  return (
    <div className="feed">
      <div className="title">
        <h1>Posts</h1>
        <h2>Finally! Some 90s memorabilia!</h2>
        <Post />
      </div>
    </div>
  );
};

export default Feed;