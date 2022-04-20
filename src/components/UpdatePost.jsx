// import { UpdatedPost } from "../services/Posts";
import { useParams } from "react-router-dom";
import Client from "../services/api";

const UpdatePost = (props) => {
  let { postId } = useParams();
  postId = parseInt(postId);
  let selectedPost = props.selectPost
  let setSelectedPost = props.setSelectPost


  let userId = props.user.id;
  console.log(props.user);
  

  const submitData = async (e) => {
    e.preventDefault();
    const updatePost =(userId, {
      ...selectedPost,
    }) ;

    const updatedPost = await Client.put(
      `api/posts/${selectedPost.id}`,
      updatePost
    );
      console.log(updatePost, 'this is updatedpost')
    const toChangePost = props.posts.find(
      (post) => props.posts.id === updatedPost.data.id
    );
    props.posts.splice(toChangePost, 1, updatePost);
    setSelectedPost({
      postName: "",
      images: "",
      description: "",
      releaseDate: "",
    });
  };

  const handleUpdate = (e) => {
    setSelectedPost({ ...selectedPost, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="postDet">
        <h2 className="updateHeader"> Update your post</h2>
        <form className="updateForm" onSubmit={submitData}>
          <input
            className="formInput"
            type="text"
              value={selectedPost.postName}
              onChange={handleUpdate}
            name={"postName"}
            placeholder={"Change name"}
          />
          <input
            className="formInput"
            type="text"
            value={selectedPost.images}
            onChange={handleUpdate}
            name={"images"}
            placeholder={"Change image"}
          />
          <input
            className="formInput"
            type="text"
            value={selectedPost.releaseDate}
            onChange={handleUpdate}
            name={"releaseDate"}
            placeholder={"Fix release date"}
          />
          <input
            className="formInput"
            type="text"
            value={selectedPost.description}
            onChange={handleUpdate}
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
