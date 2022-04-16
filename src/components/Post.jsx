

const Post = (props) => {

  
    return (
      <div className="posts">
        <div className="img-wrapper">
          <img src={props.image} alt="Post" />
        </div>
        <div className="info-wrapper">
          <h1>{props.name}</h1>
          <h3>Release date: {props.releaseDate} </h3>
          <p>Description: {props.description}</p>
        </div>
      </div>
    )
  }
  
  export default Post