import React, { useEffect } from "react";
import { GetUserByPk } from "../services/Users";
import { useParams } from "react-router-dom"

const UserProfile = (props) => {

  let userId = props.user.id
  console.log(userId)

  const renderUser = async () => {
    const currentUser = await GetUserByPk(userId);
    props.setUserHandler(currentUser);
    console.log(currentUser)
  };  

  renderUser()
  // useEffect (() => {
  //   renderUser()
  // }, [])

  return (
    <div className="profile-background">
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="user-info">
          <h1>{props.user.firstName} {props.user.lastName}</h1>
          <h3 className="description">About: {props.user.about}</h3>
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