/*Выносим Action Type кнопки для быстрого создания  ctrl*alt*v */
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";

type MessagesDataType = {
    id: number
    message: string
}
type DialogDataType = {
    id:number
    name: string
}
export type DialogsPageType = {
    dialogData: Array<DialogDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}

type PostDataType = {
    id: number
    message: string
    likeCount: number
}
type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText:string
}
type locationUsers = {
    city: string,
    country: string
}
export type UserType = {
    id: number,
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: locationUsers
}

export type UsersType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersType

}

export type storeType = {
    _state: StateType
    getState:()=> StateType
    _callSubscriber: any
    subscribe:(observe:()=>void) => void
    dispatch:(action: any) => void

}

/*
let store: storeType = {
    _state: {
        /!*Данные для Profile*!/
        profilePage: {
            postData: [
                {id: 1, message: 'How are you?', likeCount: 15},
                {id: 2, message: 'It`s my first post', likeCount: 32}
            ],
            newPostText: 'IT-Kamasutra'
        },

        /!*Данные для Dialogs*!/
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
    _callSubscriber() {
        console.log('state is changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer; /!*Паттерн наблюдатель *!/
    },  /!* новая функция перересовки через callback*!/
    /!* Метод dispatch заменяет не приватные методы и передается в props только он. Главное правильно описать type экшена (действия)*!/
    dispatch(action: string) {

        /!*Reducer *!/
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        /!*уведомляем подписчика*!/
        this._callSubscriber(this._state);
}}




export default store;*/
