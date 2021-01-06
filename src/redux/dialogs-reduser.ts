const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
export const sendMessageCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string) => ({
    type:UPDATE_NEW_MESSAGE_BODY, body: body
})


const dialogsReducer = (state: any, action: any) => {
    /*Новое сообщение в диалогах*/
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    }
    /*отправка сообщения*/
    else if (action.type === SEND_MESSAGE) {
        let newMessage = state.newMessageBody;
        state.newMessageBody = '';
        state.messagesData.push({id: 6, message: newMessage});
    }
    return state
}
export default dialogsReducer;