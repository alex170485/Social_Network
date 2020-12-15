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

export default state;