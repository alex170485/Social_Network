import React from "react";
import style from '../Dialogs/Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    /*Массив данных для компоненты Диалог*/
    let dialogData = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'John'},
        {id: 3, name: 'David'}
    ]
    /* функиця МАР для отресовки компонетны Диалог*/
    let dialogDataMap = dialogData.map(dialogsData => {
        return (
            <DialogItem name={dialogsData.name} id={dialogsData.id}/>
        );
    });

    /* Массив данных для Message*/
    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'YOYOYOYO'}
    ]
    /*функция МАР для отрисовки компонетны Message*/
    let messagesDataMap = messagesData.map(messagesData => {
        return (
            <Message message={messagesData.message} id={messagesData.id}/>
        )
    })

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogDataMap}
            </div>
            <div className={style.messages}>
                {messagesDataMap}
            </div>
        </div>
    )
}
export default Dialogs