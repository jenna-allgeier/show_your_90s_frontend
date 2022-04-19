import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import LoginRegister from "./pages/LoginRegister";
import UserProfile from "./pages/UserProfile";
import Welcome from "./pages/Welcome";
import PostDetails from "./pages/PostDetails";
import UpdatePost from "./components/UpdatePost";
import CreatePost from "./components/CreatePost";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckSession } from "./services/Auth";

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [post, selectedPost] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [newComment, setNewComment] = useState([]);
  const [previousComments, setPreviousComments] = useState([]);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };
  const setUserHandler = (aUser) => {
    setUser(aUser);
  };
  const setAllPostsHandler = (allPosts) => {
    setPosts(allPosts);
  };

  const setNewPostHandler = (aNewPost) => {
    setNewPost(aNewPost);
  };

  const setNewCommentHandler = (aNewComment) => {
    setNewComment(aNewComment);
  };

  const setPreviousCommentsHandler = (thePreviousComments) => {
    setPreviousComments(thePreviousComments);
  };

  const selectedPostHandler = (theSelectedPost) => {
    selectedPost(theSelectedPost);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div>
      <Navbar user={user} />

      <main>
        <div className="backgroundimg profileimg">
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="profile/:userId" element={<UserProfile />} />
            <Route
              path="login"
              element={
                <LoginRegister
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
            <Route
              path="feed"
              element={
                <Feed
                  posts={posts}
                  setPosts={setPosts}
                  newPost={newPost}
                  setNewPost={setNewPost}
                  setNewPostsHandler={setNewPostHandler}
                  setAllPostsHandler={setAllPostsHandler}
                  newComment={newComment}
                  setNewComment={setNewComment}
                  setNewCommentHandler={setNewCommentHandler}
                  previousComments={previousComments}
                  setPreviousComments={setPreviousComments}
                  setPreviousCommentsHandler={setPreviousCommentsHandler}
                />
              }
            />
            <Route
              path="feed/post/:postId"
              element={
                <PostDetails
                  post={post}
                  selectedPost={selectedPost}
                  selectedPostHandler={selectedPostHandler}
                  previousComments={previousComments}
                  setPreviousComments={setPreviousComments}
                  setPreviousCommentsHandler={setPreviousCommentsHandler}
                  setNewComment={setNewComment}
                  setNewCommentHandler={setNewCommentHandler}
                  newComment={newComment}
                  setUser={setUser}
                  user={user}
                  toggleAuthenticated={toggleAuthenticated}
                  setUserHandler={setUserHandler}
                />
              }
            />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="update-post" element={<UpdatePost />} />
          </Routes>
        </div>
      </main>

      <footer>
        <nav className="navFooter loginfooter">
          <Link className="links footerlinks" to="/">
            Home
          </Link>
          <Link className="links footerlinks" to="/">
            Sign Out
          </Link>
        </nav>
      </footer>
    </div>
  );
};
export default App;
