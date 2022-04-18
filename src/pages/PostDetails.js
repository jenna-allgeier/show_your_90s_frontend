import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Post from "../components/Post"
import { GetPostByPk } from "../services/Posts";
import Comment from "../components/Comment"

const PostDetails = (props) => {

    let { id } = useParams()

    const renderPost = async () => {
    const post =  await GetPostByPk(id)
    props.selectedPostHandler(post)
    console.log(post)
    // navigate(`/profile/${user.id}`);
    };

    useEffect(() => {
    renderPost()
    }, [])


    return (
    <div className="post-details">
        <div className="post">
        {props.post.map((post) => {
            return <Post 
            name={post.postName}
            image={post.images}
            releaseDate={post.releaseDate}
            description={post.description}
            likes={post.likes}
            />
        })}
        
        </div>
        {/* <div className="previous-comments">
        <h1>Previous Comments</h1>
        {comments.map((comment) => {
            return <Comment 
            name={comment.name}
            description={comment.description}
            likes={comment.likes}
            />
        })}
        </div> */}
    </div>
    );
    };

    export default PostDetails;