import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import { GetRecentPosts } from "../services/Posts";
import CreatePost from "../components/CreatePost";


const Feed = (props) => {

  const renderPosts = async () => {
    const posts = await GetRecentPosts();
    props.setAllPostsHandler(posts);
  };

  useEffect(() => {
    renderPosts();
  }, []);

  let navigate = useNavigate();
  const linkToPostDetails = (post) => {
    navigate(`post/${post.id}`);
  };

  return (
    <div className="feed">
      <div className="header" />
      <div className="feedPosts">
        <div className="createPost">
          <nav>
        <CreatePost 
          user={props.user}
          setUser={props.setUser}
          setUserHandler={props.setUserHandler}
          toggleAuthenticated={props.toggleAuthenticated}
          posts={props.posts}
          setPosts={props.setPosts}
          setNewPost={props.setNewPost}
        />
        </nav>
        </div>
      <div className="post">
        {props.posts.map((post) => {
          return (
            <div
              className="post"
              key={post._id}
              onClick={() => linkToPostDetails(post)}
            >
              <Post
                post={post.id}
                name={post.postName}
                image={post.images}
                releaseDate={post.releaseDate}
                description={post.description}
                likes={post.likes}
              />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Feed;
