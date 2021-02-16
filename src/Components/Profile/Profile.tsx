import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/ProfileInfo/MyPostsContainer";

type postDataType = {
    id: number;
    message: string;
    likeCount: number;
}

type postDataProps = {
    postData: Array<postDataType>;
    newPostText: string;
    dispatch: any;
}

const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;