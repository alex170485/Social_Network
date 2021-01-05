import React from "react";
import style from '../Dialogs/Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

type dialogDataType = {
    id: number;
    name: string

}

type messagesDataType = {
    id: number;
    message: string
}

type allDialogPropsType = {
    dialogDataType: Array<dialogDataType>;
    messagesDataType: Array<messagesDataType>;
    store: any
}


const Dialogs = (props: allDialogPropsType) => {
    /*Массив данных для компоненты Диалог*/

    /* функиця МАР для отресовки компонетны Диалог*/
    let dialogDataMap = props.dialogDataType.map(dialogsData => {
        return (
            <DialogItem name={dialogsData.name} id={dialogsData.id}/>
        );
    });

    /* Массив данных для Message*/

    /*функция МАР для отрисовки компонетны Message*/
    let messagesDataMap = props.messagesDataType.map(messagesData => {
        return (
            <Message message={messagesData.message} id={messagesData.id}/>
        )
    })

    /*Функция добавления сообщения*/
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange = (e:any) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    /*изменение textarea*/
    let newMessageBody = props.store.newMessageBody;



    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogDataMap}
            </div>
            <div className={style.messages}>
                <div>{messagesDataMap}</div>
            </div>
            <div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder={'Enter your message '}/></div>
                <div><button onClick={onSendMessageClick}>Push</button></div>
            </div>
        </div>
    )
}
export default Dialogs