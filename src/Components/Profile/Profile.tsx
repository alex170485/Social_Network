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
    postDataType: Array<postDataType>
}

function Profile(props: postDataProps) {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts postDataType =  {props.postDataType}/>
        </div>
    );
}


export default Profile;