import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post"
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type postDataType = {
    id: number;
    message: string;
    likeCount: number;


}

type postDataTypeProps = {
    postData: Array<postDataType>;
    newPostText: string;
    addPost: (newMyPost: string) => void


}


function MyPosts(props: postDataTypeProps) {
    let postDataMap = props.postData.map(postDataProps => {
        return (
            <Post message={postDataProps.message} likeCount={postDataProps.likeCount} id={postDataProps.id}/>
        )
    })

    const addNewMyPost = (values: any) => {
        props.addPost(values.newMyPost)

    }
    return (

        <div className={classes.postBlock}>
            <h3>My posts </h3>
            <div>
                <MyPostFormRedux onSubmit={addNewMyPost}/>
            </div>
            <div className={classes.posts}>
                {postDataMap}
            </div>
        </div>
    );
}

const MyPostForm = (props: InjectedFormProps<postDataTypeProps>) => {
    return (
        <form onSubmit={props.handleSubmit}>
                    <Field component = 'textarea' name={'newMyPost'} placeholder={'enter you message'}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const MyPostFormRedux = reduxForm<postDataTypeProps>({
    form: 'addMyPostForm'
})(MyPostForm)
export default MyPosts;