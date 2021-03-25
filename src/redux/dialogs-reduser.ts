
const SEND_MESSAGE = 'SEND-MESSAGE';
export const sendMessageCreator = (newMessageBody:string) => ({type:SEND_MESSAGE, newMessageBody})

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
}

const dialogsReducer = (state = initialState, action: any) => {
    /*Новое сообщение в диалогах*/

    /*отправка сообщения*/
    if (action.type === SEND_MESSAGE) {
        let newMessage = action.newMessageBody;
        state.messagesData.push({id: 6, message: newMessage});
    }
    return {...state,newMessageBody: action.newMessageBody}
}
export default dialogsReducer;