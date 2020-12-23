
export type StateType = {

}
export let rerenderEntireTree = (arg0: any) => {
    console.log('state is changed')
};

let state = {
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

}
/*Функция добавления поста в state*/
/*сообщение берем в стате*/
 export let addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postData.push(newPost);
     state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

/*функция изменения state при наборе текста*/
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = (newText);
    rerenderEntireTree(state);
}
/* новая функция перересовки через callback*/
export const subscribe = (observer: any) => {
    rerenderEntireTree = observer; /*Паттерн наблюдатель */
}




export default state;