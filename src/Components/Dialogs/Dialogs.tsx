import React from "react";
import styles from './Dialogs.module.css'



const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.dialog}>
                    Sasha
                </div>
                <div className={styles.dialog}>
                    John
                </div>
                <div className={styles.dialog}>
                    David
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