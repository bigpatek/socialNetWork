import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../Common/FormsControllers/FormsControllers";


const MyPosts = (props) => {
    console.log("RENDER");
    let postsElements = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>));


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
        values.newPostText = null;
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostFormRedux onSubmit = {onAddPost}/>
            </div>
            <div className={c.posts}>
                <hr/>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Введите текст...'} name = {'newPostText'} component={TextArea} validate={[required, maxLength ]}/>
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    )
}

let PostFormRedux = reduxForm({
    form : 'PostFormRedux'
})(PostForm)
export default MyPosts;