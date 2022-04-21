
const UserPosts = (props) => {
    return (
        <div>
           <div className="posts">
        <div className="img-wrapper">
          <img className="image" src={props.image} alt="Post" />
        </div>
        <div className="info-wrapper">
          <h1 className="post-title">{props.name}</h1>
          <h3>Release date: {props.releaseDate} </h3>
          <p>Description: {props.description}</p>
        </div>
      </div>

        </div>
    )
}



export default UserPosts