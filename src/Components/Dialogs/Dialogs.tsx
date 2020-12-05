import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.dialog}>
                    <NavLink to = {'/dialogs/1'}>Sasha</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to = {'/dialogs/2'}>John</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to = {'/dialogs/3'}>David</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    Hi
                </div>
                <div className={styles.message}>
                    How are you?
                </div
                ><div className={styles.message}>
                    YOYOYOY
                </div>

            </div>

        </div>
    )
}


export default Dialogs