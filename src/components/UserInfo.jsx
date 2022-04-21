import { useEffect } from "react";
import { GetUserProfile } from "../services/Users"
import UserPosts from "./UserPosts";


const UserInfo = (props) => {

    let userId = props.user.id

    const renderUserInfo = async () => {
        const user = await GetUserProfile(userId);
        props.setUserProfileHandler(user);
        console.log(user)
    };

    useEffect(() => {
        renderUserInfo()
    }, [])

    console.log(props.userProfile.firstName)

    return (
        <div>
            <div className="profile-info">
                <h1>{props.userProfile.firstName} {props.userProfile.lastName}</h1>
                <img className="profile-pic" src={props.userProfile.picture} alt="Profile Pic" />
                <h3>About: {props.userProfile.about}</h3>
            </div>
        </div>
    )
}



export default UserInfo
