import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {RootStateReduxType, StoreReduxType} from "../../redux/redux-store";
import {connect, MapStateToProps} from "react-redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import { compose } from "redux";


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


let mapStateToProps = (state: RootStateReduxType) => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,

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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);
