import React from "react";
import classes from "./ProfileInfo.module.css"



function ProfileInfo() {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}


export default ProfileInfo;