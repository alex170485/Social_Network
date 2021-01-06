const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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


const profileReducer = (state: any,action: any) => {
    if (action.type === ADD_POST) { /*'экшен добавления поста в state*//*сообщение берем в стате*/
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0
        }
        state.postData.push(newPost);
        state.newPostText = '';
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) { /*экшн изменения state при наборе текста*/
        state.newPostText = (action.newText);
    }

    return state
}
export default profileReducer;