import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";




function MyPosts() {
    /*Массив данных для Post*/
    let postData = [
        {id:1, message:'How are you?', likeCount: 15},
        {id:2, message: 'It`s my first post', likeCount: 32}
    ]




    return (
        <div className={classes.postBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} id={postData[0].id} likeCount = {postData[0].likeCount}/>
                <Post message={postData[1].message} id={postData[1].id} likeCount = {postData[1].likeCount}/>
            </div>
        </div>
    );
}


export default MyPosts;