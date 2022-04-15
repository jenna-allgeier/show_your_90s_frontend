import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <header className="nav-header">
            <nav>
                <Link className="links homeLink" to='/'>Home</Link>
                <Link className="links login" to='/login'>Login</Link>
                <Link className="links feedLink" to='/feed'>Feed</Link>
                <Link className= "links profileLink" to='/profile/:userId'>Profile</Link>
            </nav>
        </header>
    )
}

export default Navbar