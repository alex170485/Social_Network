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
    message: string;
    id: number;
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}
const Dialogs = () => {
    /*Массив данных для компоненты Диалог*/
    let dialogData = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'John'},
        {id: 3, name: 'David'}
    ]
    /* Массив данных для Message*/
    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'YOYOYOYO'}
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} id = {messagesData[0].id}/>
                <Message message={messagesData[1].message} id = {messagesData[1].id}/>
                <Message message={messagesData[2].message} id = {messagesData[2].id}/>
            </div>
        </div>
    )
}
export default Dialogs