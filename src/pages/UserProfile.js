import React from "react";
import { useParams } from "react-router-dom"
import UserInfo from "../components/UserInfo";
import UserPosts from "../components/UserPosts";
import { useNavigate } from "react-router-dom";


const UserProfile = (props) => {

console.log(props.userProfile.posts)
console.log(props.userProfile.posts.length)

let navigate = useNavigate();
  const linkToPostDetails = (post) => {
    navigate(`post/${post.id}`);
  };

  return (
    <div className="profile-background">
      <div className="profile-container">
        <div className="user-info">
          <UserInfo
            user={props.user}
            userProfile={props.userProfile}
            setUserProfileHandler={props.setUserProfileHandler}
          />
          <div className="user-posts">
            <div className="post">
              {props.userProfile.posts.map((post) => {
                return (
                  <div
                    className="post"
                    key={post.id}
                    onClick={() => linkToPostDetails(post)}
                  >
                    {props.userProfile.posts.length ? 
                    <UserPosts
                      post={post.id}
                      name={post.postName}
                      image={post.images}
                      releaseDate={post.releaseDate}
                      description={post.description}
                      likes={post.likes}

                      user={props.user}
                      userProfile={props.userProfile}
                      setUserProfileHandler={props.setUserProfileHandler}
                    /> : <h4>No posts yet!</h4>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;