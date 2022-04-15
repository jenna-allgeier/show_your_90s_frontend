import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar'
import Feed from './pages/Feed'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Welcome from './pages/Welcome'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="userprofile/:userId" element={<UserProfile />} />
          <Route path="login" element={<Login />} />
          <Route path="feed" element={<Feed />} />
        </Routes>
      </main>
    </div>
  )
}
export default App