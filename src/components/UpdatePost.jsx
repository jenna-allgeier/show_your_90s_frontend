import { useState } from 'react';
import { useParams } from "react-router-dom";
import { UpdatedPost } from "../services/Posts";


const UpdatePost = (props) => {

const [formValues, setFormValues] = useState({
  postName: "",
  releaseDate: "",
  description: "",
  images: ""
});

let { postId } = useParams()
console.log(postId)

// let userId = props.user.id;

const handlePost = (e) => {
setFormValues({ ...formValues, [e.target.name]: e.target.value });
};

const submitData = async (e) => {
  e.preventDefault();
  await UpdatedPost(postId, {
      postName: formValues.postName,
      releaseDate: formValues.releaseDate,
      description: formValues.description,
      images: formValues.images
  });
};
  
  return (
    <div>
      <div className="postDet">
        <h2 className="updateHeader"> Update your post</h2>
        <form className="updateForm" onSubmit={submitData}>
          <input
            className="formInput"
            type="text"
            value={formValues.postName}
            onChange={handlePost}
            name={"postName"}
            placeholder={"Change name"}
          />
          <input
            className="formInput"
            type="text"
            value={formValues.releaseDate}
            onChange={handlePost}
            name={"releaseDate"}
            placeholder={"Fix release date"}
          />
          <input
            className="formInput"
            type="text"
            value={formValues.description}
            onChange={handlePost}
            name={"description"}
            placeholder={"Change the description "}
          />
          <input
            className="formInput"
            type="text"
            value={formValues.images}
            onChange={handlePost}
            name={"images"}
            placeholder={"Change image"}
          />
          <button className="button">Submit Changes</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
