

const Post = (props) => {

  
    return (
      <div className="posts">
        <div className="img-wrapper">
          <img src={props.image} alt="Post" />
        </div>
        <div className="info-wrapper flex-row space">
          {/* <h3>{props.postName}</h3>
          <p> {releaseDate} </p>
          <p>{description}</p> */}
        </div>
      </div>
    )
  }
  
  export default Post