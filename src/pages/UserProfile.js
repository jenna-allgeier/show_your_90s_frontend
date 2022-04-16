import React from "react";
import { TestGetUserByPk } from "../services/Users"
import { TestGetPostByPk } from "../services/Posts";
import { useParams } from "react-router-dom"

const UserProfile = () => {
  let { id } = useParams()
  const user = TestGetUserByPk()
  const post = TestGetPostByPk()
  console.log(post)
  return (
    <div className="user-profile">
      <div className="profile-text">
        <h1>{user.firstName} {user.lastName}</h1>
        <h3>About: {user.about}</h3>
        <h1>Personal Collection</h1>
        <img className="image" src={post.images}></img>
        <h2>{post.postName}</h2>
        <h3>{post.releaseDate}</h3>
        <h3>{post.description}</h3>
      </div>
    </div>
  );
};

export default UserProfile;