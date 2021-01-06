/*Выносим Action Type кнопки для быстрого создания  ctrl*alt*v */
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";


export type StateType = {}
let store = {
    _state: {
        /*Данные для Profile*/
        profilePage: {
            postData: [
                {id: 1, message: 'How are you?', likeCount: 15},
                {id: 2, message: 'It`s my first post', likeCount: 32}
            ],
            newPostText: 'IT-Kamasutra'
        },

        /*Данные для Dialogs*/
        dialogsPage: {
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

    },
    getState() {
        return this._state;
    },
    _callSubscriber(arg0: any) {
        console.log('state is changed')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer; /*Паттерн наблюдатель */
    },  /* новая функция перересовки через callback*/
    /* Метод dispatch заменяет не приватные методы и передается в props только он. Главное правильно описать type экшена (действия)*/
    dispatch(action: any) {

        /*Reducer */
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        /*уведомляем подписчика*/
        this._callSubscriber(this._state);
}}




export default store;