import React from "react";
import { useParams } from "react-router-dom"
import UserInfo from "../components/UserInfo";
import UserPosts from "../components/UserPosts";
const UserProfile = (props) => {
  
  return (
    <div className="profile-background">
      <div className="profile-container">
        <div className="user-info">
          <UserInfo 
            user={props.user}
            userProfile={props.userProfile}
            setUserProfileHandler={props.setUserProfileHandler}
          />
         
        </div>
        {/* <div className="user-collection">
          <h1>Personal Collection</h1>
          <img className="image" src={post.images}></img>
          <h2 className="title-date">{post.postName}</h2>
          <h4 className="title-date">Release Date: {post.releaseDate}</h4>
          <h4 className="description">Description: {post.description}</h4>
        </div> */}
      </div>
    </div>
  );
};

export default UserProfile;