import { useEffect } from "react";
import { GetUserProfile } from "../services/Users"

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
                <h1 className="profileName" >{props.userProfile.firstName} {props.userProfile.lastName}</h1>
                <img className="profile-pic" src={props.userProfile.picture} alt="Profile Pic" />
                <h1 className="about" >About: </h1>
                <p className="info" >{props.userProfile.about}</p>
            </div>
        </div>
    )
}



export default UserInfo
