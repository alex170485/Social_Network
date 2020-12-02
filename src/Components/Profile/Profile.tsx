import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://img.gazeta.ru/files3/845/7947845/upload-shutterstock_117062077-pic905v-895x505-99863.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    );
}


export default Profile;