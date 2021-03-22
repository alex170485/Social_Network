import {getStatus, getUserProfile, updateStatus} from "../Components/api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

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
export type UserProfileType = {
    aboutMe: string,
    contacts: ContactUserProfileType,
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotoUserProfileType
    userId: number,
    isAuth: boolean


}

type PostType = {
    id: number,
    message: string,
    likeCount: number
}


export type initialStateType = {
    postData: Array<PostType>,
    newPostText: string,
    profile:  null,
    status: string
}

let initialState: initialStateType = {
    postData: [
        {id: 1, message: 'How are you?', likeCount: 15},
        {id: 2, message: 'It`s my first post', likeCount: 32}
    ],
    newPostText: 'IT-Kamasutra',
    profile: null,
    status: ''
}



const profileReducer = (state = initialState,action: any): initialStateType => {
    if (action.type === ADD_POST) { /*'экшен добавления поста в state*//*сообщение берем в стате*/
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0
        }
        state.postData.push(newPost);
        state.newPostText = '';
        return {...state}
    }
    if (action.type === UPDATE_NEW_POST_TEXT) { /*экшн изменения state при наборе текста*/
        state.newPostText = (action.newText); /*'riy */
        debugger
        return {...state, newPostText: action.newText}
    }
    if (action.type === SET_USER_PROFILE) {
        return {...state, profile: action.profile}
    }
    if (action.type === SET_STATUS) {
        return {...state, status: action.status}
    }

    return state
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const setUserProfile = (profile: UserProfileType | null) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const getUserProfileThunk = (userId: string) => {
    return (dispatch: any) => {
        getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })

    }
}
export const getStatusThunk = (userId: string) =>(dispatch:any) => {
    getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatusThunk = (status: string) => (dispatch: any) => {
    updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
        dispatch(setStatus(response.data)) }
        })}


export default profileReducer;