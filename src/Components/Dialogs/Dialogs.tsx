import React, {ChangeEvent} from "react";
import { Redirect } from "react-router-dom";
import style from '../Dialogs/Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";

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
    sendMessage:(newMessageBody:string) => void


}


const Dialogs = (props: allDialogPropsType) => {

    let dialogDataMap = props.dialogData.map((dialogsData) => {
        return (
            <DialogItem name={dialogsData.name} id={dialogsData.id}/>
        );
    });

    let messagesDataMap = props.messagesData.map(messagesData => {
        return (
            <Message message={messagesData.message} id={messagesData.id}/>
        )
    })

    const addNewMessage = (values: AddMessageFormType) => {
        props.sendMessage(values.newMessageBody)
    }

        return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogDataMap}
            </div>
            <div className={style.messages}>
                <div>{messagesDataMap}</div>
            </div>

                <AddMessageFormRedux  onSubmit = {addNewMessage}/>

        </div>
    )
}
type AddMessageFormType = {
    newMessageBody: string
    values: string
    newMessage: string

}

const AddMessageForm =(props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'newMessageBody'} component = {Textarea} placeholder={'Enter your message '}/></div>
            <div><button>Push</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<AddMessageFormType>({
    form: 'dialogsAddMessageForm'
})(AddMessageForm)
export default Dialogs