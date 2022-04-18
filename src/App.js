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
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const [previousComments, setPreviousComments] = useState(null);

  const setUserHandler = (nextUser) => {
    setUser(nextUser);
  };

  const setAllPostsHandler = (allPosts) => {
    setPosts(allPosts);
  };
  return (
    <div>
      <Navbar user={user} />

      <main>
        <div className="background">
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="profile/:userId" element={<UserProfile />} />
            <Route
              path="login"
              element={
                <LoginRegister
                  setUserHandler={setUserHandler}
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
                  setAllPostsHandler={setAllPostsHandler}
                  setNewComment={setNewComment}
                  setPreviousComments={setPreviousComments}
                />
              }
            />
          </Routes>
        </div>
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
