

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

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
    userId: number


}

type PostType = {
    id: number,
    message: string,
    likeCount: number
}


export type initialStateType = {
    postData: Array<PostType>,
    newPostText: string,
    profile:  null
}

let initialState: initialStateType = {
    postData: [
        {id: 1, message: 'How are you?', likeCount: 15},
        {id: 2, message: 'It`s my first post', likeCount: 32}
    ],
    newPostText: 'IT-Kamasutra',
    profile: null
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

export const setUserProfile = (profile: UserProfileType | null) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export default profileReducer;