import React from "react";
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";


function NavBar() {
    return <nav className={classes.navbar}>
        <div className={classes.item}>
            <NavLink to = "/profile" activeClassName = {classes.activeLink}>Profile</NavLink>
        </div>
        <div>
            <NavLink to = '/dialogs' activeClassName = {classes.activeLink}>Dialogs</NavLink>
        </div>
        <div>
            <NavLink to = "/users" activeClassName = {classes.activeLink}> Users</NavLink>
        </div>
        <div>
            <NavLink to = "/music" activeClassName = {classes.activeLink}> Music</NavLink>
        </div>
        <div>
            <NavLink to = "/news" activeClassName = {classes.activeLink}> News</NavLink>
        </div>
        <div>
            <NavLink to = "/settings" activeClassName = {classes.activeLink}> Settings</NavLink>
        </div>


    </nav>


}


export default NavBar;