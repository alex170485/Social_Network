/*Выносим Action Type кнопки для быстрого создания  ctrl*alt*v */
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



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
        debugger;
        if (action.type === ADD_POST) { /*'экшен добавления поста в state*//*сообщение берем в стате*/
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) { /*экшн изменения state при наборе текста*/
            this._state.profilePage.newPostText = (action.newText);
            this._callSubscriber(this._state);
        }
    }
}
/*Функции для создания action типа*/
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        UPDATE_NEW_POST_TEXT,
        newText: text

    }

}

export default store;