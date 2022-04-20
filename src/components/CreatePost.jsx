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
    console.log(props.user);
    
    const handlePost = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    
    const submitData = async (e) => {
        e.preventDefault();
        const banana = {
            postName: formValues.postName,
            releaseDate: formValues.releaseDate,
            description: formValues.description,
            images: formValues.images
        }
        console.log(banana)
        let response = await AddPost(userId, banana
    );
    props.posts.push(response.data);
    props.setPosts(props.posts);
    props.setNewPost({ postName: "", releaseDate: "", description: "", images: "" });
    window.location.reload()  
  };



    return (
        <div>
            <form className="updateForm" onSubmit={submitData}>
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