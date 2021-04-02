

type MessagesDataType = {
    id: number
    message: string
}
export type  DialogDataType = {
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

type ContactUserProfileType = {
    facebook: string,
    github: string,
    instagram: string,
    mainLink: null
    twitter: string,
    vk: string,
    website: null
    youtube: null
}
type PhotoUserProfileType = {
    large: string,
    small: string
}
type UserProfileType = {
    aboutMe: string,
    contacts: ContactUserProfileType,
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotoUserProfileType
    userId: number
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText:string
    profile: UserProfileType
    newMyPost: string
}
type locationUser = {
    city: string,
    country: string
}
export type UserType = {
    id: number,
    photos: {
        small: string,
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: locationUser
}
export type UsersType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users:Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    setTotalUsersCount:(totalCount: number)=> void
    ToggleIsFetching: (isFetching: boolean)=> void
    isFetching: boolean
    ToggleIsFollow: (isFollowing: boolean, userId: number) => void
    followingInProgress: Array<number>
    getUserThunkCreator: (currentPage: number, pageSize: number,  )=> void
    followThunk:(userId:number) => void
    unfollowThunk:(userId: number) => void
}
type AppType = {
    initialized: boolean
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersType
    app: AppType
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
