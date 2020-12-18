import React from "react";
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
    dialogDataType: Array<dialogDataType>;
    messagesDataType: Array<messagesDataType>;
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
    let newPost = React.createRef<HTMLTextAreaElement>();
    let addNewPost = () => {
        let newTextPost = newPost.current!.value;
        alert(newTextPost);
    };


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogDataMap}
            </div>
            <div className={style.messages}>
                {messagesDataMap}
            </div>
            <div>
                <textarea ref={newPost}></textarea>
                <button onClick={addNewPost}>Push</button>
            </div>
        </div>
    )
}
export default Dialogs