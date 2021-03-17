import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/ProfileInfo/MyPostsContainer";
import { UserProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";




type PropsType = {
    profile: UserProfileType | null,
}


const Profile = (props: PropsType) => {

    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;