import { Link } from "react-router-dom";


const Navbar = (props) => {

    return (
        <header className="nav-header">
            <nav>
                <Link className="links homeLink" to='/'>Home</Link>
                <Link className="links login" to='/login'>Login/Register</Link>
                <Link className="links feedLink" to='/feed'>Feed</Link>
                { props.user ? 
                <Link className= "links profileLink" to='/profile/:userId'>Profile</Link>
                : ''}
            </nav>
        </header>
    )
}

export default Navbar