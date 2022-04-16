import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar'
import Feed from './pages/Feed'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Welcome from './pages/Welcome'
import { useState } from "react"

  

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const setUserHandler = (nextUser) => {
    setUser(nextUser)
  }
  return (
    <div>
      <Navbar 
        user={user}
      />
      <main>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="profile/:userId" element={<UserProfile />} />
          <Route path="login" element={
          <Login 
            setUserHandler={setUserHandler}
            toggleAuthenticated={toggleAuthenticated}
          />} />
          <Route path="feed" element={<Feed />} />
        </Routes>
      </main>
    </div>
  )
}
export default App