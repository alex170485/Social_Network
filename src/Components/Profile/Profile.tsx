import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

type postDataType = {
    id: number;
    message: string;
    likeCount: number;

}

type postDataProps = {
    postDataType: Array<postDataType>;
    addPost:() => void;
    updateNewPostText:() => void;
    newPostText: string;

}

function Profile(props: postDataProps) {

    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts postDataType =  {props.postDataType}
                     addPost = {props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText = {props.updateNewPostText}

            />
        </div>
    );
}


export default Profile;