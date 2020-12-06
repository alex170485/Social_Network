import React from "react";
import classes from './Post.module.css'

type PostPropsType = {
    message: string;
    likeCount: number;
    id: number
}


function Post(props: PostPropsType) {
    return (
        <div className={classes.item}><img
            src="data:image/jpeg;base64,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"/>

            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>

    );
}


export default Post;