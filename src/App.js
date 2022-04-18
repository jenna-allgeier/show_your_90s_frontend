import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import LoginRegister from "./pages/LoginRegister";
import UserProfile from "./pages/UserProfile";
import Welcome from "./pages/Welcome";
import { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState([])
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState ({})
  const [newComment, setNewComment] = useState([])
  const [previousComments, setPreviousComments] = useState([])

  const setUserHandler = (nextUser) => {
    setUser(nextUser);
  };

  const setAllPostsHandler = (allPosts) => {
    setPosts(allPosts)
  }

  const setNewPostHandler = (aNewPost) => {
    setNewPost(aNewPost)
  }

  const setNewCommentHandler = (aNewComment) => {
    setNewComment(aNewComment)
  }

  const setPreviousCommentsHandler = (thePreviousComments) => {
    setPreviousComments(thePreviousComments)
  }

  return (
    <div>
      <Navbar user={user} />

      <main>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="profile/:userId" element={<UserProfile />} />
          <Route path="login" element={
          <LoginRegister 
            setUserHandler={setUserHandler}
            toggleAuthenticated={toggleAuthenticated}
          />} />
          <Route path="feed" element={
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
          />} />
        </Routes>
      </main>
      <footer>
        <nav className="nav-header">
          <Link className="links footerlinks" to="/">
            Home
          </Link>
        </nav>
      </footer>
    </div>
  );
};
export default App;
