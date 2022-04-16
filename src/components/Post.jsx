

const Post = (props) => {

  
    return (
      <div className="posts">
        <div className="img-wrapper">
          <img src={props.image} alt="Post" />
        </div>
        <div className="info-wrapper flex-row space">
          <h3>{props.name}</h3>
          <p> {props.releaseDate} </p>
          <p>{props.description}</p>
        </div>
      </div>
    )
  }
  
  export default Post