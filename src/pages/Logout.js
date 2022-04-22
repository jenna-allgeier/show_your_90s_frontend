import { useNavigate } from "react-router-dom";

const Logout = (props) => {

    let navigate = useNavigate()

    const logoutUser = () => {
        props.setUser([]);
        props.toggleAuthenticated(false);
        navigate("/");
    }

    const navigateToFeed = () => {
        navigate("/feed");
    }

    return (

        <div>
            <h1>Are you sure you want to logout?</h1>
            <button className="button" onClick={() => logoutUser()}>Logout</button>
            <button className="button" onClick={() => navigateToFeed()}>Go back to Feed</button>
        </div>
    )
}

export default Logout