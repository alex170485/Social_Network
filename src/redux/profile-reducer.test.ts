import profileReducer, {addPostActionCreator, initialStateType} from "./profile-reducer";

let state: any = {
    postData: [
        {id: 1, message: 'How are you?', likeCount: 15},
        {id: 2, message: 'It`s my first post', likeCount: 32}
    ]

}


it('new post should  be added', () => {
    let action = addPostActionCreator('alex')
    let  newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3)
    expect(newState.postData[2].message).toBe('alex')
    expect(newState.postData[2].likeCount).toBe(0)
})
