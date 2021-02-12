const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
export const sendMessageCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string) => ({
    type:UPDATE_NEW_MESSAGE_BODY, body: body
})
/*переменная для инициализации начального стейта для redux*/
let initialState = {
    dialogData: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'John'},
        {id: 3, name: 'David'}
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'YOYOYOYO'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action: any) => {
    /*Новое сообщение в диалогах*/
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
        return {...state}
    }
    /*отправка сообщения*/
    else if (action.type === SEND_MESSAGE) {
        let newMessage = state.newMessageBody;
        state.newMessageBody = '';
        state.messagesData.push({id: 6, message: newMessage});
    }
    return {...state,newMessageBody: action.newMessageBody}
}
export default dialogsReducer;