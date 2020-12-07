import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    /*Массив данных для Post*/
    let postData = [
        {id:1, message:'How are you?', likeCount: 15},
        {id:2, message: 'It`s my first post', likeCount: 32}
    ]
    /*функция МАР для отрисовка компонетны Post*/

    let postDataMap = postData.map(postData => {
        return (
            <Post message={postData.message} likeCount={postData.likeCount} id={postData.id} />
        )
    })
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
                {postDataMap}
            </div>
        </div>
    );
}


export default MyPosts;