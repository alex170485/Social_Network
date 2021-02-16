import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {StoreReduxType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";


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


// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         { (store) => {
//             const state = store.getState()
//             /*Функция добавления сообщения*/
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//             let onNewMessageChange = (body: string) => {
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             }
//             /*изменение textarea*/
//             let newMessageBody = state.dialogsPage.newMessageBody;
//             return <Dialogs dialogData={state.dialogsPage.dialogData}
//                             messagesData={state.dialogsPage.messagesData}
//                             updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             newMessageBody={newMessageBody}
//             />
//         }
//     }
//     </StoreContext.Consumer>
//
// }
let mapStateToProps = (state: StateType) => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))

        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer