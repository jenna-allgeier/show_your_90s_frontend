import { UpdatedPost } from "../services/Posts";


const UpdatePost = (props) => {



  const updateAPost = async (e) => {
    e.preventDefault();
    const update = {
      ...props.selectedPost,
    }
    

  }
  
  
  return (
    <div>
      <div className="postDet">
        <h2 className="updateHeader"> Update your post</h2>
        <form className="updateForm">
          <input
            className="formInput"
            type="text"
            //   value={props.updateAWorkout.type}
            //   onChange={props.handleUpdate}
            name={"postName"}
            placeholder={"Change name"}
          />
          <input
            className="formInput"
            type="text"
            //   value={props.updateAWorkout.duration}
            //   onChange={props.handleUpdate}
            name={"images"}
            placeholder={"Change image"}
          />
          <input
            className="formInput"
            type="text"
            //   value={props.updateAWorkout.description}
            //   onChange={props.handleUpdate}
            name={"releaseDate"}
            placeholder={"Fix release date"}
          />
          <input
            className="formInput"
            type="text"
            //   value={props.updateAWorkout.description}
            //   onChange={props.handleUpdate}
            name={"description"}
            placeholder={"Change the description "}
          />
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
