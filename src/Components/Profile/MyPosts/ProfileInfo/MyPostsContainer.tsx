import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/store";

type postDataType = {
    id: number;
    message: string;
    likeCount: number;


}

type postDataTypeProps = {
    postDataType: Array<postDataType>;
    newPostText: string;
    dispatch: any;
}

// function MyPostsContainer() {
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//                 let onPostChange = (text: string) => {
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 }
//
//                 return <MyPosts updateNewPostText={onPostChange}
//                          addPost={addPost}
//                          postDataType={store.getState().profilePage.postData}
//                          newPostText={store.getState().profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }
let mapStateToProps = (state: StateType)=> {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts);


export default MyPostsContainer;