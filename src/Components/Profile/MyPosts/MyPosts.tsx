import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";




function MyPosts() {

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={'How are you?'} likecount = {15}/>
                <Post message={'Its my first post'} likecount = {30}/>
            </div>
        </div>
    );
}


export default MyPosts;