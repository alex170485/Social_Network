import {rerenderEntireTree} from "../render";

export type StateType = {

}


let state = {
    /*Данные для Profile*/

    profilePage: {
        postData: [
            {id: 1, message: 'How are you?', likeCount: 15},
            {id: 2, message: 'It`s my first post', likeCount: 32}
        ]
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

}
/*Функция добавления поста в state*/
/*название параметра функции не влияет*/
 export let addPost = (postMessage: string) => {
    let newPost = {
        id:5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}




export default state;