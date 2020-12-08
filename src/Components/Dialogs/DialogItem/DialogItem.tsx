import React from "react";
import style from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number,
}
/* Компонента для отображения имени юзера*/
const DialogItem = (props: DialogItemType) => {
    /*Переменная для конкатенации строк пропс + id*/
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;