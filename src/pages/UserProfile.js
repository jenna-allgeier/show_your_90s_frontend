import React from "react";

import { useParams } from "react-router-dom"

const UserProfile = () => {
  let { id } = useParams()
  return (
    <div className="profile-background">
    {/* // <div className="profile-container">
    //   <div className="user-info">
    //     <h1>{user.firstName} {user.lastName}</h1>
    //     <h3 className="description">About: {user.about}</h3>
    //   </div>
    //   <div className="user-collection">
    //     <h1>Personal Collection</h1>
    //     <img className="image" src={post.images}></img>
    //     <h2 className="title-date">{post.postName}</h2>
    //     <h4 className="title-date">Release Date: {post.releaseDate}</h4>
    //     <h4 className="description">Description: {post.description}</h4>
    //   </div>
    //   </div> */}
    </div>
  );
};

export default UserProfile;