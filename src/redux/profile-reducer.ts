const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
let initialState = {
    postData: [
        {id: 1, message: 'How are you?', likeCount: 15},
        {id: 2, message: 'It`s my first post', likeCount: 32}
    ],
    newPostText: 'IT-Kamasutra'
}



const profileReducer = (state = initialState,action: any) => {
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
    else if (action.type === UPDATE_NEW_POST_TEXT) { /*экшн изменения state при наборе текста*/
        state.newPostText = (action.newText); /*'riy */
        debugger
        return {...state, newPostText: action.newText}
    }

    return state
}
export default profileReducer;