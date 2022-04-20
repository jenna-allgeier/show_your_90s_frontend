import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { AddPost } from "../services/Posts";


const CreatePost = (props) => {

    const [formValues, setFormValues] = useState({
        postName: "",
        releaseDate: "",
        description: "",
        images: ""
    });
    
    let userId = props.user.id;
    
    const handlePost = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    
    const submitData = async (e) => {
        // e.preventDefault();
        await AddPost(userId, {
            postName: formValues.postName,
            releaseDate: formValues.releaseDate,
            description: formValues.description,
            images: formValues.images
        });
    };

    return (
        <div>
            <form className="createForm" onSubmit={submitData}>
              <h3>Create Post</h3>
             <input
            className="formInput"
            type="text"
            value={formValues.postName}
            onChange={handlePost}
            name={"postName"}
            placeholder={"name"}
          />
          <input
            className="formInput"
            type="text"
            value={formValues.releaseDate}
            onChange={handlePost}
            name={"releaseDate"}
            placeholder={"release date"}
          />
          <input
            className="formInput"
            type="text"
            value={formValues.description}
            onChange={handlePost}
            name={"description"}
            placeholder={"description"}
          />
          <input
            className="formInput"
            type="text"
            value={formValues.images}
            onChange={handlePost}
            name={"images"}
            placeholder={"image"}
          />
          <button className="button">Submit</button>
        </form>
        </div>
    )

}

export default CreatePost