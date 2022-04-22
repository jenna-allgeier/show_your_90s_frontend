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

    return (
        <div className="profileContainer">
            <div className="profile-info">
                <h1 className="user-name">{props.userProfile.firstName} {props.userProfile.lastName}</h1>
                <img className="profile-pic" src={props.userProfile.picture} alt="Profile Pic" />
                <h2 className="about">About: {props.userProfile.about}</h2>
            </div>
        </div>
    )
}



export default UserInfo
