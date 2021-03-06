import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/ProfileInfo/MyPostsContainer";
import { UserProfileType} from "../../redux/profile-reducer";





type PropsType = {
    profile: UserProfileType | null,
    status: string,
    updateStatus: (status: string) => void

}


const Profile = (props: PropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}


export default Profile;