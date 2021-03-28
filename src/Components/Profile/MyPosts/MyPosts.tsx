import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validation/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type postDataType = {
    id: number;
    message: string;
    likeCount: number;
}

type postDataTypeProps = {
    newMyPost: string;
    postData: Array<postDataType>;
    addPost: (values: string) => void
}

const maxLength10 = maxLengthCreator(10)

function MyPosts(props: postDataTypeProps) {
    let postDataMap = props.postData.map(postDataProps => {
        return (
            <Post message={postDataProps.message} likeCount={postDataProps.likeCount} id={postDataProps.id}/>
        )
    })

    const addNewMyPost = (values: postDataTypeProps) => {
        debugger
        props.addPost(values.newMyPost)
        alert('hi')
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
                    <Field component = {Textarea}
                           name={'newMyPost'}
                           placeholder={'enter you message'}
                           validate={[requiredField, maxLength10]}
                    />
            <div>
                <button type={'submit'}>Add post</button>
            </div>
        </form>
    )
}

const MyPostFormRedux = reduxForm<postDataTypeProps>({
    form: 'addMyPostForm'
})(MyPostForm)
export default MyPosts;