import { Link } from "react-router-dom";


const Navbar = (props) => {

    let userId = props.user.id

    return (
        <header className="nav-header">
            <nav>
                <Link className="links homeLink" to='/'>Home</Link>
                <Link className="links loginLink" to='/login'>Login/Register</Link>
                <Link className="links feedLink" to='/feed'>Feed</Link>
                <Link className= "links profileLink" to={`/profile/${userId}`}>
                <img className="profilePic" src={`${props.userProfile.picture}`}></img>
                    Profile</Link>
            </nav>
        </header>
    )
}

export default Navbar