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
    newPostText: string;
    dispatch: any;

}

function Profile(props: postDataProps) {
    debugger

    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts postDataType =  {props.postDataType}
                     dispatch = {props.dispatch}
                     newPostText={props.newPostText}


            />
        </div>
    );
}


export default Profile;