import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../../common/Preloader/Preloader";
import {initialStateType, UserProfileType} from "../../../../redux/profile-reducer";
import {ProfilePropsType} from "../../ProfileContainer";
import ProfileStatus from "../../ProfileStatus";
import ProfileStatusWithHooks from "../../ProfileStatusWithHooks";

type PropsType = {
    profile: UserProfileType | null
    status: string,
    updateStatus: (userId: string) => void
}


function ProfileInfo(props: PropsType) {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.content}>
            {/*<div>*/}
            {/*    <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                <ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}


export default ProfileInfo;