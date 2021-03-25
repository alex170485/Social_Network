import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/store";

let mapStateToProps = (state: StateType)=> {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newMyPost: string) => {
            dispatch(addPostActionCreator(newMyPost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts);

export default MyPostsContainer;