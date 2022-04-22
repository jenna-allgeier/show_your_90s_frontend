import React from "react";
import UserInfo from "../components/UserInfo";
import { useNavigate } from "react-router-dom";


const UserProfile = (props) => {

console.log(props.userProfile.posts)

let navigate = useNavigate();
  const linkToPostDetails = (post) => {
    navigate(`post/${post.id}`);
  };

  return (
    <div className=" profile2 ">
      <div className="profile-container">
        <div className="user-info">
          <UserInfo
            user={props.user}
            userProfile={props.userProfile}
            setUserProfileHandler={props.setUserProfileHandler}
          />
          <div className="user-posts">
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;