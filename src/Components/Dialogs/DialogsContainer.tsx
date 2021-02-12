import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {StoreReduxType} from "../../redux/redux-store";


type dialogDataType = {
    id: number;
    name: string

}

type messagesDataType = {
    id: number;
    message: string
}

type allDialogPropsType = {
    //dialogDataType: Array<dialogDataType>;
    //messagesDataType: Array<messagesDataType>;
    store: StoreReduxType
    //dispatch: () => void
}


const DialogsContainer = (props: allDialogPropsType) => {

    const state = props.store.getState()

    /*Функция добавления сообщения*/
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: string) => {
        /*props.store.dispatch(updateNewMessageBodyCreator(body))*/
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    /*изменение textarea*/
    let newMessageBody = state.dialogsPage.newMessageBody;


    return <Dialogs dialogData={state.dialogsPage.dialogData}
                    messagesData={state.dialogsPage.messagesData}
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    newMessageBody = {newMessageBody}
    />


}
export default DialogsContainer