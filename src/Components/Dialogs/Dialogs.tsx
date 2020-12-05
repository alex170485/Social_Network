import React from "react";
import style from '../Dialogs/Dialogs.module.css'
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
/*Компонента сообщения в диалогах*/
type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name='Sasha' id={1}/>
                <DialogItem name='John' id={2}/>
                <DialogItem name='David' id={3}/>
            </div>
            <div className={style.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'YOYOYOYO'}/>


            </div>
        </div>
    )
}


export default Dialogs