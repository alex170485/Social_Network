import React from "react";
import classes from './NavBar.module.css'


function NavBar() {
    return <nav className={classes.navbar}>
        <div className={`${classes.item} ${classes.active}`}>
            <a href='/profile'>Profile</a>
        </div>
        <div className={classes.item}>
            <a href='/dialogs'>Message</a>
        </div>
        <div className={classes.item}>
            <a href='/news'>News</a>
        </div>
        <div className={classes.item}>
            <a href='/music'>Music</a>
        </div>
        <div className={classes.item}>
            <a href='/settings'>Settings</a>
        </div>
    </nav>


}


export default NavBar;