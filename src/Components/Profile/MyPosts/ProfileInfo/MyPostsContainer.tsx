import React from "react";

import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

type postDataType = {
    id: number;
    message: string;
    likeCount: number;


}

type postDataTypeProps = {
    postDataType: Array<postDataType>;
    newPostText: string;
    dispatch: any;


}


function MyPostsContainer(props: postDataTypeProps) {
    debugger
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = (text: string) => {
        //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
        debugger
        props.dispatch(updateNewPostTextActionCreator(text));

    }
    return (
        <div><MyPosts updateNewPostText = {onPostChange}
                      addPost = {addPost}
                      postDataType={props.postDataType}
                      newPostText={props.newPostText}
        /></div>

    );
}


export default MyPostsContainer;