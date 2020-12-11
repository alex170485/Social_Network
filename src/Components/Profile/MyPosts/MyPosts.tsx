import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

type postDataType = {
    id: number;
    message: string;
    likeCount: number
}

type postDataTypeProps = {
    postDataType: Array<postDataType>
}

function MyPosts(props:postDataTypeProps) {
    /*функция МАР для отрисовка компонетны Post*/
    let postDataMap = props.postDataType.map(postDataProps => {
        return (
            <Post message={postDataProps.message} likeCount={postDataProps.likeCount} id={postDataProps.id} />
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