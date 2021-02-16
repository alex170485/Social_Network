import React, {ChangeEvent} from "react";
import style from '../Dialogs/Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type dialogDataType = {
    id: number;
    name: string
}

type messagesDataType = {
    id: number;
    message: string
}

type allDialogPropsType = {
    dialogData: Array<dialogDataType>;
    messagesData: Array<messagesDataType>;
    newMessageBody:string;
    updateNewMessageBody:(body: string) => void;
    sendMessage:() => void

}


const Dialogs = (props: allDialogPropsType) => {


    /* функиця МАР для отресовки компонетны Диалог*/
    let dialogDataMap = props.dialogData.map((dialogsData) => {
        return (
            <DialogItem name={dialogsData.name} id={dialogsData.id}/>
        );
    });

    /*функция МАР для отрисовки компонетны Message*/
    let messagesDataMap = props.messagesData.map(messagesData => {
        return (
            <Message message={messagesData.message} id={messagesData.id}/>
        )
    })

    /*Функция добавления сообщения*/
    let onSendMessageClick = () => {
        props.sendMessage();

    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogDataMap}
            </div>
            <div className={style.messages}>
                <div>{messagesDataMap}</div>
            </div>
            <div>
                <div><textarea value={props.newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder={'Enter your message '}/></div>
                <div><button onClick={onSendMessageClick}>Push</button></div>
            </div>
        </div>
    )
}
export default Dialogs