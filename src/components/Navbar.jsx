import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <header className="navHeader">
            <nav>
                <Link className="homeLink" to='/'>Home</Link>
                <Link className="login" to='/login'>Login</Link>
                <Link className="feedLink" to='/feed'>Feed</Link>
                <Link className= "profileLink" to='/profile/user'>Profile</Link>
            </nav>
        </header>
    )
}

export default Navbar