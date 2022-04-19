
const UpdatePost = () => {
    return (
        <div>
             <div className="postDet">
          <h2> Update your post</h2>
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
            <button>Submit</button>
          </form>
        </div>
        </div>
    )
}

export default UpdatePost