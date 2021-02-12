import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
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

const Profile: React.FC<postDataProps> = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer postDataType={props.postData}
                              dispatch={props.dispatch}
                              newPostText={props.newPostText}
            />
        </div>
    );
}


export default Profile;