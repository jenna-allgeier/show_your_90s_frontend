import React from "react";
import { TestGetUserByPk } from "../services/Users"
import { useParams } from "react-router-dom"

const UserProfile = () => {
  let { id } = useParams()
  const user = TestGetUserByPk()
  console.log(user)
  return (
    <div className="user-profile">
      <div className="title">
        <h1>The Most 90s Kid</h1>
        <h2>All my 90s stuff</h2>
        <h3>{user.firstName} {user.lastName}</h3>
      </div>
    </div>
  );
};

export default UserProfile;