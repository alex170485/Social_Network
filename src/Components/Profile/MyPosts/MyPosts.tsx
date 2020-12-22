import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


type postDataType = {
    id: number;
    message: string;
    likeCount: number;


}

type postDataTypeProps = {
    postDataType: Array<postDataType>;
    addPost:() => void;
    updateNewPostText:(arg0:string)=> void;
    newPostText: string;

}

function MyPosts(props: postDataTypeProps) {
    /*функция МАР для отрисовка компонетны Post*/
    let postDataMap = props.postDataType.map(postDataProps => {
        return (
            <Post message={postDataProps.message} likeCount={postDataProps.likeCount} id={postDataProps.id}/>
        )
    })
    /*Создаем ссылку на элемент. В Typescript в джинериках указать к какому элименту ОБЯЗАТЕЛЬНО*/
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    /*Создаем функцию колбэк в которую передаем данные полученные из textarea*/
    /*! после current это опциональный оператор */
    let addPost = () => {
        props.addPost();
    };
/*функция FLUX круговорота для изменения сетйта при нажатии на какой нибудь символ*/
    let onPostChange = () => {
        let text = newPostElement.current!.value;
        props.updateNewPostText(text);

    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText} /> {/*newPostTExt круговорот данных Flux*/}
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postDataMap}
            </div>
        </div>
    );
}


export default MyPosts;