import React from "react";
import style from '../Dialogs.module.css'

type MessagePropsType = {
    message: string;
    id: number;
}
/*Компонента для отрисовки сообщения */

const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

export default Message;